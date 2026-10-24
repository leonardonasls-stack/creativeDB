import React, { useState } from 'react';
import { faqData } from '../data/data';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-bgSecondary/30 border-b border-brand-borderSubtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-borderControl/40 text-xs font-mono font-semibold uppercase tracking-wider text-brand-forest">
            {faqData.sectionTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-textPrimary tracking-tight">
            {faqData.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary max-w-xl mx-auto leading-relaxed">
            {faqData.description}
          </p>
        </div>

        {/* Acordeão de Perguntas */}
        <div className="space-y-4">
          {faqData.items.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="bg-brand-surface rounded-2xl border border-brand-borderSubtle overflow-hidden shadow-soft-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none min-h-[56px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-brand-textPrimary font-medium">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-bgSecondary flex items-center justify-center flex-shrink-0 text-brand-textPrimary transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-terracotta text-brand-surface' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-textSecondary leading-relaxed border-t border-brand-borderSubtle/60"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
