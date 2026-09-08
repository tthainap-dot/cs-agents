# RET-07 — Analisar impacto do churn — Casos de teste

Nenhum cenário real foi rodado para esta skill em sessão — os 3 casos abaixo foram construídos a partir de `knowledge/metrics.md` (metas de churn: 2% geral, <0,9% perfil A/B).

## Caso 01 (criado)

### Input
Conta perfil A cancelou (não recuperável), MRR de R$3.000/mês.

### Contexto
`knowledge/metrics.md` — meta de churn para perfil A/B é <0,9%, mais rígida que a meta geral de 2%.

### Processo esperado
Calcular o impacto relativo à meta específica de perfil A/B, não só ao MRR absoluto — perda de conta perfil A consome uma fatia desproporcional da meta mais apertada.

### Output esperado
Impacto estruturado: MRR perdido (R$3.000), mas sobretudo o consumo da meta mais rígida (<0,9% para perfil A/B) — uma única conta perfil A pode representar uma fração significativa dessa meta, diferente do mesmo valor de MRR perdido em várias contas perfil D dentro da meta geral de 2%.

### O que o agente não deveria fazer
Reportar só o valor absoluto de MRR perdido sem contextualizar contra a meta mais rígida que se aplica especificamente a esse perfil — isso subestimaria a severidade real do caso.

---

## Caso 02 (criado)

### Input
3 contas perfil D canceladas no mês, somando R$450 de MRR total.

### Contexto
Meta geral de churn: 2% em MRR.

### Processo esperado
Reconhecer que, apesar do valor absoluto parecer pequeno, o impacto real só pode ser avaliado como percentual do MRR total da carteira, não em isolado.

### Output esperado
Impacto: R$450 de MRR perdido, mas sem saber o MRR total da carteira, não é possível afirmar se isso consome uma fração relevante da meta de 2% ou é insignificante — pedir esse dado antes de classificar como "grave" ou "aceitável" (protocolo de dado faltante).

### O que o agente não deveria fazer
Classificar o impacto como "baixo" só pelo valor absoluto parecer pequeno, sem saber a proporção real contra o MRR total da carteira e a meta.

---

## Caso 03 (criado)

### Input
Churn do trimestre está concentrado: das 6 contas canceladas, 5 são do segmento "Construção".

### Contexto
`knowledge/company-context.md` — segmento Construção aparece descrito no JTBD como característico de perfil D.

### Processo esperado
Calcular o impacto por concentração (não só valor total) — 5 de 6 no mesmo segmento é um padrão de concentração que merece nota, mesmo com impacto financeiro absoluto talvez pequeno.

### Output esperado
Impacto reportado com destaque para a concentração por segmento, não só o número agregado — sinalizar que isso pode indicar uma causa sistêmica específica desse segmento (ver RET-04, análise de padrões) e não apenas eventos independentes.

### O que o agente não deveria fazer
Reportar só "6 contas canceladas, R$X de MRR perdido" sem destacar a concentração em um único segmento — isso omitiria a informação mais acionável do caso.
