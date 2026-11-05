"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, CheckCircle2, Linkedin, ArrowRight, Award, Building2, Users } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1600&auto=format&fit=crop" 
            alt="Équipe AWAAYA Abidjan" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-emerald-300">
            Nous Contacter · Abidjan
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Échangeons sur vos projets de croissance et de durabilité
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Que vous souhaitiez réaliser un audit commercial, piloter votre expansion ouest-africaine, structurer votre démarche ESG ou former vos équipes, notre <strong>réseau de consultants experts</strong> vous répond sous 24h.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-8">
        {/* COORDONNÉES */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm space-y-4">
            <h2 className="font-heading font-bold text-lg text-gray-900">Cabinet AWAAYA</h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-awaaya-forest flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block font-bold">Siège & Bureaux</strong>
                  <span>Cocody, Riviera Bonoumin, Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-awaaya-forest flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block font-bold">Téléphone / WhatsApp</strong>
                  <a href="tel:+2250545455245" className="text-awaaya-forest font-bold hover:underline block">+225 05 45 45 52 45</a>
                  <span className="text-gray-400 text-xs block">+225 27 20 00 00 00</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-awaaya-forest flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900 block font-bold">Emails Professionnels</strong>
                  <a href="mailto:contact@awaaya.ci" className="text-awaaya-forest font-bold hover:underline block">contact@awaaya.ci</a>
                  <span className="text-gray-400 text-xs block">contact@awaaya-consulting.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-awaaya-forestPale/60 p-6 rounded-2xl border border-awaaya-forest/20 text-xs text-gray-700 space-y-2">
            <h3 className="font-bold text-awaaya-forest text-sm">Prise de rendez-vous</h3>
            <p className="leading-relaxed">
              Nos consultants peuvent vous recevoir dans nos locaux de Riviera Bonoumin ou organiser une session de cadrage visio dédiée de 30 minutes.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xs h-36 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=600&auto=format&fit=crop" 
              alt="Bureau de conseil AWAAYA Abidjan" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <span className="text-white text-xs font-semibold">Abidjan · Cocody Riviera Bonoumin</span>
            </div>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-awaaya-sage/20 text-awaaya-sage rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-awaaya-dark">Message bien reçu</h2>
              <p className="text-gray-600 max-w-md mx-auto text-sm">
                Merci pour votre prise de contact. Un consultant AWAAYA du pôle concerné reviendra vers vous sous 24 à 48 heures ouvrées.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Nom complet *</label>
                  <input
                    required
                    type="text"
                    placeholder="Jean-Marc Kouassi"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Organisation / Entreprise *</label>
                  <input
                    required
                    type="text"
                    placeholder="Nom de votre société"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Email professionnel *</label>
                  <input
                    required
                    type="email"
                    placeholder="jm.kouassi@entreprise.ci"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Téléphone *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+225 07 00 00 00 00"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Objet de votre demande *</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary bg-white">
                  <option value="conseil-croissance">Conseil en Croissance Commerciale & Expansion</option>
                  <option value="conseil-rse">Diagnostic Durabilité & Reporting ESG</option>
                  <option value="pilotage">Pilotage de Projets & Économie Circulaire</option>
                  <option value="formation">Formation & Gestion des Grands Comptes</option>
                  <option value="autre">Autre échange institutionnel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Votre message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez brièvement vos enjeux ou questions..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                />
              </div>

              <p className="text-xs text-gray-500">
                Vos données personnelles sont traitées de manière strictement confidentielle conformément à la loi ivoirienne n° 2013-450.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-awaaya-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-awaaya-primaryHover transition-all text-sm shadow"
              >
                <span>Envoyer ma demande</span>
                <Send className="w-4 h-4 text-awaaya-accent" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION VISUELLE : ÉQUIPES & CONTACTS DIRECTS */}
      {/* ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-awaaya-forest">
            Interlocuteurs & Direction
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
            Un contact direct avec nos directeurs de missions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Échangez sans intermédiaire avec des praticiens seniors engagés dans la réussite de vos projets en Côte d'Ivoire et dans la sous-région.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARTE 1 : NELLY TOUALI */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="relative h-56 w-full overflow-hidden bg-awaaya-forest">
                <img 
                  src="/images/team/nelly-touali.jpg" 
                  alt="Nelly TOUALI - Executive Advisor" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Executive Advisory</span>
                    <p className="text-sm font-bold text-white">Nelly TOUALI</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fondatrice & Directrice Générale. Accompagnement des directions générales, comités stratégiques et sponsors exécutifs.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                  <a href="mailto:nelly.touali@gmail.com" className="flex items-center gap-2 hover:text-awaaya-forest transition-colors">
                    <Mail className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span className="truncate">nelly.touali@gmail.com</span>
                  </a>
                  <a href="tel:+2250545455245" className="flex items-center gap-2 hover:text-awaaya-forest transition-colors">
                    <Phone className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span>+225 05 45 45 52 45</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/nellytouali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-awaaya-forest font-bold hover:underline pt-0.5"
                  >
                    <Linkedin className="w-3.5 h-3.5 shrink-0" />
                    <span>linkedin.com/in/nellytouali</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link 
                href="/a-propos#nelly-touali" 
                className="w-full inline-flex items-center justify-center gap-1.5 bg-awaaya-forestPale text-awaaya-forest hover:bg-awaaya-forest hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                <span>Voir le dossier exécutif</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CARTE 2 : PÔLE CONSEIL & EXPANSION RÉGIONALE */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=85&w=800&auto=format&fit=crop" 
                  alt="Pôle Conseil & Expansion Régionale" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Pôle Conseil</span>
                    <p className="text-sm font-bold text-white">Expansion & Grands Comptes</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Directeurs de mission sectoriels et Key Account Managers délégués pour vos projets d'implantation et de closing UEMOA.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                  <span className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span>Abidjan, Dakar, Douala, Lomé</span>
                  </span>
                  <a href="mailto:contact@awaaya.ci" className="flex items-center gap-2 hover:text-awaaya-forest transition-colors">
                    <Mail className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span>contact@awaaya.ci</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link 
                href="/conseil" 
                className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-100 text-gray-800 hover:bg-awaaya-forest hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                <span>Explorer les prestations Conseil</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CARTE 3 : PÔLE PILOTAGE & INGÉNIERIE CIRCULAIRE */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=800&auto=format&fit=crop" 
                  alt="Pôle Pilotage & Ingénierie Circulaire" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Pôle Pilotage & Durabilité</span>
                    <p className="text-sm font-bold text-white">Ingénierie & Cellule PMO</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ingénieurs en valorisation circulaire et chefs de projets PMO chevronnés pour le pilotage de transformations sur site industriel.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span>Côte d'Ivoire & Hub Panafricain</span>
                  </span>
                  <a href="mailto:contact@awaaya.ci" className="flex items-center gap-2 hover:text-awaaya-forest transition-colors">
                    <Mail className="w-3.5 h-3.5 text-awaaya-forest shrink-0" />
                    <span>contact@awaaya.ci</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link 
                href="/pilotage" 
                className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-100 text-gray-800 hover:bg-awaaya-forest hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                <span>Explorer les prestations Pilotage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

