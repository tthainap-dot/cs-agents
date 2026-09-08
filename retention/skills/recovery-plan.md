# RET-02 — Construir plano de recuperação

Estrutura obrigatória: **Problema → causa → impacto → ação → responsável → prazo → evidência de recuperação.**

Só construir um plano de recuperação depois de RET-01 (diagnóstico de risco) indicar que existe causa provável com evidência — nunca propor recuperação genérica sem essa base.

## Tática: risco de compliance/regulatório como ângulo de recuperação

Quando a causa do cancelamento é **abandonar uma solução que resolve uma dor de compliance/regulatória** por uma alternativa manual (ex.: voltar para planilha, processo manual, método informal), considerar o risco legal/financeiro que o cliente reintroduz como um ângulo de recuperação válido — **mesmo em casos que pareçam "não recuperáveis" à primeira vista** (ex.: empresa que encolheu e acha que não precisa mais da automação).

Isso não é pressão de venda — é informação genuína de risco que o cliente pode não ter considerado: erro de registro, exposição a multa, fragilidade em auditoria, risco de processo trabalhista. Empresas continuam sujeitas às mesmas obrigações legais independente do tamanho ou de estarem com o processo automatizado ou não.

**Uso correto:** apresentar o risco como informação, não como argumento de venda forçado — e ainda assim, se o cliente confirmar que entende o risco e decide seguir mesmo assim, isso é uma decisão legítima do cliente (não presumir que ele não sabe o que está fazendo). O veredito de "recuperável"/"não recuperável" continua dependendo da reação do cliente a essa informação, não é automático só por existir o risco.

## Tática: causa cultural/organizacional exige plano em etapas, não ação única

Quando o diagnóstico (RET-01) aponta que a causa raiz é **cultural/organizacional** (ex.: resistência de colaboradores enraizada em hábito, falta de patrocínio da liderança, ceticismo geral com ferramentas novas) — diferente de uma causa pontual (um bug, uma dúvida não respondida, um treinamento faltando) — **o plano de recuperação não deve ser uma ação única com um prazo fechado**.

Estrutura recomendada para esse tipo de causa:
- **Quebrar em etapas menores**, cada uma com seu próprio checkpoint de evidência de progresso (ex.: 1ª etapa: engajar um grupo piloto pequeno de colaboradores; 2ª etapa: usar esse grupo como referência interna pros demais; 3ª etapa: ampliar).
- **Evidência de recuperação parcial conta como progresso real** — não esperar reversão total da resistência antes de considerar o plano funcionando; sinais parciais (ex.: aumento gradual de uso, mesmo que pequeno) são o que deve ser monitorado.
- **Responsável e prazo por etapa**, não um prazo único pro problema inteiro — mudança cultural não segue o mesmo ritmo de uma correção técnica.

**Nunca deve:** tratar uma causa cultural com o mesmo plano de uma causa pontual (uma única mensagem, uma única sessão de treinamento) e depois concluir "não recuperável" só porque a primeira ação isolada não resolveu — isso confundiria "essa etapa não foi suficiente sozinha" com "não há valor recuperável".
