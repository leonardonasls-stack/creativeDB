# Briefing do Projeto: CreativeBD

## 1. Contexto & Proposta de Valor
- **Negócio**: CreativeBD — Estúdio consultivo de criação de sites, e-commerces e soluções de CRM sob medida.
- **Público-Alvo**: Agências de turismo/passeios (nicho já validado com cases reais), profissionais liberais (médicos, clínicas, advogados), comércios locais, mercados e empresas que buscam presença digital profissional e gestão de vendas.
- **Promessa Principal**: "Sites com design exclusivo e CRM sob medida para transformar visitantes em clientes reais."
- **Diferencial Competitivo**: Abordagem consultiva baseada em entrevista profunda com o cliente (fugindo de templates genéricos), design editorial que descansa os olhos e possibilidade de acoplar um CRM personalizado à operação do cliente.

## 2. Meta de Conversão
- **Ação Primária (CTA)**: Preenchimento do Formulário de Diagnóstico Rápido na página, que redireciona automaticamente para o WhatsApp da CreativeBD com todas as respostas formatadas na mensagem.
- **Campos do Formulário**:
  1. Nome Completo
  2. Nome da Empresa
  3. Nicho de Atuação (ex.: Turismo, Saúde, Comércio Local, Serviços, Outro)
  4. Tipo de Solução Desejada (`Landing Page / Site Institucional`, `E-commerce`, `Site + CRM Personalizado`, `Apenas CRM / Sistema`)
- **Política de Preços**: Sem exibição de preços fixos ("Orçamento sob consulta"), reforçando o caráter personalizado e consultivo de cada projeto.

## 3. Arquitetura de Conteúdo (Seções da Landing Page)
1. **Header (Navegação Fixa Suave)**: Wordmark autoral `CreativeBD`, links de âncora (Soluções, Portfólio, Como Funciona, FAQ) e botão rápido "Solicitar Diagnóstico".
2. **Hero (Dobra Principal)**: Headline de alto impacto em no máximo 2 linhas no desktop + subtítulo explicando a união entre Design Premium e CRM + CTA direto para o formulário/WhatsApp + composição visual dos projetos reais.
3. **Soluções / Benefícios (3 a 4 blocos)**:
   - Landing Pages de Alta Conversão (foco em captação imediata de leads).
   - Sites Institucionais Premium (autoridade para médicos, agências e empresas).
   - E-commerces Completos (vendas online com experiência fluida).
   - CRM Personalizado sob Medida (gestão de clientes, agendamentos e funil de vendas adaptado ao negócio).
4. **Portfólio Real (Cases de Sucesso)**:
   - *Case 1*: Agência de Passeios de Jangada & Fotos com Drones (Turismo & Experiência Visual).
   - *Case 2*: Agência de Passeios de Quadriciclo (Turismo de Aventura & Reservas).
   - *Nota técnica*: Espaço preparado para receber os prints reais que o cliente já possui (enquanto os sites aguardam deploy).
5. **Nosso Método (Como Trabalhamos)**:
   - Etapa 1: Entrevista & Diagnóstico do Negócio.
   - Etapa 2: Direção de Arte & Design Exclusivo.
   - Etapa 3: Desenvolvimento de Alta Performance (+ CRM opcional).
   - Etapa 4: Publicação, Treinamento e Acompanhamento.
6. **Seção de Diagnóstico / Orçamento (CTA Principal)**: Card de destaque com o formulário de 4 campos integrado ao gerador de link do WhatsApp.
7. **FAQ (Objeções Frequentes)**: Dúvidas sobre prazo de entrega, como funciona o CRM personalizado, manutenção, hospedagem e pagamento.
8. **Rodapé (Footer)**: Identidade CreativeBD, links rápidos, chamada final e direitos reservados.

## 4. Identidade Visual & Ativos (Opção 1: Estúdio Arquitetônico)
- **Tom de Voz**: Consultivo, seguro, acessível, sofisticado e focado em resultado.
- **Paleta de Cores (Auditada WCAG 2.1 / 2.2 AA & AAA)**:
  - Fundo Principal: `#F4F1EA` (Alabastro / Areia suave — conforto ocular)
  - Fundo Secundário / Seções alternadas: `#EAE5DC` (Pedra morna)
  - Superfície de Cards: `#FAF8F5` (Papel creme)
  - Texto Principal: `#232220` (Carvão quente — Contraste **14.09:1 AAA**)
  - Texto Secundário: `#57534E` (Cinza pedra escuro — Contraste **6.76:1 AA/AAA**)
  - Destaque Primário (CTAs / Badges): `#A8431F` (Terracota profundo acessível — Contraste **5.68:1 AA** com texto `#FAF8F5`)
  - Destaque Primário Hover: `#8F3617` (Terracota tostado — Contraste **7.12:1 AAA** com texto `#FAF8F5`)
  - Destaque Secundário (Sucesso / Foco / CRM): `#1E4D3B` (Verde Floresta profundo — Contraste **8.54:1 AAA**)
  - Bordas Decorativas: `#E2DDD2` | Bordas de Controles/Inputs (WCAG 1.4.11): `#7D766D` (**3.57:1 AA**)
- **Tipografia**:
  - Títulos (Headings): Serifada moderna editorial (*Instrument Serif* ou *Newsreader* / *Playfair Display*).
  - Corpo e Interface (Body/UI): Sans-serif geométrica limpa (*Plus Jakarta Sans*).
  - Micro-labels / Badges: *Geist Mono* ou *JetBrains Mono* em caixa alta discreta.
- **Ativos Existentes & Pendências**:
  - Logo: Será criada uma Wordmark tipográfica exclusiva para a **CreativeBD** diretamente no código.
  - Imagens de Portfólio: Prints dos 2 sites (Jangada/Drone e Quadriciclo) a serem adicionados na pasta `/public/portfolio/`.
  - Número de WhatsApp: Configurável em variável centralizada para disparo do formulário.
