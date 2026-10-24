/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bgPrimary: '#F4F1EA',        // Alabastro / Areia suave (Fundo principal)
          bgSecondary: '#EAE5DC',      // Pedra morna (Seções alternadas)
          surface: '#FAF8F5',          // Papel creme (Cards, inputs, modais)
          textPrimary: '#232220',      // Carvão quente (14.09:1 AAA)
          textSecondary: '#57534E',    // Cinza pedra escuro (6.76:1 AA/AAA)
          terracotta: '#A8431F',       // Destaque primário / Botões CTA (5.68:1 AA)
          terracottaHover: '#8F3617',  // Hover do CTA (7.12:1 AAA)
          forest: '#1E4D3B',           // Destaque secundário / CRM / Foco (8.54:1 AAA)
          borderSubtle: '#E2DDD2',     // Divisores decorativos
          borderControl: '#7D766D',    // Bordas de inputs e botões secundários (3.57:1 AA - WCAG 1.4.11)
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(35, 34, 32, 0.05)',
        'elevated': '0 12px 32px -4px rgba(35, 34, 32, 0.08)',
        'floating': '0 20px 40px -8px rgba(35, 34, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
