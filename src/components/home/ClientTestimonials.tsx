"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Sparkles,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  category: "EXPANSION" | "KAM" | "PMO" | "DURABILITE";
  categoryLabel: string;
  quote: string;
  impactMetric: string;
  impactLabel: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "nexura",
    author: "Laurent Mercier",
    role: "Vice President International Sales",
    company: "Nexura Cyber Systems Europe",
    sector: "Tech, Logiciels & Cybersécurité",
    category: "EXPANSION",
    categoryLabel: "Africa Market Entry (S1)",
    quote: "Le mode Country Manager externalisé d'AWAAYA nous a fait gagner deux ans d'implantation en Afrique de l'Ouest. Nous avons signé des banques de premier rang dès les six premiers mois sans mobiliser d'équipe fixe sur place.",
    impactMetric: "1,4 M€",
    impactLabel: "Pipeline B2B généré en 9 mois"
  },
  {
    id: "finovate",
    author: "Arjun Mehta",
    role: "Chief Commercial Officer",
    company: "Finovate Global Payments",
    sector: "Fintech & Services Financiers",
    category: "KAM",
    categoryLabel: "KAM as a Service (S2)",
    quote: "AWAAYA a pris en main la relation de nos plus gros clients avec une rigueur et une crédibilité remarquables. Ils sont notre bras armé en Afrique de l'Ouest pour consolider nos marges et up-seller nos comptes clés télécoms et bancaires.",
    impactMetric: "+54%",
    impactLabel: "Croissance des revenus par compte clé"
  },
  {
    id: "cimpor",
    author: "Yannick Gnahoré",
    role: "Directeur des Opérations Industrielles",
    company: "CIMPOR / Cimenteries & Travaux Industriels SA",
    sector: "Industrie, Cimenteries & Matériaux",
    category: "DURABILITE",
    categoryLabel: "Circular Economy Programs (S4)",
    quote: "AWAAYA a su concevoir un modèle de symbiose industrielle qui réduit à la fois nos coûts d'achat de matières et notre empreinte environnementale avec un retour sur investissement spectaculaire en moins de 14 mois.",
    impactMetric: "210 M FCFA",
    impactLabel: "Économies annuelles pérennes générées"
  },
  {
    id: "agro",
    author: "Adama Coulibaly",
    role: "Directeur Général Adjoint",
    company: "Union Agro-Industrielle Ivoirienne",
    sector: "Agro-Industrie & Export Cacao",
    category: "DURABILITE",
    categoryLabel: "Sustainable Market Entry (S3)",
    quote: "L'expertise d'AWAAYA a permis de transformer une contrainte réglementaire lourde en un levier d'excellence concurrentielle reconnu par nos bailleurs et clients européens, sans aucun blocage douanier à l'export.",
    impactMetric: "100%",
    impactLabel: "Conformité RDUE et zéro litige social"
  },
  {
    id: "telecom",
    author: "Bamba Lassina",
    role: "Directeur Exécutif B2B & Solutions Entreprises",
    company: "Opérateur Télécoms Côte d'Ivoire",
    sector: "Télécoms, Cloud & Data",
    category: "KAM",
    categoryLabel: "Académie Grands Comptes & Vente B2B",
    quote: "Une formation percutante qui a décomplexé nos équipes commerciales et leur a donné les réflexes nécessaires pour signer des contrats majeurs avec les plus grands groupes de la place.",
    impactMetric: "+34%",
    impactLabel: "Taux de transformation en closing"
  }
];

const CLIENT_PARTNERS = [
  { name: "CIMPOR", sector: "Cimenteries & Matériaux" },
  { name: "Grafica Ivoire", sector: "Imprimerie & Packaging" },
  { name: "RMO Côte d'Ivoire", sector: "Ressources Humaines" },
  { name: "Director ERP", sector: "Solutions de Gestion" },
  { name: "SAH Analytics", sector: "Cybersécurité & Data" },
  { name: "Tecnotree", sector: "Logiciels Télécoms" },
  { name: "Essence Expert", sector: "Distribution & FMCG" },
  { name: "Krynica Vitamin", sector: "Agroalimentaire" }
];

export function ClientTestimonials() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredTestimonials = activeFilter === "ALL"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === activeFilter);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================= */}
        {/* BANDEAU DES ENTREPRISES COLLABORATRICES */}
        {/* ========================================================= */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-awaaya-forestPale text-awaaya-forest text-xs font-black uppercase tracking-wider border border-awaaya-forest/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>Références Exécutives & Écosystème Partenaire</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
            Ils nous ont fait confiance pour accélérer et transformer leurs opérations
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Groupes multinationaux, conglomérats industriels, opérateurs télécoms, éditeurs technologiques et institutions publiques accompagnés en Afrique de l'Ouest.
          </p>

          {/* Grille des badges entreprises */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CLIENT_PARTNERS.map((client, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-gray-50 hover:bg-[#EBF5EE] border border-gray-200/90 hover:border-awaaya-forest transition-all flex flex-col items-center justify-center text-center group"
              >
                <span className="font-heading font-extrabold text-sm text-gray-900 group-hover:text-awaaya-forest transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* TÉMOIGNAGES CLIENTS SATISFAITS (EN GRILLE & CARTES HAUT CONTRASTE) */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-gray-100 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
                Retours d'Expérience & Satisfaction
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
                Ceux qui collaborent avec AWAAYA témoignent
              </h2>
            </div>

            {/* Filtres par domaine d'intervention */}
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { id: "ALL", label: "Tous les retours" },
                { id: "EXPANSION", label: "Expansion & Market Entry" },
                { id: "KAM", label: "Grands Comptes & KAM" },
                { id: "DURABILITE", label: "Durabilité & Économie Circulaire" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setActiveIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                    activeFilter === filter.id
                      ? "bg-awaaya-forest text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des témoignages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-awaaya-forest shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* En-tête : catégorie & étoiles */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-awaaya-forestPale text-awaaya-forest text-[11px] font-black uppercase tracking-wider">
                      {t.categoryLabel}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Citation */}
                  <div className="relative">
                    <Quote className="w-6 h-6 text-awaaya-forest/20 mb-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed italic font-medium">
                      « {t.quote} »
                    </p>
                  </div>

                  {/* Impact mesuré */}
                  <div className="p-3 rounded-2xl bg-[#F8FAF8] border border-gray-200/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-gray-600 font-medium">
                      {t.impactLabel} :
                    </span>
                    <strong className="text-sm font-heading font-black text-awaaya-forest">
                      {t.impactMetric}
                    </strong>
                  </div>
                </div>

                {/* Auteur & Entreprise */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-heading font-extrabold text-gray-900 group-hover:text-awaaya-forest transition-colors">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-gray-600 font-medium">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-gray-900 font-bold mt-0.5">
                      {t.company}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-awaaya-forestPale text-awaaya-forest flex items-center justify-center text-xs font-bold shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-awaaya-forest" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lien vers toutes les études de cas */}
          <div className="pt-4 text-center">
            <Link
              href="/etudes-de-cas"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-awaaya-forest hover:text-awaaya-forestDark bg-awaaya-forestPale px-5 py-2.5 rounded-xl transition-all shadow-2xs hover:shadow-xs"
            >
              <span>Consulter l'ensemble de nos études de cas et résultats détaillés</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

