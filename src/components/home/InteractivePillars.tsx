"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Layers,
  ArrowUpRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { AWAAYA_SERVICES, ServiceDetail } from "@/data/services";

type PillarKey = "CONSEIL" | "PILOTAGE" | "FORMATION";

interface PillarMeta {
  key: PillarKey;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  badgeText: string;
}

const PILLARS_CONFIG: PillarMeta[] = [
  {
    key: "CONSEIL",
    number: "01",
    title: "Conseil",
    shortTitle: "Conseil",
    tagline: "Croissance commerciale & expansion · Durabilité & responsabilité sociétale",
    description: "Conseil : deux domaines, Croissance commerciale & expansion et Durabilité & responsabilité sociétale, comprenant cinq prestations.",
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    badgeText: "2 Domaines · 5 Prestations"
  },
  {
    key: "PILOTAGE",
    number: "02",
    title: "Pilotage de projets",
    shortTitle: "Pilotage de projets",
    tagline: "Transformations organisationnelles et numériques · Programmes RSE et économie circulaire",
    description: "Pilotage de projets : transformations organisationnelles et numériques ; programmes RSE et économie circulaire.",
    heroImage: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1000&auto=format&fit=crop",
    badgeText: "2 Prestations de Pilotage"
  },
  {
    key: "FORMATION",
    number: "03",
    title: "Formation & mobilisation",
    shortTitle: "Formation & mobilisation",
    tagline: "Gestion et développement des grands comptes (Key Account Management)",
    description: "Formation & mobilisation : gestion et développement des grands comptes B2B en Afrique de l'Ouest.",
    heroImage: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop",
    badgeText: "Formation Exécutive Certifiante"
  }
];

export function InteractivePillars() {
  const [activePillar, setActivePillar] = useState<PillarKey>("CONSEIL");
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceDetail | null>(null);

  const currentMeta = PILLARS_CONFIG.find((p) => p.key === activePillar)!;
  const currentServices = AWAAYA_SERVICES.filter(
    (s) =>
      s.pillar === activePillar &&
      s.slug !== "programmes-rse-economie-circulaire" &&
      s.slug !== "formation-sensibilisation-appropriation-rse"
  );

  return (
    <section id="piliers-offre" className="py-20 bg-[#F4F6F4] text-gray-900 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* EN-TÊTE ÉQUILIBRÉ & RYTHMÉ */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-awaaya-forest text-xs font-extrabold uppercase tracking-wider border border-gray-200 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-awaaya-forest" />
            <span>Portefeuille d'Expertise AWAAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
            Conseil, Pilotage & Formations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Sélectionnez votre pilier pour explorer des solutions conçues sur-mesure pour les directions générales et grands comptes.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BARRE D'ONGLETS COMPACTE & CENTRÉE RESPONSIVE */}
        {/* ========================================================= */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-300 shadow-xs max-w-full gap-1.5">
            {PILLARS_CONFIG.map((pillar) => {
              const isSelected = activePillar === pillar.key;
              return (
                <button
                  key={pillar.key}
                  onClick={() => setActivePillar(pillar.key)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-awaaya-forest text-white shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {pillar.number}
                  </span>
                  <span>{pillar.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BANDEAU RECAPITULATIF DU PILIER (AVEC VISUEL AFRICAIN) */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark rounded-3xl text-white shadow-md mb-8 grid md:grid-cols-12 overflow-hidden border border-white/10">
          <div className="p-6 sm:p-8 md:col-span-8 space-y-3 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 border border-white/20 text-white">
                Pilier {currentMeta.number}
              </span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-gray-200">
                {currentMeta.badgeText}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {currentMeta.title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed font-normal">
              {currentMeta.description}
            </p>
            <div className="pt-2">
              <Link
                href={`/diagnostic?pilier=${currentMeta.key.toLowerCase()}`}
                className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <span>Demander un cadrage {currentMeta.shortTitle}</span>
                <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 relative min-h-[180px] md:min-h-full">
            <img
              src={currentMeta.heroImage}
              alt={currentMeta.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-awaaya-forest via-awaaya-forest/40 to-transparent" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* GRILLE PARFAITEMENT ÉQUILIBRÉE DES PRESTATIONS */}
        {/* ========================================================= */}
        <div className={`grid gap-6 ${
          currentServices.length === 2 
            ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" 
            : currentServices.length === 1 
            ? "grid-cols-1 max-w-2xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {currentServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl border border-gray-200 hover:border-awaaya-forest p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Tag & Durée */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[11px] truncate">
                    {service.domain}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-600 font-semibold bg-gray-100 px-2.5 py-1 rounded-md text-[11px] flex-shrink-0">
                    <Clock className="w-3 h-3 text-awaaya-forest" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Titre & Sous-titre bien proportionnés */}
                <div>
                  <h4 className="text-lg font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.subtitle}
                  </p>
                </div>

                {/* Livrables Clés compacts & alignés */}
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Livrables concrets :
                  </p>
                  <div className="space-y-1.5">
                    {service.deliverables.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Boutons d'action harmonisés en pied de carte */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(service)}
                  className="text-xs font-bold text-gray-700 hover:text-awaaya-forest transition-colors underline decoration-dotted underline-offset-4"
                >
                  Aperçu démarche ({service.steps.length} étapes)
                </button>

                <Link
                  href={`/prestations/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-awaaya-forestPale text-awaaya-forest hover:bg-awaaya-forest hover:text-white transition-all px-3 py-2 rounded-xl"
                >
                  <span>Fiche</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* MODAL RAPIDE DE LA DÉMARCHE (ZÉRO DÉFORMATION DU LAYOUT) */}
        {/* ========================================================= */}
        {selectedServiceForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-awaaya-forest tracking-wider">
                    {selectedServiceForModal.domain}
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-gray-900 mt-1">
                    {selectedServiceForModal.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Démarche structurée en {selectedServiceForModal.steps.length} étapes clés · Durée : {selectedServiceForModal.duration}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="text-gray-400 hover:text-gray-700 p-2 text-lg font-bold"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                {selectedServiceForModal.steps.map((st, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-awaaya-forest text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900">{st.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 pl-7">{st.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-4 py-2"
                >
                  Fermer
                </button>

                <Link
                  href={`/diagnostic?prestation=${selectedServiceForModal.slug}`}
                  className="inline-flex items-center gap-2 bg-awaaya-forest text-white text-xs font-extrabold px-5 py-3 rounded-xl hover:bg-awaaya-forestDark transition-all shadow-sm"
                >
                  <span>Demander un diagnostic pour cette prestation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
