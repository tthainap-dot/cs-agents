# RET-01 — Diagnosticar risco — Casos de teste

## Caso 01 (validado em sessão real — recuperável)

### Input
Conta perfil B (51+ funcionários, uso diário — DAU), 22 meses de casa, abre pedido de cancelamento: "a mensalidade ficou muito alta depois que crescemos, achamos uma alternativa mais barata (Sólides)."

### Contexto
`knowledge/customer-segmentation.md` (perfil B, DAU esperado), `knowledge/commercial-rules.md`. Nenhuma reclamação de suporte registrada, sem queda de uso.

### Processo esperado
Separar causa aparente (preço + concorrente) de causa provável. Reconhecer que uso pleno (DAU mantido) + tenure longo + ausência de queda de adoção são evidência concreta de valor real sendo extraído — o oposto do padrão típico de churn por insatisfação.

### Output esperado
Causa aparente: preço/concorrência. Causa provável: MRR escalou com o crescimento de headcount sem revisão de estrutura de preço — não é rejeição ao produto. Evidência: uso diário mantido, sem sinais de queda, 22 meses de relacionamento.

### O que o agente não deveria fazer
Aceitar "preço" como causa raiz sem examinar os sinais de uso; presumir que o cliente já decidiu sair só porque citou um concorrente.

---

## Caso 02 (validado em sessão real — não recuperável)

### Input
Conta perfil D (1-30 funcionários), uso já baixo há meses (poucas sessões/mês), pede cancelamento: "a empresa diminuiu de tamanho, voltamos a usar planilha, não faz mais sentido o custo pra gente agora."

### Contexto
`knowledge/customer-segmentation.md` — perfil D já é caracterizado como "uso superficial... ferramenta não é vista como prioridade, pode ser facilmente substituída por planilha".

### Processo esperado
Reconhecer que a causa declarada (redução real de porte da empresa) é consistente com o próprio perfil histórico da conta, não uma anomalia — e que não há sinal de valor recuperável a apontar.

### Output esperado
Causa aparente = causa provável (convergem, com evidência): redução real de porte da empresa, evento de negócio externo, não insatisfação com o produto. Nenhuma hipótese de causa oculta a perseguir.

### O que o agente não deveria fazer
Forçar uma hipótese de causa oculta ("será que é insatisfação disfarçada?") quando a evidência disponível já converge para uma causa externa legítima — isso violaria a regra de nunca declarar causa sem evidência, no sentido contrário (inventar dúvida sem base).

---

## Caso 03 (criado para completar cobertura)

### Input
Conta perfil C reporta "não estamos mais usando o sistema" e pede cancelamento. Histórico mostra que o administrador original (que fez o onboarding) saiu da empresa há 2 meses; o substituto nunca recebeu treinamento.

### Contexto
`knowledge/customer-segmentation.md` — perfil C normalmente "organizado, possui conhecimento sobre controle de jornada" — mas isso depende de haver alguém treinado usando o sistema.

### Processo esperado
Diferenciar causa aparente ("não estamos usando") de causa provável (lacuna de onboarding do novo responsável, não desinteresse pelo produto). Buscar evidência: queda de uso coincide com a saída do administrador anterior?

### Output esperado
Causa provável: lacuna de conhecimento operacional pelo novo administrador, não rejeição ao produto — hipótese fortemente sustentada por coincidência temporal com a troca de responsável. Evidência a validar: confirmar com o cliente se o novo administrador já tentou usar o sistema e travou, ou nunca tentou.

### O que o agente não deveria fazer
Tratar "não estamos usando" como sinônimo de "não precisamos mais" sem investigar a causa operacional (troca de responsável sem repasse de conhecimento) — essa é exatamente a diferença entre causa aparente e causa provável que RET-01 existe para capturar.
