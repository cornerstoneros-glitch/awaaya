import { ShieldCheck, Award, TrendingUp, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";

export function ImpactBento() {
  return (
    <section className="py-20 bg-white text-gray-900 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section équilibré */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-awaaya-forest">
              Indicateurs & Légitimité
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 tracking-tight">
              Des engagements mesurables, un ancrage certifié
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md leading-relaxed">
            Une méthodologie rigoureuse alignée sur les standards internationaux et adaptée aux spécificités du marché ivoirien et ouest-africain.
          </p>
        </div>

        {/* BENTO GRID HAUTE LISIBILITÉ : VERT FORÊT · BLANC · GRIS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* CARTE 1 (5 col) : ANCRAGE VERT FORÊT PROFOND (TEXTE BLANC NET) */}
          <div className="md:col-span-5 bg-gradient-to-br from-awaaya-forest to-awaaya-forestDark text-white p-7 sm:p-9 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm group">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>Cocody Riviera Bonoumin · Abidjan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold leading-tight text-white">
                100% Présents sur le terrain ouest-africain
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed font-normal">
                Nos équipes interviennent directement au sein de vos comités de direction en Côte d'Ivoire, au Sénégal, au Ghana et dans toute la zone UEMOA/CEDEAO.
              </p>
            </div>
            <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-gray-200">
              <span className="font-medium">Rayonnement régional UEMOA</span>
              <span className="font-semibold text-white flex items-center gap-1.5">
                Intervention directe <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </div>

          {/* CARTE 2 (4 col) : IMPACT CHIFFRÉ (FOND GRIS CLAIR, TEXTE FONCÉ ULTRA NET) */}
          <div className="md:col-span-4 bg-[#F8F9FA] border border-gray-200 p-7 sm:p-9 rounded-xl flex flex-col justify-between shadow-xs hover:border-gray-300 transition-colors text-gray-900">
            <div>
              <div className="w-11 h-11 rounded-lg bg-awaaya-forestPale text-awaaya-forest flex items-center justify-center font-bold mb-5 border border-awaaya-forest/15">
                <TrendingUp className="w-5 h-5 text-awaaya-forest" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold font-mono tabular-nums text-awaaya-forest">+38%</span>
                <span className="text-xs font-medium text-gray-500">Moyenne observée</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 mt-2 mb-2 font-heading">
                Performance ESG & Rentabilité
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Progression moyenne de la maturité extra-financière et optimisation des marges commerciales constatées dès la première année d'accompagnement.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200 mt-4 flex items-center gap-2 text-xs font-medium text-gray-700">
              <CheckCircle className="w-4 h-4 text-awaaya-forest" />
              <span>Indicateurs audités et vérifiables</span>
            </div>
          </div>

          {/* CARTE 3 (3 col) : CONFORMITÉ ARTCI (FOND BLANC, BORDURE GRISE, TEXTE FONCÉ) */}
          <div className="md:col-span-3 bg-[#F8F9FA] border border-gray-200 p-7 sm:p-9 rounded-xl flex flex-col justify-between shadow-xs hover:border-gray-300 transition-colors text-gray-900">
            <div>
              <div className="w-11 h-11 rounded-lg bg-gray-100 text-gray-800 border border-gray-200 flex items-center justify-center font-bold mb-5">
                <ShieldCheck className="w-5 h-5 text-awaaya-forest" />
              </div>
              <span className="text-xs font-medium text-gray-500">Conformité Légale</span>
              <h4 className="text-base font-bold text-gray-900 mt-1 font-heading">
                Loi n° 2013-450 (ARTCI)
              </h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                Protection renforcée de vos données stratégiques, accord de confidentialité strict (NDA) et hébergement hautement sécurisé.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-awaaya-forest">
                <Award className="w-4 h-4 text-awaaya-forest" />
                <span>Secret des affaires garanti</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
