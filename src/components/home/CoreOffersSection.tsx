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
  AWAAYA_TARGET_MARKETS, 
  AWAAYA_ONBOARDING_PROCESS 
} from "@/data/services";

export function CoreOffersSection() {
  const growthOffers = AWAAYA_CORE_OFFERS.filter((o) => o.engine === "CROISSANCE");
  const sustainabilityOffers = AWAAYA_CORE_OFFERS.filter((o) => o.engine === "DURABILITE");

  return (
    <section className="py-20 bg-white text-gray-900 border-b border-gray-200" id="offres-de-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================= */}
        {/* EN-TÊTE DU MODULE : ARCHITECTURE DES OFFRES AWAAYA */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#1B4332] bg-[#EBF5EE] px-3.5 py-1.5 rounded-full border border-[#1B4332]/15 inline-block">
            Architecture des Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Deux moteurs de valeur, quatre offres d'intervention
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {AWAAYA_VALUE_ENGINES.coreThesis}
          </p>
        </div>

        {/* ========================================================= */}
        {/* PÔLE 1 : MOTEUR CROISSANCE COMMERCIALE (OFFRES 1 & 2) */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-[#1B4332]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1B4332] block">
                  Moteur 01 · Revenus & Closing
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  Croissance Commerciale & Grands Comptes
                </h3>
              </div>
            </div>
            <span className="text-xs text-gray-600 font-medium">
              Offre 1 & Offre 2 · Entrée de Marché & KAM Délégué
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {growthOffers.map((offer) => (
              <div 
                key={offer.code} 
                className="bg-[#F8FAF8] rounded-2xl border border-gray-200/90 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#1B4332] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-[#1B4332] text-white">
                      {offer.code}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">
                      Pôle Commercial
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                      {offer.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1.5 leading-relaxed">
                      {offer.summary}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {offer.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-200/60">
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

                <div className="pt-5 border-t border-gray-200 space-y-3 bg-white -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 sm:p-7 rounded-b-2xl">
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

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      href={offer.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:underline"
                    >
                      <span>Fiche détaillée</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/diagnostic"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-medium transition-colors"
                    >
                      <span>Cadrer cette offre</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* PÔLE 2 : MOTEUR TRANSFORMATION DURABLE (OFFRES A & B) */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-emerald-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block">
                  Moteur 02 · Conformité & Circulaire
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  Durabilité, ESG & Économie Circulaire
                </h3>
              </div>
            </div>
            <span className="text-xs text-gray-600 font-medium">
              Offre A & Offre B · Transition Durable & Symbiose Matières
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sustainabilityOffers.map((offer) => (
              <div 
                key={offer.code} 
                className="bg-[#F8FAF8] rounded-2xl border border-gray-200/90 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-emerald-800 text-white">
                      {offer.code}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">
                      Pôle Durabilité
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                      {offer.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1.5 leading-relaxed">
                      {offer.summary}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {offer.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-200/60">
                    <span className="text-xs font-semibold text-gray-800 block">
                      Livrables majeurs :
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {offer.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-gray-200 space-y-3 bg-white -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 sm:p-7 rounded-b-2xl">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-[11px] font-medium text-gray-500 block">Format d'intervention</span>
                      <strong className="text-xs text-gray-900 font-semibold">{offer.format}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-gray-500 block">Tarif indicatif</span>
                      <strong className="text-sm font-mono font-bold text-emerald-800 tabular-nums">{offer.pricing}</strong>
                    </div>
                  </div>

                  {offer.cofinancingNote && (
                    <div className="text-[11px] text-emerald-900 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
                      <span>{offer.cofinancingNote}</span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      href={offer.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:underline"
                    >
                      <span>Fiche détaillée</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/diagnostic"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium transition-colors"
                    >
                      <span>Cadrer cette offre</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SYNTHÈSE EXÉCUTIVE : MODÈLE ÉCONOMIQUE & MATRICE DES OFFRES */}
        {/* ========================================================= */}
        <div className="bg-[#F8FAF8] rounded-2xl border border-gray-200/90 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider block">
                Modèle Économique & Formats
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900">
                Matrice récapitulative des quatre offres
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              Tarifs indicatifs à valider selon la taille de l'organisation
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider">
                  <th className="pb-3 pr-4">Offre</th>
                  <th className="pb-3 px-4">Pôle & Moteur</th>
                  <th className="pb-3 px-4">Format d'intervention</th>
                  <th className="pb-3 px-4">Tarif indicatif</th>
                  <th className="pb-3 pl-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-gray-700">
                <tr className="hover:bg-white transition-colors">
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-gray-900 block">OFFRE 1 · Africa Market Entry</span>
                    <span className="text-gray-500 text-[11px]">Étude pays, distributeurs, plan 12 mois</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#1B4332]">Croissance Commerciale</td>
                  <td className="py-3.5 px-4">Diagnostic, puis retainer & commission</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-900">Diagnostic 5 à 15 K€</td>
                  <td className="py-3.5 pl-4 text-right">
                    <Link href="/conseil/croissance-commerciale-expansion" className="font-semibold text-[#1B4332] hover:underline">
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-gray-900 block">OFFRE 2 · Key Account Management</span>
                    <span className="text-gray-500 text-[11px]">Audit de comptes, plans de compte, closing C-Level</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#1B4332]">Croissance Commerciale</td>
                  <td className="py-3.5 px-4">Retainer mensuel par compte stratégique</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-900">Retainer mensuel</td>
                  <td className="py-3.5 pl-4 text-right">
                    <Link href="/formation/grands-comptes-rse" className="font-semibold text-[#1B4332] hover:underline">
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-gray-900 block">OFFRE A · Sustainable Market Entry</span>
                    <span className="text-gray-500 text-[11px]">Due diligence ESG, parties prenantes, plan 12 mois</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-800">Transformation Durable</td>
                  <td className="py-3.5 px-4">Module sur mission 1 ou diagnostic autonome</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-gray-900">3 à 10 K€</td>
                  <td className="py-3.5 pl-4 text-right">
                    <Link href="/conseil/durabilite-responsabilite-societale" className="font-semibold text-emerald-800 hover:underline">
                      Détails →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-gray-900 block">OFFRE B · Circular Economy Programs</span>
                    <span className="text-gray-500 text-[11px]">Flux de matières, valorisation, symbiose industrielle</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-800">Transformation Durable</td>
                  <td className="py-3.5 px-4">Diagnostic, puis pilotage de programme PMO</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-800">Diagnostic + Pilotage *</td>
                  <td className="py-3.5 pl-4 text-right">
                    <Link href="/pilotage" className="font-semibold text-emerald-800 hover:underline">
                      Détails →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500">
            * Les bailleurs de fonds internationaux peuvent cofinancer l'offre B (économie circulaire et valorisation des déchets industriels).
          </p>
        </div>

        {/* ========================================================= */}
        {/* BANDEAU ANCRAGE ABIDJAN : HUB RÉGIONAL */}
        {/* ========================================================= */}
        <div className="bg-[#1B4332] text-white rounded-2xl p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 border border-white/15 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-300 uppercase block">
                Ancrage Opérationnel
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-0.5">
                {AWAAYA_VALUE_ENGINES.hub.label} — Hub Régional au cœur de 13 Marchés
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal mt-1 max-w-2xl">
                {AWAAYA_VALUE_ENGINES.hub.description} Équipe bilingue français-anglais basée à Abidjan pour piloter vos closing commerciaux et vos programmes de durabilité.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white hover:bg-gray-100 text-[#1B4332] font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-sm"
          >
            Prendre contact à Abidjan
          </Link>
        </div>

        {/* ========================================================= */}
        {/* MARCHÉS VISÉS (LOCAL/RÉGIONAL VS INTERNATIONAL) */}
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

