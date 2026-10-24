# CreativeBD — Landing Page Institucional & Captação de Leads

> **Estúdio consultivo de criação de Landing Pages de alta conversão, Sites Institucionais, E-commerces e sistemas de CRM sob medida.**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-19.x-blue.svg)]()
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg)]()
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.x-38B2AC.svg)]()
[![WCAG 2.1/2.2](https://img.shields.io/badge/WCAG-AA%20%26%20AAA-success.svg)]()
[![LGPD](https://img.shields.io/badge/LGPD-Compliant-1E4D3B.svg)]()

---

## 📖 Visão Geral

A **CreativeBD** combina estética editorial de alto padrão ("Estúdio Arquitetônico" — paleta acolhedora que não cansa a vista) com engenharia de dados sob medida. Desenvolvemos desde Landing Pages com carregamento instantâneo até painéis de CRM acoplados ao fluxo de atendimento real da operação.

### Principais Diferenciais:
- **Abordagem Consultiva**: Diagnóstico profundo antes do código, sem templates engessados.
- **Design Editorial & Acessibilidade**: Contrastes matematicamente auditados sob **WCAG 2.1/2.2 AA e AAA**, com tipografia refinada (*Instrument Serif*, *Plus Jakarta Sans* e *JetBrains Mono*).
- **Funil Direto para WhatsApp**: Formulário de qualificação client-side que formata a proposta e abre o WhatsApp comercial sem dependência de banco de dados no site.
- **Conformidade Nativa com a LGPD**: Privacy-by-Design, micro-aviso de transparência (Art. 7º, V) e modal em camadas dos direitos do titular (Art. 9º e 18).
- **Portabilidade Total**: Build estático otimizado (`dist/`), 100% agnóstico de infraestrutura (Vercel, Netlify, Cloudflare Pages, cPanel, Apache ou Nginx).

---

## 🎨 Paleta de Cores & Design Tokens

| Token | Código HEX | Razão de Contraste | Nível WCAG | Finalidade |
| :--- | :--- | :--- | :--- | :--- |
| `brand-bgPrimary` | `#F4F1EA` | Base suave | — | Fundo principal (Alabastro / Areia) |
| `brand-bgSecondary` | `#EAE5DC` | Base secundária | — | Seções alternadas e rodapé |
| `brand-surface` | `#FAF8F5` | Base de superfície | — | Cards, modais e inputs (Papel creme) |
| `brand-textPrimary` | `#232220` | **14.09:1** | **AAA** | Carvão quente para títulos e textos principais |
| `brand-textSecondary` | `#57534E` | **6.76:1** | **AA / AAA** | Cinza pedra escuro para parágrafos de apoio |
| `brand-terracotta` | `#A8431F` | **5.68:1** | **AA** | Destaque primário e botões de conversão CTA |
| `brand-forest` | `#1E4D3B` | **8.54:1** | **AAA** | Destaque secundário, foco de acessibilidade e CRM |
| `brand-borderControl` | `#7D766D` | **3.57:1** | **AA (1.4.11)** | Bordas obrigatórias de campos de formulário e botões |

---

## 🏗️ Estrutura do Repositório

```text
creativebd/
├── .lgpd/                          # Governança e Registros Oficiais LGPD (ATPP)
│   ├── STATUS.md                   # Resumo do pipeline de conformidade
│   ├── legal-basis.md              # Bases legais (Art. 7º, V e IX)
│   ├── data-map.md                 # Inventário e Privacy-by-Design
│   ├── ROPA.md                     # Registro de Operações de Tratamento
│   ├── encarregado.md              # Canal de atendimento ao titular
│   └── policies/                   # Políticas e avisos de privacidade
├── public/                         # Ativos públicos e favicon vetorial
│   ├── favicon.svg                 # Ícone da marca CreativeBD
│   └── portfolio/                  # Prints reais dos cases (Jangada e Quadriciclos)
├── src/
│   ├── components/                 # Componentes modulares da interface
│   │   ├── Header.jsx              # Navegação fixa + Wordmark + Menu Mobile
│   │   ├── Hero.jsx                # Dobra principal + Proposta de valor + CTA
│   │   ├── Solutions.jsx           # 4 pilares com destaque para CRM sob medida
│   │   ├── Portfolio.jsx           # Vitrine de cases com mockups e nichos
│   │   ├── ImageLightbox.jsx       # Modal acessível de visualização de prints
│   │   ├── Method.jsx              # Timeline das 4 etapas consultivas
│   │   ├── LeadForm.jsx            # Formulário qualificador + WhatsApp + LGPD
│   │   ├── Faq.jsx                 # Acordeão acessível de objeções frequentes
│   │   ├── PrivacyModal.jsx        # Modal acessível do Aviso de Privacidade LGPD
│   │   └── Footer.jsx              # Rodapé institucional e canal de privacidade
│   ├── data/                       # Camada de dados isolada (textos e configurações)
│   │   ├── brandData.js            # Contatos, WhatsApp e links
│   │   ├── heroData.js             # Textos e métricas da hero section
│   │   ├── solutionsData.js        # Detalhes das soluções e diferenciais
│   │   ├── portfolioData.js        # Cases reais e setores atendidos
│   │   ├── methodData.js           # Etapas do processo de consultoria
│   │   ├── formData.js             # Opções de formulário e micro-avisos
│   │   ├── faqData.js              # Perguntas e respostas
│   │   ├── privacyData.js          # Conteúdo estruturado do Aviso de Privacidade
│   │   └── data.js                 # Exportador centralizado
│   ├── utils/
│   │   └── whatsapp.js             # Construtor e codificador seguro do link wa.me
│   ├── App.jsx                     # Composição central da SPA
│   ├── index.css                   # Tailwind + Acessibilidade (Foco e Reduced Motion)
│   └── main.jsx                    # Ponto de entrada React
├── BRIEFING.md                     # Briefing comercial e técnico aprovado
├── PRD.md                          # Documento de Requisitos de Produto (WCAG 2)
├── TRD.md                          # Documento de Requisitos Técnicos
├── CHANGELOG.md                    # Histórico detalhado de versões
└── README.md                       # Esta documentação
```

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
- **Node.js** (v18 ou superior recomendado)
- **npm** (v9 ou superior)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leonardonasls-stack/creativeDB.git
   cd creativeDB
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em: `http://localhost:3000`

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais estáticos serão compilados na pasta `dist/`.

5. **Testar preview do build de produção:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Configurações Customizáveis

Todos os textos, links e dados da landing page podem ser alterados diretamente na pasta `src/data/`, sem necessidade de editar marcação JSX:

- **Número do WhatsApp Comercial**: Edite a propriedade `whatsappNumber` em `src/data/brandData.js` (utilize o padrão internacional sem traços, ex.: `"5582999999999"`).
- **Prints dos Projetos**: Insira os arquivos reais nas dimensões recomendadas em `public/portfolio/` (`jangada-drone.webp` e `quadriciclo.webp`). Se os arquivos não existirem, o fallback visual inteligente é exibido automaticamente.
- **Canal de Privacidade LGPD**: Altere o e-mail de contato em `src/data/brandData.js` e `src/data/privacyData.js`.

---

## 🔒 Conformidade LGPD & Governança

O projeto opera sob o modelo de **Agente de Tratamento de Pequeno Porte (ATPP)** da ANPD (Resolução CD/ANPD nº 2/2022):
- **Base Legal Principal**: Art. 7º, V da Lei 13.709/2018 (procedimentos preliminares a contrato a pedido do titular).
- **Sem Banco de Dados Oculto**: Os dados digitados no formulário são concatenados na mensagem enviada pelo próprio usuário ao WhatsApp.
- **Zero Cookies Intrusivos**: Sem pixels invasivos de publicidade de terceiros.
- Documentação formal e registros disponíveis na pasta [`.lgpd/`](./.lgpd/STATUS.md).

---

## 📄 Licença

Este projeto é desenvolvido para **CreativeBD**. Todos os direitos reservados.
