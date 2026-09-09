# Skill: Elicitação Faseada da Base de Conhecimento

Questionário de 31 perguntas, em 5 fases. Cada fase termina com um resumo de confirmação antes de gravar os arquivos de `knowledge/` correspondentes.

## Fase 1 — Negócio → grava `knowledge/company-context.md` + `knowledge/business-model.md`

1. Qual o modelo de negócio da empresa (SaaS, marketplace, serviço, licenciamento, etc.)?
2. Qual mercado e segmento vocês atendem?
3. Quais produtos/serviços a empresa oferece?
4. Qual o modelo de cobrança (assinatura, uso, híbrido) e o ticket médio?
5. Qual o ciclo de vendas típico e o ciclo de renovação (mensal, anual, plurianual)?
6. Quais são as principais personas de cliente que vocês atendem?
7. Quais os principais problemas que o produto resolve para o cliente?
8. Quais os diferenciais competitivos e os principais concorrentes?
9. Qual a estratégia atual da empresa (crescimento, retenção, expansão internacional, etc.)?

## Fase 2 — Customer Success → grava `knowledge/customer-segmentation.md`, `metrics.md`, `health-score.md`, `commercial-rules.md`, `sla.md`, `escalation.md`

10. Como o time de CS está estruturado (modelo, papéis, senioridades)? *(também alimenta `knowledge/team-structure.md`)*
11. Como as carteiras são divididas entre CSMs? *(também alimenta `knowledge/team-structure.md`)*
12. Qual o critério de segmentação de clientes (porte, MRR, potencial, etc.)?
13. Qual o critério de priorização de contas hoje?
14. As responsabilidades mudam por senioridade (Jr/Pleno/Sênior)? Como? *(também alimenta `knowledge/team-structure.md`)*
15. Quais são as metas do time de CS e os indicadores acompanhados?
16. Como o Health Score é calculado hoje (se existir)?
17. Qual a definição oficial de churn na empresa?
18. Qual a definição oficial de expansão?
19. Quais são as regras de renovação?
20. Existem SLAs formais? Quais?
21. Existem políticas comerciais (desconto, condição especial) que o agente precisa respeitar?
22. Quais são os critérios de escalonamento (quando e para quem escalar)?

## Fase 3 — Jornada → grava `knowledge/customer-journey.md`

23. Quais são as etapas da jornada do cliente na empresa (onboarding, ativação, adoção, entrega de valor, ongoing, renovação, expansão, advocacy, churn)? Alguma etapa tem nome ou critério diferente do genérico?

## Fase 4 — Operação → grava `knowledge/team-structure.md` + `knowledge/tools-operations.md`

24. Quais ferramentas/sistemas o time usa (CRM, plataforma de atendimento, sistemas de dados)?
25. Quais canais de comunicação são usados com o cliente?
26. Já existem automações ou réguas de comunicação hoje? Quais?
27. Como são os processos internos relevantes (ex.: como uma oportunidade de expansão é registrada e passada adiante)?

## Fase 5 — Value Realization & Onboarding → grava `knowledge/onboarding-criteria.md`

28. O que conta como **First Value** — o primeiro momento em que o cliente realmente percebe resultado (não apenas terminou configuração/login)? Isso varia por módulo/produto contratado?
29. Qual o **Time to Value** esperado — quanto tempo até o cliente típico chegar nesse First Value?
30. Além do prazo de SLA (`knowledge/sla.md`), o que precisa estar **verdadeiro** para considerar o onboarding concluído / pronto para handoff?
31. Como a empresa diferencia **"produto funcional"** (setup técnico ok) de **"cliente preparado"** (adoção real)?

## Regra de escrita

O agente tem acesso às ferramentas de arquivo do próprio cliente MCP (Write/Edit). Ao final de cada fase confirmada pelo usuário, escrever/atualizar os arquivos correspondentes. Nunca inventar conteúdo para pergunta não respondida — gravar `Não informado`.
