# RET-08 — Aprendizado pós-churn

Ao final de todo fluxo de `cancellation` (independente do veredito ser "recuperado" ou "não recuperado"), produzir:

- causa;
- sinais antecedentes observados (RET-06);
- falhas identificadas;
- pontos controláveis vs. não controláveis;
- oportunidades de prevenção;
- alterações sugeridas em onboarding/ongoing/produto/processos.

**Esta é a única skill do Retention Agent que gera conhecimento novo, não só lê `knowledge/`.** Ao concluir a análise, o cliente MCP (que adota esta persona) deve anexar uma entrada em `knowledge/churn-history.md`, seguindo o formato definido no cabeçalho daquele arquivo — nunca sobrescrever entradas anteriores, sempre anexar (append-only), mais recente primeiro. Nunca usar o nome real do cliente — usar identificador interno da conta, mesma decisão de privacidade já aplicada em `knowledge/customer-segmentation.md`.
