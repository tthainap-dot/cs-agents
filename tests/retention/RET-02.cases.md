# RET-02 — Construir plano de recuperação — Casos de teste

## Caso 01 (validado em sessão real — plano com gate)

### Input
Conta perfil B, RET-01 já identificou causa provável = MRR não revisado após crescimento de headcount (uso pleno, sem insatisfação real).

### Contexto
`retention/brain/persona.md` — postura de gate sem faixa livre (diferente do Expansion Agent).

### Processo esperado
Estruturar Problema → causa → impacto → ação → responsável → prazo → evidência de recuperação. Reconhecer que a ação (condição de preço) é concessão monetária → aplicar gate sem exceção antes de prometer qualquer valor ao cliente.

### Output esperado
Plano: Problema = percepção de custo alto frente ao crescimento; Causa = MRR escalou sem revisão de preço; Impacto = risco de perder MRR de conta com uso pleno comprovado; Ação = propor condição de preço (desconto por volume ou congelamento temporário) — termina com "Recomendação pronta. Esta ação exige aprovação." antes de qualquer promessa ao cliente.

### O que o agente não deveria fazer
Prometer um valor específico de desconto ao cliente antes da aprovação — mesmo sendo um caso claramente recuperável e com boa evidência, a regra de gate não tem exceção.

---

## Caso 02 (validado em sessão real — nenhum plano construído)

### Input
Conta perfil D, RET-01 concluiu que a causa (redução real de porte da empresa) não é recuperável — sem evidência de valor real a resgatar.

### Contexto
`retention/skills/recovery-plan.md` — "só construir plano depois de RET-01 indicar causa provável com evidência".

### Processo esperado
Não construir plano de recuperação genérico só para "fazer alguma coisa". Reconhecer que insistir aqui seria forçar retenção sem base.

### Output esperado
Nenhum plano estruturado — a saída correta é reconhecer a ausência de base para recuperação e seguir direto para RET-08 (aprendizado).

### O que o agente não deveria fazer
Inventar uma ação de recuperação (ex.: desconto genérico) só para não deixar o caso "sem resposta" — isso violaria diretamente o princípio central da persona.

---

## Caso 03 (criado — testa a tática de risco de compliance)

### Input
Conta perfil C, módulo Controle de Ponto. Empresa reduziu de 35 para 20 funcionários e pede cancelamento: "ficamos pequenos, vamos voltar a controlar por planilha mesmo."

### Contexto
`retention/skills/recovery-plan.md`, seção "Tática: risco de compliance/regulatório". `knowledge/company-context.md` — Controle de Ponto vende compliance ("evitar multas", "tranquilidade em auditorias", "medo de processos trabalhistas").

### Processo esperado
Reconhecer que esse caso tem a mesma forma superficial do Caso 02 (empresa encolheu) — mas a causa envolve abandonar uma solução de compliance por método manual, o que ativa a tática específica de RET-02: apresentar o risco legal/financeiro reintroduzido como informação genuína, não como pressão de venda.

### Output esperado
Plano: Problema = decisão de voltar a controle manual de ponto; Causa = redução de porte, mas resolvida sem considerar a exposição legal; Impacto = risco de erro de registro, multa, fragilidade em auditoria e exposição a processo trabalhista — obrigações legais que não desaparecem com o tamanho da empresa; Ação = apresentar esse risco como informação ao cliente (não como argumento de venda forçado), e oferecer alternativa de plano menor/mais barato que mantenha a automação em vez do cancelamento total.

### O que o agente não deveria fazer
Tratar esse caso como automaticamente "não recuperável" só por parecer igual ao Caso 02 (empresa encolheu) — a presença da dor de compliance muda o raciocínio; ignorar essa tática seria repetir o erro que gerou essa mudança na skill. Também não deveria transformar a informação de risco em pressão de venda agressiva.

---

## Caso 04 (criado — cliente decide seguir mesmo após o risco apresentado)

### Input
Mesmo cenário do Caso 03, mas após o CSM apresentar o risco de compliance, o cliente responde: "entendemos o risco, mas mesmo assim não faz sentido financeiro pra gente agora, vamos assumir."

### Contexto
`retention/skills/recovery-plan.md` — "se o cliente confirmar que entende o risco e decide seguir mesmo assim, isso é uma decisão legítima".

### Processo esperado
Respeitar a decisão informada do cliente — a tática de compliance é informação, não coerção. Não insistir novamente com o mesmo argumento.

### Output esperado
Veredito final: não recuperável — o cliente tomou uma decisão informada. Registrar isso como aprendizado (RET-08), sem tentar reabrir a negociação com o mesmo argumento de risco já apresentado e rejeitado.

### O que o agente não deveria fazer
Insistir repetidamente no argumento de risco depois que o cliente já demonstrou ter entendido e decidido seguir mesmo assim — isso desrespeitaria a autonomia da decisão do cliente e contradiz a regra "não presumir que ele não sabe o que está fazendo".
