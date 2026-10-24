import React, { useEffect } from 'react';
import { privacyData } from '../data/data';
import { X, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-textPrimary/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-brand-surface rounded-2xl shadow-floating border border-brand-borderSubtle overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-borderSubtle bg-brand-bgPrimary">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="font-serif text-xl sm:text-2xl text-brand-textPrimary font-medium">
                {privacyData.title}
              </h3>
              <p className="text-xs text-brand-textSecondary mt-0.5">
                {privacyData.version} • {privacyData.controller}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-brand-textSecondary hover:text-brand-textPrimary hover:bg-brand-bgSecondary border border-brand-borderControl/40 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            aria-label="Fechar aviso de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-brand-textPrimary text-sm leading-relaxed">
          
          {/* Camada 1: Resumo Executivo / TL;DR */}
          <div className="bg-brand-bgSecondary/60 p-5 rounded-xl border border-brand-borderSubtle space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-forest">
              Resumo de Privacidade em Camadas (Privacy-by-Design)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {privacyData.summary.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-semibold text-xs text-brand-textPrimary">{item.title}</p>
                  <p className="text-xs text-brand-textSecondary">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Camada 2: Detalhamento dos Elementos Obrigatórios do Art. 9º */}
          <div className="space-y-6">
            {privacyData.sections.map((section) => (
              <div key={section.id} className="border-b border-brand-borderSubtle pb-4">
                <h4 className="font-serif text-lg font-medium text-brand-textPrimary mb-2">
                  {section.heading}
                </h4>
                <p className="text-brand-textSecondary text-xs sm:text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Canal do Encarregado / Contato de Privacidade */}
          <div className="bg-brand-bgPrimary p-5 rounded-xl border border-brand-borderControl/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-base font-medium text-brand-textPrimary">
                Canal de Atendimento ao Titular de Dados
              </p>
              <p className="text-xs text-brand-textSecondary">
                Para exercer seus direitos de confirmação, correção ou revogação de contato comercial:
              </p>
            </div>
            <a
              href={`mailto:${privacyData.contactChannel}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-surface border border-brand-borderControl text-xs font-mono font-semibold text-brand-forest hover:bg-brand-bgSecondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{privacyData.contactChannel}</span>
            </a>
          </div>

        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 bg-brand-surface border-t border-brand-borderSubtle flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-colors min-h-[44px]"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
