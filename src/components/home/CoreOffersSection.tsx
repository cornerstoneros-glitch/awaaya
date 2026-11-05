import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Leaf, 
  MapPin, 
  CheckCircle2, 
  Coins, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  Clock, 
  Briefcase,
  Users2
} from "lucide-react";
import { 
  AWAAYA_CORE_OFFERS, 
  AWAAYA_VALUE_ENGINES, 
  AWAAYA_PROVEN_METRICS, 
  AWAAYA_RESULTS, 
  AWAAYA_TARGET_MARKETS, 
  AWAAYA_ONBOARDING_PROCESS 
} from "@/data/services";

export function CoreOffersSection() {
  return (
    <section className="py-20 bg-white text-gray-900 border-b border-gray-200" id="offres-de-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ========================================================= */}
        {/* SLIDE 2 : UN CABINET, DEUX MOTEURS DE VALEUR */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-[#1B4332] bg-[#EBF5EE] px-3.5 py-1.5 rounded-full border border-[#1B4332]/15 inline-block">
              Proposition de Valeur Fondatrice
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight">
              {AWAAYA_VALUE_ENGINES.tagline}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {AWAAYA_VALUE_ENGINES.coreThesis}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* MOTEUR 1 : CROISSANCE */}
            <div className="bg-[#F8FAF8] rounded-xl p-7 border border-gray-200/90 flex flex-col justify-between space-y-6 hover:border-[#1B4332] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1B4332] uppercase">
                    Moteur 01
                  </span>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mt-1">
                    Croissance Commerciale
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Entrer sur les marchés africains et piloter les comptes stratégiques régionaux avec une équipe de vente C-Level dédiée.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>OFFRE 1 : Africa Market Entry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>OFFRE 2 : Key Account Management</span>
                </div>
              </div>
            </div>

            {/* MOTEUR 2 : DURABILITÉ */}
            <div className="bg-[#F8FAF8] rounded-xl p-7 border border-gray-200/90 flex flex-col justify-between space-y-6 hover:border-[#1B4332] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center font-bold">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1B4332] uppercase">
                    Moteur 02
                  </span>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mt-1">
                    Durabilité & Impact
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Intégrer l'ESG et l'économie circulaire dans la stratégie et les opérations pour sécuriser la conformité et la licence sociale d'opérer.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>OFFRE A : Sustainable Market Entry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>OFFRE B : Circular Economy Programs</span>
                </div>
              </div>
            </div>

            {/* ANCRAGE ABIDJAN */}
            <div className="bg-gradient-to-br from-[#1B4332] to-[#0F281E] text-white rounded-xl p-7 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 text-emerald-300 border border-white/15 flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-300 uppercase">
                    Présence Terrain
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1">
                    {AWAAYA_VALUE_ENGINES.hub.label}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                  {AWAAYA_VALUE_ENGINES.hub.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 space-y-1.5 text-xs text-gray-300">
                <p className="font-semibold text-white">Hub opérationnel UEMOA / CEDEAO</p>
                <p>Abidjan, Cocody Riviera · Bilingue FR / EN</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SLIDE 3 & 4 : QUATRE OFFRES COMPLÉMENTAIRES & MODÈLE ÉCONOMIQUE */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#1B4332]">
                Structure Détaillée & Tarification
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight">
                Quatre offres complémentaires & modèle économique
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md leading-relaxed">
              Une grille tarifaire transparente adaptée à la maturité de l'entreprise, avec cofinancement bailleurs possible sur les programmes d'économie circulaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {AWAAYA_CORE_OFFERS.map((offer) => (
              <div 
                key={offer.code} 
                className="bg-[#F8FAF8] rounded-xl border border-gray-200/90 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#1B4332] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[#1B4332]">
                      {offer.code}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {offer.engineLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                      {offer.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1 leading-relaxed">
                      {offer.summary}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {offer.description}
                  </p>

                  {/* Livrables contractuels */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-gray-800 block">
                      Livrables majeurs :
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {offer.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modèle économique & Format */}
                <div className="pt-5 border-t border-gray-200 space-y-3 bg-white -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 sm:p-7 rounded-b-xl">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-[11px] font-medium text-gray-500 block">Format d'intervention</span>
                      <strong className="text-xs text-gray-900 font-semibold">{offer.format}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-gray-500 block">Tarif indicatif</span>
                      <strong className="text-sm font-mono font-bold text-[#1B4332] tabular-nums">{offer.pricing}</strong>
                    </div>
                  </div>

                  {offer.cofinancingNote && (
                    <div className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
                      <span>{offer.cofinancingNote}</span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={offer.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:underline"
                    >
                      <span>Consulter la fiche détaillée</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/diagnostic"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-medium transition-colors"
                    >
                      <span>Demander un cadrage</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SLIDE 6 : RÉSULTATS OBTENUS (RÉFÉRENCES RÉELLES DU DOCUMENT) */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#1B4332]">
              Historique Opérationnel & Impact Chiffré
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight">
              Résultats obtenus par nos équipes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Des réalisations concrètes sur des comptes stratégiques régionaux et des programmes complexes en Afrique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWAAYA_RESULTS.map((res, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1B4332] transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      {res.scope}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 font-heading">
                    {res.client}
                  </h3>
                  <div className="text-2xl font-mono font-bold text-[#1B4332] tabular-nums pt-1">
                    {res.figure}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal pt-1">
                    {res.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>Vérifié en comité</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1B4332]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SLIDE 8 : MARCHÉS VISÉS (LOCAL/RÉGIONAL VS INTERNATIONAL) */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#1B4332]">
                Segmentation B2B
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight">
                Marchés visés & Typologies de clients
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md leading-relaxed">
              Une double capacité d'intervention pour les acteurs établis sur le continent et les groupes internationaux en phase d'expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LOCAL & RÉGIONAL */}
            <div className="bg-[#F8FAF8] rounded-xl p-7 border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-gray-900">
                    {AWAAYA_TARGET_MARKETS.local.title}
                  </h3>
                  <span className="text-xs text-gray-500">Côte d'Ivoire, Sénégal, UEMOA / CEDEAO</span>
                </div>
              </div>
              <ul className="space-y-2.5 pt-2 text-xs text-gray-700">
                {AWAAYA_TARGET_MARKETS.local.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-gray-150">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* INTERNATIONAL */}
            <div className="bg-[#F8FAF8] rounded-xl p-7 border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center font-bold">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-gray-900">
                    {AWAAYA_TARGET_MARKETS.international.title}
                  </h3>
                  <span className="text-xs text-gray-500">Europe, Inde, Moyen-Orient, Asie</span>
                </div>
              </div>
              <ul className="space-y-2.5 pt-2 text-xs text-gray-700">
                {AWAAYA_TARGET_MARKETS.international.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-gray-150">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SLIDE 9 : DÉMARRONS ENSEMBLE (PROCESSUS EN 3 TEMPS) */}
        {/* ========================================================= */}
        <div className="bg-[#F8FAF8] rounded-xl border border-gray-200/90 p-8 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#1B4332]">
              Cadrage & Déploiement
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 tracking-tight">
              Démarrons ensemble : un parcours éprouvé
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              De l'évaluation initiale aux premiers closing commerciaux et reporting de durabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {AWAAYA_ONBOARDING_PROCESS.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#EBF5EE] text-[#1B4332]">
                    Étape 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    {p.period}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-gray-900">
                  {p.step}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#0F281E] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-xs"
            >
              <span>Réserver votre diagnostic gratuit de 45 minutes</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <a
              href="tel:+2250545455245"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-3.5 rounded-xl font-medium text-sm transition-colors"
            >
              <span>Appeler le cabinet : +225 05 45 45 52 45</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
