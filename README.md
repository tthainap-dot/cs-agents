# CS Intelligence MCP (`cs-agents`)

Um MCP server que dá a um time de Customer Success uma "segunda cabeça" especializada — um conjunto de agentes que ajudam a diagnosticar contas, identificar oportunidades, responder pedidos de cancelamento e conduzir implantações, sem depender de integração com CRM ou dado ao vivo. Você conversa, cola o contexto que tem à mão, e o agente certo raciocina em cima disso.

**Princípio central:** os agentes são genéricos em conhecimento de Customer Success, e específicos no contexto da sua empresa. Isso significa que nenhuma regra de negócio, número, ou nome de empresa vem "de fábrica" — tudo isso é populado por você, uma vez, através do agente `setup`. O mesmo pacote serve qualquer empresa; o que muda é só o que está em `knowledge/`.

---

## Como rodar

```bash
npm install
node bin/cs-agents.js serve
```

O servidor conversa via stdio (transporte padrão MCP) — normalmente é configurado como um MCP server dentro do seu cliente (Claude Code, etc.), não executado standalone no dia a dia.

### Pré-requisito crítico: cliente com ferramentas de arquivo

**O servidor MCP nunca escreve arquivo.** As tools só montam e retornam o prompt (texto) — quem escreve os arquivos de `knowledge/*.md` é o **cliente MCP que adota a persona** (ex.: Claude Code, que tem `Write`/`Edit`). A persona do `setup` instrui esse comportamento explicitamente ao final de cada fase do questionário.

Se o `cs-agents` rodar num cliente **sem** ferramentas de escrita de arquivo (um cliente chat-only), o `setup:onboarding` conduz a conversa normalmente, mas as respostas não são salvas em lugar nenhum.

---

## Primeiro uso: rode o `setup` antes de qualquer coisa

Antes de usar Expansion, Retention, Onboarding ou Ongoing pra valer, rode:

> "Chame o agente `setup`, comando `onboarding`, e vamos preencher a base de conhecimento da minha empresa."

Isso conduz um questionário de **34 perguntas em 6 fases** (Negócio → Customer Success → Jornada → Operação → Value Realization & Onboarding → Ongoing & Sucesso Contínuo) — uma fase de cada vez, nunca tudo de uma vez. No final de cada fase, ele mostra um resumo do que vai gravar antes de escrever, e você confirma ou corrige. É reexecutável a qualquer momento — se algo mudar na empresa (nova política de renovação, novo Health Score, etc.), é só rodar de novo e escolher atualizar só a categoria relevante.

Sem isso, os outros agentes ainda funcionam — mas com conhecimento genérico de Customer Success, sem nada calibrado pra sua operação.

---

## Estrutura

```
common/         Core CS Framework — conhecimento genérico de CS, compartilhado por todos os agentes de domínio
setup/          Agente de onboarding do próprio MCP (não é um agente de CS)
expansion/      Agente de domínio — oportunidades de expansão
retention/      Agente de domínio — risco de churn e cancelamento
onboarding/     Agente de domínio — implantação de novos clientes
ongoing/        Agente de domínio — acompanhamento contínuo de carteira
knowledge/      Dado ESPECÍFICO DA SUA EMPRESA — populado via setup:onboarding, não editado à mão
templates/      Referências de estrutura/tom para outputs dos agentes
tests/          Casos de teste comportamentais (input/contexto/output esperado/o que não fazer)
docs/           Documento-fonte da especificação de Customer Success usada como base de conhecimento
```

`common/`, `expansion/`, `retention/`, `onboarding/`, `ongoing/` e `setup/` são o "código" do comportamento dos agentes (persona + skills + comandos) — genérico, igual pra qualquer empresa. `knowledge/` é dado — muda por empresa, não por versão do pacote.

## Tools MCP expostas

- `list_agents` — lista agentes e comandos disponíveis.
- `get_agent_prompt` — retorna a persona de um agente, sem executar comando.
- `call_agent_command` — ativa um agente/comando e retorna o prompt completo montado (persona + skills + knowledge + tarefa). **O prompt retornado é o agente** — o cliente deve adotar a persona e executar a tarefa diretamente, não tratar como texto informativo.
- `pipeline_start` / `request_approval` / `check_gate` / `pipeline_approve` — gates de aprovação humana para fluxos multi-fase. Estado em `.cs-agents-state.json`, um único arquivo por projeto.

---

## Os agentes

### `setup` — onboarding do próprio MCP

Já coberto acima. Comando: `onboarding`.

### `expansion` — oportunidades de expansão

