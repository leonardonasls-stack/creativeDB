import React, { useEffect } from 'react';
import { X, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, project }) {
  // Previne rolagem do body e adiciona handler do teclado Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-textPrimary/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-brand-surface rounded-2xl shadow-floating border border-brand-borderSubtle overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo do Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-borderSubtle bg-brand-bgPrimary/60">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-brand-forest font-semibold block">
              {project.category}
            </span>
            <h3 id="lightbox-title" className="font-serif text-xl sm:text-2xl text-brand-textPrimary font-medium">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-brand-textSecondary hover:text-brand-textPrimary hover:bg-brand-bgSecondary border border-brand-borderControl/40 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            aria-label="Fechar ampliação do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Área de Visualização do Print / Mockup */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-brand-bgSecondary/30">
          <div className="w-full rounded-xl overflow-hidden border border-brand-borderControl/40 bg-brand-surface shadow-soft-card">
            
            {/* Barra simuladora do navegador */}
            <div className="bg-brand-bgSecondary px-4 py-2.5 flex items-center gap-2 border-b border-brand-borderSubtle">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-terracotta/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8C28A]" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-forest/60" />
              <div className="ml-2 px-3 py-0.5 rounded-md bg-brand-surface text-brand-textSecondary text-xs font-mono w-full max-w-xs truncate">
                https://creativebd.com.br/preview/{project.id}
              </div>
            </div>

            {/* Imagem real com fallback resiliente para pré-deploy */}
            <div className="relative min-h-[300px] sm:min-h-[440px] flex items-center justify-center bg-brand-bgPrimary">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="w-full h-auto object-cover max-h-[60vh]"
                onError={(e) => {
                  // Fallback se a imagem webp ainda não foi colada na pasta /public/portfolio/
                  e.currentTarget.style.display = 'none';
                  const fallbackEl = document.getElementById(`fallback-${project.id}`);
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />

              {/* Elemento de fallback estilizado */}
              <div
                id={`fallback-${project.id}`}
                className="hidden flex-col items-center justify-center p-8 text-center space-y-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-borderControl flex items-center justify-center text-brand-terracotta shadow-sm">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-brand-textPrimary">
                  Layout Desenvolvido pela CreativeBD
                </h4>
                <p className="text-sm text-brand-textSecondary max-w-md">
                  {project.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-mono font-semibold">
                  <span>PRINT EM MOLDURA PRÉ-DEPLOY</span>
                </div>
              </div>
            </div>

          </div>

          {/* Destaques do Projeto no Rodapé do Modal */}
          <div className="w-full mt-6 bg-brand-surface p-4 rounded-xl border border-brand-borderSubtle">
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-textSecondary font-semibold mb-2">
              Destaques de Engenharia e Design Deste Case
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-md bg-brand-bgSecondary text-brand-textPrimary font-medium border border-brand-borderSubtle"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé do Modal com Ação */}
        <div className="px-6 py-4 bg-brand-surface border-t border-brand-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-textSecondary">
            Quer um projeto com esse nível de acabamento para a sua marca?
          </p>
          <a
            href="#orcamento"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-colors min-h-[44px]"
          >
            <span>Solicitar Orçamento Semelhante</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
