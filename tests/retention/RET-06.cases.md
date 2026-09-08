# RET-06 — Identificar sinais antecedentes ao churn — Casos de teste

Nenhum cenário real foi rodado para esta skill em sessão — os 3 casos abaixo foram construídos a partir de `knowledge/customer-segmentation.md` e `common/knowledge/signal-detection.md`. Skill preventiva — usada via comando `create`, antes de qualquer pedido formal de cancelamento.

## Caso 01 (criado)

### Input
Conta perfil B (uso diário esperado) apresenta queda de 30% no uso nos últimos 45 dias, coincidindo com a saída do stakeholder principal (Diretor de RH) há 6 semanas.

### Contexto
`common/knowledge/signal-detection.md` — categoria Risco: queda de uso, mudança de stakeholder.

### Processo esperado
Cruzar os dois sinais (queda de uso + troca de stakeholder) como relacionados, não coincidência — perfil B tem uso diário esperado, então uma queda de 30% é significativa.

### Output esperado
Sinal de risco preventivo: provável perda de conhecimento operacional com a saída do stakeholder principal, ainda sem sucessor engajado. Recomendação: CSM buscar contato proativo com o novo responsável antes que a situação evolua para pedido de cancelamento — mais barato agir agora do que no fluxo de `cancellation` depois.

### O que o agente não deveria fazer
Esperar um pedido formal de cancelamento para agir — RET-06 existe exatamente para capturar isso antes, de forma preventiva.

---

## Caso 02 (criado)

### Input
Conta perfil C teve o número de tickets de suporte dobrado nos últimos 2 meses, mas sem queda de uso (uso mantido estável).

### Contexto
`common/knowledge/signal-detection.md` — aumento de tickets é sinal de risco, mesmo sem queda de adoção.

### Processo esperado
Não descartar o sinal só porque o uso está estável — aumento de fricção operacional pode preceder queda de uso e insatisfação, mesmo que ainda não tenha se manifestado nos números de adoção.

### Output esperado
Sinal de risco em estágio inicial: fricção operacional crescente (tickets), ainda sem impacto visível em uso — recomendação de investigar a causa dos tickets (mudança de processo do lado do cliente? bug recorrente? falta de treinamento?) antes que isso afete a percepção de valor.

### O que o agente não deveria fazer
Concluir que "está tudo bem" só porque o uso não caiu ainda — sinais antecedentes por definição aparecem antes do impacto ficar visível em uso.

---

## Caso 03 (criado)

### Input
Conta perfil A (top 30) reduziu o escopo de uso de 3 filiais monitoradas para apenas 1, sem redução formal de contrato ainda.

### Contexto
`common/knowledge/signal-detection.md` — redução de escopo é sinal de risco explícito.

### Processo esperado
Tratar redução de escopo de uso como sinal de risco real, mesmo sem mudança contratual formal — o contrato pode não ter mudado ainda, mas o comportamento já sinalizou.

### Output esperado
Sinal de risco relevante, prioritário por ser perfil A (meta de churn mais rígida, <0,9%): recomendar investigação imediata do motivo da redução de escopo (as outras 2 filiais migraram para outro processo? corte de custo? insatisfação pontual em uma unidade?) antes que o contrato reflita formalmente essa redução.

### O que o agente não deveria fazer
Aguardar a redução formal de contrato para considerar isso um sinal — nesse ponto, o risco já teria se materializado; o valor de RET-06 está em capturar o comportamento antes disso.
