import type { Metadata } from "next";
import Link from "next/link";
import { 
  RefreshCw, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Target, 
  BarChart3, 
  Users2, 
  Factory,
  Zap,
  TrendingDown,
  Quote,
  HelpCircle
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Pilotage : Programmes RSE & Économie Circulaire (S4) | AWAAYA Abidjan",
  description: "Offre phare de durabilité AWAAYA S4 : Diagnostic des flux matières et déchets, ingénierie de symbiose industrielle, consortium multi-acteurs et pilotage sur 6 à 18 mois pour cimenteries, imprimeries et agro-industries.",
};

export default function ProgrammesRseEconomieCirculairePage() {
  const service = AWAAYA_SERVICES.find(
    (s) => s.slug === "programmes-rse-economie-circulaire"
  )!;

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* HERO BANNER EXÉCUTIF */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1600&auto=format&fit=crop" 
            alt="Économie circulaire et valorisation industrielle AWAAYA" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 02 · Prestation 2 — Offre Phare S4</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Pilotage : Programmes RSE & économie circulaire
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Réduire vos coûts matières et valoriser vos déchets en boucle fermée. Notre <strong>réseau de consultants experts</strong> et ingénieurs circulaires conçoit des symbioses industrielles inter-entreprises, monte des consortiums multi-acteurs et pilote vos programmes de valorisation sur 6 à 18 mois avec des indicateurs financiers mesurables.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?prestation=programmes-rse-economie-circulaire"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Lancer un diagnostic flux & matières</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Factory className="w-4 h-4 text-white" />
              <span>Échanger avec un ingénieur circulaire</span>
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
          <span className="text-gray-900 font-semibold">Programmes RSE & économie circulaire</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* VALEUR AJOUTÉE & INDICATEURS CLÉS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">-25%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Coûts Matières & Déchets</p>
            <p className="text-[11px] text-gray-500">Économies directes sur les achats de matières premières et la mise en décharge</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">210 M</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">FCFA d'Économies / an</p>
            <p className="text-[11px] text-gray-500">Gains constatés sur nos projets de valorisation de sous-produits</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">6 à 18 mois</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Pilotage PMO Terrain</p>
            <p className="text-[11px] text-gray-500">Comités de pilotage mensuels et indicateurs de performance suivis en direct</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">Symbiose</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Écosystème Multi-Acteurs</p>
            <p className="text-[11px] text-gray-500">Boucles d'échange matière entre usines voisines, collecteurs et collectivités</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CORPS PRINCIPAL : DÉTAIL DE L'OFFRE S4 */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-md bg-awaaya-forest text-white font-mono font-black text-xs">
                  S4
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest bg-awaaya-forestPale px-3 py-1 rounded-md">
                  Offre Phare de Durabilité
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
                S4 : « Circular Economy Programs »
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {service.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                  Défi terrain adressé :
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
                  <span>Cadrer un programme de valorisation circulaire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* DÉMARCHE EN 4 PHASES DE L'OFFRE S4 */}
          <div className="pt-8 border-t border-gray-100 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
                Méthodologie Opérationnelle S4
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Les 4 Piliers du Déploiement Circulaire
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
      {/* FOCUS SUR LES SECTEURS INDUSTRIELS CIBLES */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
              Applications Concrètes
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Des Solutions Tailleur pour les Industriels Ouest-Africains
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              L'économie circulaire n'est pas une théorie abstraite : elle répond directement aux défis de coûts matières et d'approvisionnement des grands sites industriels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-sm text-gray-900">Cimenteries & Matériaux</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Substitution de combustibles fossiles par de la biomasse locale et réemploi des laitiers et scories dans la formulation des ciments.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-sm text-gray-900">Imprimeries & Packaging</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Boucles fermées de récupération des chutes de carton, recyclage des solvants et réintroduction d'encres éco-conçues.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-sm text-gray-900">Agro-Industrie</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Valorisation énergétique des coques de cacao, tourteaux et effluents en biogaz ou fertilisants organiques pour les coopératives.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-sm text-gray-900">Grande Distribution</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Optimisation logistique inverse des palettes et caisses réemployables, élimination des emballages à usage unique non valorisables.
              </p>
            </div>
          </div>

          {/* Témoignage client */}
          <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-200 flex items-start gap-4">
            <Quote className="w-8 h-8 text-awaaya-forest/30 shrink-0 mt-1" />
            <div className="space-y-2">
              <p className="text-xs sm:text-sm italic text-gray-800 leading-relaxed">
                « AWAAYA a su concevoir un modèle de symbiose industrielle qui réduit à la fois nos coûts d'achat de matières et notre empreinte environnementale avec un retour sur investissement spectaculaire. »
              </p>
              <div className="text-xs">
                <strong className="text-gray-900 block font-bold">Yannick Gnahoré</strong>
                <span className="text-gray-600 text-[11px]">Directeur des Opérations Industrielles — Cimenteries & Travaux Industriels SA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BANNIÈRE DE CONVERSION */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase text-emerald-300 tracking-wider">
              Prêt à transformer vos déchets en gisement de rentabilité ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Échangeons avec nos experts en ingénierie circulaire
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Nos consultants basés à Abidjan réalisent le diagnostic matière de votre site industriel et vous remettent un business plan de valorisation chiffré.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/diagnostic?prestation=programmes-rse-economie-circulaire"
              className="inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Lancer un diagnostic matières</span>
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

