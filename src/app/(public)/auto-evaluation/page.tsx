"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  Leaf, 
  Sparkles, 
  ArrowRight,
  RotateCcw,
  BarChart3,
  Mail,
  Download
} from "lucide-react";
import { Suspense } from "react";

interface Question {
  id: number;
  category: string;
  categoryLabel: string;
  text: string;
  options: { label: string; score: number }[];
}

const RSE_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "E",
    categoryLabel: "Environnement",
    text: "Mesurez-vous régulièrement vos consommations d'énergie et vos émissions directes de gaz à effet de serre ?",
    options: [
      { label: "Pas de mesure formelle ni de suivi centralisé", score: 10 },
      { label: "Suivi comptable basique des factures d'électricité et carburant sans plan de réduction", score: 50 },
      { label: "Bilan carbone structuré (Scopes 1 & 2) avec objectifs chiffrés et plan de transition", score: 100 },
    ],
  },
  {
    id: 2,
    category: "E",
    categoryLabel: "Environnement",
    text: "Quelle est votre démarche actuelle en matière de tri, recyclage et valorisation des déchets industriels ?",
    options: [
      { label: "Gestion standard vers la décharge municipale sans valorisation spécifique", score: 10 },
      { label: "Tri sélectif rudimentaire sur 1 ou 2 flux sans filière de recyclage pérenne", score: 50 },
      { label: "Filières de valorisation certifiées, économie circulaire et valorisation énergétique des sous-produits", score: 100 },
    ],
  },
  {
    id: 3,
    category: "S",
    categoryLabel: "Social",
    text: "Disposez-vous d'une politique formalisée de santé, sécurité au travail et égalité professionnelle ?",
    options: [
      { label: "Conformité légale basique sans comité d'hygiène et sécurité actif", score: 20 },
      { label: "Comité Santé & Sécurité au Travail (CSST) actif avec formations périodiques", score: 60 },
      { label: "Système certifié (ISO 45001), index d'égalité des chances et politique volontariste de bien-être", score: 100 },
    ],
  },
  {
    id: 4,
    category: "S",
    categoryLabel: "Social",
    text: "Comment intégrez-vous la formation continue et la montée en compétences de vos collaborateurs ?",
    options: [
      { label: "Formations occasionnelles sans plan de formation pluriannuel budgété", score: 10 },
      { label: "Plan de formation annuel orienté principalement sur l'adaptation aux postes", score: 50 },
      { label: "Parcours certifiants, gestion prévisionnelle des emplois et compétences (GPEC) et mentorat", score: 100 },
    ],
  },
  {
    id: 5,
    category: "G",
    categoryLabel: "Gouvernance",
    text: "L'éthique des affaires, la conformité réglementaire et la lutte contre la corruption sont-elles formalisées ?",
    options: [
      { label: "Pas de charte éthique formalisée ni de procédure d'alerte", score: 10 },
      { label: "Code de conduite écrit signé par les collaborateurs à l'embauche", score: 50 },
      { label: "Dispositif d'alerte indépendant, cartographie des risques de corruption et audit interne régulier", score: 100 },
    ],
  },
  {
    id: 6,
    category: "G",
    categoryLabel: "Gouvernance",
    text: "Publiez-vous un rapport ou une communication périodique sur vos engagements de durabilité ?",
    options: [
      { label: "Aucune communication extra-financière ni rapport dédié", score: 0 },
      { label: "Communication ponctuelle sur des actions de mécénat ou sponsoring local", score: 40 },
      { label: "Rapport annuel de durabilité structuré aligné sur les standards internationaux (GRI / CSRD-ready)", score: 100 },
    ],
  },
];

