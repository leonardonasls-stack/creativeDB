# ROPA — Registro de Operações de Tratamento de Dados Pessoais (Art. 37 LGPD)
**Modelo Simplificado da ANPD para Agentes de Tratamento de Pequeno Porte (ATPP — Res. CD/ANPD nº 2/2022)**

**Versão**: v1.0 (Draft para validação)  
**Data de Emissão**: 2026-10-24  
**Próxima Revisão Semestral**: 2027-04-24  

---

## 1. Informações de Contato do Agente de Tratamento
- **Controlador**: **CreativeBD** (Estúdio de Desenvolvimento de Sites, E-commerces e Soluções de CRM)
- **Enquadramento**: Agente de Tratamento de Pequeno Porte (ATPP — Resolução CD/ANPD nº 2/2022)
- **Canal de Comunicação com o Titular / Encarregado**: `privacidade@creativebd.com.br` *(placeholder configurável)* e atendimento direto via WhatsApp comercial oficial.

---

## 2. Registro Consolidado das Operações (Papel: Controlador)

| # | 1. Operação Realizada (Atividade + Finalidade + Base Legal) | 2. Categorias de Titulares | 3. Categorias de Dados Pessoais | 4. Compartilhamento de Dados | 5. Medidas de Segurança (Art. 46) | 6. Período de Armazenamento (Retenção) | 7. Observações |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **A001** | **Atendimento Pré-Contratual e Orçamento via WhatsApp**: Qualificar o pedido de orçamento no formulário da página e redirecionar os dados para o WhatsApp comercial da CreativeBD.<br>**Base Legal**: Art. 7º, V da LGPD (Procedimentos preliminares a contrato a pedido do titular). | Clientes prospectivos / representantes de empresas (Adultos). | **Dados Comuns**: Nome completo, nome da empresa, nicho de atuação, tipo de projeto desejado e telefone/WhatsApp.<br>**Dados Sensíveis**: Nenhum. | **WhatsApp LLC / Meta Platforms** (exclusivamente como canal de transmissão da mensagem iniciada pelo próprio titular). Nenhum compartilhamento com terceiros ou venda de listas. | Processamento *client-side* sem banco de dados exposto no site; HTTPS/TLS 1.3; Criptografia ponta a ponta no WhatsApp; 2FA ativo na conta comercial da CreativeBD. | **No site**: 0 dias (efêmero).<br>**No WhatsApp comercial**: Até 12 meses após o fim da negociação sem contratação, ou exclusão imediata a pedido do titular. | Fluxo construído com *Privacy-by-Design*: o titular vê a mensagem formatada no seu próprio WhatsApp antes de confirmar o envio. |
| **A002** | **Hospedagem Web e Segurança de Rede**: Disponibilizar a Landing Page na internet e proteger contra acessos maliciosos (DDoS).<br>**Base Legal**: Art. 7º, IX da LGPD (Legítimo Interesse / Segurança). | Visitantes do site. | **Dados Comuns**: Endereço IP, data/hora de acesso e navegador (`User-Agent`).<br>**Dados Sensíveis**: Nenhum. | Provedor de Hospedagem / CDN (Operador de infraestrutura). | HTTPS obrigatório, cabeçalhos de segurança e ausência de banco de dados na aplicação. | 7 a 30 dias nos logs técnicos do provedor de hospedagem. | Sem uso de cookies de rastreamento invasivos ou criação de perfis (*profiling*). |