Identifica e desenvolve oportunidades de cross-sell/upsell a partir do contexto da conta — sem forçar venda onde não há necessidade real.

**Comandos:** `create` (uso diário) e `analyze` (simulação de padrão de carteira).

> **Cenário de uso:** você percebe que uma conta está tentando acessar repetidamente uma funcionalidade que não está no plano dela. Você chama `expansion:create` e descreve a situação. O agente separa fato de hipótese, avalia se é sinal real ou só curiosidade pontual, e — se fizer sentido — sugere como abordar o cliente sem parecer um empurrão comercial. Ele nunca inventa uma oportunidade só porque alguém pediu uma sugestão; se não houver sinal real, ele diz isso.

### `retention` — risco de churn e cancelamento

Diagnostica risco, responde a pedidos de cancelamento e transforma casos individuais em aprendizado de carteira. Princípio central: **retenção não é convencer o cliente a ficar — é entender se ainda existe valor recuperável.**

**Comandos:** `create` (diagnóstico preventivo), `analyze` (padrão de carteira) e `cancellation` (pedido de cancelamento já em andamento — o mais crítico dos três).

> **Cenário de uso:** um cliente abre um pedido de cancelamento. Você chama `retention:cancellation` com o motivo declarado e o histórico que tiver. O agente separa causa aparente de causa provável, verifica se existe evidência de valor recuperável, e termina **sempre** com um veredito explícito — "recuperável, plano abaixo" ou "não recuperável, registrar aprendizado" — nunca deixa a resposta em aberto. Se envolver qualquer desconto ou condição especial, ele nunca promete nada sozinho: sinaliza que a ação precisa de aprovação antes de qualquer promessa ao cliente.

### `onboarding` — implantação de novos clientes

Conduz o cliente da assinatura até um handoff saudável pro time de Ongoing — pensando sempre em duas dimensões ao mesmo tempo: **produto funcional + cliente preparado**. Nunca declara implantação concluída só porque o prazo bateu.

**Comandos:** `create` (acompanhamento corrente), `analyze` (padrão de carteira) e `handoff` (decisão crítica de passagem pro Ongoing).

> **Cenário de uso:** uma implantação está no prazo, mas o cliente mal fez login. Você chama `onboarding:handoff` achando que precisa fechar porque "já venceu o prazo". O agente não deixa isso passar batido: produz o handoff mesmo assim (a conta não fica travada no limbo), mas com uma seção obrigatória de "riscos pendentes", nomeando exatamente o que falta e quem no Ongoing deveria continuar de olho nisso — nada se perde na passagem de bastão.
>
> Diferencial: o agente também monta um **cronograma de implantação apresentável ao cliente** (em fluxo, tabela ou texto, conforme o que fizer mais sentido) — é comum um CSM de onboarding montar isso manualmente pra alinhar expectativa; aqui ele já sai pronto, ancorado no que sua empresa realmente entrega, não em prazos genéricos.

### `ongoing` — acompanhamento contínuo de carteira

O agente "sempre ligado" — não espera o cliente pedir ajuda. Identifica saúde de conta, evolução, oportunidades e riscos que ainda não viraram pedido explícito.

**Comandos:** `create` (acompanhamento corrente), `analyze` (padrão de carteira) e `qbr` (preparação de QBR/EBR).

> **Cenário de uso:** uma conta não deu nenhum sinal óbvio de problema, mas você quer um segundo olhar antes da reunião trimestral. Chama `ongoing:qbr`. O agente cruza histórico, adoção e o que sabe do onboarding da conta (pergunta ativamente como foi, se não tiver essa informação), e monta a pauta em torno de uma única pergunta: **o que essa reunião precisa descobrir, mostrar, decidir ou mudar** — nunca vira só uma lista de métricas.
>
> Importante: este agente **nunca decide sozinho** uma negociação de expansão nem um plano de retenção — ao encontrar um sinal concreto de qualquer um dos dois, ele registra o achado e recomenda acionar o `expansion` ou o `retention`, respectivamente. Isso evita que os agentes compitam pela mesma responsabilidade.

---

## Estado do projeto

Os 4 agentes de domínio (Expansion, Retention, Onboarding, Ongoing Value) estão implementados, testados e com gates de aprovação para ações sensíveis. `knowledge/` começa vazio — populado conforme você roda o `setup:onboarding` com o contexto real da sua empresa.

Candidatos de próximos passos: integração com dado ao vivo de CRM (hoje é 100% input manual), e completar `knowledge/escalation.md` com critérios de escalonamento além de reclamação crítica — referenciado pelos 4 agentes.
