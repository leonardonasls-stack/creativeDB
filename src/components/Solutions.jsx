import React from 'react';
import { solutionsData } from '../data/data';
import { Layout, Globe, ShoppingBag, Database, Check } from 'lucide-react';

const icons = {
  'landing-pages': Layout,
  'institucionais': Globe,
  'ecommerce': ShoppingBag,
  'crm': Database,
};

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-brand-bgSecondary/50 border-b border-brand-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-borderControl/40 text-xs font-mono font-semibold uppercase tracking-wider text-brand-forest">
            {solutionsData.sectionTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-textPrimary tracking-tight">
            {solutionsData.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {solutionsData.description}
          </p>
        </div>

        {/* Grid de Soluções (4 Pilares) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {solutionsData.items.map((item) => {
            const IconComponent = icons[item.id] || Layout;
            const isHighlight = item.highlight;

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-8 sm:p-10 transition-all flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-brand-surface border-2 border-brand-forest shadow-elevated'
                    : 'bg-brand-surface border border-brand-borderSubtle shadow-soft-card hover:shadow-elevated'
                }`}
              >
                {/* Badge de Destaque no CRM */}
                {isHighlight && (
                  <div className="absolute -top-3.5 right-6 bg-brand-forest text-brand-surface text-xs font-mono font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.badgeText}
                  </div>
                )}

                <div>
                  {/* Ícone e Subtítulo */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isHighlight
                          ? 'bg-brand-forest text-brand-surface'
                          : 'bg-brand-bgSecondary text-brand-terracotta'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-brand-forest uppercase tracking-wider block">
                        {item.tagline}
                      </span>
                      <h3 className="font-serif text-2xl text-brand-textPrimary font-medium">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-brand-textSecondary text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Lista de Recursos */}
                  <ul className="space-y-3 pt-2 mb-8 border-t border-brand-borderSubtle">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-textPrimary">
                        <Check className="w-4 h-4 text-brand-forest mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chamada para Diagnóstico da Solução */}
                <div className="pt-4 border-t border-brand-borderSubtle/60">
                  <a
                    href="#orcamento"
                    className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                      isHighlight
                        ? 'bg-brand-forest hover:bg-[#15372a] text-brand-surface'
                        : 'bg-brand-bgSecondary hover:bg-brand-borderSubtle text-brand-textPrimary border border-brand-borderControl/40'
                    }`}
                  >
                    Consultar Viabilidade Desta Solução
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
