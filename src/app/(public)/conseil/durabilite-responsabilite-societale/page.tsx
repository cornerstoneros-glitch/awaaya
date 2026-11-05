import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Target, 
  Sparkles,
  Users2,
  Building2,
  Coins,
  Globe2,
  HelpCircle
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Conseil : Durabilité & Responsabilité Sociétale | AWAAYA Abidjan",
  description: "Stratégie de durabilité, Sustainable Market Entry (S3), due diligence ESG des distributeurs, alignement réglementaire (RDUE, CSRD, BRVM) et reporting extra-financier auditable à Abidjan.",
};

export default function DurabiliteResponsabiliteSocietalePage() {
  const services = AWAAYA_SERVICES.filter(
    (s) => s.pillar === "CONSEIL" && s.domain === "Durabilité & responsabilité sociétale"
  );

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* HERO BANNER EXÉCUTIF */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=85&w=1600&auto=format&fit=crop" 
            alt="Durabilité et responsabilité sociétale AWAAYA" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 01 · Domaine 2 — Conseil Stratégique</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Conseil : Durabilité & responsabilité sociétale
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            De la due diligence ESG de vos partenaires à la publication de rapports de durabilité auditables (GRI, CSRD, BRVM, SFI), notre <strong>réseau de consultants experts</strong> sécurise votre licence sociale d'opérer et transforme les contraintes réglementaires en puissants leviers de compétitivité.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?domaine=durabilite-responsabilite-societale"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Demander un cadrage Durabilité & ESG</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/auto-evaluation?type=rse"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Tester la maturité ESG de votre entreprise</span>
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
          <span className="text-gray-900 font-semibold">Durabilité & responsabilité sociétale</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* VALEUR AJOUTÉE & INDICATEURS CLÉS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">100%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Conformité RDUE & CSRD</p>
            <p className="text-[11px] text-gray-500">Sécurisation totale des flux d'exportation vers l'Union Européenne</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">SFI & BAD</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Standards Bailleurs</p>
            <p className="text-[11px] text-gray-500">Données auditables conformes aux exigences des banques de développement</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">0 Litige</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Licence Sociale d'Opérer</p>
            <p className="text-[11px] text-gray-500">Cartographie d'engagement des collectivités, ONG et communautés locales</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">6 à 8 sem.</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Délai Moyen d'Audit</p>
            <p className="text-[11px] text-gray-500">De l'évaluation initiale à la remise du plan de conformité sur 12 mois</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PRÉSENTATION DÉTAILLÉE DES 2 PRESTATIONS DU DOMAINE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-awaaya-forest uppercase tracking-wider">
            Portefeuille d'Intervention
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Deux Prestations d'Excellence en Durabilité & ESG
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Intervention menée par notre <strong>réseau de consultants experts</strong> composé de juristes de conformité, auditeurs de durabilité et stratèges territoriaux ancrés en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  {service.code ? (
                    <span className="px-3 py-1 rounded-md bg-awaaya-forest text-white font-mono font-black text-xs">
                      {service.code}
                    </span>
                  ) : (
                    <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[11px] bg-awaaya-forestPale px-3 py-1 rounded-md">
                      Reporting ESG
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

                  <div className="p-4 rounded-2xl bg-awaaya-forestPale/50 border border-awaaya-forest/15 text-xs text-gray-800 space-y-1">
                    <strong className="text-awaaya-forest font-bold block">Cible prioritaire :</strong>
                    <p className="leading-relaxed">{service.target}</p>
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

                {/* Démarche en 4 étapes */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Démarche en 4 phases :
                  </span>
                  <div className="space-y-2">
                    {service.steps.map((st, sIdx) => (
                      <div key={sIdx} className="text-xs text-gray-800 flex items-start gap-2">
                        <span className="w-5 h-5 rounded-md bg-gray-100 text-gray-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {sIdx + 1}
                        </span>
                        <div>
                          <strong className="text-gray-900 block font-semibold">{st.title}</strong>
                          <span className="text-gray-600 text-[11px]">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Livrables contractuels */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Livrables contractuels :
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{del}</span>
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
                  Demander un diagnostic ESG
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
      {/* S3 EN DETAIL : LA LICENCE SOCIALE D'OPÉRER */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
              Focus Offre S3
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              « Sustainable Market Entry » : Réconcilier Go-to-Market et Exigences ESG
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              S'implanter durablement en Afrique ou exporter vers des clients européens exigeants nécessite d'intégrer les facteurs ESG dès le premier jour du plan commercial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">Due Diligence Distributeurs</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vérification d'intégrité, de conformité sociale et de gouvernance des partenaires locaux identifiés dans votre étude d'entrée.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">Conformité Export RDUE / CSRD</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Traçabilité des approvisionnements, audits de chaîne de valeur et clauses contractuelles opposables aux acheteurs internationaux.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">Licence Sociale d'Opérer</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cartographie et concertation des institutions, collectivités, ONG et communautés locales pour éliminer les risques de blocage.
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
              Vous préparez une implantation ou une revue de conformité ESG ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Échangeons avec nos consultants experts en durabilité
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Nos auditeurs basés à Abidjan vous accompagnent pour structurer votre feuille de route ESG et publier des indicateurs incontestables.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/diagnostic?domaine=durabilite-responsabilite-societale"
              className="inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Lancer un cadrage ESG</span>
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

