import React, { useState } from 'react';
import { brandData } from '../data/data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-bgPrimary/90 border-b border-brand-borderSubtle transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Wordmark Exclusiva CreativeBD */}
          <a
            href="#"
            className="group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2 rounded-lg py-1 px-1"
            aria-label="CreativeBD — Página Inicial"
          >
            <span className="font-serif text-3xl sm:text-4xl tracking-tight text-brand-textPrimary font-semibold transition-transform group-hover:scale-[1.01]">
              Creative<span className="text-brand-terracotta">BD</span>
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-forest mb-1" aria-hidden="true" />
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {brandData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-textSecondary hover:text-brand-textPrimary transition-colors relative py-1 focus-visible:rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Header Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={brandData.ctaHeaderTarget}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-all shadow-sm active:scale-[0.98] min-h-[44px]"
            >
              <span>{brandData.ctaHeader}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-brand-textPrimary hover:bg-brand-bgSecondary border border-brand-borderControl focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-brand-borderSubtle bg-brand-surface/98 backdrop-blur-lg px-4 pt-4 pb-6 shadow-elevated"
        >
          <div className="flex flex-col space-y-3">
            {brandData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-brand-textPrimary hover:bg-brand-bgSecondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={brandData.ctaHeaderTarget}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-colors min-h-[48px]"
              >
                <span>{brandData.ctaHeader}</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
