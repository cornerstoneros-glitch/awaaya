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
  Users2
} from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Conseil Stratégique, Croissance Commerciale & ESG | AWAAYA Abidjan",
  description: "Accompagnement stratégique des directions générales et comités de direction en Côte d'Ivoire et Afrique de l'Ouest : audit commercial, expansion panafricaine, feuille de route durabilité et reporting ESG.",
};

export default function ConseilPage() {
  const conseilServices = AWAAYA_SERVICES.filter((s) => s.pillar === "CONSEIL");

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      
      {/* ========================================================= */}
      {/* HERO BANNER PILIER CONSEIL */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1600&auto=format&fit=crop" 
            alt="Conseil Stratégique AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Pilier 01 — Conseil Stratégique & Durabilité</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Éclairer les décisions d'investissement et pérenniser votre croissance
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            De l'audit commercial 360° à la publication de rapports ESG conformes aux standards internationaux, le <strong>réseau de consultants experts</strong> d'AWAAYA arme les dirigeants ouest-africains et investisseurs internationaux pour conquérir des parts de marché tout en sécurisant leur conformité et leur résilience sociétale.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/diagnostic?pilier=conseil"
              className="inline-flex items-center gap-2 bg-white text-awaaya-forestDark hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Demander un cadrage de mission Conseil</span>
              <ArrowRight className="w-4 h-4 text-awaaya-forestDark" />
            </Link>
            <Link
              href="/auto-evaluation?type=commercial"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <BarChart3 className="w-4 h-4 text-white" />
              <span>Tester la maturité commerciale de votre entreprise</span>
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
          <span className="text-gray-900 font-semibold">Conseil Stratégique & Durabilité</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* MÉTRIQUES CLÉS & VALEUR AJOUTÉE */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">+38%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Croissance CA ciblée</p>
            <p className="text-[11px] text-gray-500">Moyenne constatée sur nos réorganisations commerciales</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">4 à 6 sem.</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Délai moyen d'audit</p>
            <p className="text-[11px] text-gray-500">Du diagnostic initial à la remise du plan d'action budgété</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">100%</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Alignement ESG / GRI</p>
            <p className="text-[11px] text-gray-500">Standards internationaux adaptés aux réalités africaines</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-heading font-black text-awaaya-forest">UEMOA</p>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Portée Régionale</p>
            <p className="text-[11px] text-gray-500">Côte d'Ivoire, Sénégal, Bénin, Togo, Mali, Burkina Faso</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CATALOGUE DÉTAILLÉ DU PILIER CONSEIL */}
      {/* 2 DOMAINES · 5 PRESTATIONS STRICTEMENT CONFORMES */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-awaaya-forest uppercase tracking-wider">
            Organisation du Portefeuille
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Conseil : Deux Domaines & Cinq Prestations
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conseil : deux domaines, <strong>Croissance commerciale & expansion</strong> et <strong>Durabilité & responsabilité sociétale</strong>, comprenant cinq prestations à haute valeur ajoutée.
          </p>
        </div>

        {/* DOMAINE 1 : CROISSANCE COMMERCIALE & EXPANSION */}
        <div id="croissance-commerciale-expansion" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-awaaya-forest text-white flex items-center justify-center text-xs font-black">
                1
              </span>
              <div>
                <h3 className="text-xl font-heading font-extrabold text-gray-900">
                  Domaine 1 : Croissance commerciale & expansion
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  3 prestations stratégiques pour accélérer vos ventes, conquérir la région et fidéliser vos comptes clés.
                </p>
              </div>
            </div>
            <Link
              href="/conseil/croissance-commerciale-expansion"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-awaaya-forest hover:text-awaaya-forestDark transition-colors bg-awaaya-forestPale px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto"
            >
              <span>Page détaillée du domaine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* BANDEAU VISUEL DOMAINE 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xs h-36 sm:h-44 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=85&w=1200&auto=format&fit=crop" 
              alt="Croissance commerciale et expansion africaine" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex items-center p-6 sm:p-8">
              <div className="max-w-xl text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Hub Commercial Afrique de l'Ouest</span>
                <p className="text-sm sm:text-base font-bold text-white">
                  Structurer votre force commerciale et conquérir des parts de marché régionales
                </p>
                <p className="text-xs text-gray-200 hidden sm:block">
                  Du diagnostic 360° à l'externalisation de vos Key Account Managers sur l'UEMOA.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conseilServices
              .filter((s) => s.domain === "Croissance commerciale & expansion")
              .map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[10px] bg-awaaya-forestPale px-2.5 py-1 rounded-md">
                        {service.domain}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-600 font-semibold bg-gray-100 px-2.5 py-1 rounded-md text-xs">
                        <Clock className="w-3.5 h-3.5 text-awaaya-forest" />
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    <div>
                      {service.code && (
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-awaaya-forest text-white text-[10px] font-mono font-black">
                            {service.code}
                          </span>
                          {service.commercialTitle && (
                            <span className="text-xs font-extrabold text-awaaya-forest">
                              « {service.commercialTitle} »
                            </span>
                          )}
                        </div>
                      )}
                      <h4 className="text-lg font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                        {service.subtitle}
                      </p>
                      {service.target && (
                        <div className="text-[11px] bg-awaaya-forestPale/60 border border-awaaya-forest/15 rounded-xl p-2.5 text-gray-800">
                          <strong className="text-awaaya-forest font-bold block mb-0.5">Cible :</strong>
                          <span className="line-clamp-2 leading-relaxed">{service.target}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                        Problématique adressée :
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed italic line-clamp-3">
                        "{service.challenges}"
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                        Livrables contractuels :
                      </span>
                      <div className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium">{del}</span>
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

        {/* DOMAINE 2 : DURABILITÉ & RESPONSABILITÉ SOCIÉTALE */}
        <div id="durabilite-responsabilite-societale" className="space-y-6 pt-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-awaaya-forest text-white flex items-center justify-center text-xs font-black">
                2
              </span>
              <div>
                <h3 className="text-xl font-heading font-extrabold text-gray-900">
                  Domaine 2 : Durabilité & responsabilité sociétale
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  2 prestations d'excellence pour structurer votre feuille de route durabilité et publier un reporting ESG auditable.
                </p>
              </div>
            </div>
            <Link
              href="/conseil/durabilite-responsabilite-societale"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-awaaya-forest hover:text-awaaya-forestDark transition-colors bg-awaaya-forestPale px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto"
            >
              <span>Page détaillée du domaine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* BANDEAU VISUEL DOMAINE 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xs h-36 sm:h-44 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=85&w=1200&auto=format&fit=crop" 
              alt="Durabilité et responsabilité sociétale en Afrique" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F281E]/90 via-[#1B4332]/65 to-transparent flex items-center p-6 sm:p-8">
              <div className="max-w-xl text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Performance Durable & Conformité ESG</span>
                <p className="text-sm sm:text-base font-bold text-white">
                  Sécuriser la licence sociale d'opérer et répondre aux exigences internationales
                </p>
                <p className="text-xs text-gray-200 hidden sm:block">
                  Conformité RDUE/CSRD, due diligence ESG des distributeurs et feuilles de route à impact.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {conseilServices
              .filter((s) => s.domain === "Durabilité & responsabilité sociétale")
              .map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-extrabold text-awaaya-forest uppercase tracking-wider text-[10px] bg-awaaya-forestPale px-2.5 py-1 rounded-md">
                        {service.domain}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-600 font-semibold bg-gray-100 px-2.5 py-1 rounded-md text-xs">
                        <Clock className="w-3.5 h-3.5 text-awaaya-forest" />
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    <div>
                      {service.code && (
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-awaaya-forest text-white text-[10px] font-mono font-black">
                            {service.code}
                          </span>
                          {service.commercialTitle && (
                            <span className="text-xs font-extrabold text-awaaya-forest">
                              « {service.commercialTitle} »
                            </span>
                          )}
                        </div>
                      )}
                      <h4 className="text-xl font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors leading-snug mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {service.subtitle}
                      </p>
                      {service.target && (
                        <div className="text-[11px] bg-awaaya-forestPale/60 border border-awaaya-forest/15 rounded-xl p-2.5 text-gray-800">
                          <strong className="text-awaaya-forest font-bold block mb-0.5">Cible :</strong>
                          <span className="line-clamp-2 leading-relaxed">{service.target}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                        Problématique adressée :
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed italic line-clamp-3">
                        "{service.challenges}"
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                        Livrables contractuels :
                      </span>
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium">{del}</span>
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
                      Demander un diagnostic Durabilité & ESG
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
      </div>

      {/* ========================================================= */}
      {/* BANNIÈRE DE CONVERSION & PRISE DE CONTACT */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase text-awaaya-forest tracking-wider">
              Vous avez un enjeu stratégique à adresser ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Parlons de votre prochain cycle de croissance
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nos directeurs de mission et notre réseau de consultants experts sont basés à Abidjan et interviennent dans l'ensemble de la région Ouest-Africaine. Échangeons en toute confidentialité.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md"
            >
              <span>Lancer un diagnostic flash 360°</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all"
            >
              <span>Prendre rendez-vous</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

