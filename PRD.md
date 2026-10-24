# PRD — Product Requirements Document: Landing Page CreativeBD

**Produto:** Landing Page Institucional & Captação de Leads — **CreativeBD**  
**Data:** Outubro de 2026  
**Status:** Aprovado  

---

## 1. Visão Geral do Produto
A **CreativeBD** é um estúdio de tecnologia e design focado no desenvolvimento de **Landing Pages de alta conversão, Sites Institucionais, E-commerces e sistemas de CRM personalizados**.  
O objetivo deste produto é construir a página oficial de vendas e posicionamento da marca, combinando uma estética editorial aconchegante ("Estúdio Arquitetônico", que não cansa a vista) com um funil de qualificação direta via WhatsApp.

---

## 2. Objetivos de Negócio & Métricas de Sucesso
1. **Captar Leads Qualificados:** Direcionar visitantes interessados para o WhatsApp comercial já com os dados essenciais preenchidos (Nome, Empresa, Nicho e Tipo de Projeto).
2. **Demonstrar Autoridade Prática:** Exibir de forma visual e tangível os projetos já realizados (Agência de Passeios de Jangada/Drone e Agência de Passeios de Quadriciclo), mesmo antes do deploy público desses clientes, através de mockups de alta qualidade com os prints reais.
3. **Posicionar o Diferencial de CRM + Consultoria:** Deixar claro que a CreativeBD não vende templates engessados, mas realiza diagnóstico por entrevista e entrega desde o site até o CRM sob medida para a operação do cliente.
4. **Versatilidade de Nichos:** Comunicar que, além da forte experiência com Turismo & Passeios, a agência atende médicos/clínicas, comércios locais, mercados e prestadores de serviços.

---

## 3. Público-Alvo (Personas)
| Persona | Características | Dor Principal | Como a CreativeBD Resolve |
| :--- | :--- | :--- | :--- |
| **1. Agências de Turismo & Experiências** | Passeios de jangada, quadriciclo, receptivos, viagens, fotografia com drone. | Dependem apenas do Instagram ou indicação; perdem reservas por falta de página profissional e controle de agenda/leads. | Landing page visualmente encantadora + organização dos pedidos e clientes via WhatsApp/CRM. |
| **2. Profissionais Liberais & Saúde** | Médicos, dentistas, clínicas, advogados, consultores. | Precisam transmitir credibilidade e captar pacientes/clientes particulares sem parecer "apelativo". | Site institucional elegante (paleta e tipografia de alto padrão) + captação estruturada. |
| **3. Comércios Locais, Mercados & Varejo** | Pequenos mercados, lojas locais, distribuidoras. | Querem vender online ou ter um catálogo digital integrado com atendimento rápido e controle de clientes. | E-commerce descomplicado ou catálogo digital + CRM adaptado à rotina do lojista. |

---

## 4. Requisitos Funcionais (RF)

### RF01 — Navegação e Header Responsivo
- Exibir a Wordmark exclusiva **CreativeBD** (com detalhe visual em Terracota `#A8431F`).
- Links de navegação com rolagem suave (*smooth scroll*) para: *Soluções*, *Portfólio*, *Método*, *Diagnóstico* e *FAQ*.
- Botão de destaque no topo ("Solicitar Orçamento") que leva diretamente ao formulário de qualificação.

### RF02 — Hero Section (Dobra Principal)
- Deve apresentar a proposta de valor imediatamente, com o botão de ação primária visível sem necessidade de rolar a página tanto no Desktop (1440px) quanto no Mobile (390px).
- Badge superior destacando: *"Design Sob Medida & Sistemas de CRM"*.
- Headline principal em tipografia serifada editorial.
- Composição visual à direita (ou abaixo no mobile) mostrando um preview elegante das interfaces criadas pela CreativeBD.

### RF03 — Vitrine de Soluções (4 Pilares)
Apresentação clara dos serviços oferecidos (sem preços fixos, todos sob consulta):
1. **Landing Pages de Alta Conversão:** Páginas focadas em transformar cliques de anúncios e redes sociais em chamadas no WhatsApp.
2. **Sites Institucionais Premium:** Presença digital completa para empresas, clínicas e profissionais que exigem autoridade.
3. **E-commerces & Catálogos Digitais:** Lojas virtuais rápidas, seguras e pensadas para facilitar a compra no celular.
4. **CRM Personalizado (Diferencial):** Desenvolvimento de painéis e sistemas sob medida para o cliente gerenciar seus contatos, vendas e agendamentos sem depender de planilhas confusas.

### RF04 — Galeria de Portfólio Real (Cases em Destaque)
- Exibição dos 2 projetos reais já desenvolvidos:
  1. **Agência de Passeios de Jangada & Fotos com Drone:** Destaque para apelo visual, galeria de experiências e conversão rápida para reservas.
  2. **Agência de Passeios de Quadriciclo:** Destaque para turismo de aventura, apresentação de roteiros e facilidade de agendamento.
