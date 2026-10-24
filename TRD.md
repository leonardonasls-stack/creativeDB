# TRD — Technical Requirements Document: Landing Page CreativeBD

**Projeto:** Landing Page Institucional & Captação de Leads — **CreativeBD**  
**Documento Relacionado:** `PRD.md` e `BRIEFING.md`  
**Data:** Outubro de 2026  
**Status:** Definido / Pronto para Implementação  

---

## 1. Visão Geral da Arquitetura
A aplicação será uma **Single Page Application (SPA) estática de alta performance**, construída sobre o ambiente **Node.js** utilizando **Vite + React (JavaScript ES6+) + Tailwind CSS**.  
Essa escolha garante um bundle final enxuto, carregamento instantâneo, manutenção descomplicada e **portabilidade total de hospedagem** (o build gera arquivos estáticos otimizados na pasta `dist/`, compatíveis com qualquer provedor de hospedagem ou CDN).

---

## 2. Stack Tecnológica Oficial

| Camada | Tecnologia | Versão / Padrão | Justificativa Técnica |
| :--- | :--- | :--- | :--- |
| **Runtime & Pacotes** | **Node.js + npm** | Node LTS (v20+) | Ambiente padrão para execução do bundler, scripts de build e gerenciamento de dependências. |
| **Bundler / Build Tool** | **Vite** | v5+ / v6+ | Hot Module Replacement (HMR) instantâneo em desenvolvimento e build de produção altamente otimizado (Rollup). |
| **Biblioteca UI** | **React** | v18+ / v19 | Componentização modular das seções (Hero, Soluções, Portfólio com Modal, Formulário e FAQ). |
| **Linguagem** | **JavaScript (ES6+ / JSX)** | ECMAScript Moderno | Agilidade de desenvolvimento, código limpo e zero sobrecarga de configuração. |
| **Estilização** | **Tailwind CSS** | v3.4+ / v4 | Estilização utilitária com tokens customizados da paleta *Estúdio Arquitetônico* (WCAG 2 AA/AAA) e purge automático de CSS não utilizado. |
| **Ícones** | **Lucide React** | `lucide-react` | Biblioteca de ícones SVG leves, acessíveis (`aria-hidden="true"`) e árvore-sacudível (*tree-shakeable*). |
| **Fontes Web** | **Google Fonts** | `Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono` | Carregadas com `preconnect` e `display=swap` no `index.html` para evitar bloqueio de renderização (FOIT). |

---

## 3. Estrutura de Diretórios do Projeto

```text
creativebd/
├── .lgpd/                          # Governança e Conformidade LGPD (Lei 13.709/2018 + Res. ANPD)
│   ├── STATUS.md                   # Estado atual da conformidade LGPD
│   ├── legal-basis.md              # Bases legais (Art. 7º, V e IX)
│   ├── data-map.md                 # Inventário de dados (Privacy-by-Design)
│   ├── ROPA.md                     # Registro de Operações simplificado (ATPP - Res. 2/2022)
│   ├── encarregado.md              # Canal de Privacidade (Res. 2/2022 Art. 11 e Res. 18/2024)
│   └── policies/
│       └── privacy-policy-v1.0-draft.md  # Aviso de Privacidade (Art. 9º e Art. 18)
├── public/
│   ├── favicon.svg                 # Ícone da marca CreativeBD em SVG (#A8431F)
│   └── portfolio/                  # Pasta dedicada aos prints reais dos projetos
│       ├── jangada-drone.webp      # Print do Case 1 (Passeios de Jangada & Drone)
│       └── quadriciclo.webp        # Print do Case 2 (Passeios de Quadriciclo)
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navegação fixa suave + Wordmark CreativeBD + CTA
│   │   ├── Hero.jsx                # Dobra principal + Headline + CTA + Preview visual
│   │   ├── Solutions.jsx           # Os 4 pilares (Landing Pages, Institucionais, E-commerce, CRM)
│   │   ├── Portfolio.jsx           # Galeria de Cases + Gatilho do Modal de visualização
│   │   ├── ImageLightbox.jsx       # Modal acessível (role="dialog", ESC para fechar) para os prints
│   │   ├── Method.jsx              # Os 4 passos da consultoria CreativeBD
│   │   ├── LeadForm.jsx            # Formulário qualificador integrado ao WhatsApp + Micro-aviso LGPD
│   │   ├── Faq.jsx                 # Acordeão acessível (aria-expanded)
│   │   ├── PrivacyModal.jsx        # Modal acessível do Aviso de Privacidade e Direitos do Titular (LGPD)
│   │   └── Footer.jsx              # Rodapé institucional + Link LGPD / Canal de Privacidade
│   ├── data/                       # Pasta de dados modulares (fácil edição de conteúdo)
│   │   ├── data.js                 # Agregador central que exporta todos os módulos de dados
│   │   ├── brandData.js            # Nome da marca, WhatsApp, e-mail LGPD, links do menu e rodapé
│   │   ├── heroData.js             # Textos, headline, subtítulo e CTAs da dobra principal
│   │   ├── solutionsData.js        # Os 4 pilares (Landing Pages, Institucionais, E-commerce, CRM)
│   │   ├── portfolioData.js        # Cases reais (Jangada/Drone, Quadriciclo, futuros projetos) e nichos
│   │   ├── methodData.js           # As 4 etapas do método consultivo
│   │   ├── formData.js             # Textos do formulário, opções de nichos e tipos de projeto
│   │   ├── faqData.js              # Perguntas e respostas frequentes
│   │   └── privacyData.js          # Conteúdo estruturado do Aviso de Privacidade (Art. 9º e 18 LGPD)
│   ├── utils/
│   │   └── whatsapp.js             # Função construtora e sanitizadora da URL wa.me
│   ├── App.jsx                     # Composição principal da Landing Page
│   ├── main.jsx                    # Ponto de entrada do React
│   └── index.css                   # Diretivas do Tailwind + Variáveis CSS + Regras de Foco WCAG
├── BRIEFING.md                     # Briefing estratégico aprovado
├── PRD.md                          # Requisitos de Produto e Acessibilidade WCAG 2
├── TRD.md                          # Este documento de Requisitos Técnicos
├── index.html                      # Template HTML raiz (Meta tags SEO, Open Graph, Fontes)
├── package.json                    # Dependências e scripts (dev, build, preview)
├── tailwind.config.js              # Tokens de cores e fontes do Design System
└── vite.config.js                  # Configuração do bundler Vite
```

