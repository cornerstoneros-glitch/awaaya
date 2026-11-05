import { Factory, Landmark, Smartphone, ShoppingCart, HardHat, SunMedium, ArrowUpRight } from "lucide-react";

const SECTORS = [
  {
    icon: Factory,
    title: "Agro-industrie & Matières Premières",
    description: "Cacao durable, hévéa, transformation locale, traçabilité des chaînes d'approvisionnement et conformité zéro déforestation.",
    missionsCount: "12+ missions"
  },
  {
    icon: Landmark,
    title: "Banques, Assurances & Finance",
    description: "Conformité ESG pour accès aux lignes de crédit vertes (BAD, SFI, Proparco) et développement des portefeuilles grands comptes.",
    missionsCount: "8+ institutions"
  },
  {
    icon: Smartphone,
    title: "Télécoms & Économie Numérique",
    description: "Pilotage PMO des déploiements d'infrastructures, optimisation de l'empreinte carbone des data centers et fidélisation B2B.",
    missionsCount: "6+ opérateurs"
  },
  {
    icon: ShoppingCart,
    title: "Distribution & Biens de Consommation",
    description: "Optimisation des circuits logistiques régionaux, valorisation des invendus et packaging éco-conçu.",
    missionsCount: "10+ enseignes"
  },
  {
    icon: HardHat,
    title: "BTP, Immobilier & Infrastructures",
    description: "Démarches chantiers à faible impact, économie circulaire des matériaux et sécurité des collaborateurs sur site.",
    missionsCount: "9+ chantiers"
  },
  {
    icon: SunMedium,
    title: "Énergies & Services Publics",
    description: "Efficacité énergétique industrielle, plans de décarbonation et dialogue apaisé avec les communautés riveraines.",
    missionsCount: "7+ programmes"
  }
];

export function SectorsGrid() {
  return (
    <section className="py-24 bg-[#F8F9FA] text-gray-900 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-awaaya-forest">
              Expertise Sectorielle
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
              Des Solutions Calibrées pour vos Enjeux Métiers
            </h2>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Chaque secteur économique en Côte d'Ivoire possède ses contraintes réglementaires et ses opportunités de création de valeur durable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="bg-white hover:bg-white p-8 rounded-3xl border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-gray-900"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-awaaya-forestPale text-awaaya-forest border border-awaaya-forest/15 flex items-center justify-center transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-awaaya-forestDark bg-awaaya-forestPale px-3 py-1 rounded-full border border-awaaya-forest/20">
                      {sector.missionsCount}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-awaaya-forest transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-awaaya-forest group-hover:text-awaaya-forestDark transition-colors">
                  <span>Explorer les cas clients</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
