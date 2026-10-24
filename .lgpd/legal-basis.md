# Bases Legais por Atividade de Tratamento — CreativeBD

**Última atualização**: 2026-10-24  
**Regime Aplicável**: Agente de Tratamento de Pequeno Porte (ATPP — Resolução CD/ANPD nº 2/2022)

---

## Atividade A001: Solicitação de Diagnóstico e Orçamento via Formulário (Redirecionamento WhatsApp)

- **Finalidade**: Permitir que o potencial cliente qualifique sua demanda comercial (nome, empresa, nicho e tipo de projeto) na Landing Page e inicie imediatamente a conversa no WhatsApp comercial da CreativeBD para recebimento de proposta sob medida (Art. 6º, I da LGPD).
- **Dados tratados**:
  - Nome Completo (dado pessoal comum)
  - Nome da Empresa (dado corporativo / pessoal indireto se MEI/autônomo)
  - Nicho de Atuação (dado contextual comercial)
  - Tipo de Solução Desejada (`Site`, `E-commerce` ou `CRM`)
  - Número de telefone/WhatsApp do titular (compartilhado pelo próprio titular ao enviar a mensagem no app WhatsApp)
- **Sensíveis?**: Não (Art. 5º, II da LGPD).
- **Base legal**: **Art. 7º, inciso V da LGPD** — *Execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados*.
- **Justificativa**: O preenchimento do formulário e o clique no botão de envio partem exclusivamente da iniciativa do próprio titular com o objetivo direto de obter um orçamento/proposta comercial para contratação dos serviços da CreativeBD. Não se utiliza a base de "Consentimento" (Art. 7º, I) para evitar cláusula armadilha de consentimento forçado como condição para atendimento pré-contratual.
- **LIA (Legitimate Interest Assessment)**: Não aplicável (base legal é o Art. 7º, V).
- **Retenção**:
  - **Na Landing Page (Navegador)**: Retenção **zero** em servidor próprio (processamento 100% *client-side* em memória volátil do navegador para geração do link `wa.me`).
  - **No WhatsApp Comercial / Atendimento**: Armazenado pelo período da negociação pré-contratual e, caso não haja fechamento de contrato, eliminado após **12 meses** de inatividade comercial (Art. 15 e Art. 16 da LGPD), ou imediatamente mediante solicitação do titular.
- **Revogação / Oposição possível?**: O titular pode solicitar a eliminação ou encerramento das tratativas comerciais a qualquer momento pelo Canal de Privacidade ou no próprio WhatsApp (Art. 18, VI da LGPD).
- **Última revisão**: 2026-10-24

---

## Atividade A002: Logs Técnicos de Conexão e Segurança da Hospedagem

- **Finalidade**: Garantir a entrega técnica das páginas estáticas (HTML/CSS/JS), estabilidade de rede (CDN) e prevenção contra ataques automatizados (DDoS/abuso) pelo provedor de infraestrutura/hospedagem (Art. 6º, VII e VIII da LGPD).
- **Dados tratados**: Endereço IP, Data/Hora da requisição, User-Agent (navegador/sistema operacional).
- **Sensíveis?**: Não.
- **Base legal**: **Art. 7º, inciso IX da LGPD** — *Legítimo interesse do controlador* (apoio e promoção de atividades com segurança técnica, c/c Art. 10 da LGPD).
- **Justificativa**: Estritamente necessário para o funcionamento do protocolo HTTP/HTTPS na internet e proteção da disponibilidade do site institucional, sem qualquer criação de perfil comportamental (*profiling*) ou rastreamento publicitário do visitante.
- **Retenção**: Ciclo padrão de rotação de logs efêmeros do provedor de hospedagem/CDN (geralmente entre 7 e 30 dias), sem armazenamento permanente pela CreativeBD.
- **Última revisão**: 2026-10-24
