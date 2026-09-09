# ONB-07 — Construir cronograma de implantação apresentável ao cliente

Skill nova (não prevista na especificação original) — diferencial pedido explicitamente: CSMs de onboarding normalmente montam um cronograma da implantação para apresentar ao cliente, seja em fluxo, desenhado ou escrito. Transforma o diagnóstico (ONB-01) + o mapeamento de First Value/Time to Value (ONB-02) num artefato de comunicação, não fica só interno ao CSM.

## Estrutura obrigatória do cronograma

Etapa → o que acontece → responsável (a empresa fornecedora ou o cliente — nome real vem de `knowledge/company-context.md`, nunca cravar um nome aqui) → prazo estimado → critério de conclusão da etapa → o que a próxima etapa depende.

## Formatos de saída (escolher conforme a situação, não travar num só)

- **Fluxo/diagrama:** Mermaid (`flowchart` ou `timeline`).
- **Texto estruturado:** tabela com etapa/responsável/prazo.
- **Descritivo/narrativo:** para quando um diagrama técnico não é o formato certo pro cliente.

## Regras

- O cronograma deve refletir o **Time to Value real esperado** (`knowledge/onboarding-criteria.md`) — nunca um cronograma genérico desconectado do que a empresa efetivamente entrega. Se `onboarding-criteria.md` estiver vazio/"Não informado", aplicar `common/knowledge/missing-data-protocol.md`: cronograma provisório com etapas genéricas (Setup → Ativação → First Value → Value Realization, ver `common/knowledge/value-realization.md`) e sinalizar explicitamente o que falta calibrar.
- Deve se adaptar ao **perfil de segmentação** da conta, se `knowledge/customer-segmentation.md` tiver essa calibração (ex.: onboarding self-service vs. guiado vs. acompanhamento variando por perfil).
- Reforça o "nunca deve" da persona: **nunca prometer prazo sem base** — todo prazo no cronograma precisa estar ancorado em `knowledge/onboarding-criteria.md`/`knowledge/sla.md`, nunca inventado na hora.

**Template de referência:** `templates/onboarding-timeline.md` — orienta formato e tom, não limita o raciocínio do agente.
