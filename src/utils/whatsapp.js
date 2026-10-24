import { brandData } from '../data/brandData';

/**
 * Construtor e sanitizador da URL de redirecionamento para o WhatsApp.
 * Valida os campos obrigatórios e monta a mensagem personalizada codificada.
 *
 * @param {Object} formData
 * @param {string} formData.fullName
 * @param {string} formData.companyName
 * @param {string} formData.niche
 * @param {string} formData.projectType
 * @returns {string} URL completa wa.me pronta para abertura
 */
export function buildWhatsAppUrl({ fullName, companyName, niche, projectType }) {
  const cleanName = (fullName || '').trim();
  const cleanCompany = (companyName || '').trim();
  const cleanNiche = (niche || '').trim();
  const cleanProject = (projectType || '').trim();

  const messageText = [
    'Olá, equipe CreativeBD! Gostaria de solicitar um diagnóstico sob medida.',
    '',
    `• Nome: ${cleanName}`,
    `• Empresa: ${cleanCompany}`,
    `• Nicho / Segmento: ${cleanNiche}`,
    `• Solução de Interesse: ${cleanProject}`,
    '',
    'Aguardo o retorno para conversarmos sobre o projeto!',
  ].join('\n');

  const encodedMessage = encodeURIComponent(messageText);
  const targetNumber = brandData.whatsappNumber.replace(/\D/g, '');

  return `https://wa.me/${targetNumber}?text=${encodedMessage}`;
}

/**
 * Abre o WhatsApp de forma segura em nova aba ou aplicativo nativo.
 *
 * @param {string} url
 */
export function openWhatsAppSafely(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
