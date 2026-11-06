import type { Metadata } from "next";
import Link from "next/link";
import { 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Target, 
  Sparkles,
  Calendar,
  GraduationCap
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Formation & Mobilisation des Talents — Executive Education | AWAAYA Abidjan",
  description: "Formations certifiantes pour dirigeants, directions commerciales et managers à Abidjan : Key Account Management (KAM), négociation complexe et conduite du changement.",
};

export default function FormationPage() {
  const formationServices = AWAAYA_SERVICES.filter((s) => s.pillar === "FORMATION");

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      
      {/* ========================================================= */}
      {/* HERO BANNER PILIER FORMATION */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=85&w=1600&auto=format&fit=crop" 
            alt="Masterclass et formation exécutive AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 03 — Formation & Mobilisation des Talents</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Développer les compétences managériales et commerciales qui font la différence
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Des masterclasses immersives et des ateliers pratiques animés par notre <strong>réseau de consultants experts</strong> et praticiens seniors pour les directions générales, cadres commerciaux et responsables d'impact. Formats inter et intra-entreprises sanctionnés par des attestations nominatives certifiantes à Abidjan.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact?sujet=formation"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Demander le calendrier des sessions 2026</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/prestations/formation-grands-comptes-kam"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Award className="w-4 h-4 text-white" />
              <span>Découvrir la Masterclass Grands Comptes (KAM)</span>
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
          <span className="text-gray-900 font-semibold">Formation & Mobilisation des Talents</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* MÉTRIQUES CLÉS & VALEUR AJOUTÉE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">100%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Certifiant</p>
            <p className="text-[11px] text-gray-500">Attestations nominatives de compétences signées par le cabinet</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">85%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Mises en situation</p>
            <p className="text-[11px] text-gray-500">Cas réels d'entreprises ivoiriennes et simulations de négociation</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">Inter / Intra</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">2 Formats Flexibles</p>
            <p className="text-[11px] text-gray-500">En nos locaux au Plateau/Cocody ou sur votre site d'entreprise</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">12 max.</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Participants / groupe</p>
            <p className="text-[11px] text-gray-500">Groupes restreints pour favoriser l'interactivité et le mentorat direct</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PROGRAMME DU PILIER FORMATION & MOBILISATION */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-awaaya-forest">
            Organisation du Portefeuille
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900">
            Formation & Mobilisation : Gestion et Développement des Grands Comptes
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Formation & mobilisation : <strong>gestion et développement des grands comptes</strong> (Key Account Management & négociation commerciale complexe).
          </p>
          <div className="pt-1">
            <Link
              href="/formation/grands-comptes-rse"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-awaaya-forest hover:text-awaaya-forestDark transition-colors bg-awaaya-forestPale px-3.5 py-1.5 rounded-lg"
            >
              <span>Page détaillée : Grands comptes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          
          {/* PROGRAMME : GESTION ET DÉVELOPPEMENT DES GRANDS COMPTES */}
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group space-y-6">
            <div className="space-y-4">
              {/* VIGNETTE VISUELLE PROGRAMME */}
              <div className="relative rounded-xl overflow-hidden h-48 border border-gray-100 shadow-xs">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=800&auto=format&fit=crop" 
                  alt="Gestion et développement des grands comptes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">Négociation Grands Comptes B2B · Abidjan</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-awaaya-forest uppercase tracking-wider text-xs bg-awaaya-forestPale px-3 py-1 rounded-md">
                  Formation & mobilisation
                </span>
                <span className="inline-flex items-center gap-1.5 text-gray-600 font-medium bg-gray-100 px-2.5 py-1 rounded-md text-xs">
                  <Clock className="w-3.5 h-3.5 text-awaaya-forest" />
                  <span>1 à 3 jours</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                  Gestion et développement des grands comptes
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Professionnaliser la négociation complexe, la vente de valeur et la posture stratégique Key Account Management (KAM) auprès des clients corporate et institutionnels.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-700">
                <p className="font-semibold text-gray-900">Points clés du programme :</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                    <span>Cartographie des parties prenantes (Power Mapping B2B)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                    <span>Techniques de négociation complexe & closing à fort enjeu</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                    <span>Plan de Compte Annuel (Account Plan) prêt à déployer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <span className="text-xs font-mono font-medium text-gray-500">Inter & Intra</span>
              <Link
                href="/prestations/formation-grands-comptes-kam"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-awaaya-forest text-white hover:bg-awaaya-forestDark transition-all px-4 py-2.5 rounded-lg shadow-xs"
              >
                <span>Fiche détaillée de la formation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 2 FORMATS DE DÉPLOIEMENT : INTER & INTRA */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-44 border border-gray-100 shadow-xs mb-2">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=85&w=800&auto=format&fit=crop" 
                alt="Sessions inter-entreprises à Abidjan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Plateau & Cocody · Abidjan</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-awaaya-forestPale text-awaaya-forest flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-gray-900">
              Sessions Inter-Entreprises à Abidjan
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Organisées chaque trimestre dans des espaces exécutifs au Plateau ou à Cocody. Idéales pour confronter vos pratiques à celles de pairs d'autres secteurs économiques et enrichir votre réseau professionnel.
            </p>
            <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
                <span>Calendrier fixé à l'avance (inscription par collaborateur)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
                <span>Support pédagogique complet et classeurs opérationnels remis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-44 border border-gray-100 shadow-xs mb-2">
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=800&auto=format&fit=crop" 
                alt="Sessions intra-entreprise sur-mesure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Déploiement Sur Site · Panafricain</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-awaaya-forestPale text-awaaya-forest flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-gray-900">
              Sessions Intra-Entreprise Sur-Mesure
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Déployées exclusivement pour vos équipes au sein de votre siège ou site d'exploitation. Le programme est personnalisé pour cibler vos enjeux précis de marché, votre culture d'entreprise et vos processus internes.
            </p>
            <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
                <span>Études de cas réelles bâties à partir de vos propres données</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
                <span>Alignement immédiat de l'ensemble de votre force de vente</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* BANDEAU SHOWCASE : PÉDAGOGIE ACTIVE & CERTIFICATION */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1600&auto=format&fit=crop" 
            alt="Pédagogie d'excellence AWAAYA" 
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F281E]/95 via-[#0F281E]/80 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-xl text-white space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Pédagogie Active & Mentorat Exécutif
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                Des compétences immédiatement applicables sur vos comptes stratégiques
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                Nos formateurs sont des praticiens seniors en activité en Afrique de l'Ouest, garantissant une transmission ancrée dans les réalités de négociation locale et de conformité internationale.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

