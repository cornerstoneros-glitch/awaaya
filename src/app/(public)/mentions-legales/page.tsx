import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Scale, 
  Server, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | AWAAYA - Conseils, Stratégies & Pilotage",
  description: "Mentions légales, informations d'identification et cadre réglementaire du cabinet de conseil AWAAYA à Abidjan, Côte d'Ivoire. Conforme à la loi n° 2013-450.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      {/* ========================================================= */}
      {/* BANNIÈRE HAUTE VERT FORÊT ILLUSTRÉE */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1600&auto=format&fit=crop" 
            alt="Cadre réglementaire AWAAYA" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Cadre Réglementaire & Légal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight mb-4">
            Mentions Légales
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Informations d'identification juridique du cabinet AWAAYA, conditions générales d'utilisation du site institutionnel et conformité au droit ivoirien.
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
          <span className="text-gray-900 font-semibold">Mentions Légales</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* CONTENU PRINCIPAL STRUCTURÉ */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-8">
        
        {/* 1. ÉDITEUR DU SITE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Article 1</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Éditeur et Exploitant du Site
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900 block font-semibold">Dénomination sociale :</strong>
                <span>AWAAYA Consulting SARL</span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Activité :</strong>
                <span>Cabinet de conseil en stratégie, pilotage de projets, transition durable (RSE/ESG) et formation des dirigeants.</span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Siège social :</strong>
                <span className="inline-flex items-start gap-1.5 mt-1 text-gray-700">
                  <MapPin className="w-4 h-4 text-awaaya-forest flex-shrink-0 mt-0.5" />
                  <span>Boulevard de la République, Plateau / Cocody, Abidjan, République de Côte d'Ivoire</span>
                </span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Boîte Postale :</strong>
                <span>BP 1255 Abidjan 01</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <strong className="text-gray-900 block font-semibold">Registre du Commerce (RCCM) :</strong>
                <span className="font-mono text-gray-800">CI-ABJ-2024-B-XXXXX (Abidjan)</span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Numéro Compte Contribuable (CC) :</strong>
                <span className="font-mono text-gray-800">XXXXXXXX - DGI Abidjan</span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Téléphone standard :</strong>
                <span className="inline-flex items-center gap-1.5 mt-1 text-gray-700">
                  <Phone className="w-4 h-4 text-awaaya-forest flex-shrink-0" />
                  <span>+225 27 20 00 00 00</span>
                </span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Email institutionnel :</strong>
                <span className="inline-flex items-center gap-1.5 mt-1 text-gray-700">
                  <Mail className="w-4 h-4 text-awaaya-forest flex-shrink-0" />
                  <span>contact@awaaya-consulting.com</span>
                </span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Directeur de la Publication :</strong>
                <span>Direction Générale du Cabinet AWAAYA</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HÉBERGEMENT & INFRASTRUCTURE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Article 2</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Hébergement et Infrastructure Technique
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>
              Le site internet <strong className="text-gray-900">AWAAYA</strong> ainsi que ses applications associées (diagnostics interactifs, plateforme d'évaluation et portail client) sont hébergés sur des infrastructures cloud de haute sécurité bénéficiant de certifications de sécurité internationales (ISO 27001, SOC 2 Type II).
            </p>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1.5 text-xs text-gray-700 font-mono">
              <p><strong>Plateforme Cloud :</strong> Déploiement distribué sécurisé haute disponibilité</p>
              <p><strong>Chiffrement :</strong> Protocole TLS 1.3 / HTTPS avec certificat SSL 256 bits systématique</p>
              <p><strong>Base de données :</strong> Serveur PostgreSQL isolé, sauvegardes chiffrées quotidiennes</p>
            </div>
          </div>
        </section>

        {/* 3. PROPRIÉTÉ INTELLECTUELLE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Article 3</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Propriété Intellectuelle et Droits Réservés
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              L'ensemble des éléments constituant ce site internet (textes, méthodologies de conseil, matrices de diagnostic, logotypes, charte graphique, grilles d'évaluation RSE/ESG, codes sources, vidéos et photographies) sont la propriété exclusive du cabinet <strong className="text-gray-900">AWAAYA Consulting</strong> ou font l'objet d'un droit d'utilisation concédé, protégés par les conventions internationales et l'Accord de Bangui (OAPI).
            </p>
            <p>
              Toute reproduction, représentation, diffusion, adaptation ou exploitation totale ou partielle de ces contenus, par quelque procédé que ce soit, sans l'accord préalable écrit et exprès de la direction d'AWAAYA est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </div>
        </section>

        {/* 4. CONFORMITÉ RÉGLEMENTAIRE IVOIRIENNE (ARTCI) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Article 4</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Protection des Données & Conformité ARTCI
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              En conformité avec la <strong className="text-gray-900">Loi n° 2013-450 du 19 juin 2013</strong> relative à la protection des données à caractère personnel en République de Côte d'Ivoire, et sous la supervision de l'<strong>ARTCI</strong> (Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire), AWAAYA s'engage à garantir la confidentialité et l'intégrité de toutes les données collectées.
            </p>
            <p>
              Pour connaître le détail des modalités de recueil, de conservation et l'exercice de vos droits (accès, rectification, suppression), veuillez consulter notre page dédiée :
            </p>
            <div className="pt-2">
              <Link 
                href="/confidentialite" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-awaaya-forest text-white hover:bg-awaaya-forestDark transition-all text-xs sm:text-sm font-extrabold shadow-sm"
              >
                <span>Consulter la Politique de Confidentialité</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. LIMITATION DE RESPONSABILITÉ & DROIT APPLICABLE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-awaaya-forestPale flex items-center justify-center text-awaaya-forest">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-awaaya-forest uppercase tracking-wider">Article 5</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
                Limitation de Responsabilité et Droit Applicable
              </h2>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              Les informations, simulateurs et outils d'auto-évaluation mis à disposition sur ce site sont fournis à titre indicatif pour éclairer la réflexion stratégique des dirigeants. Ils ne se substituent pas à une mission formelle de diagnostic ou de conseil contractuel.
            </p>
            <p>
              Les présentes mentions légales sont soumises au <strong className="text-gray-900">droit ivoirien</strong>. En cas de différend ou litige relatif à l'interprétation ou à l'exécution des présentes qui ne trouverait pas de règlement amiable, attribution expresse de compétence est conférée au <strong className="text-gray-900">Tribunal de Commerce d'Abidjan</strong>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

