import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileCheck2, 
  UserCheck, 
  Database, 
  Mail, 
  MapPin, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | AWAAYA - Conseils, Stratégies & Pilotage",
  description: "Politique de protection des données personnelles du cabinet AWAAYA. Conforme à la loi ivoirienne n° 2013-450 (supervision ARTCI) et aux standards internationaux de sécurité.",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      {/* ========================================================= */}
      {/* BANNIÈRE HAUTE VERT FORÊT ILLUSTRÉE */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=85&w=1600&auto=format&fit=crop" 
            alt="Protection des données AWAAYA" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Protection des Données & Conformité ARTCI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            AWAAYA s'engage à protéger l'intégrité et la confidentialité des informations partagées par les dirigeants et organisations qui nous confient leurs projets stratégiques.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FIL D'ARIANE / BREADCRUMB */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-awaaya-forest transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Politique de Confidentialité</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* CONTENU PRINCIPAL */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-8">

        {/* CADRE LÉGAL ET ENGAGEMENT MAJEUR */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Engagement Fondamental</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                1. Cadre Légal et Réglementaire (ARTCI & Loi n° 2013-450)
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              Le cabinet <strong className="text-gray-900">AWAAYA Consulting</strong> accorde la plus haute importance à la protection de la vie privée et des données à caractère personnel de ses clients, prospects, partenaires et utilisateurs.
            </p>
            <div className="p-4 rounded-2xl bg-awaaya-forestPale/50 border border-awaaya-forest/20 text-xs sm:text-sm text-awaaya-forestDark flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-awaaya-forest flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Réglementation Ivoirienne de Référence :</strong>
                <span>
                  Tous nos traitements de données sont effectués en stricte conformité avec la <strong>Loi n° 2013-450 du 19 juin 2013</strong> relative à la protection des données à caractère personnel en République de Côte d'Ivoire, sous le contrôle de l'<strong>ARTCI</strong> (Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire). Pour nos partenaires multinationaux, nous intégrons également les principes du RGPD européen.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DONNÉES COLLECTÉES */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Transparence</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                2. Données Collectées et Canaux de Recueil
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              Nous ne collectons que les données strictement nécessaires (principe de minimisation) à la réalisation de nos prestations de conseil et à l'exploitation des outils en ligne :
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <h3 className="font-heading font-bold text-sm text-gray-900">Demandes de Diagnostic & Auto-évaluations</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                  <li>Identité (Nom, prénom, fonction/titre)</li>
                  <li>Coordonnées professionnelles (email pro, téléphone)</li>
                  <li>Raison sociale, secteur d'activité, taille de l'organisation</li>
                  <li>Réponses aux grilles de maturité commerciale ou ESG</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                <h3 className="font-heading font-bold text-sm text-gray-900">Espace Client & Suivi de Missions</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                  <li>Identifiants de connexion sécurisés (email, mot de passe chiffré)</li>
                  <li>Documents de cadrage, livrables partagés et procès-verbaux</li>
                  <li>Indicateurs clés de performance (KPIs) et bilans d'avancement</li>
                  <li>Historique des échanges avec l'équipe de consultants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINALITÉS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Finalités</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                3. Finalités des Traitements
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>Vos données sont traitées pour des objectifs précis, légitimes et déterminés :</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-awaaya-forest mt-2 flex-shrink-0" />
                <p><strong>Cadrage et devis des missions de conseil :</strong> analyser votre besoin, élaborer une proposition d'intervention personnalisée et planifier les interventions terrain.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-awaaya-forest mt-2 flex-shrink-0" />
                <p><strong>Génération des rapports d'auto-évaluation :</strong> calcul automatisé de votre score de maturité RSE/ESG ou commercial et envoi de la synthèse stratégique au format PDF.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-awaaya-forest mt-2 flex-shrink-0" />
                <p><strong>Exécution contractuelle & Pilotage de projets :</strong> gestion de vos accès à l'espace client, suivi des jalons de mission et transmission des livrables.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-awaaya-forest mt-2 flex-shrink-0" />
                <p><strong>Obligations légales et comptables :</strong> respect des obligations fiscales et commerciales prévues par l'OHADA et le droit ivoirien.</p>
              </div>
            </div>
            <p className="pt-2 font-semibold text-gray-800">
              AWAAYA ne commercialise, ne loue et ne cède jamais vos données personnelles ou stratégiques à des tiers à des fins publicitaires.
            </p>
          </div>
        </section>

        {/* DURÉE DE CONSERVATION & SÉCURITÉ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Conservation & Sécurité</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                4. Durées de Conservation et Mesures de Sécurité
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <strong className="block text-gray-900 font-bold mb-1">Données Prospects & Diagnostics Flash :</strong>
                <span className="text-xs text-gray-600">Conservées pendant une durée maximale de 3 ans à compter du dernier contact émanant de votre part.</span>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <strong className="block text-gray-900 font-bold mb-1">Données Clients & Documents de Mission :</strong>
                <span className="text-xs text-gray-600">Conservées pendant toute la durée de la relation contractuelle, puis archivées conformément aux durées de prescription légale (OHADA).</span>
              </div>
            </div>

            <p>
              Nos équipes et nos sous-traitants techniques mettent en œuvre des mesures organisationnelles et techniques strictes : protocoles de chiffrement SSL/TLS, mots de passe hashés avec salt, bases de données protégées par pare-feu applicatif et accords stricts de non-divulgation (NDA) signés par l'ensemble des consultants AWAAYA.
            </p>
          </div>
        </section>

        {/* DROITS DES PERSONNES */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Vos Droits</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                5. Vos Droits et Modalités d'Exercice
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              Conformément à la législation ivoirienne (Loi n° 2013-450), vous disposez des droits suivants sur l'ensemble de vos données :
            </p>

            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block font-bold mb-1">Droit d'accès</strong>
                <span>Obtenir confirmation du traitement et copie intégrale de vos informations.</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block font-bold mb-1">Droit de rectification</strong>
                <span>Faire corriger toute donnée inexacte, incomplète ou obsolète.</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block font-bold mb-1">Droit de suppression</strong>
                <span>Demander l'effacement définitif de vos données (droit à l'oubli).</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 mt-4 space-y-3">
              <h3 className="font-heading font-bold text-sm text-gray-900">
                Comment exercer vos droits auprès du cabinet AWAAYA ?
              </h3>
              <p className="text-xs text-gray-600">
                Vous pouvez formuler toute demande relative à vos données personnelles en nous écrivant directement :
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-800">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-awaaya-forest" />
                  <span>dpo@awaaya-consulting.com (ou contact@awaaya-consulting.com)</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-awaaya-forest" />
                  <span>Cabinet AWAAYA, Boulevard de la République, Abidjan</span>
                </span>
              </div>
              <p className="text-[11px] text-gray-500">
                Une réponse vous sera adressée dans un délai maximum de 30 jours ouvrés. En cas de litige non résolu, vous pouvez saisir l'<strong>ARTCI</strong> (artci.ci).
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

