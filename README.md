# CS Intelligence MCP (`cs-agents`)

MCP server com agentes especializados de Customer Success. V1 traz dois agentes:

- **`setup`** — conduz um questionário estruturado de onboarding e popula a base de conhecimento da empresa em `knowledge/*.md`.
- **`expansion`** — identifica e desenvolve oportunidades de expansão (cross-sell/upsell) a partir do contexto da conta.

Arquitetura clonada do padrão do MCP `tech-agents` (ver `docs/architecture-plan-expansion-agent-v1.md` para o racional completo): cada agente é definido por arquivos Markdown/TOML (`brain/persona.md`, `commands/*.toml`, `skills/*.md`), não por código — o servidor apenas monta e retorna o prompt (`call_agent_command`); o cliente MCP que adota a persona e executa a tarefa.

## Como rodar

```bash
npm install
node bin/cs-agents.js serve
```

O servidor conversa via stdio (transporte padrão MCP) — normalmente é configurado como um MCP server dentro do seu cliente (Claude Code, etc.), não executado standalone no dia a dia.

## Pré-requisito crítico: cliente com ferramentas de arquivo

**O servidor MCP nunca escreve arquivo.** `call_agent_command` só monta e retorna o prompt (texto). Quem escreve os arquivos de `knowledge/*.md` é o **cliente MCP que adota a persona** (ex.: Claude Code, que tem `Write`/`Edit`) — a persona do `setup` instrui explicitamente esse comportamento ao final de cada fase do questionário.

Se o `cs-agents` rodar num cliente MCP **sem** ferramentas de escrita de arquivo (um cliente chat-only), o comando `setup:onboarding` não consegue persistir a base de conhecimento — ele vai conduzir a conversa normalmente, mas as respostas não serão salvas em lugar nenhum.

## Estrutura

```
common/         Core CS Framework — conhecimento genérico de CS, compartilhado por todos os agentes de domínio
setup/          Agente de onboarding do próprio MCP (não é um agente de CS)
expansion/      Agente de domínio V1 (Expansion)
knowledge/      Dado ESPECÍFICO DA EMPRESA — populado via setup:onboarding, não editado à mão
templates/      Referências de estrutura/tom para outputs dos agentes
tests/          Casos de teste comportamentais (input/contexto/output esperado/o que não fazer)
docs/           PRD, plano de arquitetura e o documento-fonte da especificação de CS
```

`common/`, `expansion/` e `setup/` são o "código" do comportamento dos agentes (persona + skills + comandos). `knowledge/` é dado — muda por empresa, não por versão do pacote.

## Tools MCP expostas

- `list_agents` — lista agentes e comandos disponíveis.
- `get_agent_prompt` — retorna a persona de um agente, sem executar comando.
- `call_agent_command` — ativa um agente/comando e retorna o prompt completo montado (persona + skills + knowledge + tarefa). **O prompt retornado é o agente** — o cliente deve adotar a persona e executar a tarefa diretamente, não tratar como texto informativo.
- `pipeline_start` / `request_approval` / `check_gate` / `pipeline_approve` — gates de aprovação humana para fluxos multi-fase (ex.: PRD → plano → implementação). Estado em `.cs-agents-state.json`, um único arquivo por projeto (sem dependência de git/branch, diferente do `tech-agents` original).

## Agentes disponíveis

### `setup` — comando `onboarding`

Conduz o questionário de 27 perguntas em 4 fases (Negócio, Customer Success, Jornada, Operação — ver `setup/skills/knowledge-elicitation.md`) e escreve/atualiza os 11 arquivos de `knowledge/`. Reexecutável a qualquer momento.

### `expansion` — comandos `create` e `analyze`

- `create`: uso diário — descreva a situação de uma conta em texto livre, recebe diagnóstico e recomendação de ação.
- `analyze`: modo simulação/"e se" a nível de carteira. **Não tem acesso a dado de portfólio ao vivo** — só simula sobre o que for explicitamente fornecido no próprio pedido (cole a lista/planilha relevante); não escaneia contas sozinho.

## Estado do projeto

V1 do Expansion Agent implementado e validado. Retention, Onboarding e Ongoing Value Agents ficam para próximos ciclos (ver `docs/prd-expansion-agent-v1.md`).
