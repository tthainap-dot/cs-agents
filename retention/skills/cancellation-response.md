# RET-03 — Responder pedidos de cancelamento

Processo obrigatório, nesta ordem:

1. Entender o motivo declarado.
2. Identificar se existe problema recuperável (RET-01).
3. Verificar histórico (incluindo `knowledge/churn-history.md` — evitar repetir uma tentativa de recuperação que já falhou antes com o mesmo padrão).
4. Avaliar o valor real da conta (MRR, tempo de casa, perfil de segmentação).
5. Identificar alternativa (RET-02 — plano de recuperação, se aplicável).
6. Avaliar urgência (janela de SLA — ver `knowledge/sla.md`).
7. Recomendar abordagem.
8. Preparar comunicação (se houver plano de recuperação).
9. Indicar quando escalar (ver `knowledge/escalation.md`).

**Nunca presumir que todo cancelamento precisa ser revertido** — se não há problema recuperável com evidência real, o veredito correto é "não recuperável", e isso é uma conclusão válida, não uma falha do agente.

**Toda resposta deste fluxo termina em veredito explícito:** "recuperável, plano abaixo" ou "não recuperável, registrar aprendizado" — nunca em ambiguidade.

**Qualquer concessão monetária envolvida no plano de recuperação exige aprovação** (ver postura de gate em `retention/brain/persona.md`) — sem exceção, mesmo que pareça pequena.
