# LGPD Audit Status — CreativeBD

**Projeto**: Landing Page Institucional & Captação de Leads — CreativeBD  
**Cenário**: A (Greenfield — Privacy-by-Design desde a concepção)  
**Enquadramento**: Agente de Tratamento de Pequeno Porte (ATPP — Resolução CD/ANPD nº 2/2022, Baixo Risco)  
**Início**: 2026-10-24  
**Última atualização**: 2026-10-24  
**Canal de Privacidade / Encarregado**: Equipe CreativeBD (`privacidade@creativebd.com.br` — *placeholder até criação do e-mail oficial*)

---

## Pipeline Greenfield Adaptado (SPA Estática sem Banco de Dados)
- [x] **F0 — Setup `.lgpd/`** ✓
- [x] **F1 — Legal Basis (`lgpd-legal-basis`)** ✓
  - 2 atividades mapeadas (`A001` Orçamento via WhatsApp sob Art. 7º, V; `A002` Logs de Segurança CDN sob Art. 7º, IX).
- [x] **F2 — Data Mapping (`lgpd-data-mapping`)** ✓
  - Inventário concluído: zero banco de dados, zero dados sensíveis, zero menores, zero alto risco.
- [x] **F4 — Privacy Policy (`lgpd-privacy-policy`)** ✓
  - Draft v1.0 gerado com os 7 elementos obrigatórios do Art. 9º + direitos do Art. 18.
- [x] **F10 — ROPA Simplificado ATPP (`lgpd-ropa`)** ✓
  - Registro de Operações estruturado nos 8 campos oficiais da ANPD para ATPP.
- [x] **F11 — Canal de Privacidade / Encarregado (`lgpd-dpo-encarregado`)** ✓
  - Enquadramento no Art. 11 da Res. 2/2022 + Canal de Comunicação documentado.

---

## Artefatos Gerados e Aprovados em `.lgpd/`
- [`.lgpd/legal-basis.md`](./legal-basis.md) — v1.0 (Aprovado), 2026-10-24
- [`.lgpd/data-map.md`](./data-map.md) — v1.0 (Aprovado), 2026-10-24
- [`.lgpd/ROPA.md`](./ROPA.md) — v1.0 (Aprovado), 2026-10-24
- [`.lgpd/encarregado.md`](./encarregado.md) — v1.0 (Aprovado), 2026-10-24
- [`.lgpd/policies/privacy-policy-v1.0.md`](./policies/privacy-policy-v1.0.md) — v1.0 (Aprovado), 2026-10-24

---

## Pendências Operacionais antes do Deploy Público
1. Substituir o placeholder `privacidade@creativebd.com.br` em `src/data/privacyData.js` e nos arquivos `.lgpd/` pelo e-mail real assim que for criado.
2. Revisar e aprovar o texto do Aviso de Privacidade (`privacy-policy-v1.0-draft.md`).
