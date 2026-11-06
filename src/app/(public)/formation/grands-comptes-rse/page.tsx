import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Target, 
  Users2, 
  BookOpen,
  Sparkles,
  Users,
  Briefcase,
  HelpCircle
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Formation & Mobilisation : Gestion et Développement des Grands Comptes | AWAAYA Abidjan",
  description: "Masterclasses d'élite en Key Account Management (KAM), négociation complexe C-Level et vente de valeur par notre réseau de consultants experts à Abidjan.",
};

export default function GrandsComptesRseFormationPage() {
  const services = AWAAYA_SERVICES.filter(
    (s) => s.pillar === "FORMATION" && s.slug !== "formation-sensibilisation-appropriation-rse"
  );

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* HERO BANNER EXÉCUTIF */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1600&auto=format&fit=crop" 
            alt="Formation et masterclass managériale AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 03 — Formation & Mobilisation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Formation & mobilisation : Gestion et développement des grands comptes
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Professionnaliser la négociation complexe, la vente de valeur et la posture stratégique Key Account Management (KAM) auprès des clients corporate et institutionnels. Notre <strong>réseau de consultants experts</strong> transmet les méthodologies éprouvées auprès des leaders du marché ouest-africain.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact?sujet=formation"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Demander le catalogue des formations</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Users2 className="w-4 h-4 text-white" />
              <span>Organiser une session intra-entreprise</span>
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
          <Link href="/formation" className="hover:text-awaaya-forest transition-colors">Formation & mobilisation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Grands comptes & Négociation</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* VALEUR AJOUTÉE & INDICATEURS CLÉS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">100%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Certifiant AWAAYA</p>
            <p className="text-[11px] text-gray-500">Attestations nominatives de compétences remises après validation</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">4,9 / 5</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Score de Satisfaction</p>
            <p className="text-[11px] text-gray-500">Évaluation moyenne attribuée par plus de 350 cadres formés</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">1 à 3 jours</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Formats Intensifs</p>
            <p className="text-[11px] text-gray-500">Sessions inter et intra-entreprises à Abidjan ou sur vos sites</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">Pratique 100%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Simulations Réelles</p>
            <p className="text-[11px] text-gray-500">Entraînement sur les comptes stratégiques et défis réels des apprenants</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PROGRAMME CERTIFIANT DU PILIER */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-awaaya-forest">
            Catalogue Exécutif 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900">
            Programme d'Élite pour Muscler vos Forces Commerciales
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Formation & mobilisation : <strong>gestion et développement des grands comptes</strong> (Key Account Management B2B).
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[11px] bg-awaaya-forestPale px-3 py-1 rounded-md">
                    Cursus Certifiant
                  </span>
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
                    <strong className="text-awaaya-forest font-bold block">Public ciblé :</strong>
                    <p className="leading-relaxed">{service.target}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Défi professionnel adressé :
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{service.challenges}"
                  </p>
                </div>

                {/* Modules Pédagogiques */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Programme pédagogique en 4 modules :
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

                {/* Livrables & Certifications */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Outils remis & Certification :
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
                  href={`/contact?sujet=${encodeURIComponent(service.title)}`}
                  className="text-xs font-bold text-awaaya-forest hover:underline"
                >
                  Inscrire une équipe
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
      {/* DÉMARCHE PÉDAGOGIQUE AWAAYA */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
              Méthode d'Apprentissage
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              L'Approche Pédagogique par l'Action
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nos formations ne sont pas des cours magistraux théoriques : chaque session est animée par des praticiens seniors qui confrontent les participants à des cas réels ouest-africains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">01. Cadrage Préalable</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Entretien avec les directions commerciale et RH pour adapter les études de cas aux offres réelles de votre entreprise.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">02. Simulations & Mises en Situation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Jeux de rôle filmés ou soutenances simulées face à un jury exigeant composé de directeurs de mission AWAAYA.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h4 className="font-heading font-bold text-base text-gray-900">03. Ancrage & Certification</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Évaluation finale, remise des attestations certifiantes nominatives et session de suivi à 60 jours pour mesurer l'impact terrain.
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
              Besoin de former vos équipes ou d'organiser une session sur-mesure ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Échangeons sur vos priorités de montée en compétences
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Nous concevons des programmes intra-entreprises personnalisés pour vos commerciaux et managers à Abidjan et dans toute l'Afrique de l'Ouest.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact?sujet=formation"
              className="inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Demander un devis de formation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm border border-white/25 transition-all"
            >
              <span>Prendre contact</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