- Como os sites dos clientes ainda estão em fase pré-deploy, os cards exibirão os **prints reais** em molduras de navegador/dispositivo elegantes, com opção de abrir um **Modal de Visualização Ampliada (Lightbox)** para o visitante ver os detalhes do design na própria página.
- Bloco complementar indicando outros setores atendidos (*Saúde, Agências de Viagens, Mercados e Negócios Locais*).

### RF05 — Seção "Nosso Método Consultivo"
Explicação transparente de como o projeto funciona:
1. **Entrevista de Diagnóstico:** Ouvimos sua rotina e entendemos a dor real do seu negócio.
2. **Direção Visual Exclusiva:** Criação de layout pensado para o seu público (sem aparência genérica).
3. **Construção + CRM:** Desenvolvimento do site e, se necessário, do seu sistema interno de gestão de clientes.
4. **Entrega & Suporte:** Seu projeto no ar, rápido, seguro e pronto para vender.

### RF06 — Formulário Qualificador com Redirecionamento para WhatsApp
- Formulário interativo localizado na seção de conversão final (e acessível por qualquer CTA da página).
- **Campos obrigatórios:**
  - `Nome Completo` (Input de texto)
  - `Nome da Empresa` (Input de texto)
  - `Nicho do Negócio` (Input de texto ou seletor rápido: Turismo/Passeios, Saúde/Clínica, Comércio/Mercado, Serviços, Outro)
  - `O que você precisa?` (Seleção interativa em botões/cards: *Site / Landing Page*, *E-commerce*, *Site + CRM Personalizado*, *Apenas CRM*)
- **Comportamento ao submeter:**
  - Valida se os campos estão preenchidos.
  - Monta automaticamente uma URL `https://wa.me/{NUMERO_WHATSAPP}?text={MENSAGEM_CODIFICADA}` com o seguinte formato de mensagem:
    > *"Olá, equipe CreativeBD! Gostaria de solicitar um orçamento sob medida.*  
    > *• Nome:* [Nome Completo]  
    > *• Empresa:* [Nome da Empresa]  
    > *• Nicho:* [Nicho]  
    > *• Interesse:* [Tipo de Página / CRM]"*
  - Abre o WhatsApp em nova aba (ou aplicativo nativo no celular).

### RF07 — FAQ (Perguntas Frequentes) em Acordeão
Respostas diretas para quebrar objeções antes do contato:
- *Por que vocês não exibem tabelas de preços fixos?* (Explicação sobre o diagnóstico consultivo).
- *Como funciona o CRM personalizado? É obrigatório contratar junto com o site?*
- *Qual o prazo médio de entrega de uma Landing Page ou E-commerce?*
- *Meu negócio é pequeno / local (ex.: mercado, consultório, agência). A CreativeBD é para mim?*
- *Vocês cuidam da colocação do site no ar (domínio e hospedagem)?*

### RF08 — Transparência, Privacidade e Conformidade LGPD (Lei nº 13.709/2018)
- **Micro-aviso de Transparência no Formulário (Art. 6º, VI e Art. 9º da LGPD):** Abaixo do botão de envio do formulário de orçamento, exibir aviso claro informando que os dados não são salvos em banco de dados oculto no site e serão direcionados exclusivamente ao WhatsApp comercial para elaboração de proposta (Base Legal: **Art. 7º, V — Procedimentos preliminares relacionados a contrato a pedido do titular**), com link clicável para abrir o **Aviso de Privacidade**.
- **Modal de Aviso de Privacidade e Direitos do Titular (Art. 9º e Art. 18 da LGPD):** Acessível pelo formulário e pelo Rodapé, exibindo de forma clara em camadas (resumo TL;DR + os 7 elementos obrigatórios do Art. 9º, direitos do Art. 18 e o Canal de Privacidade conforme Resolução CD/ANPD nº 2/2022 e nº 18/2024).
- **Privacy-by-Design (Art. 46, § 2º):** Zero cookies publicitários invasivos na página, dispensando banners de cookies que prejudiquem a experiência mobile.

---

## 5. Diretrizes de Design, UX & Conformidade WCAG 2.1 / 2.2 (Nível AA/AAA)

### 5.1. Paleta de Cores Auditada (Conforto Ocular & Contraste WCAG)
Todos os pares de cores foram matematicamente verificados segundo a fórmula de luminância relativa da **WCAG 2.1 / 2.2** (Critérios **1.4.3 Contraste Mínimo — AA ≥ 4.5:1** para texto normal, **1.4.6 Contraste Aprimorado — AAA ≥ 7.0:1** e **1.4.11 Contraste Não-Textual — AA ≥ 3.0:1** para bordas de inputs e controles interativos).

