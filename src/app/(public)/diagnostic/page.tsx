"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import { AWAAYA_SERVICES } from "@/data/services";

export default function DiagnosticRequestPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    organizationName: "",
    sector: "Agro-industrie",
    size: "50-250 employés",
    serviceSlug: AWAAYA_SERVICES[0].slug,
    timeframe: "Moins de 3 mois",
    challengeDesc: "",
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName || "Prospect Entreprise",
          email: formData.email,
          phone: formData.phone,
          organization: formData.organizationName,
          sector: formData.sector,
          size: formData.size,
          serviceId: formData.serviceSlug,
          timeframe: formData.timeframe,
          message: formData.challengeDesc,
          source: "DIAGNOSTIC_FORM",
        }),
      });
    } catch (err) {
      console.error("Failed to submit diagnostic lead", err);
    }
  };

  return (
    <div className="min-h-screen bg-awaaya-light pb-24">
      {/* HEADER AVEC ILLUSTRATION EXÉCUTIVE AFRICAINE */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1600&auto=format&fit=crop" 
            alt="Cadrage stratégique AWAAYA" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-emerald-300">
            Cadrage Rapide · Réseau d'Experts Abidjan
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Demande de Diagnostic Stratégique
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Remplissez ce formulaire en 3 étapes pour recevoir un cadrage préliminaire et être orienté vers le bon pôle d'expertise AWAAYA.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 mt-10">
        {/* INDICATEUR D'ÉTAPE RESPONSIVE */}
        {!submitted && (
          <div className="flex items-center justify-between gap-1 sm:gap-2 mb-8 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">
            <span className={`truncate ${step >= 1 ? "text-awaaya-primary font-black" : ""}`}>
              1. Organisation
            </span>
            <span className="text-gray-300 flex-shrink-0">——</span>
            <span className={`truncate ${step >= 2 ? "text-awaaya-primary font-black" : ""}`}>
              2. Besoin
            </span>
            <span className="text-gray-300 flex-shrink-0">——</span>
            <span className={`truncate ${step >= 3 ? "text-awaaya-primary font-black" : ""}`}>
              3. Coordonnées
            </span>
          </div>
        )}

        <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-awaaya-sage/20 text-awaaya-sage rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-awaaya-dark">Demande transmise avec succès</h2>
              <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                Votre demande de diagnostic pour <strong>{formData.organizationName}</strong> a été transmise au responsable de pôle dédié.
                Nous prendrons contact avec vous sous 48h ouvrées.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-awaaya-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-awaaya-primaryHover transition-all"
                >
                  <span>Retour à l'accueil</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* ÉTAPE 1: ORGANISATION */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="text-lg font-bold font-heading text-awaaya-dark">Informations sur l'Organisation</h2>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Nom de l'organisation *</label>
                    <input
                      required
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="Ex: Société Ivoirienne de Distribution"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Secteur d'activité *</label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                      >
                        <option>Agro-industrie & Agriculture</option>
                        <option>Banque, Assurance & Finance</option>
                        <option>Télécoms & Numérique</option>
                        <option>Distribution & Biens de consommation</option>
                        <option>Industrie manufacturière & BTP</option>
                        <option>Secteur public & Institutions</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Taille estimée *</label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                      >
                        <option>Moins de 20 collaborateurs</option>
                        <option>20 à 50 collaborateurs</option>
                        <option>50 à 250 collaborateurs</option>
                        <option>Plus de 250 collaborateurs</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!formData.organizationName}
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-awaaya-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-awaaya-primaryHover transition-all disabled:opacity-50"
                    >
                      <span>Continuer</span>
                      <ArrowRight className="w-4 h-4 text-awaaya-accent" />
                    </button>
                  </div>
                </div>
              )}

              {/* ÉTAPE 2: BESOIN */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="text-lg font-bold font-heading text-awaaya-dark">Votre Enjeu & Prestation Visée</h2>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Prestation visée *</label>
                    <select
                      name="serviceSlug"
                      value={formData.serviceSlug}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                    >
                      {AWAAYA_SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          [{s.pillar}] {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Délai ou horizon d'intervention souhaité *</label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                    >
                      <option>Urgent (Moins de 1 mois)</option>
                      <option>1 à 3 mois</option>
                      <option>3 à 6 mois</option>
                      <option>Veille & Cadrage exploratoire</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Détails de votre contexte ou questionnement</label>
                    <textarea
                      name="challengeDesc"
                      value={formData.challengeDesc}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Précisez succinctement le déclencheur de votre démarche..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                    />
                  </div>
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Retour</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-awaaya-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-awaaya-primaryHover transition-all"
                    >
                      <span>Continuer</span>
                      <ArrowRight className="w-4 h-4 text-awaaya-accent" />
                    </button>
                  </div>
                </div>
              )}

              {/* ÉTAPE 3: COORDONNÉES */}
              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="text-lg font-bold font-heading text-awaaya-dark">Personne de Contact</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Nom et Prénom *</label>
                      <input
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ex: Aïcha Touré"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Fonction / Titre *</label>
                      <input
                        required
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Directrice Générale / Dir. RSE"
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="a.toure@groupe.ci"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-700 mb-1.5">Téléphone *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+225 05 00 00 00 00"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-awaaya-primary"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Retour</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-awaaya-accent text-awaaya-dark text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-awaaya-accentHover transition-all shadow"
                    >
                      <span>Valider et envoyer</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

