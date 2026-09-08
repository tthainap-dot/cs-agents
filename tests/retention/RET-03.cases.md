# RET-03 — Responder pedidos de cancelamento — Casos de teste

## Caso 01 (validado em sessão real — recuperável)

### Input
Conta perfil B, uso diário, 22 meses de casa, pede cancelamento por preço + concorrente citado.

### Contexto
`retention/skills/cancellation-response.md` — processo de 9 passos. `knowledge/churn-history.md` vazio (sem padrão anterior).

### Processo esperado
Percorrer os 9 passos: motivo declarado → problema recuperável (RET-01) → checar `churn-history.md` (vazio) → avaliar valor real (MRR alto, tenure longo) → identificar alternativa (RET-02, condição de preço) → avaliar urgência (SLA) → recomendar abordagem → preparar comunicação → indicar escalonamento (não se aplica aqui, decisão é do dono da carteira).

### Output esperado
Resposta termina em veredito explícito: "Recuperável — plano acima, condicionado à aprovação da concessão de preço." Gate aplicado antes de qualquer promessa. RET-08 executado ao final independente do veredito.

### O que o agente não deveria fazer
Terminar a resposta sem veredito explícito; pular a consulta ao histórico antes de propor o plano; prometer a condição de preço sem aprovação.

---

## Caso 02 (validado em sessão real — não recuperável)

### Input
Conta perfil D, uso já baixo, pede cancelamento por redução real de porte da empresa.

### Contexto
Mesmo fluxo de 9 passos, aplicado a um caso sem base de recuperação.

### Processo esperado
Percorrer os 9 passos até concluir, no passo 2 (problema recuperável), que não há evidência de valor recuperável — pular RET-02 (nenhum plano construído) e seguir direto para veredito + RET-08.

### Output esperado
"Não recuperável — registrar aprendizado." Nenhuma tentativa de oferta forçada. RET-08 produzido normalmente (aprendizado é obrigatório independente do veredito).

### O que o agente não deveria fazer
Deixar de produzir o aprendizado pós-churn só porque o veredito foi "não recuperável" — RET-08 é obrigatório nos dois casos, não só quando há tentativa de recuperação.

---

## Caso 03 (criado — testa a regra de urgência de prazo)

### Input
Cliente abre pedido de cancelamento com motivo vago ("não vamos continuar, obrigado") — sem mais contexto. Consulta ao `knowledge/sla.md` mostra que o contrato está a 2 dias do vencimento do ciclo de renovação.

### Contexto
`retention/commands/retention/cancellation.toml`, regra 3 — "urgência de prazo": viés a recomendação provisória imediata em vez de só pedir mais contexto, diferente de `create`/`analyze`.

### Processo esperado
Reconhecer que o protocolo padrão de dado faltante (pedir mais contexto e esperar) tem custo real aqui — o contrato vira cancelamento automático em 2 dias se nada for feito. Agir com o que se tem.

### Output esperado
Recomendação provisória imediata: contato urgente com o cliente pedindo o motivo real antes do prazo expirar, já sinalizando ao CSM que a janela é curta — em vez de simplesmente registrar "dado insuficiente, aguardando resposta do cliente" sem indicar a urgência do prazo.

### O que o agente não deveria fazer
Aplicar o protocolo de dado faltante do mesmo jeito que faria em `create`/`analyze` (pedir mais contexto e esperar, sem pressa) — isso ignora a regra específica de urgência de `cancellation`, e pode custar o prazo do SLA.
