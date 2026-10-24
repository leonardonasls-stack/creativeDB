import React from 'react';
import { brandData } from '../data/data';
import { ShieldCheck, ArrowUp, MessageSquare, Mail } from 'lucide-react';

export default function Footer({ onOpenPrivacyModal }) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-bgSecondary border-t border-brand-borderSubtle pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-borderSubtle">
          
          {/* Marca & Identidade */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block" aria-label="CreativeBD Início">
              <span className="font-serif text-3xl tracking-tight text-brand-textPrimary font-semibold">
                Creative<span className="text-brand-terracotta">BD</span>
              </span>
            </a>
            <p className="text-sm text-brand-textSecondary max-w-sm leading-relaxed">
              {brandData.tagline}. Desenvolvemos soluções com arquitetura de informação clara, design anti-fadiga ocular e CRM adaptado à sua operação.
            </p>
            <p className="text-xs font-mono text-brand-forest">
              {brandData.location}
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider font-semibold text-brand-textPrimary">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              {brandData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#orcamento"
                  className="text-brand-terracotta font-medium hover:underline inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Solicitar Orçamento</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Governança & Conformidade LGPD */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider font-semibold text-brand-textPrimary flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-forest" />
              <span>Privacidade & Governança</span>
            </p>
            <p className="text-xs text-brand-textSecondary leading-relaxed">
              Operamos segundo a LGPD (Lei 13.709/2018) na condição de ATPP (Resolução CD/ANPD nº 2/2022). Zero venda ou retenção oculta de dados.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="text-xs font-mono font-semibold text-brand-forest hover:text-brand-textPrimary bg-brand-surface border border-brand-borderControl/40 px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Aviso de Privacidade & Canal do Titular</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bloco Inferior / Copyright e Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textSecondary">
          <p>{brandData.copyright}</p>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-brand-textPrimary hover:underline"
            >
              Termos e Privacidade (LGPD)
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-brand-textPrimary p-1 rounded"
              aria-label="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
