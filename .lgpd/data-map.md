# Mapa de Dados (Data Inventory) — CreativeBD

**Versão**: v1.0  
**Data**: 2026-10-24  
**Owner global**: Canal de Privacidade / Encarregado CreativeBD (`privacidade@creativebd.com.br` — *placeholder até criação do e-mail oficial*)

---

## Arquitetura Privacy-by-Design (Art. 46, § 2º da LGPD)
A Landing Page da **CreativeBD** foi projetada sob o princípio da **minimização de dados (Art. 6º, III — Necessidade)**:
1. **Zero Banco de Dados na Aplicação Web**: O site não armazena formulários em banco de dados próprio (SQL/NoSQL) nem mantém contas de usuários.
2. **Zero Cookies de Rastreamento Publicitário na v1.0**: Não há coleta oculta por pixels de retargeting ou cookies invasivos de terceiros.
3. **Processamento Efêmero Client-Side**: Os dados digitados no formulário de orçamento são processados exclusivamente na memória do navegador do próprio visitante (`src/utils/whatsapp.js`) para montar o link `https://wa.me/...` e redirecioná-lo ao aplicativo WhatsApp.

---

## Atividades de Tratamento Mapeadas

### A001 — Qualificação de Orçamento e Atendimento Comercial via WhatsApp

| Campo | Valor |
| :--- | :--- |
| **Slug** | `a001-orcamento-whatsapp` |
| **Finalidade** | Receber solicitação de diagnóstico/orçamento iniciada pelo titular e conduzir atendimento comercial personalizado. |
| **Base legal** | Art. 7º, V da LGPD — Procedimentos preliminares relacionados a contrato a pedido do titular ([detalhes](./legal-basis.md)). |
| **Categorias de titulares** | Potenciais clientes adultos (empreendedores, gestores de agências de turismo, médicos, comerciantes). **Flag Menores**: Não direcionado nem de acesso provável por crianças/adolescentes. |
| **Sensíveis?** | Não. |
| **Dados tratados** | Nome Completo, Nome da Empresa, Nicho de Atuação, Tipo de Solução (`Site`, `E-commerce` ou `CRM`) e Telefone/WhatsApp (no ato do envio no app). |
| **Fonte** | Coletado diretamente do titular no formulário da Landing Page (`LeadForm.jsx`). |
| **Sistemas que armazenam** | Memória volátil do navegador (efêmero, zero persistência em servidor web) → Aplicativo **WhatsApp Business** da CreativeBD. |
| **Operadores / Terceiros** | **WhatsApp LLC / Meta Platforms, Inc.** (Operador da infraestrutura de mensageria escolhida para o redirecionamento). |
| **Transferência internacional** | Sim — Infraestrutura global da Meta/WhatsApp (Art. 33 da LGPD + Resolução CD/ANPD nº 19/2024). |
| **Retenção** | Durante a negociação comercial + até 12 meses após inatividade (ou eliminação imediata se solicitada pelo titular — Art. 16). |
| **Medidas de segurança** | Tráfego 100% criptografado via HTTPS (TLS 1.3), criptografia ponta a ponta (E2EE) no WhatsApp, controle de acesso com autenticação em duas etapas (2FA) no dispositivo comercial da CreativeBD. |
| **Alto risco? (Res. 2/2022 Art. 4º)** | **Não** (Baixa escala, sem dados sensíveis, sem decisões automatizadas/profiling, sem vigilância ou menores). |
| **RIPD exigido?** | Não aplicável (baixo risco). |
| **Owner** | Administração CreativeBD. |

---

### A002 — Entrega de Conteúdo Estático e Logs de Segurança de Rede

| Campo | Valor |
| :--- | :--- |
| **Slug** | `a002-logs-infraestrutura` |
| **Finalidade** | Servir os arquivos estáticos da página (`dist/`) com segurança e mitigar ataques DDoS. |
| **Base legal** | Art. 7º, IX da LGPD — Legítimo Interesse / Segurança da Informação ([detalhes](./legal-basis.md)). |
| **Categorias de titulares** | Visitantes da Landing Page. |
| **Sensíveis?** | Não. |
| **Dados tratados** | Endereço IP, cabeçalhos HTTP básicos (`User-Agent`, timestamp). |
| **Fonte** | Observado automaticamente pelo servidor web/CDN na requisição HTTPS. |
| **Sistemas que armazenam** | Provedor de Hospedagem / CDN (a ser definido no deploy). |
| **Operadores / Terceiros** | Provedor de Cloud/CDN e Google Fonts (carregamento de tipografia sem cookies). |
| **Retenção** | 7 a 30 dias (rotação automática do provedor de infraestrutura). |
| **Alto risco? (Res. 2/2022 Art. 4º)** | **Não**. |
| **Owner** | Administração CreativeBD. |
