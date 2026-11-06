import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  Target, 
  Users, 
  ChevronRight,
  Sparkles,
  FileText,
  Calendar,
  Layers
} from "lucide-react";
import { AWAAYA_SERVICES, SERVICE_SLUG_ALIASES, getServiceBySlug } from "@/data/services";

export async function generateStaticParams() {
  const directSlugs = AWAAYA_SERVICES.map((s) => ({ slug: s.slug }));
  const aliasSlugs = Object.keys(SERVICE_SLUG_ALIASES).map((slug) => ({ slug }));
  return [...directSlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Prestation non trouvée | AWAAYA",
    };
  }

  return {
    title: `${service.title} | AWAAYA — Cabinet de Conseil Abidjan`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const heroImage = service.pillar === "PILOTAGE"
    ? "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1600&auto=format&fit=crop"
    : service.pillar === "FORMATION"
    ? "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=85&w=1600&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1600&auto=format&fit=crop";

  return (
    <article className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      {/* ========================================================= */}
      {/* HEADER DE LA PRESTATION */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] border-b border-[#1B4332] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-awaaya-forestLight font-black bg-white/10 px-3 py-1 rounded-full border border-white/15">
              {service.pillar}
            </span>
            <span className="text-xs text-gray-300 font-semibold">
              {service.domain}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight text-white">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 max-w-3xl leading-relaxed">
            {service.subtitle}
          </p>

          <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-gray-200 border-t border-white/15 pt-6 mt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-awaaya-forestLight" />
              <span>Durée indicative : <strong className="text-white">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-awaaya-forestLight" />
              <span>Méthodologie certifiée AWAAYA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FIL D'ARIANE / BREADCRUMB */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-awaaya-forest transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link 
            href={
              service.pillar === "CONSEIL" ? "/conseil" :
              service.pillar === "PILOTAGE" ? "/pilotage" : "/formation"
            } 
            className="hover:text-awaaya-forest transition-colors capitalize"
          >
            {service.pillar.toLowerCase()}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold truncate max-w-xs">{service.title}</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* CONTENU PRINCIPAL & COLONNE LATÉRALE */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 grid md:grid-cols-3 gap-8">
        
        {/* COLONNE DE GAUCHE : DÉTAIL DE LA PRESTATION */}
        <div className="md:col-span-2 space-y-8">
          
          {/* ENJEUX STRATÉGIQUES */}
          <section className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-gray-900">
                Contexte & Enjeux Stratégiques
              </h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {service.challenges}
            </p>
          </section>

          {/* DÉMARCHE EN ÉTAPES */}
          <section className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-gray-900">
                Notre Démarche en {service.steps.length} Étapes
              </h2>
            </div>
            
            <div className="space-y-4">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-awaaya-forest text-white font-mono font-bold flex items-center justify-center text-xs mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LIVRABLES CLÉS */}
          <section className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-gray-900">
                Livrables Tangibles & Opérationnels
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-gray-900">
                Questions Fréquentes
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-1.5">
                  <h3 className="font-heading font-extrabold text-gray-900 text-xs sm:text-sm">{faq.q}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* COLONNE DE DROITE : PROFILS VISÉS & CTA */}
        <aside className="space-y-6">
          
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-awaaya-forest font-bold text-xs uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Profils Visés</span>
            </div>
            <ul className="space-y-2 text-xs text-gray-700">
              {service.targetAudience.map((aud, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-awaaya-forest mt-1.5 flex-shrink-0" />
                  <span className="font-medium">{aud}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F281E] border border-[#1B4332] text-white p-6 sm:p-7 rounded-2xl shadow-sm text-center space-y-4">
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-white uppercase tracking-wider inline-block">
              Accompagnement Sur-Mesure
            </span>
            <h3 className="text-xl font-heading font-extrabold text-white">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-xs text-gray-200 leading-relaxed">
              Nos consultants basés à Abidjan vous répondent sous 48h ouvrées avec une proposition de cadrage adaptée.
            </p>
            <Link
              href={`/diagnostic?service=${service.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-awaaya-forestDark font-heading font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl hover:bg-gray-100 transition-all shadow-sm"
            >
              <span>{service.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-gray-200 text-center space-y-2">
            <p className="text-xs text-gray-500 font-semibold">Une question sur cette prestation ?</p>
            <Link
              href="/contact"
              className="text-xs font-extrabold text-awaaya-forest hover:underline block"
            >
              Contacter directement notre bureau d'Abidjan →
            </Link>
          </div>

        </aside>

      </div>
    </article>
  );
}
