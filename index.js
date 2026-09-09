import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve as resolvePath } from 'node:path';
import { parse as parseToml } from 'smol-toml';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

// Estado de pipeline/gates — arquivo único na raiz, SEM dependência de git/branch
// (diferente do tech-agents original, que usa .squad-state-{branch}.json).
// Ver plano de arquitetura, seção 5.3.
const STATE_FILE = join(ROOT, '.cs-agents-state.json');

function readState() {
  if (!existsSync(STATE_FILE)) return null;
  return JSON.parse(readFileSync(STATE_FILE, 'utf-8'));
}

function writeState(state) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// Catálogo de agentes — CS Intelligence MCP (V1: setup + expansion)
export const AGENT_CATALOG = {
  setup: {
    description: 'Onboarding do MCP — popula a base de conhecimento da empresa via questionário estruturado',
    commands: {
      onboarding: 'setup/commands/setup/onboarding.toml',
    },
  },
  expansion: {
    description: 'Identifica e desenvolve oportunidades de expansão (cross-sell/upsell) a partir do contexto do cliente',
    commands: {
      create: 'expansion/commands/expansion/create.toml',
      analyze: 'expansion/commands/expansion/analyze.toml',
    },
  },
  retention: {
    description: 'Diagnostica risco de churn, responde a pedidos de cancelamento e transforma casos individuais em aprendizado de carteira',
    commands: {
      create: 'retention/commands/retention/create.toml',
      analyze: 'retention/commands/retention/analyze.toml',
      cancellation: 'retention/commands/retention/cancellation.toml',
    },
  },
  onboarding: {
    description: 'Conduz o cliente da implantação até um handoff saudável para o Ongoing, diagnosticando First Value, adoção e riscos',
    commands: {
      create: 'onboarding/commands/onboarding/create.toml',
      analyze: 'onboarding/commands/onboarding/analyze.toml',
      handoff: 'onboarding/commands/onboarding/handoff.toml',
    },
  },
};

/**
 * Resolve marcadores !{cat <path>} dentro de um texto, substituindo pelo conteúdo
 * literal do arquivo referenciado (relativo à raiz do projeto). Não-recursivo por
 * design: o conteúdo injetado não é re-escaneado em busca de novos marcadores —
 * isso evita que texto livre gravado em knowledge/ (respostas de usuário) possa
 * disparar leitura de arquivo arbitrária (ver plano de arquitetura, risco #4).
 */
export function resolveProbes(text) {
  return text.replace(/!\{cat\s+([^}]+)\}/g, (_match, rawPath) => {
    const trimmed = rawPath.trim();
    const abs = resolvePath(ROOT, trimmed);
    if (!abs.startsWith(ROOT)) {
      return `[[ERRO: path fora da raiz do projeto: ${trimmed}]]`;
    }
    if (!existsSync(abs)) {
      return `[[ERRO: arquivo não encontrado: ${trimmed}]]`;
    }
    return readFileSync(abs, 'utf-8');
  });
}

function loadCommandToml(agent, command) {
  const catalogEntry = AGENT_CATALOG[agent];
  if (!catalogEntry) {
    throw new Error(`Agente desconhecido: "${agent}". Agentes disponíveis: ${Object.keys(AGENT_CATALOG).join(', ')}`);
  }
  const tomlRelPath = catalogEntry.commands[command];
  if (!tomlRelPath) {
    throw new Error(`Comando desconhecido para o agente "${agent}": "${command}". Comandos disponíveis: ${Object.keys(catalogEntry.commands).join(', ')}`);
  }
  const tomlPath = join(ROOT, tomlRelPath);
  const raw = readFileSync(tomlPath, 'utf-8');
  return parseToml(raw);
}

export function assemblePrompt(agent, command, args) {
  const parsed = loadCommandToml(agent, command);
  let prompt = parsed.prompt || '';
  prompt = resolveProbes(prompt);
  prompt = prompt.split('{{args}}').join(args || '');
  return prompt;
}

