import React, { useState } from 'react';
import { portfolioData } from '../data/data';
import ImageLightbox from './ImageLightbox';
import { Maximize2, Sparkles, Building2, Stethoscope, Store, Plane } from 'lucide-react';

const sectorIcons = [
  Stethoscope,
  Store,
  Plane,
  Building2,
];

export default function Portfolio() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-brand-bgPrimary border-b border-brand-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-borderControl/40 text-xs font-mono font-semibold uppercase tracking-wider text-brand-forest">
            {portfolioData.sectionTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-textPrimary tracking-tight">
            {portfolioData.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {portfolioData.description}
          </p>
        </div>

        {/* Grid de Cases Reais em Destaque */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {portfolioData.cases.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-brand-surface border border-brand-borderSubtle overflow-hidden shadow-soft-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Mockup do Browser com Print do Site */}
                <div className="relative border-b border-brand-borderSubtle bg-brand-bgSecondary/60 p-4">
                  {/* Controles da janela */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-terracotta/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E8C28A]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-forest/50" />
                    </div>
                    <span className="font-mono text-[11px] text-brand-textSecondary truncate max-w-[200px]">
                      preview/{project.id}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-brand-textSecondary hover:text-brand-textPrimary transition-colors py-1 px-2 rounded hover:bg-brand-surface"
                      aria-label={`Ampliar visualização de ${project.title}`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Ampliar</span>
                    </button>
                  </div>

                  {/* Área do Print / Preview Visual */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative cursor-pointer rounded-lg overflow-hidden bg-gradient-to-br from-brand-bgPrimary to-brand-bgSecondary border border-brand-borderControl/30 aspect-[16/10] flex items-center justify-center p-4 transition-transform group-hover:scale-[1.01]"
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover rounded shadow-sm"
                      onError={(e) => {
                        // Renderização elegante caso o print ainda não esteja no disco
                        e.currentTarget.style.display = 'none';
                        const el = document.getElementById(`card-fallback-${project.id}`);
                        if (el) el.style.display = 'flex';
                      }}
                    />

                    {/* Fallback elegante na ausência do arquivo físico */}
                    <div
                      id={`card-fallback-${project.id}`}
                      className="hidden flex-col items-center justify-center text-center p-6 space-y-2"
                    >
                      <Sparkles className="w-8 h-8 text-brand-terracotta" />
                      <p className="font-serif text-lg font-medium text-brand-textPrimary">
                        {project.title}
                      </p>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-surface text-brand-forest font-semibold border border-brand-borderControl/40">
                        Clique para Ampliar Mockup
                      </span>
                    </div>

                    {/* Overlay suave ao passar o mouse */}
                    <div className="absolute inset-0 bg-brand-textPrimary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-lg bg-brand-surface/95 text-brand-textPrimary text-xs font-mono font-semibold shadow-soft-card flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-brand-terracotta" />
                        Ver Detalhes do Projeto
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo Descritivo do Case */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bgSecondary text-brand-textSecondary font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl text-brand-textPrimary font-medium">
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-brand-borderSubtle">
                    <p className="font-mono text-xs text-brand-forest font-semibold mb-2">
                      Foco Estratégico:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="text-xs text-brand-textSecondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botão de Ampliação e Orçamento */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-brand-textPrimary bg-brand-bgSecondary hover:bg-brand-borderSubtle border border-brand-borderControl/40 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Maximize2 className="w-4 h-4 text-brand-terracotta" />
                  <span>Ver Print & Análise do Projeto</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bloco de Versatilidade de Nichos Atendidos */}
        <div className="rounded-2xl bg-brand-surface border border-brand-borderSubtle p-8 sm:p-10 shadow-soft-card">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-forest font-semibold block mb-1">
              Versatilidade de Mercado
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-textPrimary">
              Atendemos operações com necessidades reais de vendas e gestão
            </h3>
            <p className="text-sm text-brand-textSecondary mt-2">
              Além do forte histórico em turismo e passeios, desenvolvemos soluções adaptadas para diversos ramos de atividade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.otherSectors.map((sector, idx) => {
              const Icon = sectorIcons[idx % sectorIcons.length];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-brand-bgPrimary border border-brand-borderSubtle flex flex-col justify-between space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-bgSecondary flex items-center justify-center text-brand-forest">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-brand-textPrimary">
                      {sector.name}
                    </h4>
                    <p className="text-xs text-brand-textSecondary mt-1 leading-relaxed">
                      {sector.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        project={activeModalProject}
      />
    </section>
  );
}
