# Template — Cronograma de Implantação

Referência de estrutura e tom para o output de ONB-07 (`onboarding/skills/implementation-timeline.md`). Orienta formato, não limita o raciocínio do agente.

## Formato tabela

| Etapa | O que acontece | Responsável | Prazo estimado | Critério de conclusão | Depende de |
|---|---|---|---|---|---|
| 1. ... | ... | Empresa / Cliente | ... | ... | — |
| 2. ... | ... | Empresa / Cliente | ... | ... | Etapa 1 concluída |

## Formato Mermaid (fluxo)

```mermaid
flowchart LR
    A[Etapa 1] --> B[Etapa 2]
    B --> C[Etapa 3 — First Value]
    C --> D[Handoff para Ongoing]
```

## Formato descritivo

Parágrafo corrido por etapa, em tom direto, citando responsável e prazo — usar quando o cliente prefere algo menos técnico que uma tabela ou diagrama.

## Regra de conteúdo (não é sobre formato, é sobre veracidade)

Todo prazo e toda etapa citados devem vir de `knowledge/onboarding-criteria.md` e `knowledge/sla.md` — nunca de um cronograma padrão genérico inventado na hora. Se a calibração da empresa não existir ainda, o cronograma deve dizer isso explicitamente, com etapas genéricas do framework Setup→Ativação→First Value (`common/knowledge/value-realization.md`) como fallback provisório.
