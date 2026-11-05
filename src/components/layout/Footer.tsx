import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-awaaya-forestDark text-awaaya-gray300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          
          {/* IDENTITÉ */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-2xl text-white">AWAAYA</span>
            </div>
            <p className="text-xs font-bold text-white leading-snug">
              Croître en Afrique, de façon rentable et durable
            </p>
            <p className="text-[11px] text-gray-300">
              Conseil en expansion régionale, gestion de comptes clés et transformation durable · Abidjan, Côte d’Ivoire
            </p>
            <p className="text-[10px] uppercase tracking-widest text-awaaya-forestLight font-bold">
              Signature : Conseils, Stratégies & Pilotage.
            </p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Cabinet d'excellence s'appuyant sur un <strong>réseau de consultants experts</strong> sectoriels et directeurs de mission chevronnés pour accompagner vos ambitions en Afrique de l'Ouest et Centrale.
            </p>
          </div>

          {/* PILIERS */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Nos Piliers</h4>
            <ul className="space-y-2 text-xs text-awaaya-gray400">
              <li><Link href="/conseil/croissance-commerciale-expansion" className="hover:text-white transition-colors">Conseil : Croissance commerciale & expansion</Link></li>
              <li><Link href="/conseil/durabilite-responsabilite-societale" className="hover:text-white transition-colors">Conseil : Durabilité & responsabilité sociétale</Link></li>
              <li><Link href="/pilotage/transformations-organisationnelles-numeriques" className="hover:text-white transition-colors">Pilotage : Transformations organisationnelles & numériques</Link></li>
              <li><Link href="/pilotage/programmes-rse-economie-circulaire" className="hover:text-white transition-colors">Pilotage : Programmes RSE & économie circulaire</Link></li>
              <li><Link href="/formation/grands-comptes-rse" className="hover:text-white transition-colors">Formation & mobilisation : Grands comptes & RSE</Link></li>
            </ul>
          </div>

          {/* OUTILS & CONVERSION */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Outils & Publications</h4>
            <ul className="space-y-2 text-sm text-awaaya-gray400">
              <li><Link href="/etudes-de-cas" className="hover:text-white transition-colors">Études de Cas & Publications</Link></li>
              <li><Link href="/diagnostic" className="hover:text-white transition-colors">Demande de Diagnostic Flash</Link></li>
              <li><Link href="/auto-evaluation?type=rse" className="hover:text-white transition-colors">Auto-évaluation RSE / ESG</Link></li>
              <li><Link href="/auto-evaluation?type=commercial" className="hover:text-white transition-colors">Mini-diagnostic Commercial</Link></li>
              <li><Link href="/espace-client/login" className="hover:text-white transition-colors">Portail Espace Client</Link></li>
            </ul>
          </div>

          {/* CONTACT & LOCALISATION */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase">Contact Abidjan</h4>
            <ul className="space-y-2.5 text-sm text-awaaya-gray400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-awaaya-forestLight flex-shrink-0 mt-0.5" />
                <span>Cocody, Riviera Bonoumin, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-awaaya-forestLight flex-shrink-0" />
                <a href="tel:+2250545455245" className="hover:text-white transition-colors">+225 05 45 45 52 45</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-awaaya-forestLight flex-shrink-0" />
                <a href="mailto:contact@awaaya.ci" className="hover:text-white transition-colors">contact@awaaya.ci</a>
              </li>
            </ul>
          </div>
        </div>

        {/* MENTIONS LÉGALES & CONFORMITÉ ARTCI */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-awaaya-gray400 text-center md:text-left">
          <p>© {new Date().getFullYear()} AWAAYA — Tous droits réservés. Conforme à la loi n° 2013-450 (Protection des données - ARTCI).</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-end">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
            <Link href="/plan-du-site" className="hover:text-white transition-colors">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
