export const formData = {
  sectionTag: "Orçamento & Diagnóstico",
  heading: "Vamos desenhar a presença digital ideal para o seu negócio?",
  subheading:
    "Preencha as 4 informações abaixo. Ao clicar em solicitar, você será direcionado para o WhatsApp da CreativeBD com a sua proposta já estruturada para respondermos rapidamente.",
  fields: {
    fullName: {
      id: "fullName",
      label: "Nome Completo",
      placeholder: "Como gostaria de ser chamado(a)?",
      required: true,
    },
    companyName: {
      id: "companyName",
      label: "Nome da Sua Empresa / Negócio",
      placeholder: "Ex.: Agência Sol & Mar, Consultório Dr. Silva...",
      required: true,
    },
    niche: {
      id: "niche",
      label: "Nicho ou Segmento de Atuação",
      placeholder: "Selecione ou digite seu nicho...",
      required: true,
      options: [
        "Turismo & Passeios",
        "Saúde, Clínicas & Médicos",
        "Comércio Local & Mercados",
        "Agência de Viagens / Receptivo",
        "Prestador de Serviços",
        "Outro Segmento",
      ],
    },
    projectType: {
      id: "projectType",
      label: "Qual solução você está buscando?",
      required: true,
      options: [
        {
          id: "landing-page",
          title: "Landing Page / Site Institucional",
          desc: "Presença de alta conversão para captar clientes",
        },
        {
          id: "ecommerce",
          title: "E-commerce ou Catálogo Digital",
          desc: "Vendas ou pedidos simplificados de produtos",
        },
        {
          id: "site-plus-crm",
          title: "Site + CRM Personalizado",
          desc: "Página completa integrada a sistema de gestão",
        },
        {
          id: "only-crm",
          title: "Apenas CRM / Sistema Sob Medida",
          desc: "Gestão de leads, agenda e clientes da sua equipe",
        },
      ],
    },
  },
  submitButtonText: "Receber Diagnóstico no WhatsApp",
  privacyNotice: {
    text: "Respeito à sua privacidade: Seus dados não são armazenados em bancos do site. O envio é direcionado exclusivamente para o WhatsApp comercial da CreativeBD para fins de contato pré-contratual a seu pedido (Art. 7º, V da LGPD).",
    linkText: "Ler Aviso de Privacidade Completo",
  },
};
