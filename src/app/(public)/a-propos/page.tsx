import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Target, 
  Award, 
  TrendingUp, 
  Zap, 
  Building2, 
  Users, 
  Coins,
  Layers,
  Sparkles,
  Briefcase,
  Network,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
  GraduationCap,
  Quote,
  Check,
  ChevronRight
} from "lucide-react";
import { AWAAYA_BRAND } from "@/data/services";

export const metadata: Metadata = {
  title: "À Propos d'AWAAYA & Biographie de Nelly TOUALI | Abidjan",
  description: "Découvrez le cabinet AWAAYA et le profil de Nelly TOUALI, Executive Advisor en croissance des entreprises, transformation des organisations et durabilité à Abidjan.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* EN-TÊTE VERT FORÊT INSTITUTIONNEL */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=85&w=1600&auto=format&fit=crop" 
            alt="Équipe de direction AWAAYA" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <Network className="w-3.5 h-3.5 text-emerald-300" />
            <span>Réseau de Consultants Experts · Abidjan</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Croître en Afrique, de façon rentable et durable
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Conseil en expansion régionale, gestion de comptes clés et transformation durable · Abidjan, Côte d’Ivoire
          </p>
          <p className="text-xs uppercase tracking-widest text-emerald-200 font-bold pt-2">
            Signature de marque : Conseils, Stratégies & Pilotage.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* ========================================================= */}
        {/* PRÉSENTATION INSTITUTIONNELLE & ORGANISATION DU PORTEFEUILLE */}
        {/* ========================================================= */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/90 shadow-sm space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-awaaya-forest">
              Positionnement & Vocation
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              Le Cabinet AWAAYA
            </h2>
            <p className="text-base text-gray-800 leading-relaxed font-medium">
              AWAAYA est un cabinet de conseil, de transformation et de durabilité basé à Abidjan. S'appuyant sur un <strong>réseau de consultants experts</strong> sectoriels, directeurs de mission chevronnés et praticiens de haut niveau, le cabinet accompagne les organisations dans leur développement commercial, le pilotage de leurs transformations et la mise en œuvre de leur démarche de durabilité. Il intervient du diagnostic au suivi des actions, avec des prestations adaptées aux objectifs, aux ressources et aux contraintes du client.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-gray-500">
              Organisation du portefeuille
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-awaaya-forest bg-awaaya-forestPale px-2.5 py-0.5 rounded-md">
                  Conseil
                </span>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  Deux domaines, <strong>Croissance commerciale & expansion</strong> et <strong>Durabilité & responsabilité sociétale</strong>, comprenant cinq prestations.
                </p>
                <div className="pt-1">
                  <Link href="/conseil" className="text-xs font-bold text-awaaya-forest hover:underline inline-flex items-center gap-1">
                    <span>Explorer le pilier</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-awaaya-forest bg-awaaya-forestPale px-2.5 py-0.5 rounded-md">
                  Pilotage de projets
                </span>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  <strong>Transformations organisationnelles et numériques</strong>.
                </p>
                <div className="pt-1">
                  <Link href="/pilotage" className="text-xs font-bold text-awaaya-forest hover:underline inline-flex items-center gap-1">
                    <span>Explorer le pilier</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-awaaya-forest bg-awaaya-forestPale px-2.5 py-0.5 rounded-md">
                  Formation & mobilisation
                </span>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  <strong>Gestion et développement des grands comptes</strong>.
                </p>
                <div className="pt-1">
                  <Link href="/formation" className="text-xs font-bold text-awaaya-forest hover:underline inline-flex items-center gap-1">
                    <span>Explorer le pilier</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* NOTRE MODÈLE OPÉRATIONNEL : UN RÉSEAU DE CONSULTANTS EXPERTS */}
        {/* ========================================================= */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/90 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaaya-forestPale text-awaaya-forest text-xs font-extrabold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Notre Modèle Opérationnel</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
              La force d'un Réseau de Consultants Experts
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Plutôt qu'un cabinet traditionnel figé et encombré de structures lourdes, AWAAYA fonctionne comme un <strong>hub agile d'excellence</strong>. Nous fédérons un <strong>réseau de consultants experts</strong> sectoriels et de directeurs de mission seniors, mobilisés sur mesure pour chaque projet en fonction des besoins réels de nos clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-awaaya-forest text-white text-xs font-bold flex items-center justify-center">
                01
              </span>
              <h3 className="font-heading font-bold text-sm text-gray-900">
                Directeurs Pays & Go-to-Market
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Praticiens seniors intervenant en mode Country Manager externalisé pour piloter l'expansion régionale et closer les premiers contrats grands comptes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-awaaya-forest text-white text-xs font-bold flex items-center justify-center">
                02
              </span>
              <h3 className="font-heading font-bold text-sm text-gray-900">
                Key Account Managers Délégués
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Négociateurs B2B chevronnés capables d'engager les directions générales des banques, opérateurs et conglomérats d'Afrique de l'Ouest.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-awaaya-forest text-white text-xs font-bold flex items-center justify-center">
                03
              </span>
              <h3 className="font-heading font-bold text-sm text-gray-900">
                Spécialistes ESG & Conformité
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Auditeurs et juristes spécialistes des réglementations internationales (RDUE, CSRD, GRI) sécurisant l'accès aux marchés export et la licence sociale d'opérer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-awaaya-forest text-white text-xs font-bold flex items-center justify-center">
                04
              </span>
              <h3 className="font-heading font-bold text-sm text-gray-900">
                Ingénieurs Circulaires & PMO
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Directeurs de projets et experts en valorisation de flux industriels structurant des symbioses rentables pour cimenteries, agro-industries et fabricants.
              </p>
            </div>
          </div>

          {/* BANDEAU VISUEL CONSULTANTS EXPERTS */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-48 sm:h-60 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=85&w=1200&auto=format&fit=crop" 
              alt="Réseau de consultants experts AWAAYA" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6">
              <div className="space-y-1 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Hub Agile Panafricain</span>
                <p className="text-xs sm:text-sm font-medium text-gray-100">
                  Des consultants de terrain et directeurs de mission seniors basés à Abidjan, Dakar, Douala et Lomé pour un accompagnement sur mesure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BIOGRAPHIE COMPLÈTE & DOSSIER EXÉCUTIF : NELLY TOUALI */}
        {/* ========================================================= */}
        <section id="nelly-touali" className="bg-white rounded-3xl border border-gray-200/90 shadow-md overflow-hidden">
          
          {/* EN-TÊTE DU DOSSIER EXÉCUTIF */}
          <div className="bg-gradient-to-r from-[#1B4332] to-[#0F281E] text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl shrink-0 border-2 border-white/30 bg-awaaya-forest">
                  <img 
                    src="/images/team/nelly-touali.jpg" 
                    alt="Nelly TOUALI - Executive Advisor" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-white/15">
                    <Award className="w-3.5 h-3.5" />
                    <span>Executive Leadership · 20+ Années d'Expérience</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                    NELLY TOUALI
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-gray-200">
                    Executive Advisor | Croissance des entreprises • Transformation des organisations • Durabilité
                  </p>
                  <p className="text-xs text-emerald-200 italic pt-1">
                    « Accompagner les organisations à transformer la complexité en croissance durable »
                  </p>
                </div>
              </div>

              {/* COORDONNÉES DIRECTES */}
              <div className="flex flex-col gap-2 text-xs bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-xs w-full md:w-auto shrink-0">
                <span className="flex items-center gap-2 text-gray-200">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </span>
                <span className="flex items-center gap-2 text-gray-200">
                  <Globe className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>Français (maternelle) • Anglais (courant pro)</span>
                </span>
                <a href="mailto:nelly.touali@gmail.com" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>nelly.touali@gmail.com</span>
                </a>
                <a href="tel:+2250545455245" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>+225 05 45 45 52 45</span>
                </a>
                <a 
                  href="https://linkedin.com/in/nellytouali" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-emerald-300 hover:underline font-bold"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" />
                  <span>linkedin.com/in/nellytouali</span>
                </a>
              </div>

            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            
            {/* 1. SYNTHÈSE EXÉCUTIVE */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-awaaya-forest" />
                <h3 className="text-xs font-black uppercase tracking-wider text-awaaya-forest">
                  Synthèse Exécutive
                </h3>
              </div>
              <div className="text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
                <p>
                  Executive Advisor spécialisée dans la croissance des entreprises, la transformation des organisations et la durabilité, j'accompagne depuis plus de vingt ans des entreprises, des groupes internationaux, des institutions publiques et des organisations de développement dans leurs enjeux de transformation en Afrique de l'Ouest et du Centre.
                </p>
                <p>
                  Mon parcours s'est construit à l'intersection du développement commercial, de la transformation digitale, de la gouvernance des organisations et, plus récemment, de la transformation durable. Cette double expérience me permet aujourd'hui de concevoir des programmes qui créent simultanément de la valeur économique, renforcent les capacités organisationnelles et accélèrent la transition vers des modèles plus résilients.
                </p>
                <p>
                  Fondatrice et Directrice Générale de <strong>NT Consulting</strong> (qui anime le cabinet AWAAYA et son réseau de consultants experts), je conseille les dirigeants dans la conception, le pilotage et l'exécution de transformations complexes en mobilisant les parties prenantes, les équipes métiers et les partenaires stratégiques autour d'une vision commune et d'objectifs mesurables.
                </p>
              </div>
            </div>

            {/* 2. IMPACT EXÉCUTIF (TABLEAUX DE MESURE & CHIFFRES CLÉS) */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-awaaya-forest" />
                <h3 className="text-xs font-black uppercase tracking-wider text-awaaya-forest">
                  Impact Exécutif & Résultats Clés
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Volet 1 : Parcours Professionnel */}
                <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-200/90 space-y-4">
                  <h4 className="font-heading font-extrabold text-sm text-gray-900 pb-2 border-b border-gray-200 flex items-center justify-between">
                    <span>Parcours Professionnel</span>
                    <Briefcase className="w-4 h-4 text-awaaya-forest" />
                  </h4>
                  <ul className="space-y-3 text-xs">
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Expérience professionnelle</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">20+ années</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Marchés africains couverts</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">13 pays</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Comptes stratégiques régionaux</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">13 comptes</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Opportunités commerciales</span>
                      <strong className="text-awaaya-forest font-black text-sm text-right">Plus de 30 M€</strong>
                    </li>
                  </ul>
                </div>

                {/* Volet 2 : Leadership & Gouvernance */}
                <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-200/90 space-y-4">
                  <h4 className="font-heading font-extrabold text-sm text-gray-900 pb-2 border-b border-gray-200 flex items-center justify-between">
                    <span>Leadership & Gouvernance</span>
                    <Users className="w-4 h-4 text-awaaya-forest" />
                  </h4>
                  <ul className="space-y-3 text-xs">
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Dirigeants & décideurs</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">100+</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Équipes coordonnées</span>
                      <strong className="text-gray-900 font-extrabold text-right">10 à 49 collab. / prog.</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Programmes pilotés</span>
                      <strong className="text-gray-900 font-bold text-right text-[11px]">Croissance • Transfo • Digital • ESG</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Gouvernance</span>
                      <strong className="text-gray-900 font-bold text-right text-[11px]">Sponsors • CoPil • Alignement</strong>
                    </li>
                  </ul>
                </div>

                {/* Volet 3 : Transformation Durable */}
                <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-gray-200/90 space-y-4">
                  <h4 className="font-heading font-extrabold text-sm text-gray-900 pb-2 border-b border-gray-200 flex items-center justify-between">
                    <span>Transformation Durable</span>
                    <ShieldCheck className="w-4 h-4 text-awaaya-forest" />
                  </h4>
                  <ul className="space-y-3 text-xs">
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Programmes ESG & Durabilité</span>
                      <strong className="text-awaaya-forest font-black text-sm text-right">5+</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Économie circulaire</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">3 programmes</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Rapports ESG & Impact</span>
                      <strong className="text-gray-900 font-extrabold text-sm text-right">3 rapports</strong>
                    </li>
                    <li className="flex justify-between items-start gap-2">
                      <span className="text-gray-600">Écosystèmes multi-acteurs</span>
                      <strong className="text-gray-900 font-bold text-right text-[11px]">Entreprises • ONG • Collectivités</strong>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 3. DOMAINES D'EXPERTISE */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-awaaya-forest" />
                <h3 className="text-xs font-black uppercase tracking-wider text-awaaya-forest">
                  Domaines d'Expertise
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Croissance des entreprises */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-awaaya-forest" />
                    <h4 className="font-heading font-extrabold text-base text-gray-900">
                      Croissance des Entreprises
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Stratégie de croissance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Développement commercial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Expansion régionale</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Go-to-Market</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Partenariats stratégiques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Gestion de comptes exécutifs</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Transformation des organisations */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-awaaya-forest" />
                    <h4 className="font-heading font-extrabold text-base text-gray-900">
                      Transformation des Organisations
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Conseil auprès des dirigeants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Pilotage de programmes de transformation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Gouvernance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Conduite du changement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Alignement des parties prenantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Pensée systémique</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Durabilité */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-awaaya-forest" />
                    <h4 className="font-heading font-extrabold text-base text-gray-900">
                      Durabilité & Impact
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Stratégie ESG</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Transformation durable</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Économie circulaire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Engagement des parties prenantes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Reporting de durabilité</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                      <span>Mesure d'impact</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 4. CE QUE J'APPORTE AUX ORGANISATIONS */}
            <div className="p-6 sm:p-8 rounded-3xl bg-awaaya-forestPale/50 border border-awaaya-forest/20 space-y-4">
              <h4 className="font-heading font-extrabold text-base text-gray-900">
                Ce que j'apporte concrètement aux organisations :
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-800">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                  <span><strong>Accélérer la croissance commerciale</strong> et conquérir de nouveaux marchés régionaux.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                  <span><strong>Conduire des transformations complexes</strong> avec rigueur méthodologique et PMO.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                  <span><strong>Mobiliser les dirigeants et les parties prenantes</strong> autour d'une vision stratégique commune.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                  <span><strong>Intégrer durablement les enjeux ESG</strong> au cœur du modèle d'affaires.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-awaaya-forest shrink-0 mt-0.5" />
                  <span><strong>Transformer les ambitions des comités exécutifs</strong> en résultats mesurables, rentables et pérennes.</span>
                </li>
              </ul>
            </div>

            {/* 5. CONVICTION */}
            <div className="p-6 rounded-2xl bg-[#0F281E] text-white space-y-2 border border-white/10 relative overflow-hidden">
              <Quote className="w-8 h-8 text-emerald-400/30 absolute right-4 bottom-4" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block">
                Conviction Fondatrice
              </span>
              <p className="italic text-sm sm:text-base text-gray-100 leading-relaxed font-medium">
                « La croissance durable ne résulte pas uniquement d'une stratégie performante. Elle naît de l'alignement des dirigeants, des organisations, des parties prenantes et de leur capacité collective à conduire le changement. »
              </p>
            </div>

            {/* 6. PARCOURS DE TRANSFORMATION & EXPÉRIENCES ANTÉRIEURES */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-awaaya-forest" />
                <h3 className="text-xs font-black uppercase tracking-wider text-awaaya-forest">
                  Parcours de Transformation & Expériences
                </h3>
              </div>

              <div className="space-y-4">
                
                {/* NT CONSULTING */}
                <div className="p-6 rounded-2xl bg-white border-2 border-awaaya-forest shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-awaaya-forest tracking-wider bg-awaaya-forestPale px-2 py-0.5 rounded">
                        Cabinet de Conseil
                      </span>
                      <h4 className="font-heading font-black text-lg text-gray-900 mt-1">
                        NT CONSULTING (Cabinet AWAAYA)
                      </h4>
                      <p className="text-xs font-bold text-gray-600">Fondatrice & Directrice Générale</p>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                      Depuis 2024 · Abidjan
                    </span>
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed">
                    Cabinet de conseil spécialisé dans la croissance des entreprises, la transformation des organisations et la durabilité. Accompagnement des entreprises, industriels, collectivités et institutions dans la conception et la mise en œuvre de programmes de transformation créateurs de performance durable.
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider block mb-1.5">
                      Références représentatives :
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["Grafica Ivoire", "RMO Côte d'Ivoire", "CIMPOR", "Director ERP", "Essence Expert", "Krynica Vitamin"].map((ref, rIdx) => (
                        <span key={rIdx} className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-[11px]">
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TIMELINE EXPÉRIENCES ANTÉRIEURES */}
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="font-heading font-bold text-gray-900">SAH Analytics</strong>
                      <span className="text-gray-500 text-[11px]">2022 – 2023 | Abidjan</span>
                    </div>
                    <p className="text-xs text-awaaya-forest font-bold">Client Executive Afrique</p>
                    <p className="text-[11px] text-gray-600">Business Intelligence • Cybersécurité • Solutions Entreprises</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="font-heading font-bold text-gray-900">ATOS</strong>
                      <span className="text-gray-500 text-[11px]">2018 – 2022 | Abidjan</span>
                    </div>
                    <p className="text-xs text-awaaya-forest font-bold">Regional Client Executive</p>
                    <p className="text-[11px] text-gray-600">Transformation digitale • Cloud • Infrastructures</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="font-heading font-bold text-gray-900">MAKTUB Group</strong>
                      <span className="text-gray-500 text-[11px]">2014 – 2018 | Dubaï</span>
                    </div>
                    <p className="text-xs text-awaaya-forest font-bold">Business Development Consultant</p>
                    <p className="text-[11px] text-gray-600">Développement commercial international</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="font-heading font-bold text-gray-900">Tecnotree Corporation</strong>
                      <span className="text-gray-500 text-[11px]">2008 – 2014 | Lagos</span>
                    </div>
                    <p className="text-xs text-awaaya-forest font-bold">Senior Key Account Manager</p>
                    <p className="text-[11px] text-gray-600">Transformation Télécom • Compte Groupe MTN</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5 sm:col-span-2">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="font-heading font-bold text-gray-900">Green Network</strong>
                      <span className="text-gray-500 text-[11px]">2007 | Abidjan</span>
                    </div>
                    <p className="text-xs text-awaaya-forest font-bold">Roaming Coordinator</p>
                    <p className="text-[11px] text-gray-600">Télécommunications & gestion des accords d'itinérance</p>
                  </div>

                </div>

              </div>
            </div>

            {/* 7. FORMATION & CERTIFICATIONS */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              
              <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-200/90 space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-awaaya-forest" />
                  <h4 className="font-heading font-extrabold text-sm text-gray-900">
                    Formation Académique
                  </h4>
                </div>
                <ul className="space-y-3 text-xs text-gray-700">
                  <li className="border-b border-gray-200 pb-2">
                    <strong className="text-gray-900 block font-bold">Swedish Institute</strong>
                    <span>Global Executive Programme — Leadership for Sustainability (2025)</span>
                  </li>
                  <li>
                    <strong className="text-gray-900 block font-bold">Formation Universitaire</strong>
                    <span>Licence en Systèmes d'Information</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-200/90 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-awaaya-forest" />
                  <h4 className="font-heading font-extrabold text-sm text-gray-900">
                    Certifications & Perfectionnement
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Leadership exécutif",
                    "Développement commercial",
                    "Transformation digitale",
                    "Gestion de projet",
                    "Négociation stratégique",
                    "ESG & Durabilité",
                    "Économie circulaire"
                  ].map((cert, cIdx) => (
                    <span key={cIdx} className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-800 font-semibold text-[11px]">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* 8. SECTEURS D'INTERVENTION & LOGOS CLIENTS */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-500">
                Secteurs d'Intervention :
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Télécommunications",
                  "Technologies de l'information",
                  "Transformation digitale",
                  "Industrie",
                  "FMCG",
                  "Économie circulaire",
                  "Développement durable",
                  "Secteur public",
                  "Organisations internationales"
                ].map((sec, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800 font-bold text-xs">
                    {sec}
                  </span>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-500">
                  Références Clients Représentatives :
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  Grafica Ivoire • RMO Côte d'Ivoire • CIMPOR • Director ERP • Essence Expert • Krynica Vitamin • MTN Group • ATOS • Tecnotree • SAH Analytics
                </p>
              </div>
            </div>

            {/* 9. SIGNATURE DE MISSION & CTA */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs uppercase font-extrabold text-awaaya-forest tracking-widest">
                  Signature Exécutive
                </p>
                <p className="text-sm font-bold text-gray-900">
                  Helping Organizations Transform Complexity into Sustainable Growth
                </p>
                <p className="text-xs text-gray-600">
                  Accompagner les organisations à transformer la complexité en croissance durable.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white text-xs font-extrabold px-6 py-3 rounded-xl transition-all shadow-xs shrink-0"
              >
                <span>Échanger avec Nelly TOUALI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* BANNIÈRE DE CONTACT & LOCALISATION */}
        {/* ========================================================= */}
        <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-md">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Mobilisez notre réseau de consultants experts
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Basés à Abidjan (Cocody Riviera Bonoumin), nos experts interviennent dans toute la sous-région UEMOA et CEMAC. Échangeons sur vos priorités en toute confidentialité.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/diagnostic"
              className="bg-white hover:bg-gray-100 text-awaaya-forestDark font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Demander un diagnostic stratégique
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-white/25 transition-all"
            >
              Prendre contact avec notre équipe
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
