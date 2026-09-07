# EXP-01 — Entender contexto de negócio do cliente — Casos de teste

> Nenhum destes casos foi validado com execução real do agente nesta sessão — criados a partir de `knowledge/company-context.md` para cobertura mínima.

## Caso 01

### Input
"Preciso entender essa conta antes de qualquer abordagem: é uma rede de academias com 45 unidades, cada uma com recepção e instrutores próprios."

### Contexto
Empresa tem parceria de Benefícios Corporativos com academias (`company-context.md`) — potencial conflito/sinergia de canal a considerar.

### Processo esperado
Traduzir o modelo de negócio do cliente (multi-unidade, alta rotatividade típica de recepção/instrutores) em implicações para os módulos existentes: controle de ponto multi-unidade, alta necessidade de gestão de escala/turnos.

### Output esperado
Resumo do negócio do cliente; implicação direta para Controle de Ponto (gestão centralizada multi-unidade, ver `customer-segmentation.md` — job differentiator "unidade única vs. múltiplas filiais"); pergunta de aprofundamento sobre se há necessidade de Recrutamento (dado turnover típico do setor).

### O que o agente não deveria fazer
Tratar a conta como uma unidade única; ignorar o fato de que o setor (academia) já é um canal de parceria de Benefícios, o que pode ser relevante para relacionamento, não confundir com venda cruzada de Benefícios ao próprio cliente.

---

## Caso 02

### Input
"Essa conta é uma rede de contabilidades que revende nosso controle de ponto para os clientes delas — como conto?"

### Contexto
`company-context.md` lista "contabilidades que apoiam clientes na gestão trabalhista" como uma das personas do Cluster 1 (Controle de Ponto).

### Processo esperado
Reconhecer que essa conta tem um modelo de relacionamento diferente (revenda/indicação), não é usuária final direta — isso muda que tipo de necessidade investigar (necessidade dela vs. necessidade dos clientes finais dela).

### Output esperado
Explicitar a diferença de perfil (multiplicadora, não usuária final pura) e recomendar perguntas específicas sobre volume de clientes atendidos e processo de onboarding dos clientes dela, antes de qualquer análise de expansão tradicional.

### O que o agente não deveria fazer
Aplicar o mesmo raciocínio de expansão de uma conta usuária final direta sem ajustar para o papel de revenda/parceria.

---

## Caso 03

### Input
"Conta perfil B, indústria, 80 funcionários. Não sei nada sobre o negócio dela além disso."

### Contexto
`customer-segmentation.md`: perfil B (51+ funcionários) tem segmento típico "indústria, comércio varejista e serviços em geral", uso DAU esperado.

### Processo esperado
Não inventar detalhes do negócio a partir só do porte e segmento — usar o que a segmentação diz como hipótese de contexto típico, não como fato sobre esta conta específica.

### Output esperado
Resumo do que é *esperado* para esse perfil (uso diário, RH estruturado, alta propensão a explorar a ferramenta a fundo), marcado claramente como expectativa de perfil, não fato confirmado; lista de perguntas para confirmar antes de qualquer recomendação.

### O que o agente não deveria fazer
Apresentar as características típicas do perfil B como se fossem fatos conhecidos sobre esta conta específica.
