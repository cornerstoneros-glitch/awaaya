import type { Metadata } from "next";
import Link from "next/link";
import { 
  Network, 
  Compass, 
  Layers, 
  FileCheck2, 
  Briefcase, 
  Scale, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Users,
  BarChart3,
  ShieldCheck
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Plan du Site | AWAAYA - Conseils, Stratégies & Pilotage",
  description: "Arborescence complète et plan d'accès direct à toutes les pages institutionnelles, prestations de conseil, outils d'auto-évaluation et services du cabinet AWAAYA à Abidjan.",
};

export default function PlanDuSitePage() {
  const conseilServices = AWAAYA_SERVICES.filter((s) => s.pillar === "CONSEIL");
  const pilotageServices = AWAAYA_SERVICES.filter((s) => s.pillar === "PILOTAGE");
  const formationServices = AWAAYA_SERVICES.filter((s) => s.pillar === "FORMATION");

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      {/* ========================================================= */}
      {/* BANNIÈRE HAUTE VERT FORÊT ILLUSTRÉE */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1600&auto=format&fit=crop" 
            alt="Arborescence du cabinet AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
            <Network className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Navigation Globale</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight mb-4">
            Plan du Site
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Retrouvez ici l'ensemble des rubriques, des fiches de prestations détaillées, des simulateurs d'évaluation et des ressources du cabinet AWAAYA.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FIL D'ARIANE / BREADCRUMB */}
      {/* ========================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-awaaya-forest transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Plan du Site</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* GRILLE DU PLAN DU SITE */}
      {/* ========================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 1. PAGES INSTITUTIONNELLES */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-awaaya-forest">Général</span>
                <h2 className="text-lg font-heading font-extrabold text-gray-900">Pages Institutionnelles</h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Page d'accueil</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Présentation globale, vision, méthodologie et chiffres clés.</p>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="/a-propos" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>À Propos du Cabinet</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Histoire, valeurs fondamentales, engagements et équipe.</p>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="/contact" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Contact & Rendez-vous</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Coordonnées du bureau d'Abidjan et formulaire d'échange.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. OUTILS DE DIAGNOSTIC & CONVERSION */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-awaaya-forest">Interactif</span>
                <h2 className="text-lg font-heading font-extrabold text-gray-900">Outils & Diagnostics</h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/diagnostic" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Demande de Diagnostic Flash</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Formulaire qualifié en 3 étapes pour cadrer votre mission.</p>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="/auto-evaluation?type=rse" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Auto-évaluation Durabilité & ESG</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Test de maturité environnementale, sociale et de gouvernance.</p>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="/auto-evaluation?type=commercial" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Mini-diagnostic Commercial</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Audit flash de votre force de vente et de votre portefeuille clients.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. CADRE LÉGAL & DÉONTOLOGIE */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-awaaya-forest">Réglementaire</span>
                <h2 className="text-lg font-heading font-extrabold text-gray-900">Cadre Légal & Déontologie</h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/mentions-legales" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Mentions Légales</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Éditeur, hébergement, propriété intellectuelle et RCCM.</p>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="/confidentialite" className="group flex items-center justify-between text-gray-700 hover:text-awaaya-forest font-semibold transition-colors">
                  <span>Politique de Confidentialité</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-awaaya-forest transition-colors" />
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">Protection des données personnelles et droits d'accès.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. PILIER 1 : CONSEIL STRATÉGIQUE & DURABILITÉ */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs md:col-span-2 lg:col-span-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase text-awaaya-forest tracking-wider">Pilier 01</span>
                <h2 className="text-xl font-heading font-extrabold text-gray-900">
                  Conseil Stratégique & Durabilité
                </h2>
              </div>
            </div>
            <Link
              href="/conseil"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-awaaya-forest hover:text-awaaya-forestDark bg-awaaya-forestPale px-3 py-1.5 rounded-xl transition-colors self-start sm:self-center"
            >
              <span>Page détaillée du pilier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conseilServices.map((service) => (
              <Link
                key={service.slug}
                href={`/prestations/${service.slug}`}
                className="group p-4 rounded-2xl bg-gray-50 hover:bg-awaaya-forestPale border border-gray-200 hover:border-awaaya-forest transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-awaaya-forest uppercase tracking-wider block mb-1">
                    {service.domain}
                  </span>
                  <h3 className="text-sm font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold text-awaaya-forest">
                  <span>Consulter la fiche</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. PILIER 2 : PILOTAGE DE PROJETS & ÉCONOMIE CIRCULAIRE */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs md:col-span-2 lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase text-awaaya-forest tracking-wider">Pilier 02</span>
                <h2 className="text-xl font-heading font-extrabold text-gray-900">
                  Pilotage de Projets & Économie Circulaire
                </h2>
              </div>
            </div>
            <Link
              href="/pilotage"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-awaaya-forest hover:text-awaaya-forestDark bg-awaaya-forestPale px-3 py-1.5 rounded-xl transition-colors self-start sm:self-center"
            >
              <span>Page détaillée du pilier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pilotageServices.map((service) => (
              <Link
                key={service.slug}
                href={`/prestations/${service.slug}`}
                className="group p-4 rounded-2xl bg-gray-50 hover:bg-awaaya-forestPale border border-gray-200 hover:border-awaaya-forest transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-awaaya-forest uppercase tracking-wider block mb-1">
                    {service.domain}
                  </span>
                  <h3 className="text-sm font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold text-awaaya-forest">
                  <span>Consulter la fiche</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 6. PILIER 3 : FORMATION & MOBILISATION */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-awaaya-forest tracking-wider">Pilier 03</span>
                  <h2 className="text-xl font-heading font-extrabold text-gray-900">
                    Formation & Talents
                  </h2>
                </div>
              </div>
              <Link
                href="/formation"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-awaaya-forest hover:text-awaaya-forestDark bg-awaaya-forestPale px-3 py-1.5 rounded-xl transition-colors self-start sm:self-center"
              >
                <span>Page détaillée</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {formationServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/prestations/${service.slug}`}
                  className="group p-4 rounded-2xl bg-gray-50 hover:bg-awaaya-forestPale border border-gray-200 hover:border-awaaya-forest transition-all flex flex-col justify-between block"
                >
                  <div>
                    <span className="text-[10px] font-bold text-awaaya-forest uppercase tracking-wider block mb-1">
                      {service.domain}
                    </span>
                    <h3 className="text-sm font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold text-awaaya-forest">
                    <span>Consulter la fiche</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

