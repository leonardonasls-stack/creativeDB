import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Method from './components/Method';
import LeadForm from './components/LeadForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bgPrimary text-brand-textPrimary flex flex-col selection:bg-brand-terracotta selection:text-brand-surface">
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Principal com Semântica Única */}
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Portfolio />
        <Method />
        <LeadForm onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
        <Faq />
      </main>

      {/* Rodapé Oficial */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Modal Acessível do Aviso de Privacidade LGPD */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
