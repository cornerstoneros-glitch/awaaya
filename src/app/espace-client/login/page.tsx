"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Briefcase,
  ChevronRight,
  Info
} from "lucide-react";
import { TEST_PERSONAS, TestPersona } from "@/data/mockClientData";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      // In test mode, store default persona or find match
      const matched = TEST_PERSONAS.find((p) => p.email.toLowerCase() === email.toLowerCase()) || TEST_PERSONAS[0];
      if (typeof window !== "undefined") {
        localStorage.setItem("awaaya_active_persona", JSON.stringify(matched));
      }
      router.push("/espace-client");
    }, 400);
  };

  const handleQuickLogin = (persona: TestPersona) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("awaaya_active_persona", JSON.stringify(persona));
    }
    router.push("/espace-client");
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        
        {/* LOGO & TITRE */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-11 h-11 rounded-2xl bg-awaaya-forest text-white font-heading font-black flex items-center justify-center text-2xl shadow-md group-hover:bg-awaaya-forestDark transition-all">
              A
            </div>
            <div className="text-left">
              <span className="font-heading font-black text-2xl tracking-tight text-awaaya-forest block leading-none">
                AWAAYA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mt-0.5">
                Portail Espace Client
              </span>
            </div>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900">
            Connexion à votre espace confidentiel
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm max-w-lg mx-auto">
            Accédez en temps réel aux livrables, jalons de vos missions de conseil et indicateurs de performance de votre organisation.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BANDEAU MODE TEST / ACCÈS RAPIDE DÉMO */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark rounded-3xl p-6 sm:p-7 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Mode Test & Démo Activé</span>
              </div>
              <span className="text-xs text-gray-200">
                1 clic pour tester sans mot de passe
              </span>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                Sélectionnez un profil test pour explorer les tableaux de bord
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 mt-1">
                Choisissez un compte de démonstration pour accéder immédiatement aux données de suivi en temps réel :
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
              {TEST_PERSONAS.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => handleQuickLogin(persona)}
                  className="bg-white/10 hover:bg-white text-left p-4 rounded-2xl border border-white/20 hover:border-white transition-all duration-200 group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/20 text-white group-hover:bg-awaaya-forestPale group-hover:text-awaaya-forest transition-colors">
                        {persona.roleBadge}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-awaaya-forest text-white flex items-center justify-center text-[10px] font-bold">
                        {persona.avatarInitials}
                      </div>
                    </div>
                    <div className="font-heading font-extrabold text-sm text-white group-hover:text-awaaya-forestDark transition-colors">
                      {persona.name}
                    </div>
                    <div className="text-[11px] text-gray-200 group-hover:text-gray-600 line-clamp-1 transition-colors">
                      {persona.organization}
                    </div>
                  </div>

                  <div className="pt-3 mt-2 border-t border-white/10 group-hover:border-gray-200 flex items-center justify-between text-[11px] font-bold text-white group-hover:text-awaaya-forest transition-colors">
                    <span>Ouvrir la session</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FORMULAIRE CLASSIQUE DE CONNEXION */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <h3 className="font-heading font-extrabold text-lg text-gray-900">
              Ou connectez-vous avec vos identifiants d'entreprise
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Identifiants attribués lors de la signature de votre convention de mission.
            </p>
          </div>

          <form onSubmit={handleManualLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Adresse email professionnelle
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="directeur@entreprise.ci"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest focus:border-awaaya-forest text-sm bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Mot de passe confidentiel
                </label>
                <a href="mailto:contact@awaaya-consulting.com?subject=Demande de réinitialisation mot de passe Espace Client" className="text-xs text-awaaya-forest hover:underline font-semibold">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest focus:border-awaaya-forest text-sm bg-white"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white py-3.5 px-6 rounded-xl font-heading font-extrabold text-sm shadow-md transition-all disabled:opacity-50"
            >
              <span>{loading ? "Connexion sécurisée en cours..." : "Accéder à mon espace client"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* SÉCURITÉ ET CONFORMITÉ */}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500">
            <ShieldCheck className="w-5 h-5 text-awaaya-forest flex-shrink-0" />
            <span>
              Espace chiffré TLS 1.3 avec traçabilité intégrale des accès. Conforme à la <strong>Loi n° 2013-450 (Protection des données - ARTCI)</strong>.
            </span>
          </div>
        </div>

        {/* RETOUR ACCUEIL */}
        <div className="text-center">
          <Link href="/" className="text-xs text-gray-600 hover:text-awaaya-forest font-semibold transition-colors">
            ← Revenir au site vitrine AWAAYA
          </Link>
        </div>

      </div>
    </div>
  );
}

