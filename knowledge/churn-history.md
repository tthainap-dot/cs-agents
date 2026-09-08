<!-- Alimentado pela skill RET-08 (retention/skills/post-churn-learning.md), a cada execução do comando retention:cancellation. -->
<!-- DIFERENTE de todos os outros arquivos de knowledge/: este é APPEND-ONLY (histórico acumulado), não estado atual da empresa. -->
<!-- Nunca usar nome real de cliente — usar identificador interno da conta. -->

# Histórico de Churn

Formato de cada entrada (mais recente primeiro, delimitada por `---`):

```
## [identificador interno da conta] — [data]

- Veredito: recuperado | não recuperado
- Causa: ...
- Sinais antecedentes observados: ...
- Falhas identificadas: ...
- Pontos controláveis: ...
- Pontos não controláveis: ...
- Oportunidades de prevenção: ...
- Sugestões — onboarding / ongoing / produto / processos: ...
```

---

*(nenhuma entrada registrada ainda — arquivo populado conforme casos reais de cancelamento forem processados via `retention:cancellation`)*
