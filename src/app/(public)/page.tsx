import Link from "next/link";
import { ArrowRight, Phone, Calendar, Mail, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ImpactBento } from "@/components/home/ImpactBento";
import { InteractivePillars } from "@/components/home/InteractivePillars";
import { MethodologyCycle } from "@/components/home/MethodologyCycle";
import { QuickAssessmentTeaser } from "@/components/home/QuickAssessmentTeaser";
import { SectorsGrid } from "@/components/home/SectorsGrid";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { CoreOffersSection } from "@/components/home/CoreOffersSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9F8] text-gray-800">
      {/* 1. HERO SLIDER NATURE & SIGNATURE AWAAYA (VERT FORÊT IMMERSIF) */}
      <HeroSlider />

      {/* 2. PRÉSENTATION INSTITUTIONNELLE & ORGANISATION DU PORTEFEUILLE */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold text-[#1B4332] bg-[#EBF5EE] px-3.5 py-1.5 rounded-full border border-[#1B4332]/15 inline-block">
                Signature de marque : Conseils, Stratégies & Pilotage
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900 leading-tight">
                Croître en Afrique, de façon rentable et durable
              </h2>
              <p className="text-sm font-semibold text-[#1B4332] leading-snug">
                Conseil en expansion régionale, gestion de comptes clés et transformation durable · Abidjan, Côte d’Ivoire
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                AWAAYA est un cabinet de conseil, de transformation et de durabilité basé à Abidjan. S'appuyant sur un <strong>réseau de consultants experts</strong> sectoriels et directeurs de mission chevronnés, le cabinet accompagne les organisations dans leur développement commercial, le pilotage de leurs transformations et la mise en œuvre de leur démarche de durabilité. Il intervient du diagnostic au suivi des actions, avec des prestations adaptées aux objectifs, aux ressources et aux contraintes du client.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-200 shadow-xs">
                  <img
                    src="/images/team/nelly-touali.jpg"
                    alt="Nelly TOUALI - Executive Advisor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <strong className="text-xs font-bold text-gray-900 block">Nelly TOUALI</strong>
                  <span className="text-[11px] text-gray-500 block">Fondatrice & Directrice Générale</span>
                  <Link
                    href="/a-propos#nelly-touali"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1B4332] hover:underline"
                  >
                    <span>Consulter le dossier exécutif</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <span className="text-xs font-semibold text-gray-600 block">
                Organisation du portefeuille d'expertise
              </span>

              <div className="p-5 rounded-xl bg-[#F8FAF8] border border-gray-200/90 space-y-1.5 hover:border-[#1B4332] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B4332]">
                    Conseil
                  </span>
                  <span className="text-[11px] font-medium text-gray-600 bg-white px-2.5 py-0.5 rounded-md border border-gray-200">
                    5 prestations
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-normal">
                  Deux domaines : <strong>Croissance commerciale & expansion</strong> et <strong>Durabilité & responsabilité sociétale</strong>, comprenant cinq prestations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAF8] border border-gray-200/90 space-y-1.5 hover:border-[#1B4332] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B4332]">
                    Pilotage de projets
                  </span>
                  <span className="text-[11px] font-medium text-gray-600 bg-white px-2.5 py-0.5 rounded-md border border-gray-200">
                    2 prestations
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-normal">
                  <strong>Transformations organisationnelles et numériques</strong> ; <strong>programmes RSE et économie circulaire</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAF8] border border-gray-200/90 space-y-1.5 hover:border-[#1B4332] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B4332]">
                    Formation & mobilisation
                  </span>
                  <span className="text-[11px] font-medium text-gray-600 bg-white px-2.5 py-0.5 rounded-md border border-gray-200">
                    1 programme d'élite
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-normal">
                  <strong>Gestion et développement des grands comptes</strong> (Key Account Management, vente de valeur et closing à fort enjeu).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OFFRE DE SERVICES FONDATRICE (PPTX) : DEUX MOTEURS, 4 OFFRES & RÉSULTATS */}
      <CoreOffersSection />

      {/* 4. ILS NOUS FONT CONFIANCE & TÉMOIGNAGES DE SATISFACTION */}
      <ClientTestimonials />

      {/* 4. BENTO GRID D'IMPACT (FOND BLANC & GRIS PERLÉ, ACCENTS FORÊT) */}
      <ImpactBento />

      {/* 5. MATRICE DES 3 PILIERS (FOND GRIS DOUX, CARTES BLANCHES & FORÊT) */}
      <InteractivePillars />

      {/* 6. LE CYCLE MÉTHODOLOGIQUE « DU DIAGNOSTIC AU SUIVI » (FOND BLANC) */}
      <MethodologyCycle />

      {/* 7. ORIENTATION EXPRESS : SÉLECTEUR D'ENJEU (VERT FORÊT SOMBRE ÉLÉGANT) */}
      <QuickAssessmentTeaser />

      {/* 8. EXPERTISE SECTORIELLE (FOND GRIS DOUX, CARTES BLANCHES) */}
      <SectorsGrid />

      {/* 8. BANNIÈRE INSTITUTIONNELLE FINALE (VERT FORÊT PROFOND) */}
      <section className="bg-gradient-to-br from-[#1B4332] to-[#0F281E] text-white py-24 relative overflow-hidden" style={{ backgroundColor: "#0F281E" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Cabinet Référent Abidjan · Côte d'Ivoire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold max-w-4xl mx-auto leading-tight text-white">
            Prêt à accélérer votre croissance ou réussir votre transition ESG ?
          </h2>

          <p className="text-gray-100 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Rencontrez nos associés et directeurs de mission à Abidjan pour un entretien de cadrage stratégique confidentiel et sans engagement.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#0F281E] font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-2xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-[#0F281E]" />
              <span>Prendre rendez-vous avec un associé</span>
              <ArrowRight className="w-5 h-5 text-[#0F281E]" />
            </Link>

            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-md border border-white/25 text-base sm:text-lg transition-all"
            >
              <span>Demander un diagnostic flash</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Ligne directe Abidjan : <strong className="text-white">+225 05 45 45 52 45</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>Email exécutif : <strong className="text-white">contact@awaaya.ci</strong></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
