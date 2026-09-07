# EXP-03 — Mapear necessidade → valor → solução — Casos de teste

## Caso 01 (validado em sessão real)

### Input
Conta perfil B (51+ funcionários, uso diário — DAU) usa Controle de Ponto todos os dias, mas quase não utiliza as funcionalidades de automação. O RH abriu chamados de suporte perguntando como reduzir o trabalho manual de fechamento do ponto.

### Contexto
`knowledge/customer-segmentation.md`: perfil B tem oportunidade esperada "UpSell | UpGrade | cases de sucesso". Automação já está incluída no plano contratado — não é feature nova.

### Processo esperado
Reconhecer que isso é adoção de feature já contratada e não usada (tipo 2 de EXP-03, "ajuste de escopo confirmado no PRD"), não uma venda nova. Estrutura obrigatória: Necessidade (reduzir trabalho manual) → Problema (automação não configurada/ativada) → Impacto (tempo do RH, chamados de suporte) → Solução possível (ativar automação já inclusa) → Valor esperado (redução de tempo de fechamento) → Evidência (chamados abertos).

### Output esperado
Reencaminhar o sinal ao dono da carteira (não é só chamado de suporte a ser fechado tecnicamente); resolver a dor de adoção primeiro, sem cobrar nada a mais; só depois, com a conta demonstrando maturidade de uso, avaliar propor módulo comercial novo.

### O que o agente não deveria fazer
Tratar isso como oportunidade comercial de cross-sell imediato (é ativação de algo já pago, não venda nova); deixar o chamado ser resolvido só pelo Suporte sem repassar o sinal ao CSM dono da carteira.

---

## Caso 02

### Input
Conta perfil D (1-30 funcionários) pede para cancelar o módulo de Comunicação e Cultura, alegando "não usamos".

### Contexto
Perfil D tem uso mensal (MAU) e uso superficial esperado, segundo `customer-segmentation.md` — baixo engajamento é padrão nesse perfil, não necessariamente sinal de insatisfação.

### Processo esperado
Não pular direto para "reter a todo custo" nem para "deixar cancelar sem investigar". Buscar entender a causa raiz antes de qualquer solução — diferenciar causa aparente de causa provável (ver também `common/knowledge/fact-hypothesis-recommendation.md`).

### Output esperado
Recomendar uma conversa breve entendendo o motivo real do não-uso antes de decidir entre desativar o módulo (reduzindo custo do cliente) ou reengajar com um caso de uso simples adequado ao perfil D.

### O que o agente não deveria fazer
Assumir que "não usamos" significa falta de valor do módulo sem investigar — pode ser falta de treinamento inicial, não falta de necessidade.

---

## Caso 03

### Input
Conta perfil C pergunta se existe uma forma de gerar relatório de rotatividade (turnover) — atualmente monta isso manualmente numa planilha à parte.

### Contexto
Nenhum módulo de Desenvolvimento de Pessoas foi contratado por essa conta ainda.

### Processo esperado
Mapear a necessidade explícita (relatório de turnover) ao valor do módulo de Desenvolvimento de Pessoas (que endereça isso via People Analytics/indicadores), sem pular para "vender o módulo" antes de confirmar que o problema é generalizável (não é uma necessidade pontual única).

### Output esperado
Estrutura completa Necessidade→Problema→Impacto→Solução possível→Valor esperado→Evidência, terminando com uma sugestão de demonstrar a funcionalidade de indicadores do módulo em vez de propor contrato direto.

### O que o agente não deveria fazer
Propor fechamento comercial direto sem antes confirmar que a dor é recorrente (poderia ser uma pergunta pontual de curiosidade).
