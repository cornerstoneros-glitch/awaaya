import type { Metadata } from "next";
import Link from "next/link";
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Target, 
  RefreshCw, 
  Users, 
  BarChart3,
  Sparkles
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Pilotage de Projets Complexes & PMO | AWAAYA Abidjan",
  description: "Sécurisation de l'exécution de vos grands projets de transformation, cellule PMO externalisée et conduite du changement en Côte d'Ivoire.",
};

export default function PilotagePage() {
  const pilotageServices = AWAAYA_SERVICES.filter(
    (s) => s.pillar === "PILOTAGE" && s.slug !== "programmes-rse-economie-circulaire"
  );

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      
      {/* ========================================================= */}
      {/* HERO BANNER PILIER PILOTAGE */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1600&auto=format&fit=crop" 
            alt="Pilotage de Projets et PMO AWAAYA" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 02 — Pilotage de Projets & PMO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Sécuriser l'exécution de vos chantiers stratégiques et garantir vos délais
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Un plan stratégique ne vaut que par la rigueur de son déploiement. Notre <strong>réseau de consultants experts</strong> et directeurs PMO installe des cellules de gouvernance agiles, pilote l'avancement des jalons et embarque vos équipes dans la conduite du changement.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?pilier=pilotage"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Structurer une cellule de pilotage PMO</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <span>Échanger avec un directeur de projet PMO</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FIL D'ARIANE / BREADCRUMB */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-awaaya-forest transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Pilotage de Projets & PMO</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* MÉTRIQUES CLÉS & VALEUR AJOUTÉE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-bold font-mono tabular-nums text-awaaya-forest">94%</p>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Respect des Jalons</p>
            <p className="text-[11px] text-gray-500">Adhérence aux calendriers grâce à la gouvernance PMO AWAAYA</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-bold font-mono tabular-nums text-awaaya-forest">0 Rupture</p>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Continuité d'activité</p>
            <p className="text-[11px] text-gray-500">Gestion des risques et plans de contingence opérationnels</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-bold font-mono tabular-nums text-awaaya-forest">100%</p>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Maîtrise Budgétaire</p>
            <p className="text-[11px] text-gray-500">Contrôle continu des coûts et prévention des dérives financières</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-bold font-mono tabular-nums text-awaaya-forest">CoPil</p>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Gouvernance Directe</p>
            <p className="text-[11px] text-gray-500">Comités hebdomadaires et mensuels avec les directions générales</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CATALOGUE DU PILIER PILOTAGE DE PROJETS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-awaaya-forest">
            Organisation du Portefeuille
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900">
            Pilotage de Projets : Transformations Organisationnelles & Numériques
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Gouvernance opérationnelle, PMO et conduite du changement pour garantir le respect des délais, des budgets et l'adoption effective par vos équipes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          {pilotageServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
                  <span className="font-semibold text-awaaya-forest uppercase tracking-wider text-xs bg-awaaya-forestPale px-3 py-1 rounded-md">
                    {service.domain}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-md text-xs">
                    <Clock className="w-3.5 h-3.5 text-awaaya-forest" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <div>
                  {service.commercialTitle && (
                    <span className="text-xs font-bold text-awaaya-forest block mb-1">
                      « {service.commercialTitle} »
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.subtitle}
                  </p>
                  {service.target && (
                    <div className="text-xs bg-awaaya-forestPale/60 border border-awaaya-forest/15 rounded-xl p-3.5 text-gray-800">
                      <strong className="text-awaaya-forest font-semibold block mb-0.5">Cible :</strong>
                      <span className="leading-relaxed">{service.target}</span>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 space-y-2">
                  <span className="text-xs font-semibold text-gray-500">
                    Problématique terrain :
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{service.challenges}"
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500">
                    Livrables concrets :
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
                <Link
                  href={`/pilotage/${service.slug}`}
                  className="text-xs font-semibold text-awaaya-forest hover:underline"
                >
                  Consulter la page détaillée du domaine
                </Link>
                <Link
                  href={`/prestations/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-awaaya-forest text-white hover:bg-awaaya-forestDark transition-all px-4 py-2.5 rounded-lg shadow-xs"
                >
                  <span>Fiche détaillée de la prestation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* CADRE MÉTHODOLOGIQUE PMO DE HAUTE RIGUEUR */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-awaaya-forest uppercase tracking-wider">
              Architecture de Gouvernance
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Le Dispositif PMO AWAAYA
            </h3>
            <p className="text-sm text-gray-600">
              Une gouvernance éprouvée pour éliminer les retards, désamorcer les conflits d'objectifs et sécuriser vos budgets.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-awaaya-forestPale text-awaaya-forest">
                Niveau 1 · Direction
              </span>
              <h4 className="font-heading font-bold text-base text-gray-900">Comité Stratégique (CoStrat)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mensuel ou bimensuel. Arbitrage budgétaire, validation des livrables clés et revue des indicateurs d'impact économique et ESG.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-awaaya-forestPale text-awaaya-forest">
                Niveau 2 · Opérations
              </span>
              <h4 className="font-heading font-bold text-base text-gray-900">Comité de Pilotage (CoPil)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hebdomadaire. Suivi précis du tableau d'avancement des jalons, gestion des alertes critiques et résolution des points de blocage.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-awaaya-forestPale text-awaaya-forest">
                Niveau 3 · Terrain
              </span>
              <h4 className="font-heading font-bold text-base text-gray-900">Cellule de Conduite du Changement</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Quotidien / Continu. Ateliers d'alignement, coaching des managers de proximité et recueil du feedback des collaborateurs.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