const COMMERCIAL_QUESTIONS: Question[] = [
  {
    id: 101,
    category: "STRATEGIE",
    categoryLabel: "Stratégie Commerciale",
    text: "Disposez-vous d'une segmentation claire de votre portefeuille clients (ABC / Pareto) et de marges contributives par segment ?",
    options: [
      { label: "Suivi global du chiffre d'affaires sans segmentation précise de la rentabilité client", score: 15 },
      { label: "Segmentation basée sur le volume de CA mais sans visibilité sur le coût d'acquisition", score: 55 },
      { label: "Matrice ABC actualisée trimestriellement avec rentabilité nette et taux d'attrition par client", score: 100 },
    ],
  },
  {
    id: 202,
    category: "STRATEGIE",
    categoryLabel: "Stratégie Commerciale",
    text: "Quelle est votre capacité à formaliser des propositions de valeur différenciées face à vos concurrents ?",
    options: [
      { label: "Guerre des prix fréquente par manque d'arguments de différenciation tangibles", score: 20 },
      { label: "Arguments commerciaux standardisés mais peu personnalisés selon les secteurs clients", score: 60 },
      { label: "Offres packagées à forte valeur ajoutée, études de cas clients documentées et ROI prouvé", score: 100 },
    ],
  },
  {
    id: 303,
    category: "ORGANISATION",
    categoryLabel: "Organisation & KAM",
    text: "Comment est organisée la relation avec vos 20 plus grands comptes stratégiques ?",
    options: [
      { label: "Gérés comme les autres clients par les commerciaux de zone sans plan dédié", score: 10 },
      { label: "Suivis par les directeurs de vente sans plans de compte (Account Plans) formalisés", score: 50 },
      { label: "Key Account Managers (KAM) dédiés, contrats pluriannuels et revues de compte semestrielles", score: 100 },
    ],
  },
  {
    id: 404,
    category: "OUTILLAGE",
    categoryLabel: "Process & CRM",
    text: "Quel est le niveau de digitalisation et de pilotage du pipeline de closing de vos équipes ?",
    options: [
      { label: "Fichiers Excel épars avec peu de visibilité sur les opportunités en cours", score: 15 },
      { label: "CRM déployé mais partiellement renseigné par les commerciaux terrain", score: 50 },
      { label: "CRM unifié, taux de conversion mesuré à chaque étape et rituels hebdomadaires de closing", score: 100 },
    ],
  },
  {
    id: 505,
    category: "INCITATIONS",
    categoryLabel: "Rémunération & Compétences",
    text: "Le système d'incitations et de commissions commerciales est-il aligné sur les objectifs de rentabilité ?",
    options: [
      { label: "Rémunération 100% fixe ou commissions forfaitaires non stimulantes", score: 10 },
      { label: "Commissions sur le CA brut sans prise en compte des délais de paiement ni des marges", score: 55 },
      { label: "Grille d'incitations motivante indexée sur la marge brute, l'encaissement et le développement de nouveaux comptes", score: 100 },
    ],
  },
  {
    id: 606,
    category: "EXPANSION",
    categoryLabel: "Développement Régional",
    text: "Avez-vous une feuille de route structurée pour aborder de nouveaux marchés dans l'espace UEMOA / CEDEAO ?",
    options: [
      { label: "Opportunités traitées au coup par coup sans étude de marché préalable", score: 10 },
      { label: "Volonté d'expansion mais sans modèle de partenariat ou d'atterrissage sécurisé", score: 50 },
      { label: "Feuille de route pays documentée, conformité douanière/fiscale validée et réseau de distribution local", score: 100 },
    ],
  },
];

function AutoEvaluationContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "rse" ? "rse" : "commercial";

  const [assessmentType, setAssessmentType] = useState<"rse" | "commercial">(initialType);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [pdfSent, setPdfSent] = useState(false);

  // Sync if URL search param changes
  useEffect(() => {
    const t = searchParams.get("type");
    if (t === "commercial" || t === "rse") {
      setAssessmentType(t);
      handleReset(t);
    }
  }, [searchParams]);

  const questions = assessmentType === "rse" ? RSE_QUESTIONS : COMMERCIAL_QUESTIONS;

  const handleReset = (newType: "rse" | "commercial") => {
    setAssessmentType(newType);
    setCurrentIdx(0);
    setAnswers({});
    setFinished(false);
    setPdfSent(false);
  };

  const handleSelect = (score: number) => {
    const q = questions[currentIdx];
    const updated = { ...answers, [q.id]: score };
    setAnswers(updated);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setFinished(true);
    }
  };

  // Calcul des scores
  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const globalScore = Math.round(totalScore / questions.length);

    let levelLabel = "Maturité Initiale";
    let levelColor = "text-amber-600 bg-amber-50 border-amber-200";
    let summaryText = "Votre organisation dispose de bases intéressantes, mais les pratiques restent fragmentées et peu formalisées.";

    if (globalScore >= 75) {
      levelLabel = "Maturité Avancée / Leader";
      levelColor = "text-emerald-700 bg-emerald-50 border-emerald-300";
      summaryText = "Excellente structuration. Vos pratiques constituent un avantage concurrentiel tangible pour vos partenaires et clients.";
    } else if (globalScore >= 45) {
      levelLabel = "Maturité Intermédiaire";
      levelColor = "text-blue-700 bg-blue-50 border-blue-200";
      summaryText = "De bonnes initiatives sont en place. Le passage à l'échelle nécessite une formalisation méthodologique et un outillage rigoureux.";
    }

    return { globalScore, levelLabel, levelColor, summaryText };
  };

  const result = calculateResult();

  const handleSendPdf = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setPdfSent(true);

    try {
      const res = await fetch("/api/assessment-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: companyName || "Organisation Partenaire",
          email,
          assessmentType,
          globalScore: result.globalScore,
          levelLabel: result.levelLabel,
        }),
      });

      if (res.ok) {
        const html = await res.text();
        const blob = new Blob([html], { type: "text/html;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const win = window.open(url, "_blank");
        if (!win) {
          const a = document.createElement("a");
          a.href = url;
          a.download = `rapport-awaaya-${assessmentType}.html`;
          a.click();
        }
      }
    } catch (err) {
      console.error("PDF generation trigger error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* BANNIÈRE HAUTE VERT FORÊT ILLUSTRÉE */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-awaaya-forest to-awaaya-forestDark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=85&w=1600&auto=format&fit=crop" 
            alt="Auto-évaluation stratégique AWAAYA" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-awaaya-forest/95 via-awaaya-forest/90 to-awaaya-forestDark/95" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-200 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-awaaya-forestLight" />
            <span>Outil d'Évaluation Flash en Ligne</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Auto-évaluation de Maturité Stratégique
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Évaluez gratuitement la performance de votre organisation en 6 questions ciblées et obtenez un score commenté avec recommandations prioritaires.
          </p>

          {/* SÉLECTEUR DU TYPE DE TEST RESPONSIVE */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-xs gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleReset("rse")}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-extrabold transition-all ${
                  assessmentType === "rse"
                    ? "bg-white text-awaaya-forestDark shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>Test 1 : Maturité Durabilité & ESG</span>
              </button>
              <button
                type="button"
                onClick={() => handleReset("commercial")}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-extrabold transition-all ${
                  assessmentType === "commercial"
                    ? "bg-white text-awaaya-forestDark shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Test 2 : Efficacité Commerciale B2B</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CORPS DU QUESTIONNAIRE OU RÉSULTATS */}
      {/* ========================================================= */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        
        {!finished ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg space-y-6">
            
            {/* BARRE D'AVANCEMENT DU TEST */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                <span>Question {currentIdx + 1} sur {questions.length}</span>
                <span className="font-bold uppercase tracking-wider text-awaaya-forest bg-awaaya-forestPale px-3 py-1 rounded-md">
                  {questions[currentIdx].categoryLabel}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div 
                  className="h-full bg-awaaya-forest rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* QUESTION COURANTE */}
            <div className="pt-2">
              <h2 className="text-lg sm:text-xl font-heading font-extrabold text-gray-900 leading-snug">
                {questions[currentIdx].text}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Sélectionnez l'option qui correspond le plus fidèlement à la réalité de votre organisation.
              </p>
            </div>

            {/* OPTIONS DE RÉPONSE */}
            <div className="space-y-3 pt-2">
              {questions[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(opt.score)}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl border border-gray-200 hover:border-awaaya-forest hover:bg-awaaya-forestPale/50 transition-all flex items-center justify-between text-xs sm:text-sm group"
                >
                  <span className="text-gray-800 font-semibold group-hover:text-awaaya-forestDark leading-relaxed">
                    {opt.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-awaaya-forest group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Temps estimé restant : ~1 minute</span>
              <button
                type="button"
                onClick={() => handleReset(assessmentType)}
                className="text-gray-400 hover:text-gray-700 flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recommencer</span>
              </button>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* ÉCRAN DE RESTITUTION DES RÉSULTATS */
          /* ========================================================= */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            
            {/* EN-TÊTE VISUEL RÉSULTAT */}
            <div className="relative rounded-2xl overflow-hidden h-36 border border-gray-100 shadow-xs">
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=85&w=1000&auto=format&fit=crop" 
                alt="Résultats d'évaluation AWAAYA" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent flex items-center p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Synthèse Exécutive Immédiate</span>
                  <p className="text-sm sm:text-base font-bold text-white">Diagnostic préliminaire de maturité opérationnelle</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-awaaya-forest text-white font-heading font-black text-3xl shadow-lg border-4 border-awaaya-forestPale">
                {result.globalScore}<span className="text-sm font-normal opacity-80">/100</span>
              </div>
              <div className="space-y-1">
                <span className={`inline-block text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${result.levelColor}`}>
                  {result.levelLabel}
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-gray-900">
                  {assessmentType === "rse" ? "Bilan de Maturité Durabilité & ESG" : "Bilan d'Efficacité Commerciale B2B"}
                </h2>
                <p className="text-sm text-gray-600 max-w-lg mx-auto">
                  {result.summaryText}
                </p>
              </div>
            </div>

            {/* DÉTAIL DES SCORES PAR DIMENSION */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
              <h3 className="font-heading font-extrabold text-sm text-gray-900">
                Détail de votre diagnostic par composante :
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {assessmentType === "rse" ? (
                  <>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Environnement (E)</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[1] || 0) + (answers[2] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">Énergie & Déchets</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Social (S)</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[3] || 0) + (answers[4] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">Santé & Compétences</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Gouvernance (G)</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[5] || 0) + (answers[6] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">Éthique & Reporting</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Stratégie & Offre</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[101] || 0) + (answers[202] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">Segmentation & Valeur</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Organisation & Process</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[303] || 0) + (answers[404] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">KAM & CRM Closing</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                      <p className="text-xs font-bold text-gray-500 uppercase">Incitations & Expansion</p>
                      <p className="text-2xl font-black text-awaaya-forest">
                        {Math.round(((answers[505] || 0) + (answers[606] || 0)) / 2)}%
                      </p>
                      <p className="text-[11px] text-gray-500">Variable & UEMOA</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* FORMULAIRE RESTITUTION RAPPORT PDF */}
            <div className="p-6 rounded-2xl bg-awaaya-forestPale/60 border border-awaaya-forest/20 space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-awaaya-forest flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-gray-900">
                    Recevoir votre rapport complet avec recommandations opérationnelles (PDF)
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Recevez par email une synthèse formalisée prête à partager avec votre comité de direction, incluant la feuille de route recommandée par les experts d'AWAAYA.
                  </p>
                </div>
              </div>

              {!pdfSent ? (
                <form onSubmit={handleSendPdf} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Nom de votre entreprise"
                    className="px-3.5 py-3 rounded-xl border border-gray-300 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@entreprise.ci"
                    className="px-3.5 py-3 rounded-xl border border-gray-300 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-awaaya-forest hover:bg-awaaya-forestDark text-white px-4 py-3 rounded-xl font-heading font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Générer mon rapport</span>
                  </button>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Votre rapport PDF personnalisé a été expédié à l'adresse {email} !</span>
                </div>
              )}
            </div>

            {/* ACTIONS FINALES */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleReset(assessmentType)}
                className="text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recommencer le questionnaire</span>
              </button>

              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <span>Planifier un cadrage approfondi avec nos consultants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* MODULE VISUEL : COMPRENDRE LE CADRE D'ÉVALUATION */}
      {/* ========================================================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-awaaya-forest">
            Méthodologie & Référentiel
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-gray-900">
            Comprendre notre cadre d'évaluation flash
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Nos diagnostics s'appuient sur les meilleures pratiques managériales et commerciales adaptées aux réalités économiques ouest-africaines.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-44 border border-gray-100 shadow-xs">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=85&w=800&auto=format&fit=crop" 
                alt="Axe : Efficacité Commerciale B2B" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Axe Clé · Vente Complexe & KAM</span>
              </div>
            </div>
            <h4 className="font-heading font-bold text-lg text-gray-900">Efficacité Commerciale & Grands Comptes</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Analysez la solidité de votre processus de vente, la segmentation de vos comptes stratégiques et la maturité de vos outils CRM pour accélérer vos revenus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AutoEvaluationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F6F4] flex items-center justify-center text-sm font-bold text-gray-500">Chargement de l'auto-évaluation...</div>}>
      <AutoEvaluationContent />
    </Suspense>
  );
}
