"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  FileText, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Briefcase,
  Quote,
  Check,
  Clock,
  Layers,
  ShieldCheck
} from "lucide-react";
import { CASE_STUDIES, PUBLICATIONS, CaseStudy, Publication } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  const [selectedSector, setSelectedSector] = useState<string>("ALL");
  const [activeTab, setActiveTab] = useState<"CAS" | "PUBLICATIONS">("CAS");
  const [downloadModalPub, setDownloadModalPub] = useState<Publication | null>(null);
  
  // Download Form State
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadOrg, setLeadOrg] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectors = [
    { id: "ALL", label: "Tous les secteurs" },
    { id: "Tech, Logiciels & Fintech", label: "Tech & Fintech" },
    { id: "Agro-Industrie & Distribution", label: "Agro & Distribution" },
    { id: "Industrie, Cimenteries & Matériaux", label: "Industrie & Matériaux" },
    { id: "Télécoms & Infrastructures", label: "Télécoms & Infrastructures" },
  ];

  const filteredStudies = selectedSector === "ALL"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.clientSector === selectedSector);

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail || !leadName || !downloadModalPub) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: leadName,
          email: leadEmail,
          organization: leadOrg || "Organisation Partenaire",
          source: "WHITEPAPER_DOWNLOAD",
          message: `Téléchargement du livre blanc : ${downloadModalPub.title}`,
        }),
      });

      setDownloadSuccess(true);
      setTimeout(() => {
        // Trigger simulated file download
        const blob = new Blob([
          `DOCUMENT EXÉCUTIF AWAAYA\n\nTitre : ${downloadModalPub.title}\nCatégorie : ${downloadModalPub.categoryLabel}\nDate : ${downloadModalPub.publishDate}\nDestinataire : ${leadName} (${leadEmail} - ${leadOrg})\n\nSynthèse : ${downloadModalPub.summary}\n\nPoints clés :\n${downloadModalPub.highlights.map(h => "- " + h).join("\n")}\n\nCabinet AWAAYA — Abidjan, Côte d'Ivoire`
        ], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${downloadModalPub.slug}.txt`;
        a.click();
      }, 600);
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helpers images sectorielles authentiques personnes noires africaines
  const getCaseStudyImage = (csId: string) => {
    switch (csId) {
      case "cs-cyber-market-entry":
        return "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=85&w=1000&auto=format&fit=crop";
      case "cs-fintech-kam-service":
        return "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=1000&auto=format&fit=crop";
      case "cs-agro-esg-sustainable-entry":
        return "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=85&w=1000&auto=format&fit=crop";
      case "cs-circular-economy-cimenterie-agro":
      default:
        return "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1000&auto=format&fit=crop";
    }
  };

  const getPubImage = (pubId: string) => {
    switch (pubId) {
      case "pub-01":
        return "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=85&w=800&auto=format&fit=crop";
      case "pub-02":
        return "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=800&auto=format&fit=crop";
      case "pub-03":
      default:
        return "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=800&auto=format&fit=crop";
    }
  };

  // Helper pour garantir des couleurs de couverture ultra-lisibles (zéro blanc sur blanc)
  const getPubCoverStyle = (pubId: string) => {
    switch (pubId) {
      case "pub-01":
        return {
          bg: "#1B4332",
          gradient: "linear-gradient(135deg, #1B4332 0%, #0A1F17 100%)",
        };
      case "pub-02":
        return {
          bg: "#143527",
          gradient: "linear-gradient(135deg, #2D6A4F 0%, #0F281E 100%)",
        };
      case "pub-03":
      default:
        return {
          bg: "#0F281E",
          gradient: "linear-gradient(135deg, #1A2E26 0%, #0A1F17 100%)",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* BANNIÈRE HAUTE VERT FORÊT ILLUSTRÉE */}
      {/* ========================================================= */}
      <section 
        className="bg-[#0F281E] border-b border-[#1B4332] text-white py-16 sm:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=85&w=1600&auto=format&fit=crop" 
            alt="Études de cas et impact AWAAYA" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0F281E]/80" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-100 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Impact Concret & Retours d'Expérience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Études de Cas & Publications Stratégiques
          </h1>

          <p className="text-gray-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Découvrez comment nous accompagnons les leaders de Côte d'Ivoire et de la sous-région UEMOA dans la résolution de leurs défis majeurs de croissance et de durabilité.
          </p>

          {/* BASCULE ONGLET PRINCIPAL */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-black/40 border border-white/20 gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("CAS")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-extrabold transition-all ${
                  activeTab === "CAS"
                    ? "bg-white !text-[#0F281E] shadow-md font-black"
                    : "text-white hover:bg-white/15"
                }`}
                style={{ color: activeTab === "CAS" ? "#0F281E" : "#FFFFFF" }}
              >
                <Briefcase className="w-4 h-4" />
                <span>Études de Cas Clients ({CASE_STUDIES.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("PUBLICATIONS")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-extrabold transition-all ${
                  activeTab === "PUBLICATIONS"
                    ? "bg-white !text-[#0F281E] shadow-md font-black"
                    : "text-white hover:bg-white/15"
                }`}
                style={{ color: activeTab === "PUBLICATIONS" ? "#0F281E" : "#FFFFFF" }}
              >
                <FileText className="w-4 h-4" />
                <span>Livres Blancs & Guides ({PUBLICATIONS.length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VUE 1 : ÉTUDES DE CAS */}
      {/* ========================================================= */}
      {activeTab === "CAS" && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
          
          {/* FILTRES PAR SECTEUR */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
            {sectors.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setSelectedSector(sec.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedSector === sec.id
                    ? "bg-[#1B4332] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:text-gray-900"
                }`}
                style={
                  selectedSector === sec.id
                    ? { backgroundColor: "#1B4332", color: "#FFFFFF" }
                    : { backgroundColor: "#FFFFFF", color: "#374151" }
                }
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* LISTE DES ÉTUDES DE CAS */}
          <div className="space-y-8">
            {filteredStudies.map((cs) => (
              <div 
                key={cs.id}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Image d'illustration sectorielle africaine */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-gray-100">
                  <img 
                    src={getCaseStudyImage(cs.id)} 
                    alt={cs.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/15">
                        Mission de Référence · {cs.location}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-gray-100 line-clamp-1">
                        Secteur : {cs.clientSector}
                      </p>
                    </div>
                  </div>
                </div>

                {/* En-tête de la fiche */}
                <div className="p-6 sm:p-8 border-b border-gray-100 bg-[#FAFCFA]">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#EBF5EE] text-[#1B4332] font-black uppercase tracking-wider text-[11px] border border-[#1B4332]/15">
                        {cs.clientSector}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-gray-200/90 text-gray-800 font-bold text-[10px]">
                        Pilier {cs.pillar}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-600">
                      <span className="flex items-center gap-1 text-gray-700">
                        <MapPin className="w-3.5 h-3.5 text-[#1B4332]" />
                        {cs.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        {cs.year}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900 leading-snug">
                    {cs.title}
                  </h2>
                  <p className="text-gray-700 text-xs sm:text-sm mt-2 font-medium">
                    Profil client : <strong className="text-gray-900 font-bold">{cs.clientType}</strong>
                  </p>
                </div>

                {/* Corps de l'étude */}
                <div className="p-6 sm:p-8 space-y-6 bg-white">
                  
                  {/* Grille Métriques Clés */}
                  <div>
                    <h3 className="text-xs uppercase font-extrabold tracking-wider text-gray-600 mb-3">
                      Impacts & Résultats Mesurés
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {cs.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-[#EBF5EE] border border-[#1B4332]/20">
                          <div className="text-2xl sm:text-3xl font-heading font-black text-[#1B4332]">
                            {m.value}
                          </div>
                          <div className="text-xs font-extrabold text-gray-900 mt-0.5">
                            {m.label}
                          </div>
                          <div className="text-[11px] text-gray-600 mt-1 leading-snug font-medium">
                            {m.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contexte & Défis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase font-extrabold tracking-wider text-gray-600">
                        Problématique Initiale
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {cs.context}
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {cs.challenges.map((c, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs uppercase font-extrabold tracking-wider text-gray-600">
                        Solution & Dispositif AWAAYA
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {cs.solution.approach}
                      </p>
                      <div className="space-y-2">
                        {cs.solution.phases.map((p, idx) => (
                          <div key={idx} className="text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                            <strong className="text-gray-900 block font-bold">{p.title}</strong>
                            <span className="text-gray-700 text-[11px]">{p.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Témoignage client si présent */}
                  {cs.testimonial && (
                    <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-gray-200 flex items-start gap-4">
                      <Quote className="w-8 h-8 text-[#1B4332]/40 shrink-0 mt-1" />
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm italic text-gray-800 leading-relaxed font-medium">
                          « {cs.testimonial.quote} »
                        </p>
                        <div className="text-xs">
                          <strong className="text-gray-900 block font-bold">{cs.testimonial.author}</strong>
                          <span className="text-gray-600 text-[11px] font-medium">{cs.testimonial.role} — {cs.testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Diagnostic lié */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
                    <span className="text-xs text-gray-600 font-medium">
                      Vous rencontrez des enjeux similaires dans votre organisation ?
                    </span>
                    <Link
                      href={`/diagnostic?sector=${encodeURIComponent(cs.clientSector)}`}
                      className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-xs"
                    >
                      <span>Demander un cadrage préliminaire</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VUE 2 : LIVRES BLANCS & PUBLICATIONS */}
      {/* ========================================================= */}
      {activeTab === "PUBLICATIONS" && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PUBLICATIONS.map((pub) => {
              const cover = getPubCoverStyle(pub.id);

              return (
                <div 
                  key={pub.id}
                  className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    {/* Couverture stylisée du livre blanc avec fond sombre garanti */}
                    <div 
                      className="p-6 sm:p-7 text-white space-y-3 relative overflow-hidden"
                      style={{ backgroundColor: cover.bg, backgroundImage: cover.gradient }}
                    >
                      <img 
                        src={getPubImage(pub.id)} 
                        alt={pub.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay pointer-events-none"
                      />
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-bold">
                        <span className="bg-white/20 px-2.5 py-1 rounded-md text-white font-extrabold border border-white/25">
                          {pub.categoryLabel}
                        </span>
                        <span className="bg-white/15 px-2 py-0.5 rounded-md text-gray-100 font-semibold">
                          {pub.publishDate}
                        </span>
                      </div>
                      <h3 className="font-heading font-black text-lg sm:text-xl text-white leading-snug drop-shadow-xs">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-100 pt-2 border-t border-white/20">
                        <span className="flex items-center gap-1 font-semibold text-gray-100">
                          <Clock className="w-3.5 h-3.5 text-emerald-300" />
                          {pub.readingTime}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-gray-100">{pub.pages} pages</span>
                      </div>
                    </div>

                    {/* Résumé & Points clés */}
                    <div className="p-6 space-y-4 bg-white text-gray-900">
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        {pub.summary}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-gray-600">
                          Ce que contient ce guide :
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-800">
                          {pub.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5" />
                              <span className="text-[11px] leading-tight text-gray-800 font-medium">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bouton de téléchargement */}
                  <div className="p-6 pt-0 border-t border-gray-100 mt-4 bg-white">
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-[11px] text-gray-600 font-medium">
                        {pub.downloadCount}+ téléchargements
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setDownloadModalPub(pub);
                          setDownloadSuccess(false);
                        }}
                        className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Télécharger (Gratuit)</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODALE DE TÉLÉCHARGEMENT DU LIVRE BLANC */}
      {/* ========================================================= */}
      {downloadModalPub && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1B4332] bg-[#EBF5EE] px-2.5 py-1 rounded-md border border-[#1B4332]/15">
                  Téléchargement Document Exécutif
                </span>
                <h3 className="font-heading font-black text-lg text-gray-900 mt-2">
                  {downloadModalPub.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDownloadModalPub(null)}
                className="text-gray-500 hover:text-gray-800 text-lg font-bold p-1 transition-colors"
                aria-label="Fermer la boîte de dialogue"
              >
                ✕
              </button>
            </div>

            {!downloadSuccess ? (
              <form onSubmit={handleDownloadSubmit} className="space-y-3.5">
                <p className="text-xs text-gray-700 leading-relaxed">
                  Renseignez vos coordonnées professionnelles pour recevoir l'accès immédiat au document complet :
                </p>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Nom & Prénoms *
                  </label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Ex: Kouamé N'Guessan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1B4332] focus:border-[#1B4332] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="votre.email@entreprise.ci"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1B4332] focus:border-[#1B4332] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Organisation / Entreprise *
                  </label>
                  <input
                    type="text"
                    value={leadOrg}
                    onChange={(e) => setLeadOrg(e.target.value)}
                    placeholder="Ex: Société Agro-Industrielle"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#1B4332] focus:border-[#1B4332] focus:outline-hidden"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1B4332] hover:bg-[#0F281E] text-white py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>{isSubmitting ? "Préparation du document..." : "Valider et télécharger mon guide"}</span>
                  </button>
                </div>

                <p className="text-[10px] text-gray-500 text-center leading-snug">
                  Conformité Loi n° 2013-450 (Protection des données ARTCI). Vos informations demeurent strictement confidentielles.
                </p>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-heading font-extrabold text-base text-gray-900">
                  Votre téléchargement est en cours !
                </h4>
                <p className="text-xs text-gray-700 max-w-sm mx-auto">
                  Le document a été préparé pour <strong>{leadEmail}</strong>. Un exemplaire de consultation vous a également été réservé.
                </p>
                <button
                  type="button"
                  onClick={() => setDownloadModalPub(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-5 py-2 rounded-xl transition-all"
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
