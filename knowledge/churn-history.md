<!-- Alimentado pela skill RET-08 (retention/skills/post-churn-learning.md), a cada execução do comando retention:cancellation. -->
<!-- DIFERENTE de todos os outros arquivos de knowledge/: este é APPEND-ONLY (histórico acumulado), não estado atual da empresa. -->
<!-- Nunca usar nome real de cliente — usar identificador interno da conta. -->

# Histórico de Churn

Formato de cada entrada (mais recente primeiro, delimitada por `---`):

```
## [identificador interno da conta] — [data]

- Veredito: recuperado | não recuperado
- Causa: ...
- Sinais antecedentes observados: ...
- Falhas identificadas: ...
- Pontos controláveis: ...
- Pontos não controláveis: ...
- Oportunidades de prevenção: ...
- Sugestões — onboarding / ongoing / produto / processos: ...
```

---

## conta-teste-resistencia-colaboradores — 2026-09-08

- Veredito: em andamento (recuperável — condicionado a confirmar custo extra e presença de biometria)
- Causa: resistência dos colaboradores ao uso do sistema, apesar do produto ser explicitamente elogiado pelo cliente ("muito bom, fácil de mexer") — não é rejeição ao produto.
- Sinais antecedentes observados: nenhum dado de queda de uso fornecido nesta rodada; motivo veio direto do pedido de cancelamento, não de sinal antecipado detectado previamente.
- Falhas identificadas: provável gestão de mudança/rollout insuficiente — onboarding parece ter alcançado o decisor (admin/RH), não os usuários finais (colaboradores).
- Pontos controláveis: profundidade do onboarding/treinamento oferecido aos usuários finais, não só ao administrador da conta.
- Pontos não controláveis: nenhum identificado nesta rodada.
- Oportunidades de prevenção: incluir sessão de onboarding dedicada aos colaboradores (não só ao admin) como padrão, especialmente em contas onde o módulo envolve mudança de hábito direta do usuário final (ex.: marcação de ponto, biometria).
- Sugestões — onboarding / ongoing / produto / processos: onboarding — adicionar etapa de "engajamento do usuário final" ao roteiro padrão; ongoing — CSM deveria monitorar ativamente sinais de resistência de colaborador antes de virar pedido de cancelamento, não só reagir a ele.

---

## conta-teste-fraude-marcacao-concorrente - 2026-09-08

- Veredito: não recuperável com o produto atual (condicionado à reação do cliente ao reframe de valor apresentado; se abrir espaço real, reavaliar)
- Causa: gap real de produto — Marq detecta inconsistência de marcação via relatório (reativo), concorrente escolhido pelo cliente previne a manipulação diretamente (proativo/bloqueio). Confirmado pela própria empresa como decisão deliberada de produto (tratar como comportamento do usuário, não responsabilidade da ferramenta), não é hipótese.
- Sinais antecedentes observados: nenhum fornecido nesta rodada — motivo veio direto do pedido de cancelamento.
- Falhas identificadas: nenhuma falha de execução do CSM identificada — é um gap de capability de produto, não de atendimento/onboarding.
- Pontos controláveis: reframe de valor (evidência documentada via relatório útil para ação de RH/disciplinar) — comunicável, mas não resolve o gap de fato.
- Pontos não controláveis: decisão de produto de não implementar bloqueio de manipulação de horário (fora do escopo deste agente mudar).
- Oportunidades de prevenção: nenhuma no nível de CSM — este é um sinal de produto a ser levado para discussão fora do Retention Agent (ver aprendizado abaixo).
- Sugestões — onboarding / ongoing / produto / processos: **produto** — gap de prevenção vs. detecção em fraude de marcação é motivo real de perda de cliente para concorrente específico; vale avaliação de roadmap fora deste agente. Não é um padrão que o Retention Agent deveria tentar reverter sozinho toda vez que aparecer.

---

## conta-teste-sincronizacao-offline — 2026-09-08

- Veredito: recuperável, condicionado à correção técnica real (não a uma mensagem isolada)
- Causa: instabilidade real de sincronização offline no momento de registro de ponto, forçando ajustes manuais recorrentes — reclamação de execução (produto não entrega o que promete), não de adoção/decisão de escopo.
- Sinais antecedentes observados: não fornecidos nesta rodada — flag para o CSM checar histórico de suporte (primeira vez reportado vs. recorrente) e perfil de conectividade da conta (uso em campo/obra) antes de fechar o caso.
- Falhas identificadas: possível falha técnica não resolvida; possível falha de processo se já foi reportado antes e não escalado.
- Pontos controláveis: escalonamento técnico com urgência; comunicação honesta com o cliente.
- Pontos não controláveis: causa raiz técnica exata (não confirmada sem dado de engenharia).
- Oportunidades de prevenção: monitorar se "instabilidade de sincronização offline" vira padrão em outras contas — indicaria bug sistêmico, não caso isolado.
- Sugestões — onboarding / ongoing / produto / processos: produto/suporte — validar se esse tipo de reclamação já apareceu antes sem ter sido escalado; se sim, é falha de processo de escalonamento, não só técnica.

---

## conta-teste-downgrade-por-preco — 2026-09-08

- Veredito: recuperável — cliente sinaliza intenção de ficar (pediu redução de escopo, não saída)
- Causa: percepção de custo alto, cliente pediu remoção de features em vez de cancelamento direto — sinal mais positivo que os demais casos registrados.
- Sinais antecedentes observados: nenhum fornecido — falta checar uso real das features que o cliente quer remover antes de aceitar a remoção.
- Falhas identificadas: nenhuma — caso de ajuste comercial normal, não falha de produto/atendimento.
- Pontos controláveis: oferecer downgrade proporcional (sem gate, se for reprecificação por escopo reduzido) ou revisar quantidade de licenças antes de cortar feature.
- Pontos não controláveis: orçamento do cliente.
- Oportunidades de prevenção: nenhuma — caso saudável de right-sizing, não sinal de risco a prevenir.
- Sugestões — onboarding / ongoing / produto / processos: processo — CSM deveria perguntar explicitamente "quer sair ou quer um pacote menor?" logo no início de pedidos que misturam "cancelar" com "tirar features", para economizar etapas de diagnóstico.

---

*(demais entradas conforme novos casos reais de cancelamento forem processados via `retention:cancellation`)*
