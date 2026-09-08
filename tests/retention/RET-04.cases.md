# RET-04 — Analisar padrões de churn — Casos de teste

Nenhum cenário real foi rodado para esta skill em sessão — os 3 casos abaixo foram construídos a partir de `knowledge/customer-segmentation.md`, `knowledge/metrics.md` e `knowledge/commercial-rules.md`. Skill de nível carteira, não conta única — não tem acesso a dado ao vivo (mesma limitação do `analyze` do Expansion Agent).

## Caso 01 (criado)

### Input
"Nos últimos 3 meses, 8 contas perfil D cancelaram. Todas tinham uso já baixo (MAU, abaixo de 2 sessões/mês) nos 60 dias antes do pedido. Motivo declarado predominante: 'não usamos mais'."

### Contexto
`knowledge/customer-segmentation.md` — perfil D já é descrito como "uso superficial... ferramenta não é vista como prioridade".

### Processo esperado
Cruzar segmento (D), comportamento (uso baixo antecedente) e motivo declarado. Reconhecer que esse padrão é consistente com o próprio perfil D, não uma anomalia nova a investigar.

### Output esperado
Padrão identificado: churn concentrado em perfil D com uso já baixo antes do cancelamento — coerente com o comportamento esperado desse perfil (seção "Descrição do perfil" de `customer-segmentation.md`). Recomendação: não é prioridade de investimento pesado de retenção nesse segmento; vale mais monitorar se o volume está dentro da meta de churn geral (2% em MRR) do que tentar reverter caso a caso.

### O que o agente não deveria fazer
Tratar 8 cancelamentos como uma crise generalizada sem considerar que o padrão é esperado para esse perfil específico — isso levaria a recomendar esforço de retenção desproporcional ao MRR envolvido (perfil D tem ticket baixo).

---

## Caso 02 (criado)

### Input
"5 contas perfil B cancelaram este trimestre. Motivo declarado majoritário: preço. 4 das 5 tinham MRR crescido mais de 40% no último ano sem revisão de contrato."

### Contexto
Ecoa o padrão do Caso 01 validado em RET-01/RET-02 (conta perfil B recuperável por revisão de preço) — mas aqui em nível de carteira, não conta única.

### Processo esperado
Identificar o padrão recorrente (crescimento de MRR sem revisão de preço, seguido de objeção de preço) como uma causa sistêmica, não coincidência entre 4 contas.

### Output esperado
Padrão: contas perfil B que crescem MRR sem revisão de contrato têm risco elevado de churn por preço. Recomendação processual (não caso a caso): sugerir um gatilho proativo — revisar/negociar preço quando uma conta perfil B crescer significativamente, antes que o cliente chegue com pedido de cancelamento (conecta com o aprendizado já registrado em RET-02, Caso 01).

### O que o agente não deveria fazer
Tratar cada uma das 5 contas isoladamente sem identificar o padrão comum — a skill RET-04 existe exatamente para elevar casos individuais a um padrão de carteira acionável.

---

## Caso 03 (criado — dado insuficiente)

### Input
"Suporte reportou aumento de reclamações no último mês, mas não tem o detalhamento por segmento, perfil ou motivo."

### Contexto
`common/knowledge/missing-data-protocol.md`.

### Processo esperado
Reconhecer que não há dado estruturado suficiente para identificar um padrão real — aumento de reclamações "no geral" não é, por si só, um padrão de churn.

### Output esperado
Não inventar um padrão. Indicar o que falta (segmentação das reclamações por perfil/motivo/conta) e por que isso importa antes de qualquer conclusão — seguindo o protocolo de dado faltante em vez de especular.

### O que o agente não deveria fazer
Inferir uma causa (ex.: "provavelmente é um problema de produto") sem o detalhamento mínimo necessário para separar sinal de ruído.
