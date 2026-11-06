"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Zap } from "lucide-react";

interface PriorityOption {
  id: string;
  label: string;
  tag: string;
  recommendedService: string;
  serviceSlug: string;
  duration: string;
  deliverablePreview: string;
  description: string;
}

const PRIORITIES: PriorityOption[] = [
  {
    id: "s1-market-entry",
    label: "Vendre en Afrique de l'Ouest & Centrale sans y créer de structure lourde",
    tag: "S1 · Market Entry",
    recommendedService: "Stratégie de croissance et expansion en Afrique (Africa Market Entry & Go-to-Market)",
    serviceSlug: "strategie-croissance-expansion-afrique",
    duration: "3 à 12 mois (Mode Country Manager externalisé)",
    deliverablePreview: "Étude de marché, qualification des partenaires distributeurs & plan commercial sur 12 mois",
    description: "Pour éditeurs de logiciels, fintechs, cybersécurité et fabricants internationaux. Nos équipes jouent le rôle de directeur pays à temps partagé pour piloter votre bureau et vos ventes locales."
  },
  {
    id: "s2-kam-service",
    label: "Piloter et développer mes comptes stratégiques (Opérateurs, Banques, Corporates)",
    tag: "S2 · KAM as a Service",
    recommendedService: "Gestion et développement des grands comptes (Key Account Management as a Service)",
    serviceSlug: "gestion-developpement-grands-comptes",
    duration: "Accompagnement continu / Mission trimestrielle",
    deliverablePreview: "Audit de portefeuille, plans de comptes stratégiques chiffrés & coaching CRM Salesforce",
    description: "Pour entreprises technologiques disposant de comptes stratégiques en Afrique sans responsable local dédié. AWAAYA agit comme votre Key Account Manager externe pour maximiser up-sell et fidélisation."
  },
  {
    id: "s3-sustainable-entry",
    label: "Sécuriser mon implantation ou mes exportations face aux exigences ESG",
    tag: "S3 · Sustainable Entry",
    recommendedService: "Diagnostic de durabilité & conformité ESG (Sustainable Market Entry)",
    serviceSlug: "diagnostic-rse-strategie-durabilite",
    duration: "6 à 12 semaines",
    deliverablePreview: "Due diligence ESG des partenaires, cartographie des parties prenantes & plan de lancement",
    description: "Pour entreprises étrangères s'implantant en Afrique et exportateurs locaux vers l'Europe. Intégration de critères de durabilité, gestion des risques réputationnels et licence sociale d'opérer."
  },
  {
    id: "s4-circular-economy",
    label: "Réduire les coûts matières industriels et valoriser les déchets en boucle fermée",
    tag: "S4 · Circular Economy",
    recommendedService: "Programmes d'économie circulaire et durabilité (Circular Economy Programs)",
    serviceSlug: "programmes-rse-economie-circulaire",
    duration: "6 à 18 mois (Comité de pilotage & KPIs)",
    deliverablePreview: "Diagnostic des flux de matières, montage d'écosystème multi-acteurs & symbiose industrielle",
    description: "Pour industriels, cimenteries, imprimeries, agroalimentaire et distribution. Identification des gisements de valeur, réemploi/recyclage et gouvernance de projet mesurable."
  }
];

export function QuickAssessmentTeaser() {
  const [selectedId, setSelectedId] = useState("s1-market-entry");
  const current = PRIORITIES.find((p) => p.id === selectedId)!;

  return (
    <section className="py-24 bg-[#0F281E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 px-4 py-1.5 rounded-full bg-[#143527] border border-white/15">
            Orientation Immédiate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Quel est votre enjeu prioritaire du moment ?
          </h2>
          <p className="text-gray-200 text-base sm:text-lg">
            Sélectionnez votre situation pour découvrir immédiatement l'intervention AWAAYA recommandée.
          </p>
        </div>

        {/* SELECTEUR INTERACTIF EN 4 BOUTONS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          {PRIORITIES.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 rounded-xl text-left text-xs font-bold transition-all border ${
                  isSelected
                    ? "bg-white text-[#0F281E] border-white shadow-md"
                    : "bg-[#143527] text-gray-200 border-white/15 hover:bg-[#1B4332] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[11px] uppercase tracking-wider font-mono font-bold ${isSelected ? "text-[#1B4332]" : "text-emerald-300"}`}>
                    {item.tag}
                  </span>
                  {isSelected && <Zap className="w-4 h-4 text-[#1B4332] fill-[#1B4332]" />}
                </div>
                <p className="line-clamp-2 leading-snug text-sm">{item.label}</p>
              </button>
            );
          })}
        </div>

        {/* CARTE RECOMMANDATION DYNAMIQUE — TEXTE FONCÉ ULTRA LISIBLE */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-[#1B4332] tracking-wider">
                Recommandation AWAAYA
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-500 font-semibold">Délai estimé : {current.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
              {current.recommendedService}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {current.description}
            </p>

            <div className="p-4 rounded-xl bg-[#EBF5EE] border border-[#1B4332]/20 flex items-start gap-3 text-xs text-[#0F281E]">
              <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
              <span><strong className="text-[#1B4332]">Livrable clé remis :</strong> {current.deliverablePreview}</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3 justify-center">
            <Link
              href={`/diagnostic?prestation=${current.serviceSlug}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#0F281E] text-white font-bold text-sm py-4 px-5 rounded-xl transition-all shadow-sm"
            >
              <span>Demander ce diagnostic</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <Link
              href={`/prestations/${current.serviceSlug}`}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#1B4332] py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <span>Consulter la fiche détaillée</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