---

## 4. Configuração de Design Tokens (Tailwind CSS & WCAG 2)

Os tokens de cores auditados no Item 5 do `PRD.md` serão mapeados diretamente no `tailwind.config.js` (ou `@theme` no `index.css`) para garantir consistência em todos os componentes:

```javascript
// Tokens de Cores Oficiais (Estúdio Arquitetônico — WCAG 2.1/2.2 AA & AAA)
colors: {
  brand: {
    bgPrimary: '#F4F1EA',        // Alabastro / Areia suave (Fundo principal)
    bgSecondary: '#EAE5DC',      // Pedra morna (Seções alternadas)
    surface: '#FAF8F5',          // Papel creme (Cards, inputs, texto sobre botão escuro)
    textPrimary: '#232220',      // Carvão quente (14.09:1 AAA)
    textSecondary: '#57534E',    // Cinza pedra escuro (6.76:1 AA/AAA)
    terracotta: '#A8431F',       // Destaque primário / Botões CTA (5.68:1 AA)
    terracottaHover: '#8F3617',  // Hover do CTA (7.12:1 AAA)
    forest: '#1E4D3B',           // Destaque secundário / CRM / Foco (8.54:1 AAA)
    borderSubtle: '#E2DDD2',     // Divisores decorativos
    borderControl: '#7D766D',    // Bordas de inputs e botões secundários (3.57:1 AA - WCAG 1.4.11)
  }
}
```

### Regras Globais de CSS (`src/index.css`)
- **Foco Visível Global (WCAG 2.4.7):**
  ```css
  *:focus-visible {
    outline: 2px solid #1E4D3B;
    outline-offset: 3px;
  }
  ```
- **Respeito à Redução de Movimento (WCAG 2.3.3):**
  ```css
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto !important;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 5. Especificação Técnica dos Módulos Principais

### 5.1. Arquitetura Modular de Dados (`src/data/`)
Para facilitar edições futuras nos textos principais sem precisar alterar o código JSX/Tailwind dos componentes, a pasta `src/data/` dividirá o conteúdo em sub-arquivos dedicados por seção, centralizados pelo arquivo agregador `src/data/data.js`:
- `src/data/brandData.js`: Nome da marca (`CreativeBD`), `whatsappNumber` (formato internacional, ex.: `"5582999999999"`), links de navegação do menu e informações de rodapé.
- `src/data/heroData.js`: Badge superior, headline principal, subtítulo explicativo, texto dos botões de CTA e selos de confiança.
- `src/data/solutionsData.js`: Cabeçalho da seção e array com os 4 pilares (*Landing Pages*, *Sites Institucionais*, *E-commerces* e *CRM Personalizado*).
- `src/data/portfolioData.js`: Cabeçalho da seção, array de projetos reais (*Passeios de Jangada & Drone*, *Passeios de Quadriciclo* e fácil expansão para novos cases como *Agência de Viagens*), com caminho do print em `/portfolio/...`, tags do projeto e lista de outros nichos atendidos (médicos, comércios locais, mercados).
- `src/data/methodData.js`: As 4 etapas do método consultivo da CreativeBD.
- `src/data/formData.js`: Textos de apoio da seção de orçamento, lista de sugestões de nichos e opções de tipo de projeto (`Site / Landing Page`, `E-commerce`, `Site + CRM Personalizado`, `Apenas CRM`).
- `src/data/faqData.js`: Lista de perguntas e respostas do acordeão.
- `src/data/privacyData.js`: Conteúdo em camadas do Aviso de Privacidade (Resumo TL;DR, os 7 elementos obrigatórios do Art. 9º da LGPD, Direitos do Titular do Art. 18 e Canal de Privacidade configurável).
- `src/data/data.js`: Reexporta todos os sub-arquivos acima (`export * from './brandData'` etc.), permitindo importar tudo de forma limpa a partir de um único ponto.

### 5.2. Motor de Redirecionamento para WhatsApp (`src/utils/whatsapp.js`)
- **Fluxo Client-Side (Zero Backend Dependency):**
  1. Recebe o objeto do formulário `{ fullName, companyName, niche, projectType }`.
  2. Realiza `trim()` e validação obrigatória dos 4 campos.
  3. Formata a string com quebras de linha e aplica `encodeURIComponent()` para evitar quebra de caracteres especiais ou acentos em navegadores iOS/Android/Desktop.
  4. Constrói a URL `https://wa.me/${brandData.whatsappNumber}?text=${encodedMessage}`.
  5. Dispara a abertura segura com `window.open(url, '_blank', 'noopener,noreferrer')`.

