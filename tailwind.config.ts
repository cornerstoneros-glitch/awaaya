import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awaaya: {
          // CHARTE AWAAYA : VERT FORÊT · BLANC · GRIS
          forest: "#1B4332",       // Vert Forêt Signature
          forestDark: "#0F281E",   // Vert Forêt Sombre (Hero / Bannières)
          forestDeep: "#0A1F17",   // Vert Forêt Nocturne
          forestMid: "#2D6A4F",    // Vert Feuillage
          forestLight: "#40916C",  // Vert Forêt Vif
          forestPale: "#EBF5EE",   // Vert Forêt Teinté Doux (Puces, Badges)
          
          white: "#FFFFFF",        // Blanc
          
          // Alias de sécurité (compatibilité globale, zéro texte blanc sur blanc)
          primary: "#1B4332",
          primaryHover: "#143527",
          accent: "#2D6A4F",
          accentHover: "#1B4332",
          sage: "#2D6A4F",
          sageLight: "#EBF5EE",
          light: "#F0F4F1",        // Fond minéral doux teinté forêt (adieu le tout-blanc éblouissant)
          dark: "#1A2E26",         // Anthracite teinté forêt très lisible
          
          // Nuances de Gris Minéraux
          gray50: "#F4F6F4",       // Gris très clair teinté
          gray100: "#E9EDE9",      // Gris séparateur doux
          gray200: "#D8E0DA",      // Bordures nettes
          gray300: "#B8C4BC",      // Bordures soutenues
          gray400: "#8A9990",      // Icônes & labels
          gray500: "#5F6E65",      // Texte secondaire
          gray600: "#44524A",      // Texte corps lisible
          gray700: "#2F3B34",      // Titres & accents
          gray800: "#1E2722",      // Titres majeurs
          gray900: "#111814",      // Noir ardoise
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
