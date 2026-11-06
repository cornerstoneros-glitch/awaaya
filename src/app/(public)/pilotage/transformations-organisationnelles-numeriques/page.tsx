import type { Metadata } from "next";
import Link from "next/link";
import { 
  Layers, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Target, 
  BarChart3, 
  Users2, 
  RefreshCw,
  Zap,
  HelpCircle
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Pilotage : Transformations Organisationnelles & Numériques | AWAAYA Abidjan",
  description: "Sécurisation de l'exécution de vos grands projets, cellule PMO externalisée, conduite du changement et intégration CRM (Salesforce) / ERP en Côte d'Ivoire par un réseau de consultants experts.",
};

export default function TransformationsOrganisationnellesNumeriquesPage() {
  const service = AWAAYA_SERVICES.find(
    (s) => s.slug === "transformations-organisationnelles-numeriques"
  )!;

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* HERO BANNER EXÉCUTIF */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1600&auto=format&fit=crop" 
            alt="Transformations organisationnelles et numériques AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 02 · Prestation 1 — Pilotage de Projets</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Pilotage : Transformations organisationnelles & numériques
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Garantir le respect des délais, la maîtrise des coûts et l'adoption effective de vos chantiers stratégiques. Notre <strong>réseau de consultants experts</strong> et directeurs de projets PMO seniors sécurise vos déploiements de solutions (Salesforce, ERP) et la conduite du changement de vos équipes en Côte d'Ivoire et dans la sous-région.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?prestation=transformations-organisationnelles-numeriques"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Structurer une cellule de pilotage PMO</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Users2 className="w-4 h-4 text-white" />
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
          <Link href="/pilotage" className="hover:text-awaaya-forest transition-colors">Pilotage de projets</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Transformations organisationnelles & numériques</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* VALEUR AJOUTÉE & INDICATEURS CLÉS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">94%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Respect des Jalons</p>
            <p className="text-[11px] text-gray-500">Adhérence aux calendriers grâce à la gouvernance PMO AWAAYA</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">0 Rupture</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Continuité d'Activité</p>
            <p className="text-[11px] text-gray-500">Gestion active des risques et plans de contingence opérationnels</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">3 à 12 mois</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Durée Moyenne</p>
            <p className="text-[11px] text-gray-500">Assistance à Maîtrise d'Ouvrage (AMOA) et comités de pilotage</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">CoPil & CoStrat</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Gouvernance Directe</p>
            <p className="text-[11px] text-gray-500">Arbitrages hebdomadaires et mensuels avec les directions générales</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CORPS PRINCIPAL : DÉTAIL DE LA PRESTATION */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest bg-awaaya-forestPale px-3 py-1 rounded-md">
                Dispositif PMO Senior
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
                Sécuriser vos Grands Chantiers de Transformation
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {service.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                  Problématique terrain adressée :
                </span>
                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{service.challenges}"
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-awaaya-forestPale/50 border border-awaaya-forest/15 space-y-1.5 text-xs text-gray-800">
                <strong className="text-awaaya-forest font-bold block">Cible prioritaire :</strong>
                <p className="leading-relaxed">{service.target}</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-800">
                Livrables Contractuels Remis :
              </h3>
              <div className="space-y-2.5">
                {service.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={`/diagnostic?prestation=${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-xs"
                >
                  <span>Cadrer mon projet avec un expert PMO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* DÉMARCHE EN 4 PHASES DE PILOTAGE */}
          <div className="pt-8 border-t border-gray-100 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
                Méthodologie Éprouvée
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                La Démarche en 4 Phases
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.steps.map((st, sIdx) => (
                <div key={sIdx} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <span className="w-8 h-8 rounded-lg bg-awaaya-forest text-white text-xs font-bold flex items-center justify-center">
                    0{sIdx + 1}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-gray-900">{st.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* ARCHITECTURE DE GOUVERNANCE PMO */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-awaaya-forest uppercase tracking-wider">
              Architecture de Gouvernance
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Le Dispositif PMO AWAAYA à Trois Niveaux
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
                Mensuel ou bimensuel. Arbitrage budgétaire, validation des livrables clés et revue des indicateurs d'impact économique et organisationnel.
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
                Quotidien / Continu. Ateliers d'alignement, coaching des managers de proximité et recueil du feedback des collaborateurs utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BANNIÈRE DE CONVERSION */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0F281E] border border-[#1B4332] rounded-2xl p-8 sm:p-12 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase text-emerald-300 tracking-wider">
              Vous lancez un chantier stratégique ou une refonte numérique ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Échangeons avec un directeur de projet PMO AWAAYA
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Sécurisez vos investissements dès la phase de cadrage avec notre réseau de consultants experts en transformation.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/diagnostic?pilier=pilotage"
              className="inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Cadrer mon pilotage PMO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm border border-white/25 transition-all"
            >
              <span>Prendre rendez-vous</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