| Token / Função | Código HEX | Razão de Contraste Auditada | Nível WCAG | Descrição de Uso |
| :--- | :--- | :--- | :--- | :--- |
| `bg-primary` | `#F4F1EA` | Base de cálculo (Luminância suave) | — | Alabastro / Areia suave (Fundo principal — zero reflexo cansativo) |
| `bg-secondary` | `#EAE5DC` | Base secundária | — | Pedra morna (Fundo de seções alternadas e rodapé) |
| `bg-surface` | `#FAF8F5` | Base de cards e inputs | — | Papel creme (Superfície de cards, inputs, modais e texto sobre botões escuros) |
| `text-primary` | `#232220` | **14.09:1** (em `#F4F1EA`) / **12.67:1** (em `#EAE5DC`) | **AAA** (≥ 7:1) | Carvão quente (Títulos e textos principais) |
| `text-secondary` | `#57534E` | **6.76:1** (em `#F4F1EA`) / **7.20:1** (em `#FAF8F5`) | **AA / AAA** | Cinza pedra escuro (Subtítulos, labels e parágrafos de apoio) |
| `accent-primary` | `#A8431F` | **5.68:1** (com `#FAF8F5`) / **4.80:1** (em `#EAE5DC`) | **AA** (≥ 4.5:1) | Terracota profundo acessível (Botões principais de CTA e textos de destaque — ajustado de `#C85A32` para atingir AA rigoroso) |
| `accent-primary-hover`| `#8F3617` | **7.12:1** (com `#FAF8F5`) | **AAA** (≥ 7:1) | Terracota tostado (Estado de hover/active dos botões principais) |
| `accent-secondary` | `#1E4D3B` | **8.54:1** (em `#F4F1EA`) / **9.09:1** (com `#FAF8F5`) | **AAA** (≥ 7:1) | Verde Floresta profundo (Badges de autoridade, detalhes de CRM e foco) |
| `border-subtle` | `#E2DDD2` | 1.28:1 (Exclusivamente decorativo) | Isento (1.4.11) | Divisores puramente estéticos entre seções |
| `border-control` | `#7D766D` | **3.57:1** (em `#EAE5DC`) / **4.15:1** (em `#FAF8F5`) | **AA** (≥ 3.0:1) | Bordas obrigatórias de campos de formulário (`input`, `select`), checkboxes e botões secundários |

### 5.2. Tipografia & Legibilidade (WCAG 1.4.4, 1.4.10 e 1.4.12)
- **Títulos (`font-serif`):** *Instrument Serif* ou *Newsreader* — altura de linha mínima de `1.15` a `1.25`.
- **Corpo e Interface (`font-sans`):** *Plus Jakarta Sans* — tamanho base nunca inferior a `16px` (`1rem`), com altura de linha (`line-height`) mínima de `1.5` (WCAG 1.4.12) e largura máxima de leitura entre `60ch` e `70ch`.
- **Detalhes Técnicos (`font-mono`):** *JetBrains Mono* — mínimo de `12px` (`0.75rem`) apenas em badges secundárias com alto contraste.
- **Redimensionamento e Reflow:** Layout construído com unidades relativas (`rem`/`em`) suportando zoom de até **200% (WCAG 1.4.4)** e visualização em **320px CSS de largura sem scroll horizontal (WCAG 1.4.10)**.

### 5.3. Acessibilidade Interativa, Foco, Teclado e Movimento (WCAG 2.1 / 2.2)
- **Anel de Foco Visível (WCAG 2.4.7 & 2.4.11):** Todos os elementos interativos (links, botões, campos do formulário, acordeão do FAQ e modal de portfólio) terão estilo `:focus-visible` explícito (`outline: 2px solid #1E4D3B; outline-offset: 3px`), com contraste superior a `8.5:1`.
- **Tamanho Mínimo de Alvo de Toque (WCAG 2.5.8 / 2.5.5):** Todo botão, link navegável ou seletor do formulário terá área clicável mínima de **44x44px** no mobile e desktop.
- **Formulário Acessível (WCAG 1.3.1, 3.3.1 & 3.3.2):**
  - Todo campo possui `<label htmlFor="...">` visível permanentemente (nunca depender apenas de `placeholder`).
  - Mensagens de validação em texto claro associadas via `aria-describedby` e `aria-invalid="true"` (não dependendo apenas da cor vermelha — WCAG 1.4.1).
- **Modal de Portfólio & FAQ (WCAG 2.1.1 & 4.1.2):**
  - Navegação completa via teclado (`Tab`, `Shift+Tab`, `Enter`, `Space` e fechamento do modal de print com `Escape`).
  - Uso correto de `aria-expanded`, `aria-controls` no FAQ e `role="dialog" aria-modal="true"` na visualização ampliada dos prints.
- **Respeito ao Movimento (WCAG 2.3.3):** Suporte completo à media query `@media (prefers-reduced-motion: reduce)` para desativar animações de entrada ou rolagem suave para usuários sensíveis a movimento.

