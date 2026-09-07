# EXP-06 — Preparar estratégia de expansão (inclui tratamento de objeções) — Casos de teste

## Caso 01 (validado em sessão real) — objeção de adoção interna

### Input
CSM ofereceu o módulo de Recrutamento e Seleção para uma conta perfil C (31-49 funcionários), que já usa Controle de Ponto. Cliente respondeu: "os gestores não vão usar isso, eles já centralizam currículo por WhatsApp e e-mail mesmo."

### Contexto
`knowledge/company-context.md` (Apêndice JTBD, Cluster 2): objeção documentada como comum no mercado; gatilhos de compra reais desse cluster incluem "perco candidatos durante o processo", "recebo muitos currículos e não consigo organizar".

### Processo esperado
Reconhecer que é objeção de adoção/hábito, não de preço ou de valor do produto. Não insistir na feature — reabrir a dor real documentada nos gatilhos de compra do cluster, deixando o cliente articular a dor com as próprias palavras.

### Output esperado
Mensagem sugerida que valida a resistência do gestor, não menciona o produto, e termina em pergunta expondo o custo invisível do processo atual (perder candidato no meio do funil de WhatsApp/e-mail) — conectar com a solução só depois do cliente reconhecer a dor.

### O que o agente não deveria fazer
Insistir nas features do módulo como resposta à objeção; tratar a objeção como definitiva e desistir da oportunidade sem tentar reabrir a conversa pela dor.

---

## Caso 02 (validado em sessão real) — pushback contra pressão comercial sem sinal

### Input
Conta perfil A (top 30, maior MRR), tenure longo, sem nenhum sinal recente de interesse em outros produtos. O time comercial pede que o agente sugira um upsell mesmo assim.

### Contexto
Princípio central da persona: "não procurar o que vender, procurar onde existe valor adicional a ser criado". Regra "nunca deve": forçar oportunidade sem necessidade real, tratar hipótese como oportunidade confirmada.

### Processo esperado
Recusar gerar uma proposta de produto sem evidência. Diferenciar o que a segmentação informa (COMO abordar quando houver sinal) do que ninguém informou (SE existe necessidade agora). Propor ação de descoberta em vez de proposta comercial.

### Output esperado
Recomendação de uma conversa de relacionamento/check-in estratégico sem mencionar produto, com o objetivo de gerar sinal real antes de qualquer proposta; registro explícito de que a decisão final de forçar uma proposta sem essa etapa é do time comercial, não do agente.

### O que o agente não deveria fazer
Inventar uma necessidade plausível só para atender à pressão comercial; usar o "tipo de abordagem esperado" da segmentação (ex.: perfil A = projetos pagos/cases de sucesso) como se fosse evidência de que existe uma oportunidade agora.

---

## Caso 03 (validado em sessão real) — erro de conta numa proposta

### Input
Cliente quer feature de reconhecimento facial (R$2/vida, preço de referência), recusou proposta de R$350 para 120 vidas ativas (MRR atual R$700).

### Contexto
120 × R$2 = R$240, não R$350 — divergência de R$110 frente ao cálculo direto. `commercial-rules.md` (após atualização): preço por vida é referência, não regra fixa; CSM tem liberdade de propor acima por margem.

### Processo esperado
Não aceitar o número da proposta como fato sem verificar a conta (`common/knowledge/fact-hypothesis-recommendation.md`). Levantar hipóteses concretas para a divergência (taxa mínima, base de cálculo diferente, erro) antes de recomendar como reverter a objeção.

### Output esperado
Sinalização explícita da divergência matemática como "ponto cego", com 2-3 hipóteses plausíveis e pedido de confirmação — sem tratar a proposta original como automaticamente correta nem automaticamente errada.

### O que o agente não deveria fazer
Assumir que a proposta está certa e tratar a objeção só como "cliente acha caro"; assumir que é erro sem perguntar (pode ser margem deliberada, como de fato era).

---

## Caso 04 (validado em sessão real) — negociação de preço e cortesia sem desconto

### Input
Após confirmar que R$350 é margem deliberada (não erro): cliente entende a necessidade da feature, mas acha o valor alto. Depois, CSM não pode mais baixar o preço do reconhecimento facial, mas pode oferecer cortesia de outra feature — precisa de ajuda para construir essa oferta sem perder receita.

### Contexto
Piso de referência R$2/vida = R$240; qualquer valor abaixo disso é desconto de fato (exige Gate comercial). Empresa tem múltiplos módulos (Comunicação e Cultura, Desenvolvimento de Pessoas, Recrutamento e Seleção) com custo marginal ~zero de ativação.

### Processo esperado
Para a objeção de preço: não re-vender valor já aceito, ancorar a negociação deixando o cliente propor um número antes do CSM. Para a cortesia: aplicar critério — custo marginal zero, prazo definido, não competir com o que está sendo vendido, alinhado a necessidade real, idealmente módulo ainda não adotado.

### Output esperado
Mensagem sugerida reformulando o valor (por colaborador/mês) e perguntando o número do cliente antes de ceder; framework de decisão para a cortesia (5 critérios) + sugestão concreta de módulo de cortesia com prazo definido; sinalização de que cortesia além do trial padrão configura condição especial e exige Gate comercial.

### O que o agente não deveria fazer
Oferecer desconto abaixo de R$240 sem sinalizar necessidade de aprovação; sugerir cortesia permanente (sem prazo) de um módulo pago; sugerir cortesia de um módulo que o cliente já possui.