export function buildServer() {
  const server = new McpServer({ name: 'cs-agents', version: '0.1.0' });

  server.registerTool(
    'list_agents',
    {
      description: 'Lista todos os agentes disponíveis e seus comandos registrados.',
    },
    async () => {
      const lines = Object.entries(AGENT_CATALOG).map(([name, def]) => {
        return `- **${name}**: ${def.description} (comandos: ${Object.keys(def.commands).join(', ')})`;
      });
      return {
        content: [{ type: 'text', text: `# Agentes disponíveis — CS Intelligence MCP\n\n${lines.join('\n')}` }],
      };
    }
  );

  server.registerTool(
    'get_agent_prompt',
    {
      description: 'Retorna a persona/identidade de um agente específico sem executar nenhum comando.',
      inputSchema: {
        agent: z.string().describe('Nome do agente (ex.: expansion, setup).'),
      },
    },
    async ({ agent }) => {
      const catalogEntry = AGENT_CATALOG[agent];
      if (!catalogEntry) {
        return {
          content: [{ type: 'text', text: `Agente desconhecido: "${agent}". Agentes disponíveis: ${Object.keys(AGENT_CATALOG).join(', ')}` }],
          isError: true,
        };
      }
      const personaPath = join(ROOT, agent, 'brain', 'persona.md');
      const persona = existsSync(personaPath) ? readFileSync(personaPath, 'utf-8') : '(sem persona.md definida)';
      return { content: [{ type: 'text', text: persona }] };
    }
  );

  server.registerTool(
    'call_agent_command',
    {
      description: 'Ativa um agente e executa um de seus comandos, retornando o prompt completo (persona + skills + knowledge + tarefa) montado. O prompt retornado É o agente — adote a persona e execute a tarefa.',
      inputSchema: {
        agent: z.string().describe('Nome do agente (ex.: expansion, setup).'),
        command: z.string().describe('Nome do comando (ex.: create, analyze, onboarding).'),
        args: z.string().describe('Descrição completa da tarefa a ser executada pelo agente.'),
      },
    },
    async ({ agent, command, args }) => {
      try {
        const prompt = assemblePrompt(agent, command, args);
        return { content: [{ type: 'text', text: prompt }] };
      } catch (err) {
        return { content: [{ type: 'text', text: `Erro: ${err.message}` }], isError: true };
      }
    }
  );

  server.registerTool(
    'pipeline_start',
    {
      description: 'Inicializa uma nova sessão de pipeline com gates de aprovação. Cria .cs-agents-state.json com todos os gates especificados como "locked".',
      inputSchema: {
        goal: z.string().describe('Objetivo de alto nível do pipeline.'),
        gates: z.array(z.string()).describe('Lista de gate_keys esperados (ex.: ["prd", "plan"]).'),
      },
    },
    async ({ goal, gates }) => {
      const state = {
        goal,
        gates: Object.fromEntries(gates.map((g) => [g, { status: 'locked' }])),
        created_at: new Date().toISOString(),
      };
      writeState(state);
      return {
        content: [{ type: 'text', text: `Pipeline iniciado. Goal: "${goal}". Gates registrados (locked): ${gates.join(', ')}.` }],
      };
    }
  );

  server.registerTool(
    'request_approval',
    {
      description: 'Sinaliza que a fase atual do pipeline está completa e precisa de aprovação humana antes de prosseguir. Marca o gate como "pending" e retorna uma mensagem de HARD STOP — não continue chamando tools de agente até o humano aprovar.',
      inputSchema: {
        gate: z.string().describe('O gate_key que precisa de aprovação (ex.: "prd", "plan").'),
        summary: z.string().describe('Resumo do que foi concluído nesta fase.'),
        artifact_path: z.string().optional().describe('Caminho opcional do artefato produzido nesta fase.'),
      },
    },
    async ({ gate, summary, artifact_path }) => {
      const state = readState() ?? { goal: null, gates: {} };
      state.gates[gate] = { status: 'pending', summary, artifact_path: artifact_path ?? null, requested_at: new Date().toISOString() };
      writeState(state);
      const artifactLine = artifact_path ? `\nArtefato: ${artifact_path}` : '';
      return {
        content: [{
          type: 'text',
          text: `⏸️ PIPELINE PAUSADO — GATE: ${gate}\nFase concluída. Aprovação humana necessária antes da próxima fase.${artifactLine}\nResumo: ${summary}\nNÃO continue autonomamente. STATUS: BLOQUEADO até aprovação.`,
        }],
      };
    }
  );

  server.registerTool(
    'check_gate',
    {
      description: 'Verifica se um gate específico do pipeline foi aprovado por um humano antes de iniciar a próxima fase. Se não houver sessão ativa (.cs-agents-state.json ausente), retorna uma advertência leve em modo standalone.',
      inputSchema: {
        gate: z.string().describe('O gate_key a verificar (ex.: "prd", "plan").'),
      },
    },
    async ({ gate }) => {
      const state = readState();
      if (!state) {
        return {
          content: [{ type: 'text', text: `Nenhuma sessão de pipeline ativa (modo standalone). Prosseguindo com guardrails de prompt, sem enforcement de gate.` }],
        };
      }
      const entry = state.gates[gate];
      if (!entry || entry.status !== 'approved') {
        return {
          content: [{ type: 'text', text: `Gate "${gate}" NÃO aprovado (status atual: ${entry ? entry.status : 'inexistente'}). Não prossiga com esta fase até a aprovação.` }],
          isError: true,
        };
      }
      return {
        content: [{ type: 'text', text: `Gate "${gate}" aprovado em ${entry.approved_at}. Pode prosseguir.` }],
      };
    }
  );

  server.registerTool(
    'pipeline_approve',
    {
      description: 'Aprova um gate específico do pipeline, desbloqueando a próxima fase. Atualiza .cs-agents-state.json para "approved" com timestamp.',
      inputSchema: {
        gate: z.string().describe('O gate_key a aprovar (ex.: "prd", "plan").'),
      },
    },
    async ({ gate }) => {
      const state = readState();
      if (!state) {
        return {
          content: [{ type: 'text', text: `Nenhuma sessão de pipeline ativa. Inicie com pipeline_start primeiro.` }],
          isError: true,
        };
      }
      if (!state.gates[gate]) {
        return {
          content: [{ type: 'text', text: `Gate "${gate}" não encontrado nesta sessão. Gates registrados: ${Object.keys(state.gates).join(', ')}.` }],
          isError: true,
        };
      }
      state.gates[gate] = { ...state.gates[gate], status: 'approved', approved_at: new Date().toISOString() };
      writeState(state);
      return {
        content: [{ type: 'text', text: `Gate "${gate}" aprovado.` }],
      };
    }
  );

  return server;
}

export async function serve() {
  const server = buildServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
