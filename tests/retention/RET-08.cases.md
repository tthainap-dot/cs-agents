# RET-08 — Aprendizado pós-churn — Casos de teste

## Caso 01 (validado em sessão real — recuperável)

### Input
Continuação do Caso 01 de RET-03: conta perfil B, plano de recuperação com concessão de preço aprovado via gate, cliente aceita a nova condição e permanece.

### Contexto
`retention/skills/post-churn-learning.md` — aprendizado é obrigatório independente do veredito.

### Processo esperado
Mesmo com resultado positivo (cliente ficou), produzir o aprendizado completo — não pular essa etapa só porque "deu certo".

### Output esperado
Entrada para `knowledge/churn-history.md`: Veredito: recuperado. Causa: MRR não revisado após crescimento de headcount. Sinais antecedentes: nenhum sinal de risco captado preventivamente antes do pedido (oportunidade de melhoria: RET-06 deveria monitorar crescimento de headcount como gatilho proativo de revisão de preço). Pontos controláveis: revisão de preço poderia ter sido proativa. Sugestão: alterar processo de Ongoing para revisar preço quando MRR de uma conta perfil B crescer acima de X% sem repactuação.

### O que o agente não deveria fazer
Pular a etapa de aprendizado só porque o resultado final foi positivo — a instrução de "anexar, nunca sobrescrever" em `churn-history.md` vale para todo caso, recuperado ou não.

---

## Caso 02 (validado em sessão real — não recuperável)

### Input
Continuação do Caso 02 de RET-03: conta perfil D, causa = redução real de porte da empresa, sem plano de recuperação construído.

### Contexto
`knowledge/churn-history.md` — formato de entrada append-only.

### Processo esperado
Produzir o aprendizado mesmo sem tentativa de recuperação — o veredito "não recuperável" é uma conclusão válida que ainda gera aprendizado de processo.

### Output esperado
Entrada: Veredito: não recuperado. Causa: redução real de porte da empresa cliente (evento externo, não controlável). Pontos controláveis: nenhum identificado. Pontos não controláveis: decisão de negócio do cliente. Sugestão de prevenção: nenhuma — registrar como caso de churn saudável/esperado para efeito de análise futura de padrões (RET-04), não como falha do time.

### O que o agente não deveria fazer
Forçar uma "lição aprendida" artificial quando a causa é genuinamente externa e não controlável — inventar um ponto de melhoria que não existe de verdade violaria a regra de nunca declarar causa/aprendizado sem evidência.

---

## Caso 03 (criado — instrução de escrita)

### Input
Um caso de `cancellation` acabou de ser concluído. O cliente MCP (que adotou a persona) precisa saber exatamente como registrar a entrada em `knowledge/churn-history.md`.

### Contexto
`knowledge/churn-history.md` — arquivo append-only, formato fixo, mais recente primeiro, nunca usar nome real do cliente.

### Processo esperado
Instruir explicitamente, ao final da resposta, que o cliente MCP deve anexar (não sobrescrever) a nova entrada no topo do arquivo, usando identificador interno da conta em vez do nome real.

### Output esperado
Instrução explícita e literal ao final da resposta: "Anexe esta entrada no topo de `knowledge/churn-history.md` (não sobrescreva as entradas existentes), usando o identificador interno da conta, nunca o nome real do cliente."

### O que o agente não deveria fazer
Deixar implícito que "alguém" deveria salvar isso em algum lugar, sem instrução explícita de anexar (vs. sobrescrever) e sem lembrar da regra de privacidade — o servidor MCP nunca escreve arquivo sozinho, então a instrução precisa ser clara o suficiente para o cliente executar corretamente.
