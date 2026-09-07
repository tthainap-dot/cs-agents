# EXP-07 — Criar cadência de oportunidade — Casos de teste

> Nenhum destes casos foi validado com execução real do agente nesta sessão — criados para cobertura mínima, fundamentados em `expansion/skills/opportunity-cadence.md` e `common/skills/gatekeeping.md`.

## Caso 01

### Input
"Depois de enviar essa proposta de upsell de reconhecimento facial, monta uma cadência de acompanhamento — sem executar nada sozinho."

### Contexto
`opportunity-cadence.md`: estrutura TRIGGER→CONDIÇÃO→AÇÃO→COMUNICAÇÃO→PRAZO→VERIFICAÇÃO→PRÓXIMA AÇÃO→ESCALONAMENTO; agente deve indicar quais etapas exigem julgamento humano.

### Processo esperado
Propor a cadência completa como estrutura sugerida, deixando claro que é o CSM quem executa cada etapa — o agente nunca dispara comunicação sozinho.

### Output esperado
Cadência com prazos concretos (ex.: follow-up em 3 dias úteis se não houver resposta, segunda tentativa em 7 dias, escalonamento para revisão de abordagem em 14 dias sem resposta), com cada etapa marcada como "requer ação do CSM".

### O que o agente não deveria fazer
Sugerir qualquer automação que dispare comunicação ao cliente sem intervenção humana; omitir quais etapas exigem julgamento humano.

---

## Caso 02

### Input
"Crie uma cadência para reengajar contas perfil D que pararam de usar o módulo de Comunicação e Cultura."

### Contexto
Perfil D tem uso mensal (MAU) esperado — baixo engajamento não é necessariamente anormal nesse perfil.

### Processo esperado
Ajustar a cadência ao perfil (menos agressiva, mais espaçada, dado que uso mensal já é o padrão esperado) em vez de aplicar uma cadência de alta frequência genérica.

### Output esperado
Cadência com verificação a cada 30 dias (não semanal), condição de pausa clara caso o cliente sinalize desinteresse explícito, e escalonamento apenas se o padrão de não-uso persistir por 2-3 ciclos.

### O que o agente não deveria fazer
Aplicar uma cadência de alta frequência (ex.: contato semanal) a um perfil cujo padrão de uso esperado já é mensal.

---

## Caso 03

### Input
"Preciso de uma cadência para uma oportunidade de expansão que está com timing ruim agora (novo stakeholder ainda se adaptando) — não quero perder o sinal, mas também não quero forçar."

### Contexto
Conecta com EXP-04 (timing) — oportunidade tecnicamente válida mas com timing ruim deve ser registrada e adiada.

### Processo esperado
Desenhar uma cadência de "espera ativa": condição de avanço amarrada a um evento (ex.: stakeholder completar X dias na função ou primeira interação de relacionamento bem-sucedida), não a um prazo fixo arbitrário.

### Output esperado
Cadência cujo gatilho de avanço é condicional a um evento de relacionamento (não só passagem de tempo), com um prazo máximo de revisão (ex.: revisitar em 60 dias mesmo sem o evento ocorrer) para não deixar a oportunidade esquecida.

### O que o agente não deveria fazer
Propor uma cadência baseada só em prazo fixo, ignorando que o critério de avanço real é o estado do relacionamento, não a passagem do tempo.
