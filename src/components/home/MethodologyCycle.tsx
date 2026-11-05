"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Search, 
  FileSpreadsheet, 
  Settings2, 
  LineChart, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

interface MethodStep {
  step: string;
  title: string;
  subtitle: string;
  icon: any;
  duration: string;
  description: string;
  deliverables: string[];
  keyQuestion: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    step: "01",
    title: "Diagnostic 360° & Matérialité",
    subtitle: "Comprendre l'existant sans concession",
    icon: Search,
    duration: "2 à 4 semaines",
    description: "Immersion analytique complète : audit commercial, cartographie des parties prenantes, matrice de double matérialité ESG et évaluation des freins organisationnels.",
    deliverables: ["Scorecard de maturité 360°", "Matrice de double matérialité", "Rapport d'audit des flux de ventes"],
    keyQuestion: "Où se situent vos poches réelles de rentabilité et vos vulnérabilités ESG ?"
  },
  {
    step: "02",
    title: "Plan d'Action Stratégique",
    subtitle: "Coconstruire une feuille de route réaliste",
    icon: FileSpreadsheet,
    duration: "3 à 4 semaines",
    description: "Alignement du Comité de Direction, arbitrage des priorités, modélisation budgétaire et définition des KPIs de rentabilité commerciale et d'impact extra-financier.",
    deliverables: ["Plan d'Action Commercial (PAC) chiffré", "Feuille de route Durabilité à 3 ans", "Gouvernance et matrice RACI"],
    keyQuestion: "Quels sont les leviers prioritaires à fort retour sur investissement durable ?"
  },
  {
    step: "03",
    title: "Déploiement PMO & Conduite du Changement",
    subtitle: "Passer des intentions à l'action terrain",
    icon: Settings2,
    duration: "3 à 6 mois",
    description: "Installation du bureau de projet (PMO), rituels hebdomadaires de pilotage des jalons, ateliers d'appropriation des pratiques et formations sur-mesure des équipes.",
    deliverables: ["Tableaux de bord hebdomadaires PMO", "Supports d'ateliers et de formation", "Registre des risques et remédiations"],
    keyQuestion: "Comment garantir que chaque collaborateur s'approprie la transformation ?"
  },
  {
    step: "04",
    title: "Suivi des Indicateurs & Pérennisation",
    subtitle: "Mesurer l'impact dans la durée",
    icon: LineChart,
    duration: "Accompagnement continu",
    description: "Mise à disposition du portail Espace Client AWAAYA : suivi des indicateurs ESG (carbone, eau, social) et commerciaux, revues de performance trimestrielles et audit de conformité.",
    deliverables: ["Portail Espace Client avec KPI en temps réel", "Rapports de durabilité annuels", "Revues trimestrielles de gouvernance"],
    keyQuestion: "Comment prouver vos résultats aux banques, actionnaires et régulateurs ?"
  }
];

export function MethodologyCycle() {
  const [activeStep, setActiveStep] = useState(0);
  const current = METHOD_STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITRE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaaya-forestPale text-awaaya-forestDark text-xs font-bold uppercase tracking-wider border border-awaaya-forest/20 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-awaaya-forest" />
            <span>Notre Promesse de Marque</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
            « Du Diagnostic au Suivi des Actions »
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Un cycle éprouvé en 4 phases intégrées qui transforme la réflexion stratégique en résultats mesurables sur le terrain.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* NAVIGATION DES 4 ÉTAPES RESPONSIVE */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {METHOD_STEPS.map((item, idx) => {
            const isSelected = activeStep === idx;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-6 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? "bg-awaaya-forest text-white border-awaaya-forest shadow-md"
                    : "bg-[#F8F9FA] border-gray-200 hover:border-awaaya-forest hover:bg-white text-gray-900 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono ${isSelected ? "text-white" : "text-gray-400 group-hover:text-awaaya-forest"}`}>
                    {item.step}
                  </span>
                  <div className={`p-2.5 rounded-xl ${isSelected ? "bg-white/20 text-white" : "bg-white text-gray-700 border border-gray-200 shadow-2xs"}`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>
                </div>

                <h4 className={`text-base font-extrabold font-heading mb-1 leading-snug ${isSelected ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h4>

                <p className={`text-xs ${isSelected ? "text-gray-200" : "text-gray-500 font-medium"}`}>
                  {item.duration}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DÉTAIL IMMERSIF DE L'ÉTAPE ACTIVE */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-[#F8F9FA] rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm grid md:grid-cols-12 gap-8 items-center text-gray-900">
          
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black text-awaaya-forest uppercase tracking-widest bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-2xs">
              <span>Phase {current.step} d'accompagnement</span>
              <span>·</span>
              <span>{current.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              {current.title}
            </h3>

            <p className="text-gray-700 text-base leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Question directrice */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-awaaya-forest shadow-xs">
              <span className="text-[11px] font-black uppercase text-awaaya-forest tracking-wider block mb-1">
                Enjeu clé tranché lors de cette étape :
              </span>
              <p className="text-sm font-bold text-gray-900 italic">
                « {current.keyQuestion} »
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-xs space-y-5">
            <h4 className="text-sm font-black font-heading uppercase tracking-wider text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
              <span>Livrables remis à votre DG :</span>
            </h4>

            <div className="space-y-3">
              {current.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-900 bg-[#F8F9FA] p-3.5 rounded-xl border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-awaaya-forest mt-1.5 flex-shrink-0" />
                  <span className="font-semibold">{deliv}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="w-full inline-flex items-center justify-center gap-2 bg-awaaya-forest text-white text-xs font-extrabold py-3.5 px-4 rounded-xl hover:bg-awaaya-forestDark transition-all shadow-sm"
              >
                <span>Démarrer par l'Étape 01 (Diagnostic)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
