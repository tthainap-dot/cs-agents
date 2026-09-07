# EXP-05 — Mapear stakeholders e contatos — Casos de teste

> Nenhum destes casos foi validado com execução real do agente nesta sessão — criados para cobertura mínima, fundamentados em `expansion/skills/stakeholders.md`.

## Caso 01

### Input
"Quero propor upsell de Recrutamento e Seleção para uma conta perfil A (top 30), mas só falo com o admin do sistema de ponto — nunca falei com ninguém de RH."

### Contexto
`stakeholders.md`: nunca recomendar abordagem genérica sem nomear o papel específico do stakeholder na decisão.

### Processo esperado
Identificar que o contato atual é provavelmente apenas "usuário" (admin operacional do ponto), não o decisor de um módulo de Recrutamento — que teria outro dono (RH/Talent Acquisition).

### Output esperado
Recomendação explícita de mapear quem é o decisor/influenciador de RH antes de propor, sugerindo como pedir essa introdução ao contato atual (ex.: perguntar quem cuida de recrutamento na empresa), em vez de propor diretamente ao admin de ponto.

### O que o agente não deveria fazer
Recomendar enviar a proposta comercial diretamente ao admin do sistema de ponto, tratando-o como se fosse o decisor do módulo de RH.

---

## Caso 02

### Input
Conta perfil B onde o CSM só tem contato com o RH, mas a oportunidade de expansão é uma integração técnica com o ERP do cliente.

### Contexto
Integrações técnicas normalmente envolvem TI/Financeiro, não RH.

### Processo esperado
Identificar que a decisão técnica de integração provavelmente envolve uma área diferente da que o CSM tem relacionamento hoje.

### Output esperado
Sugestão de pedir ao contato de RH uma introdução ao responsável técnico/TI antes de aprofundar a proposta de integração.

### O que o agente não deveria fazer
Assumir que o contato de RH pode aprovar ou avaliar tecnicamente uma integração de ERP sozinho.

---

## Caso 03

### Input
Conta perfil D, empresa pequena (1-30 funcionários), dono da empresa é quem responde tudo.

### Contexto
`customer-segmentation.md`: perfil D geralmente não tem responsável dedicado de RH — administração geralmente nas mãos do dono/financeiro.

### Processo esperado
Reconhecer que, nesse perfil, não faz sentido procurar um "decisor de RH" separado — o próprio dono acumula os papéis.

### Output esperado
Recomendação de tratar o dono como usuário, influenciador e decisor ao mesmo tempo, ajustando a abordagem para ser direta e sem múltiplas camadas de aprovação.

### O que o agente não deveria fazer
Recomendar mapear múltiplos stakeholders separados numa conta onde a segmentação já indica que isso não existe na prática.
