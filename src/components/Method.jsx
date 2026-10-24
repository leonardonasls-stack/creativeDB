import React from 'react';
import { methodData } from '../data/data';
import { MessageSquareText, Palette, Cpu, Rocket } from 'lucide-react';

const stepIcons = [
  MessageSquareText,
  Palette,
  Cpu,
  Rocket,
];

export default function Method() {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-brand-bgSecondary/40 border-b border-brand-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-borderControl/40 text-xs font-mono font-semibold uppercase tracking-wider text-brand-forest">
            {methodData.sectionTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-textPrimary tracking-tight">
            {methodData.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {methodData.description}
          </p>
        </div>

        {/* Linha de Processo / 4 Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {methodData.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.number}
                className="relative bg-brand-surface rounded-2xl p-6 sm:p-8 border border-brand-borderSubtle shadow-soft-card flex flex-col justify-between"
              >
                <div>
                  {/* Topo do Card com Número e Ícone */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-semibold text-brand-terracotta">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-bgSecondary flex items-center justify-center text-brand-forest">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge da Etapa */}
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-brand-bgPrimary text-brand-forest font-semibold mb-3 border border-brand-borderSubtle">
                    {step.badge}
                  </span>

                  {/* Título e Explicação */}
                  <h3 className="font-serif text-xl text-brand-textPrimary font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-borderSubtle flex items-center gap-2 text-xs text-brand-textSecondary">
                  <span className="w-2 h-2 rounded-full bg-brand-forest" />
                  <span>Etapa {idx + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
