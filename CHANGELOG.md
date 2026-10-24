# Changelog

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [1.0.0] - 2026-10-24

### Adicionado
- **Arquitetura Base**:
  - Inicialização do projeto SPA estático com **Vite 8**, **React 19** e **Tailwind CSS 3.4**.
  - Configuração do pipeline de build otimizado gerando arquivos estáticos para a pasta `dist/`.
  - Configuração de `.gitignore` para ambientes Node.js e ferramentas modernas.
- **Design System & Acessibilidade**:
  - Implementação da paleta de cores *Estúdio Arquitetônico* auditada segundo **WCAG 2.1/2.2**:
    - Fundo Alabastro (`#F4F1EA`), Pedra Morna (`#EAE5DC`) e Superfície Creme (`#FAF8F5`).
    - Texto Carvão Quente (`#232220` — Contraste **14.09:1 AAA**).
    - Texto Secundário (`#57534E` — Contraste **6.76:1 AA/AAA**).
    - Terracota Profundo (`#A8431F` — Contraste **5.68:1 AA**) e Terracota Tostado (`#8F3617` — **7.12:1 AAA**).
    - Verde Floresta (`#1E4D3B` — Contraste **8.54:1 AAA**).
    - Bordas de controles (`#7D766D` — **3.57:1 AA** para conformidade WCAG 1.4.11).
  - Tipografia editorial integrada via Google Fonts: *Instrument Serif*, *Plus Jakarta Sans* e *JetBrains Mono*.
  - Regras globais de foco visível (`*:focus-visible`) e respeito a preferências de movimento reduzido (`prefers-reduced-motion: reduce`).
  - Ícone de favicon vetorial da marca em SVG (`public/favicon.svg`).
- **Camada Modular de Dados (`src/data/`)**:
  - Isolamento de textos e configurações em arquivos independentes: `brandData.js`, `heroData.js`, `solutionsData.js`, `portfolioData.js`, `methodData.js`, `formData.js`, `faqData.js` e `privacyData.js`, exportados através de `data.js`.
- **Componentes de Interface**:
  - `Header`: Navegação fixa suave com Wordmark autoral CreativeBD, links de âncoras e menu responsivo mobile.
  - `Hero`: Apresentação da proposta de valor, headline editorial, badges e composição visual de mockup.
  - `Solutions`: Apresentação dos 4 pilares de atuação com card destacado para o diferencial de **CRM Sob Medida**.
  - `Portfolio`: Galeria de cases com visualizadores de prints reais (Jangada & Fotos com Drone; Passeios de Quadriciclo) e grade de setores de mercado atendidos.
  - `ImageLightbox`: Modal acessível com suporte a navegação por teclado (`Escape`), bloqueio de scroll de fundo e fallback elegante para a fase pré-deploy dos prints.
  - `Method`: Linha do tempo editorial detalhando as 4 fases da consultoria.
  - `LeadForm`: Formulário interativo de diagnóstico rápido com validação de campos e seletor dinâmico de soluções.
  - `Faq`: Acordeão acessível de perguntas e respostas com controle de expansão (`aria-expanded`).
  - `PrivacyModal`: Modal acessível em duas camadas apresentando o Aviso de Privacidade e Direitos do Titular da LGPD.
  - `Footer`: Rodapé com resumo institucional, links rápidos, direitos autorais e botão de retorno ao topo.
- **Utilitários**:
  - `src/utils/whatsapp.js`: Sanitizador e formatador client-side de propostas para direcionamento direto à URL `https://wa.me/` com codificação segura de caracteres especiais.
- **Governança & LGPD**:
  - Micro-aviso transparente no formulário referenciando a base legal do Art. 7º, V da LGPD.
  - Mapeamento completo dos requisitos de ATPP (Resolução CD/ANPD nº 2/2022) registrado nos artefatos da pasta `.lgpd/`.
- **Documentação do Projeto**:
  - Criação do `BRIEFING.md`, `PRD.md` e `TRD.md`.
  - Criação do `README.md` abrangente com guia de instalação, paleta de cores e estrutura de diretórios.
