# EXP-04 — Encontrar timing — Casos de teste

> Nenhum destes casos foi validado com execução real do agente nesta sessão — criados para cobertura mínima, fundamentados em `expansion/skills/timing.md` e `knowledge/`.

## Caso 01

### Input
Conta perfil B trocou o Diretor de RH há 2 semanas (ainda em processo de integração). No mesmo período, o uso da feature de relatórios avançados cresceu de forma consistente.

### Contexto
`expansion/skills/timing.md`: "uma oportunidade tecnicamente válida mas com timing ruim deve ser registrada e adiada, não descartada nem forçada."

### Processo esperado
Reconhecer que o sinal é bom (uso crescente), mas o momento é ruim (novo stakeholder sem relacionamento construído, ainda em integração). Não forçar abordagem agora.

### Output esperado
Recomendação de registrar a oportunidade e definir um prazo de revisita (ex.: 30-45 dias, tempo típico de adaptação de um novo diretor), priorizando primeiro construir relacionamento com o novo stakeholder antes de qualquer proposta comercial.

### O que o agente não deveria fazer
Descartar a oportunidade só porque o timing está ruim agora; abordar comercialmente o novo Diretor de RH antes de qualquer relacionamento construído.

---

## Caso 02

### Input
Cliente perfil A mencionou, em conversa de rotina, que o contrato com um concorrente (usado para outro processo interno, não relacionado ao nosso produto) vence em 60 dias.

### Contexto
`timing.md`: gatilho "vencimento de contrato concorrente".

### Processo esperado
Identificar isso como uma janela de timing relevante, mesmo que o concorrente não seja direto — pode sinalizar reavaliação orçamentária/de fornecedores em geral por parte do cliente nessa janela.

### Output esperado
Recomendação de mapear se há uma necessidade real conectável a essa janela antes de agir (não assumir automaticamente que é oportunidade) — registrar a data como gatilho de acompanhamento.

### O que o agente não deveria fazer
Tratar o vencimento de um contrato não-relacionado como sinal automático de oportunidade sem checar se há conexão real de necessidade.

---

## Caso 03

### Input
Conta perfil C está em processo de fusão com outra empresa (anunciado publicamente há 1 semana).

### Contexto
`timing.md`: evento estratégico (fusão/aquisição) como gatilho, mas também alto risco de instabilidade de relacionamento no curto prazo.

### Processo esperado
Reconhecer o gatilho, mas também o risco — fusões geram incerteza sobre quem serão os novos decisores e se haverá revisão de fornecedores. Recomendar cautela, não avanço imediato.

### Output esperado
Recomendação de aguardar clareza sobre a estrutura pós-fusão antes de propor expansão, mas já mapear quem são os stakeholders atuais para não perder o relacionamento na transição.

### O que o agente não deveria fazer
Propor expansão comercial imediatamente após o anúncio de fusão, ignorando a instabilidade natural do momento.
