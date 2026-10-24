import React from 'react';
import { heroData } from '../data/data';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-brand-bgPrimary border-b border-brand-borderSubtle">
      {/* Elementos sutis de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-bgSecondary/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-surface/80 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto & Proposta de Valor */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge de Posicionamento */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-borderControl/40 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-forest animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-forest">
                {heroData.badge}
              </span>
            </div>

            {/* Headline Editorial */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-textPrimary tracking-tight leading-[1.12]">
              Sites com design exclusivo e CRM sob medida para transformar visitantes em{' '}
              <span className="italic font-normal text-brand-terracotta">clientes reais.</span>
            </h1>

            {/* Subtítulo Confortável para os Olhos */}
            <p className="text-lg sm:text-xl text-brand-textSecondary max-w-2xl leading-relaxed">
              {heroData.subheadline}
            </p>

            {/* Ações / CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={heroData.primaryCtaTarget}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-all shadow-soft-card active:scale-[0.98] min-h-[52px]"
              >
                <span>{heroData.primaryCta}</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href={heroData.secondaryCtaTarget}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-brand-textPrimary bg-brand-surface hover:bg-brand-bgSecondary border border-brand-borderControl transition-colors min-h-[52px]"
              >
                <span>{heroData.secondaryCta}</span>
              </a>
            </div>

            {/* Métricas e Selos de Confiança */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-borderSubtle">
              {heroData.trustMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-forest flex-shrink-0" aria-hidden="true" />
                  <div className="text-xs">
                    <p className="font-semibold text-brand-textPrimary">{metric.value}</p>
                    <p className="text-brand-textSecondary">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Coluna Visual: Composição da Interface / Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura do Card do Estúdio */}
              <div className="rounded-2xl border border-brand-borderSubtle bg-brand-surface p-5 sm:p-6 shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-brand-borderSubtle pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#E28A73]" />
                    <div className="w-3 h-3 rounded-full bg-[#E8C28A]" />
                    <div className="w-3 h-3 rounded-full bg-[#8EB89D]" />
                    <span className="ml-2 font-mono text-xs text-brand-textSecondary">creativebd.com.br/demo</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-brand-bgSecondary text-brand-textSecondary">
                    DESIGN SYSTEM WCAG
                  </span>
                </div>

                {/* Preview Ilustrado dos Projetos */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-brand-bgPrimary border border-brand-borderSubtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-medium text-brand-textPrimary">
                        Case: Turismo Náutico & Drones
                      </span>
                      <span className="font-mono text-xs text-brand-forest bg-brand-forest/10 px-2 py-0.5 rounded font-semibold">
                        98% Conversão WhatsApp
                      </span>
                    </div>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      Interface limpa destacando águas cristalinas, pacotes de jangada e reserva com 1 clique.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-bgSecondary border border-brand-borderSubtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-medium text-brand-textPrimary">
                        Case: Turismo de Quadriciclos
                      </span>
                      <span className="font-mono text-xs text-brand-terracotta bg-brand-terracotta/10 px-2 py-0.5 rounded font-semibold">
                        Agendamento Fácil
                      </span>
                    </div>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      Apresentação imersiva dos percursos com formulário otimizado para grupos e casais.
                    </p>
                  </div>

                  {/* Diferencial do CRM */}
                  <div className="p-4 rounded-xl bg-brand-forest text-brand-surface shadow-soft-card">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#F4F1EA]" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
                        Módulo CRM Sob Medida
                      </span>
                    </div>
                    <p className="text-xs text-brand-surface/90 leading-relaxed">
                      Painel exclusivo para controle de clientes e roteiros: chega de planilhas desorganizadas.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
