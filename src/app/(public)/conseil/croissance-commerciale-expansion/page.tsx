import type { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Target, 
  Sparkles,
  Users2,
  Building2,
  Zap,
  HelpCircle
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Conseil : Croissance Commerciale & Expansion Régionale | AWAAYA Abidjan",
  description: "Accompagnement stratégique en expansion ouest-africaine, entrée de marché (S1), Key Account Management as a Service (S2) et audit commercial par un réseau de consultants experts à Abidjan.",
};

export default function CroissanceCommercialeExpansionPage() {
  const services = AWAAYA_SERVICES.filter(
    (s) => s.pillar === "CONSEIL" && s.domain === "Croissance commerciale & expansion"
  );

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* HERO BANNER EXÉCUTIF */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=85&w=1600&auto=format&fit=crop" 
            alt="Croissance commerciale et expansion africaine" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 01 · Domaine 1 — Conseil Stratégique</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Conseil : Croissance commerciale & expansion
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            De l'audit initial de vos forces de vente à l'implantation clé en main en Afrique de l'Ouest et Centrale, notre <strong>réseau de consultants experts</strong> accélère vos revenus, qualifie vos distributeurs et gère vos comptes stratégiques en mode délégué.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?domaine=croissance-commerciale-expansion"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Demander un cadrage d'expansion</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Users2 className="w-4 h-4 text-white" />
              <span>Échanger avec un directeur de mission</span>
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
          <Link href="/conseil" className="hover:text-awaaya-forest transition-colors">Conseil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Croissance commerciale & expansion</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* VALEUR AJOUTÉE & INDICATEURS CLÉS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">+38%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Croissance CA ciblée</p>
            <p className="text-[11px] text-gray-500">Moyenne constatée sur nos missions de restructuration commerciale</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">12 Mois</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Plan d'Atterrissage S1</p>
            <p className="text-[11px] text-gray-500">De l'étude de marché à la signature des premiers grands comptes</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">KAM Externe</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Gestion Déléguée S2</p>
            <p className="text-[11px] text-gray-500">Pilotage de la relation et des marges auprès des opérateurs et banques</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">UEMOA / CEMAC</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Portée Géographique</p>
            <p className="text-[11px] text-gray-500">Hub centralisé à Abidjan pour rayonner sur 8+ marchés prioritaires</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PRÉSENTATION DÉTAILLÉE DES 3 PRESTATIONS DU DOMAINE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-awaaya-forest uppercase tracking-wider">
            Portefeuille d'Intervention
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Trois Prestations pour Conquérir et Développer vos Marchés
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Chaque mission est opérée par notre <strong>réseau de consultants experts</strong> réunissant directeurs pays à temps partagé, négociateurs grands comptes et analystes de marché ouest-africains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  {service.code ? (
                    <span className="px-2.5 py-1 rounded-md bg-awaaya-forest text-white font-mono font-black text-xs">
                      {service.code}
                    </span>
                  ) : (
                    <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[11px] bg-awaaya-forestPale px-3 py-1 rounded-md">
                      Diagnostic
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded-md text-xs">
                    <Clock className="w-3.5 h-3.5 text-awaaya-forest" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <div>
                  {service.commercialTitle && (
                    <p className="text-xs font-extrabold text-awaaya-forest mb-1">
                      « {service.commercialTitle} »
                    </p>
                  )}
                  <h3 className="text-xl font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.subtitle}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-awaaya-forestPale/50 border border-awaaya-forest/15 text-xs text-gray-800 space-y-1">
                    <strong className="text-awaaya-forest font-bold block">Cible prioritaire :</strong>
                    <p className="leading-relaxed line-clamp-3">{service.target}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Défi terrain adressé :
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{service.challenges}"
                  </p>
                </div>

                {/* 4 Étapes de Déploiement */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Démarche en 4 phases :
                  </span>
                  <div className="space-y-1.5">
                    {service.steps.map((st, sIdx) => (
                      <div key={sIdx} className="text-xs text-gray-800 flex items-start gap-2">
                        <span className="w-5 h-5 rounded-md bg-gray-100 text-gray-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {sIdx + 1}
                        </span>
                        <div>
                          <strong className="text-gray-900 block font-semibold">{st.title}</strong>
                          <span className="text-gray-600 text-[11px] line-clamp-1">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Livrables Clés */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Livrables contractuels :
                  </span>
                  <div className="space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                        <span className="font-medium">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <Link
                  href={`/diagnostic?prestation=${service.slug}`}
                  className="text-xs font-bold text-awaaya-forest hover:underline"
                >
                  Demander un devis
                </Link>
                <Link
                  href={`/prestations/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-awaaya-forest text-white hover:bg-awaaya-forestDark transition-all px-4 py-2.5 rounded-xl shadow-xs"
                >
                  <span>Fiche détaillée</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* LE MODE OPÉRATOIRE « COUNTRY MANAGER EXTERNALISÉ » */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
              Focus Opérationnel
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Le Mode « Fractional Country Manager » & KAM Délégué
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Pour un éditeur de logiciels, une fintech ou un fabricant international, s'implanter en Afrique de l'Ouest exige de la réactivité et des réseaux de confiance immédiats sans pour autant engager des coûts fixes exorbitants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">01. Agilité & Zéro Risque</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Testez et validez le marché ivoirien et régional pendant 6 à 12 mois sans les contraintes d'une filiale juridique lourde.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">02. Accès Direct C-Level</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Notre réseau de consultants experts vous introduit directement auprès des directeurs généraux, DSI et comités d'investissement.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">03. Alignement CRM Salesforce</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tous les leads, comptes clés et opportunités sont tracés et documentés dans votre CRM central avec un reporting mensuel rigoureux.
              </p>
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
              Prêt à accélérer vos ventes en Afrique de l'Ouest ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Planifions une session de cadrage stratégique
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Nos consultants experts basés à Abidjan analysent votre portefeuille et vos ambitions d'expansion en toute confidentialité.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/diagnostic?domaine=croissance-commerciale-expansion"
              className="inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Lancer mon cadrage</span>
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

