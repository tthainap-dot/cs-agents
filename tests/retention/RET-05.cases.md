# RET-05 — Análise de cohort — Casos de teste

Nenhum cenário real foi rodado para esta skill em sessão — os 3 casos abaixo foram construídos a partir de `knowledge/metrics.md` e `knowledge/customer-segmentation.md`.

## Caso 01 (criado)

### Input
"Clientes que entraram na base em janeiro têm churn de 12% em 6 meses, contra uma média de 3% dos demais meses de entrada."

### Contexto
`retention/skills/cohort-analysis.md` — observação ≠ correlação ≠ causalidade.

### Processo esperado
Registrar a observação (diferença real de churn por cohort de entrada) sem saltar para uma causa. Levantar hipóteses plausíveis (ex.: qualidade de onboarding específica daquele mês, característica do público que entrou em janeiro, sazonalidade) sem afirmar qual é a correta.

### Output esperado
Observação: cohort de janeiro tem churn 4x acima da média. Hipóteses (não fatos): qualidade de onboarding naquele mês, perfil de cliente diferente, evento externo específico do período. Recomendação: investigar o que era diferente na operação de onboarding/vendas de janeiro antes de agir.

### O que o agente não deveria fazer
Declarar uma causa única ("foi o onboarding de janeiro que falhou") sem evidência que isole essa variável das outras hipóteses possíveis.

---

## Caso 02 (criado)

### Input
"A carteira do CSM Marina tem churn de 5% este trimestre, acima da meta geral de 2%."

### Contexto
Cohort por CSM é uma dimensão válida (`cohort-analysis.md`), mas é a mais sensível de todas — pode ser mal-interpretada como avaliação de desempenho individual sem base.

### Processo esperado
Diferenciar correlação (CSM X tem churn acima da meta) de causalidade (o desempenho do CSM causou o churn). Considerar hipóteses alternativas: composição da carteira (mais contas perfil D, naturalmente mais voláteis), contas herdadas já em risco antes da CSM assumir, coincidência de tamanho de amostra pequeno.

### Output esperado
Observação registrada sem juízo de valor sobre a CSM. Hipóteses alternativas explicitamente listadas antes de qualquer sugestão de causa relacionada a desempenho individual — e recomendação de checar composição de carteira antes de qualquer conclusão sobre atuação da pessoa.

### O que o agente não deveria fazer
Concluir ou insinuar que a CSM "está fazendo algo errado" com base só no número agregado de churn da carteira dela — isso seria causalidade sem evidência, além de um uso indevido e sensível do dado (CSM Coaching é uma capacidade transversal separada, não parte do escopo do Retention Agent).

---

## Caso 03 (criado)

### Input
"Comparando cohort por perfil: perfil D tem churn de 6% no período, perfil B tem 1%."

### Contexto
`knowledge/customer-segmentation.md` — perfis D e B têm perfis de uso estruturalmente diferentes (MAU vs. DAU).

### Processo esperado
Reconhecer que essa diferença é majoritariamente esperada pela própria natureza dos perfis (D tem uso mais superficial por definição), não necessariamente um problema a resolver.

### Output esperado
Observação contextualizada: a diferença entre 6% (D) e 1% (B) é consistente com o comportamento estrutural desses perfis — não é, por si só, evidência de um problema novo. Recomendação: comparar contra a meta específica por perfil (se existir) em vez de comparar D contra B diretamente, já que não são perfis equivalentes.

### O que o agente não deveria fazer
Tratar a diferença entre perfis como uma anomalia alarmante sem contextualizar que os perfis já são estruturalmente diferentes em comportamento de uso — isso gastaria esforço de investigação num padrão que já é esperado.