### 5.3. Componente de Portfólio & Lightbox de Prints (`Portfolio.jsx` + `ImageLightbox.jsx`)
- Como os 2 sites do portfólio ainda não sofreram deploy externo, cada card exibirá o print real dentro de um **Browser Mockup** em HTML/CSS.
- **Fallback Inteligente:** Caso o arquivo de imagem ainda não esteja na pasta `/public/portfolio/`, o componente renderiza automaticamente um preview visual estilizado com o selo `PRINT PRONTO PARA INSERÇÃO`, evitando imagens quebradas.
- **Modal Lightbox Acessível:** Ao clicar em "Ampliar Visualização do Projeto", abre um modal com:
  - `role="dialog"` e `aria-modal="true"`.
  - Fechamento via tecla `Escape`, botão de fechar (`min-w-[44px] min-h-[44px]`) ou clique no backdrop.
  - Bloqueio temporário do scroll do `body` enquanto o modal estiver aberto.

### 5.4. Módulo de Transparência & Privacidade LGPD (`PrivacyModal.jsx`)
- Atende aos requisitos de **Privacy-by-Design (Art. 46, § 2º)**, **Transparência (Art. 6º, VI e Art. 9º)** e **Direitos do Titular (Art. 18 da LGPD)** mapeados na pasta `.lgpd/`.
- **Gatilhos de abertura:** Link direto no micro-aviso abaixo do botão de envio do formulário (`LeadForm.jsx`) e link dedicado no rodapé (`Footer.jsx`).
- **Acessibilidade WCAG 2:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, fechamento com tecla `Escape` e retorno de foco ao botão acionador.
- **Zero Cookies Invasivos:** A aplicação não injeta rastreadores publicitários de terceiros, eliminando a necessidade de banners de cookies intrusivos que prejudiquem o LCP/CLS e a conversão mobile.

---

## 6. Performance, SEO & Qualidade (Requisitos Não-Funcionais)

1. **Metas no Google Lighthouse:**
   - **Performance:** ≥ 95 (Imagens em `.webp`/`.avif`, `loading="lazy"` abaixo da dobra e `fetchpriority="high"` na dobra principal).
   - **Accessibility (Acessibilidade):** 100 (100% aderente ao Item 5 do `PRD.md`).
   - **Best Practices:** 100 (Links externos com `rel="noopener noreferrer"`, zero erros no console).
   - **SEO:** 100 (Hierarquia única de `<h1>`, semântica HTML5 `<header>`, `<main>`, `<section>`, `<footer>`, meta description e tags Open Graph para compartilhamento bonito no WhatsApp/Instagram).
2. **Responsividade e Reflow:**
   - Testado nos breakpoints `320px` (WCAG Reflow), `390px` (Mobile moderno), `768px` (Tablet) e `1440px` (Desktop).
   - Uso de `overflow-x-hidden` no container raiz para impedir rolagem lateral indesejada.

---

## 7. Portabilidade de Build & Deploy (Agnóstico de Hospedagem)

Como o provedor de hospedagem será definido posteriormente, o projeto será configurado para ser **100% agnóstico de infraestrutura**:

- **Comando de Desenvolvimento:** `npm run dev` (Inicia servidor local Vite).
- **Comando de Produção:** `npm run build` (Gera a pasta estática `dist/` com HTML, CSS e JS minificados e com hash de cache).
- **Compatibilidade Garantida:**
  - **Plataformas Serverless/Edge (Vercel, Netlify, Cloudflare Pages):** Basta conectar o repositório Git; o comando `npm run build` e o diretório `dist` são detectados automaticamente.
  - **Hospedagem Tradicional / Compartilhada (Hostinger, cPanel, Locaweb) ou VPS (Nginx/Apache):** Basta fazer upload do conteúdo da pasta `dist/` gerada pelo build para a pasta `public_html` do servidor.
