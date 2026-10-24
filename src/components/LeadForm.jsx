import React, { useState } from 'react';
import { formData } from '../data/data';
import { buildWhatsAppUrl, openWhatsAppSafely } from '../utils/whatsapp';
import { MessageSquare, Send, ShieldCheck, Check, AlertCircle } from 'lucide-react';

export default function LeadForm({ onOpenPrivacyModal }) {
  const [formState, setFormState] = useState({
    fullName: '',
    companyName: '',
    niche: '',
    projectType: 'landing-page',
  });

  const [customNiche, setCustomNiche] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formState.fullName.trim()) newErrors.fullName = 'Por favor, informe seu nome completo.';
    if (!formState.companyName.trim()) newErrors.companyName = 'Por favor, informe o nome da sua empresa.';
    
    const finalNiche = formState.niche === 'Outro Segmento' ? customNiche : formState.niche;
    if (!finalNiche || !finalNiche.trim()) {
      newErrors.niche = 'Por favor, selecione ou digite seu segmento de atuação.';
    }

    if (!formState.projectType) {
      newErrors.projectType = 'Por favor, selecione o tipo de projeto.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    const selectedOption = formData.fields.projectType.options.find(
      (opt) => opt.id === formState.projectType
    );
    const projectTitle = selectedOption ? selectedOption.title : formState.projectType;
    const finalNiche = formState.niche === 'Outro Segmento' ? customNiche : formState.niche;

    const url = buildWhatsAppUrl({
      fullName: formState.fullName,
      companyName: formState.companyName,
      niche: finalNiche,
      projectType: projectTitle,
    });

    // Pequeno timeout suave para dar feedback visual de ação
    setTimeout(() => {
      openWhatsAppSafely(url);
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <section id="orcamento" className="py-20 md:py-28 bg-brand-bgPrimary border-b border-brand-borderSubtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Bloco */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-borderControl/40 text-xs font-mono font-semibold uppercase tracking-wider text-brand-forest">
            {formData.sectionTag}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-textPrimary tracking-tight">
            {formData.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary max-w-2xl mx-auto leading-relaxed">
            {formData.subheading}
          </p>
        </div>

        {/* Card Principal do Formulário */}
        <div className="bg-brand-surface rounded-3xl p-6 sm:p-10 border border-brand-borderSubtle shadow-elevated">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Campo 1: Nome Completo */}
              <div className="space-y-2">
                <label
                  htmlFor={formData.fields.fullName.id}
                  className="block text-sm font-semibold text-brand-textPrimary"
                >
                  {formData.fields.fullName.label} <span className="text-brand-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id={formData.fields.fullName.id}
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  placeholder={formData.fields.fullName.placeholder}
                  className={`w-full px-4 py-3.5 rounded-xl bg-brand-bgPrimary text-brand-textPrimary placeholder:text-brand-textSecondary/60 border ${
                    errors.fullName ? 'border-brand-terracotta ring-1 ring-brand-terracotta' : 'border-brand-borderControl'
                  } text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest transition-all`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-brand-terracotta font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Campo 2: Nome da Empresa */}
              <div className="space-y-2">
                <label
                  htmlFor={formData.fields.companyName.id}
                  className="block text-sm font-semibold text-brand-textPrimary"
                >
                  {formData.fields.companyName.label} <span className="text-brand-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id={formData.fields.companyName.id}
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleInputChange}
                  placeholder={formData.fields.companyName.placeholder}
                  className={`w-full px-4 py-3.5 rounded-xl bg-brand-bgPrimary text-brand-textPrimary placeholder:text-brand-textSecondary/60 border ${
                    errors.companyName ? 'border-brand-terracotta ring-1 ring-brand-terracotta' : 'border-brand-borderControl'
                  } text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest transition-all`}
                  aria-invalid={!!errors.companyName}
                  aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                />
                {errors.companyName && (
                  <p id="companyName-error" className="text-xs text-brand-terracotta font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.companyName}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Campo 3: Nicho / Segmento */}
            <div className="space-y-2">
              <label
                htmlFor={formData.fields.niche.id}
                className="block text-sm font-semibold text-brand-textPrimary"
              >
                {formData.fields.niche.label} <span className="text-brand-terracotta">*</span>
              </label>
              <select
                id={formData.fields.niche.id}
                name="niche"
                value={formState.niche}
                onChange={handleInputChange}
                className={`w-full px-4 py-3.5 rounded-xl bg-brand-bgPrimary text-brand-textPrimary border ${
                  errors.niche ? 'border-brand-terracotta ring-1 ring-brand-terracotta' : 'border-brand-borderControl'
                } text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest transition-all`}
                aria-invalid={!!errors.niche}
                aria-describedby={errors.niche ? 'niche-error' : undefined}
              >
                <option value="">Selecione seu segmento...</option>
                {formData.fields.niche.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {formState.niche === 'Outro Segmento' && (
                <div className="pt-2">
                  <input
                    type="text"
                    value={customNiche}
                    onChange={(e) => setCustomNiche(e.target.value)}
                    placeholder="Qual é o seu nicho específico?"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bgPrimary text-brand-textPrimary border border-brand-borderControl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
                  />
                </div>
              )}

              {errors.niche && (
                <p id="niche-error" className="text-xs text-brand-terracotta font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.niche}</span>
                </p>
              )}
            </div>

            {/* Campo 4: Tipo de Solução Desejada */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-brand-textPrimary">
                {formData.fields.projectType.label} <span className="text-brand-terracotta">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formData.fields.projectType.options.map((option) => {
                  const isSelected = formState.projectType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, projectType: option.id }))}
                      className={`p-4 rounded-xl border text-left transition-all min-h-[72px] flex items-start justify-between ${
                        isSelected
                          ? 'border-brand-forest bg-brand-forest/5 ring-1 ring-brand-forest'
                          : 'border-brand-borderControl/50 bg-brand-bgPrimary hover:border-brand-borderControl'
                      }`}
                    >
                      <div>
                        <p className={`text-sm font-semibold ${isSelected ? 'text-brand-forest' : 'text-brand-textPrimary'}`}>
                          {option.title}
                        </p>
                        <p className="text-xs text-brand-textSecondary mt-0.5">
                          {option.desc}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'border-brand-forest bg-brand-forest text-brand-surface' : 'border-brand-borderControl'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão de Envio / Redirecionamento para WhatsApp */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-semibold text-brand-surface bg-brand-terracotta hover:bg-brand-terracottaHover transition-all shadow-soft-card active:scale-[0.99] min-h-[56px] disabled:opacity-70"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>{formData.submitButtonText}</span>
                <Send className="w-4 h-4 ml-1" aria-hidden="true" />
              </button>
            </div>

            {/* Micro-aviso LGPD (Art. 7º, V e Art. 9º) */}
            <div className="pt-2 border-t border-brand-borderSubtle">
              <div className="flex items-start gap-2.5 text-xs text-brand-textSecondary leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-brand-forest mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p>
                  {formData.privacyNotice.text}{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacyModal}
                    className="font-semibold text-brand-terracotta hover:underline inline-block focus-visible:rounded"
                  >
                    {formData.privacyNotice.linkText}
                  </button>
                </p>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
