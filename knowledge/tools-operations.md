<!-- Populado por setup:onboarding (Fase 4 — Operação). Perguntas 24,25,26,27. Arquivo novo, não previsto na especificação original. -->

# Ferramentas e Operação

## Ferramentas/sistemas (24)

- **CRM:** sistema próprio da empresa (não é CRM de terceiros).
- **Planilhas** (uso intenso, apesar do CRM próprio): uma para Onboarding, uma para Ongoing (com as carteiras), uma para upsell/cross, uma para renovações, uma para churn.
- **Chat:** ferramenta de chat desenvolvida internamente.
- **Atendimento (WhatsApp):** Octadesk (usado especificamente para WhatsApp de renovações) + WhatsApp Business (demais etapas).

## Canais de comunicação com o cliente (25)

- WhatsApp (via Octadesk para renovação, via WhatsApp Business para as demais etapas).
- Chat interno (ferramenta própria).

## Automações existentes (26)

- **n8n:** automações operacionais do time de CS (ex.: landing page de expansão → planilha, ver processo abaixo).
- **RD (RD Station):** automações de comunicação, mas de responsabilidade do time de **Marketing**, não do CS diretamente.

## Processos internos relevantes (27)

**Registro de oportunidade de expansão** — dois caminhos possíveis:
1. Cliente preenche uma landing page (LP) → automação n8n joga a informação na planilha de upsell/cross.
2. Cliente preenche diretamente no painel admin do sistema próprio da empresa (produto "Marq"), seguindo regras estipuladas pela área.

**Regra de atribuição de dono da oportunidade:**
- Se a conta já tem dono de carteira definido, **quem é dono da carteira recebe a negociação**.
- Se **não tem dono** definido **e** a oportunidade não está dentro da janela de 30 dias antes/depois da renovação, ela cai numa **fila de CSM que gira** (distribuição rotativa entre o time).
