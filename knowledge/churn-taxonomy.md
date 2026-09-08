<!-- Populado a partir da taxonomia oficial de motivos de churn da empresa (fornecida diretamente pelo stakeholder). -->
<!-- Arquivo novo, não previsto na especificação original — referência para RET-01 (diagnóstico) e RET-04 (padrões). -->

# Taxonomia Oficial de Motivos de Churn

Classificação em Macro Motivo → Micro Motivo, usada para categorizar toda solicitação de cancelamento. Ao diagnosticar causa (RET-01) ou cruzar padrões de carteira (RET-04), classificar sempre dentro desta taxonomia — não inventar categoria própria.

## Resistência à mudança

- **Colaboradores relatando dificuldades no uso da ferramenta:** colaboradores enfrentam desafios na adaptação, não conseguem utilizar de maneira correta e optam por não realizar os registros, encaminhando feedbacks negativos aos gestores.
- **Gestores/administradores contrários ao uso da ferramenta:** entendem que a ferramenta não será necessária, não traz eficiência, não atende as necessidades, não defendem o uso do sistema.
- **Desafios técnicos:** questões técnicas relacionadas ao uso e ao comportamento são os fatores de insatisfação; houve manifestação de necessidade de recursos adicionais (melhorias).
- **Cultura organizacional resistente:** ações e regras internas influenciam as decisões e como os funcionários são orientados em relação ao uso da ferramenta; adotam medidas contrárias às práticas ideais.
- **Não há adaptação:** funcionários e administradores encontram barreiras de entendimento/utilização da tecnologia, além de práticas inadequadas adotadas anteriormente.

## Decisões Gerenciais

- **Sem tomada de decisão:** os interessados na ferramenta não têm poder de decisão; a importância da ferramenta não é considerada para a permanência no uso.
- **Encerramento da empresa:** a empresa foi encerrada — não existe mais necessidade da ferramenta ativa.
- **Falta de envolvimento dos stakeholders:** os interessados não participam das interações com a MarQ, então os resultados/benefícios/valor não são "vistos".
- **Mudança nas políticas internas:** regras/regimento/convenção da empresa mudaram, descontinuando o uso.
- **Mudanças estratégicas:** direcionamento estratégico mudou — pode envolver troca de decisores, adoção de outro método de controle de jornada, ou outra ferramenta em sinergia com práticas já adotadas.

## Insuficiência do produto

> **Diferente de "Insatisfação com o Produto" abaixo** — aqui o problema é o produto não ter a funcionalidade certa (gap de escopo), não a qualidade/estabilidade do que já existe.

- **Product Bad Fit:** empresa contratou para executar funções que o produto não está preparado para atender.
- **Falta de recursos ou funcionalidades:** o sistema não ofertava as funcionalidades necessárias, sendo necessário repasse de melhorias (pipeline de produto).
- **Desconhece os usos/processos corretos do produto:** não usa/não foi orientado a usar funcionalidades que resolveriam total ou parcialmente os problemas apresentados — **isto é falha de adoção/onboarding, não gap real de produto**.
- **Divergência de expectativas:** o produto não ofertou soluções de desempenho como a empresa precisava.

## Insatisfação com o Produto

> Diferente de "Insuficiência" — aqui a funcionalidade existe, mas a qualidade/confiabilidade/experiência de uso decepciona.

- **Problemas de desempenho:** instabilidade recorrente, falhas, lentidão e/ou processamento de páginas.
- **Insegurança com a ferramenta:** comportamentos incomuns e/ou alterações no sistema não reconhecidas pelo administrador geram desconfiança.
- **Experiência do usuário (UX) ruim:** sistema não intuitivo/prático, exige muito esforço dos envolvidos.

## Financeiro

- **Corte de gastos:** necessidade de reduzir custos e despriorizar ferramentas.
- **Redução no quadro de funcionários:** empresa reduziu headcount por questões financeiras, ficando abaixo do obrigatório para controle de jornada (ver "Fatores externos" — limiar de 20 funcionários).
- **Insatisfação com o modelo de cobrança:** impasse com os processos internos de cobrança da MarQ.
- **Poder de barganha do concorrente:** valores de concorrente mais atrativos que o negociável pela MarQ.
- **Preço:** valor do plano não cabe no orçamento do cliente, considera alto e não é possível aplicar desconto.

## Atendimento

- **Suporte insuficiente:** assistência/orientação não conclusiva, comunicação não clara.
- **Tipo de canal de atendimento insatisfatório:** formato de atendimento recebido não satisfaz o cliente, que pede recorrentemente outro formato não ofertado.
- **Demora no retorno durante o atendimento:** tempo de resposta não satisfatório.
- **Demora no retorno de tickets abertos:** prazo de retorno/acompanhamento/conclusão de ticket muito longo.
- **Resolução ineficiente de problemas:** retornos insatisfatórios, não resolvem na raiz, geram novos atendimentos sobre o mesmo assunto.

## Desinteresse

- **Expectativas não atendidas:** compreensão equivocada das soluções durante o processo de vendas; funcionalidades não entregues como esperado inicialmente.
- **Falta de compreensão dos benefícios:** não enxergou valor no produto.
- **Não adoção da ferramenta:** não concluiu tarefas/configurações iniciais, nunca ativou o sistema pra um uso ideal.
- **Abandono:** deixou de utilizar por completo — sem acesso de admin/gestores, sem marcação de ponto, funcionalidades básicas não usadas.
- **Ausência de necessidade de uso, preferem controle manual:** empresa não se encaixa nas obrigatoriedades de controle de jornada (por quantidade de funcionários ou regulamento próprio) e opta por cartão/planilha.

## Fatores externos

- **Diferenciais da concorrência:** concorrente oferece funcionalidade/solução/parceria que a MarQ não atende.
- **Fusão e incorporação com outra empresa:** empresa passou a integrar outro grupo e seguiu com os fornecedores da nova organização.
- **Uso da ferramenta não é obrigatório:** ⚠️ **empresa com menos de 20 funcionários — por lei brasileira, não há obrigatoriedade de sistema de controle de jornada.** Ver nota crítica abaixo.
- **Sem demandas de serviços a serem prestados:** modalidade de prestação de serviços/sazonal, sem contrato ativo nem funcionários contratados no momento.
- **Mudanças na legislação:** novo decreto/lei/norma retira a necessidade de controle de jornada para aquela empresa.

---

## Nota crítica para RET-02 (tática de risco de compliance)

O limiar de **20 funcionários** acima é o corte legal de obrigatoriedade de controle de jornada no Brasil. Isso significa que a tática de "risco de compliance/regulatório" (`recovery-plan.md`) **só é factualmente correta para contas com 20+ funcionários**. Para contas abaixo desse limiar, não existe obrigatoriedade legal — apresentar risco legal nesses casos seria uma afirmação falsa, violando a regra de nunca inventar informação. Ver correção aplicada em `retention/skills/recovery-plan.md`.
