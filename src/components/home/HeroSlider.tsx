"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  Briefcase,
  Target,
  ShieldCheck,
  Building2,
  Sparkles,
  Layers,
  Recycle,
  GraduationCap
} from "lucide-react";

export interface HeroSlide {
  id: number;
  imageUrl: string;
  tagline: string;
  location: string;
  badgeLabel: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  metricDescription: string;
  primaryCtaLabel: string;
  primaryCtaLink: string;
  secondaryCtaLabel: string;
  secondaryCtaLink: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    imageUrl: "/images/team/nelly-touali.jpg",
    tagline: "Conseil en expansion régionale, gestion de comptes clés et transformation durable",
    location: "Abidjan, Côte d'Ivoire · Hub Régional 13 Marchés",
    badgeLabel: "Deux Moteurs de Valeur · Croissance & Durabilité",
    headlinePrefix: "Croître en Afrique, de façon",
    headlineHighlight: "rentable",
    headlineSuffix: "et durable.",
    description: "Les entreprises qui visent l’Afrique de l’Ouest et du Centre ont besoin de vendre, de fidéliser et de se conformer aux exigences ESG de leurs clients. AWAAYA relie ces trois besoins dans une offre unique.",
    metricValue: "13 Marchés",
    metricLabel: "Hub Bilingue Abidjan",
    metricDescription: "Un ancrage stratégique bilingue français-anglais au cœur des opportunités d'Afrique de l'Ouest et Centrale.",
    primaryCtaLabel: "Démarrer par un diagnostic (45 min)",
    primaryCtaLink: "/diagnostic",
    secondaryCtaLabel: "Découvrir le cabinet",
    secondaryCtaLink: "/a-propos"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=2000&auto=format&fit=crop",
    tagline: "Moteur 1 · Africa Market Entry & Key Account Management",
    location: "Vente Complexe & Gestion Déléguée de Comptes Clés",
    badgeLabel: "Moteur Croissance · Offres 1 & 2",
    headlinePrefix: "Entrer sur les marchés africains et piloter vos",
    headlineHighlight: "Comptes Stratégiques",
    headlineSuffix: ".",
    description: "Étude pays, partenaires et distributeurs, plan commercial sur 12 mois, audit de comptes, plans de compte, gestion déléguée de comptes clés et coaching des équipes locales.",
    metricValue: "30 M€+",
    metricLabel: "Opportunités Commerciales",
    metricDescription: "Plus de 30 millions d'euros d'opportunités influencées et des contrats majeurs signés (MTN, Orange, Cybersécurité).",
    primaryCtaLabel: "Explorer le moteur Croissance",
    primaryCtaLink: "/conseil/croissance-commerciale-expansion",
    secondaryCtaLabel: "Audit commercial",
    secondaryCtaLink: "/diagnostic"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=85&w=2000&auto=format&fit=crop",
    tagline: "Moteur 2 · Sustainable Market Entry & Circular Economy",
    location: "Conformité ESG & Symbiose Industrielle",
    badgeLabel: "Moteur Durabilité · Offres A & B",
    headlinePrefix: "Intégrer l'ESG et l'économie circulaire dans votre",
    headlineHighlight: "Stratégie et Opérations",
    headlineSuffix: ".",
    description: "Due diligence ESG des partenaires, cartographie des parties prenantes, plan ESG de lancement intégré au go-to-market et diagnostic des flux de matières pour valoriser les déchets.",
    metricValue: "5 Prog.",
    metricLabel: "Économie Circulaire & ESG",
    metricDescription: "Programmes de durabilité pilotés et certification Leadership for Sustainability (Swedish Institute 2025).",
    primaryCtaLabel: "Découvrir le moteur Durabilité",
    primaryCtaLink: "/conseil/durabilite-responsabilite-societale",
    secondaryCtaLabel: "Auto-évaluation ESG",
    secondaryCtaLink: "/auto-evaluation?type=rse"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=2000&auto=format&fit=crop",
    tagline: "20+ Années d'Excellence · Résultats Majeurs à Grande Échelle",
    location: "MTN (8 Filiales) · Orange (13 Filiales) · Cybersécurité",
    badgeLabel: "Résultats Éprouvés · Grands Comptes",
    headlinePrefix: "Des impacts financiers mesurables et des",
    headlineHighlight: "Résultats Concrets",
    headlineSuffix: "démontrés.",
    description: "2,3 M$/an générés sur 8 filiales MTN avec gestion du P&L, 1,2 M€ d'infrastructures data center chez Orange (13 filiales) et 2 M€ sur des projets majeurs de cybersécurité analytique.",
    metricValue: "20+ Ans",
    metricLabel: "Vente Complexe & Direction",
    metricDescription: "Plus de 100 dirigeants accompagnés et 13 marchés africains couverts avec succès.",
    primaryCtaLabel: "Demander un diagnostic (45 min)",
    primaryCtaLink: "/diagnostic",
    secondaryCtaLabel: "Contacter le cabinet",
    secondaryCtaLink: "/contact"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=2000&auto=format&fit=crop",
    tagline: "Démarrons ensemble · Nelly Touali & Réseau d'Experts",
    location: "Abidjan · Cocody Riviera Bonoumin",
    badgeLabel: "Leadership · Méthode en 3 Étapes",
    headlinePrefix: "Du diagnostic initial de 45 min aux",
    headlineHighlight: "Premiers Résultats",
    headlineSuffix: "en 2 mois.",
    description: "Fondé par Nelly Touali (ex-Tecnotree, Atos, Alcatel), AWAAYA vous accompagne dès les semaines 1 à 2 par un cadrage gratuit, une proposition en semaines 3 à 6, et des résultats dès le 2e mois.",
    metricValue: "45 Min",
    metricLabel: "Diagnostic Stratégique",
    metricDescription: "Entretien d'alignement direct pour identifier vos poches de rentabilité et vos priorités d'expansion.",
    primaryCtaLabel: "Prendre rendez-vous",
    primaryCtaLink: "/contact",
    secondaryCtaLabel: "Profil de la fondatrice",
    secondaryCtaLink: "/a-propos"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique toutes les 7 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const current = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#0F281E] text-white overflow-hidden py-16 lg:py-24">
      {/* ========================================================= */}
      {/* IMAGES CORPORATE HAUTE RÉSOLUTION & MASQUE VERT FORÊT SOMBRE */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.tagline}
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=2000&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover object-center brightness-90 contrast-105"
              />
            </div>
          );
        })}

        {/* Masque Vert Forêt Sombre Signature (#0F281E) pour lisibilité absolue du texte blanc */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F281E]/95 via-[#0F281E]/80 to-[#0F281E]/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F281E] via-transparent to-black/35 z-10" />
      </div>

      {/* ========================================================= */}
      {/* CONTENU TEXTE & CTAs QUI CHANGENT AVEC LE SLIDE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ZONE TEXTE & CTAs DYNAMIQUE */}
          <div key={`text-${currentSlide}`} className="lg:col-span-8 space-y-7 animate-in fade-in duration-700 ease-out">
            
            {/* Badge Titre / Thématique B2B */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#143527] border border-white/20 text-white text-xs font-semibold tracking-normal shadow-sm">
                <Briefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-300 shrink-0" />
                <span className="truncate max-w-[280px] sm:max-w-none">{current.location}</span>
              </div>
              {/* Badge métrique visible uniquement sur mobile & tablette */}
              <div className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B4332] border border-white/25 text-white text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                <span className="font-mono tabular-nums">{current.metricValue}</span>
                <span>·</span>
                <span>{current.metricLabel}</span>
              </div>
            </div>

            {/* Titre Principal qui change avec le Slide */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-white min-h-0 sm:min-h-[150px] lg:min-h-[180px] flex flex-col justify-center">
              <span>{current.headlinePrefix}</span>
              <span>
                <span className="text-white underline decoration-emerald-400/60 decoration-2 underline-offset-8">
                  {current.headlineHighlight}
                </span>{" "}
                {current.headlineSuffix}
              </span>
            </h1>

            {/* Descriptif spécifique au Slide */}
            <p className="text-sm sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl min-h-0 sm:min-h-[60px]">
              {current.description}
            </p>

            {/* CTAs DYNAMIQUES & CONTEXTUELS RESPONSIVE */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href={current.primaryCtaLink}
                className="bg-white hover:bg-gray-100 text-[#0F281E] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 text-sm sm:text-base transform hover:-translate-y-0.5 text-center"
              >
                <span>{current.primaryCtaLabel}</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#0F281E]" />
              </Link>
              <Link
                href={current.secondaryCtaLink}
                className="bg-[#143527] hover:bg-[#1B4332] text-white font-medium px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all border border-white/25 text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm text-center"
              >
                <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
                <span>{current.secondaryCtaLabel}</span>
              </Link>
            </div>
          </div>

          {/* CARTOUCHE D'IMPACT DYNAMIQUE */}
          <div key={`cartouche-${currentSlide}`} className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end space-y-4 animate-in fade-in duration-500 ease-out">
            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 max-w-sm w-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center shrink-0 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono tabular-nums text-[#1B4332] leading-tight">
                    {current.metricValue}
                  </span>
                  <span className="text-xs text-gray-600 font-medium">
                    {current.metricLabel}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {current.metricDescription}
              </p>
            </div>

            {/* Titre du slide avec badge thématique */}
            <div className="bg-[#0A1F17] border border-white/15 px-5 py-3 rounded-xl text-right max-w-sm w-full shadow-sm">
              <p className="text-xs font-semibold text-emerald-300 flex items-center justify-end gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>{current.badgeLabel}</span>
              </p>
              <p className="text-xs text-gray-200 font-medium truncate mt-0.5">{current.tagline}</p>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* CONTRÔLES DU SLIDER (DOTS, NUMÉROTATION, FLÈCHES) */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-white/20 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
          {/* Indicateurs Dots avec progression visuelle (5 slides) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 bg-[#143527] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 max-w-full overflow-x-auto">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group flex items-center transition-all duration-300 shrink-0 ${
                  idx === currentSlide 
                    ? "w-6 sm:w-12 bg-white shadow-md shadow-white/30" 
                    : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                } h-2 sm:h-2.5 rounded-full`}
                aria-label={`Aller au slide ${idx + 1}`}
              />
            ))}
            <span className="ml-1.5 sm:ml-3 text-[11px] sm:text-xs text-white font-mono font-bold tracking-wider shrink-0">
              {String(currentSlide + 1).padStart(2, "0")}{" "}
              <span className="text-gray-400 font-normal">/</span>{" "}
              {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Boutons précédent / suivant */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto sm:ml-0">
            <button
              onClick={goToPrev}
              aria-label="Slide précédent"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#143527] hover:bg-[#1B4332] border border-white/25 flex items-center justify-center text-white transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Slide suivant"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#143527] hover:bg-[#1B4332] border border-white/25 flex items-center justify-center text-white transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
