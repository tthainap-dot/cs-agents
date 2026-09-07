# EXP-02 — Detectar sinais de oportunidade — Casos de teste

## Caso 01 (validado em sessão real)

### Input
Conta: "Construtora Horizonte" (segmento mid-market, contrato há 14 meses). Nos últimos 2 meses, o número de usuários ativos na feature de "relatórios avançados" (NÃO incluída no plano atual, disponível apenas em trial de 30 dias já utilizado) subiu de 0 para 40 tentativas de acesso por semana, todas bloqueadas por paywall. CSM não sabe se deve tratar como upsell agora ou esperar o próximo ciclo de renovação (4 meses). Sem dado de orçamento disponível.

### Contexto
`knowledge/` populado com dado real da empresa (SaaS B2B de RH, módulos de Controle de Ponto/Recrutamento/Desenvolvimento de Pessoas/Comunicação/Benefícios, segmentação D/C/B/A por funcionários).

### Processo esperado
Reconhecer o padrão crescente (0→40/semana) como sinal de expansão do tipo "uso acima do contratado" (`common/knowledge/signal-detection.md`), não como tentativa isolada. Não tratar hipótese como oportunidade confirmada sem saber o perfil de segmentação da conta.

### Output esperado
Diagnóstico do sinal comportamental; identificação de que "esperar a renovação" tem custo (fricção contínua, risco de a demanda esfriar); recomendação de não escalar a decisão — é do dono da carteira; pedido dos dados faltantes (nº de funcionários/perfil D-C-B-A, ciclo de cobrança do plano) antes de fechar a abordagem, seguindo `commercial-rules.md` (periodicidade do plano) e `customer-segmentation.md` (oportunidade esperada por perfil).

### O que o agente não deveria fazer
Recomendar esperar os 4 meses sem justificar; recomendar escalar para liderança (a decisão é do dono da carteira, ver `tools-operations.md`); tratar os 40 acessos/semana como oportunidade "qualificada" sem confirmar o perfil da conta.

---

## Caso 02

### Input
Conta perfil C (31-49 funcionários) começou a usar a integração de exportação de dados via API — feature liberada só no plano Enterprise — em ambiente de testes (sandbox) fornecido por engenharia, 3 vezes na última semana.

### Contexto
Perfil C, segundo `customer-segmentation.md`, tem oportunidade esperada de "UpSell | UpGrade".

### Processo esperado
Diferenciar uso exploratório pontual (sandbox, 3x numa semana) de padrão consistente — não classificar ainda como sinal forte, e sim como "em observação".

### Output esperado
Recomendação de aguardar mais 1-2 semanas de dado antes de qualificar a oportunidade, associada a uma pergunta ao CSM sobre o motivo do teste (quem pediu, para qual finalidade).

### O que o agente não deveria fazer
Classificar 3 acessos em ambiente de teste como oportunidade "qualificada" — volume insuficiente para confirmar padrão real de necessidade.

---

## Caso 03

### Input
Conta perfil A (top 30) reduziu o número de usuários ativos em 20% no último mês, mas o MRR contratado não mudou.

### Contexto
Perfil A é DAU (uso diário esperado); queda de usuários ativos é sinal de risco, não de expansão — mas o agente deve reconhecer que sinais de risco também merecem registro, mesmo em uma tarefa nominalmente de Expansion.

### Processo esperado
Sinalizar que esse é um sinal de **risco** (`common/knowledge/signal-detection.md`, categoria Risco: "queda de uso"), não de expansão — e recomendar investigação antes de qualquer abordagem comercial.

### Output esperado
Alertar que abordar essa conta para upsell agora, sem entender a queda de uso, seria contraproducente; recomendar que o CSM primeiro entenda a causa da queda (mudança de processo do cliente? perda de usuários internos? insatisfação?) antes de qualquer conversa de expansão.

### O que o agente não deveria fazer
Ignorar o sinal de risco só porque a tarefa era sobre expansão; propor upsell numa conta com sinal de queda de uso sem investigar a causa primeiro.
