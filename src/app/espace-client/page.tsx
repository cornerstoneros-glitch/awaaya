"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Download, 
  FileText, 
  Layers, 
  LogOut, 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  User, 
  AlertCircle,
  ChevronRight,
  Filter,
  Check,
  Building2,
  FileCheck2,
  Briefcase
} from "lucide-react";
import { 
  TEST_PERSONAS, 
  TestPersona, 
  MOCK_CLIENT_MISSIONS, 
  ClientMission,
  ActionItem,
  MessageItem
} from "@/data/mockClientData";

type DashboardTab = "SYNTHESE" | "JALONS" | "ACTIONS" | "LIVRABLES" | "KPIS" | "MESSAGES";

export default function EspaceClientDashboardPage() {
  const router = useRouter();

  // Active Persona State
  const [activePersona, setActivePersona] = useState<TestPersona>(TEST_PERSONAS[0]);
  const [activeMissionId, setActiveMissionId] = useState<string>("AWY-2026-001");
  const [activeTab, setActiveTab] = useState<DashboardTab>("SYNTHESE");

  // Load from localStorage if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("awaaya_active_persona");
      if (saved) {
        try {
          const parsed: TestPersona = JSON.parse(saved);
          setActivePersona(parsed);
          setActiveMissionId(parsed.activeMissionId || "AWY-2026-001");
        } catch (e) {
          console.error("Failed to parse saved persona", e);
        }
      }
    }
  }, []);

  // Current active mission
  const currentMission = MOCK_CLIENT_MISSIONS.find((m) => m.id === activeMissionId) || MOCK_CLIENT_MISSIONS[0];

  // Local state for interactive actions and messages so the user can test live!
  const [actionItems, setActionItems] = useState<ActionItem[]>(currentMission.actionItems);
  const [messages, setMessages] = useState<MessageItem[]>(currentMission.messages);
  const [newMessageText, setNewMessageText] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state when mission changes
  useEffect(() => {
    setActionItems(currentMission.actionItems);
    setMessages(currentMission.messages);
  }, [currentMission]);

  const handleSwitchPersona = (p: TestPersona) => {
    setActivePersona(p);
    setActiveMissionId(p.activeMissionId);
    if (typeof window !== "undefined") {
      localStorage.setItem("awaaya_active_persona", JSON.stringify(p));
    }
    showToast(`Session basculée sur : ${p.name} (${p.roleBadge})`);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("awaaya_active_persona");
    }
    router.push("/espace-client/login");
  };

  const toggleActionStatus = (actionId: string) => {
    setActionItems((prev) =>
      prev.map((item) => {
        if (item.id === actionId) {
          const nextStatus = item.status === "DONE" ? "TODO" : "DONE";
          showToast(`Action "${item.title.slice(0, 30)}..." marquée ${nextStatus === "DONE" ? "Validée" : "À faire"}`);
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    const newMsg: MessageItem = {
      id: `msg-${Date.now()}`,
      sender: activePersona.name,
      senderRole: activePersona.roleBadge,
      avatar: activePersona.avatarInitials,
      date: "À l'instant",
      time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      content: newMessageText.trim(),
      isAwaaya: activePersona.id === "persona-consultant"
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessageText("");
    showToast("Message consigné au fil du Comité de Pilotage");
  };

  const handleDownload = (deliverableTitle: string) => {
    showToast(`Téléchargement sécurisé : "${deliverableTitle}"`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-gray-900 pb-20">
      
      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-awaaya-forestDark text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-awaaya-forestLight flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* BANDEAU SUPÉRIEUR DU PORTAIL CLIENT (UNSLOPPED) */}
      {/* ========================================================= */}
      <section className="bg-[#0F281E] text-white pt-6 pb-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* BARRE DE STATUT & SÉLECTEUR TEST */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-white/10">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-gray-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Session de démonstration active</span>
              </div>
              <span className="text-xs text-gray-300">
                Organisation : <strong className="text-white font-medium">{activePersona.organization}</strong>
              </span>
            </div>

            {/* SÉLECTEUR DE PERSONA DE TEST */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-300 mr-1">Changer de profil :</span>
              {TEST_PERSONAS.map((p) => {
                const isActive = p.id === activePersona.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSwitchPersona(p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "bg-white text-gray-900 shadow-xs font-semibold"
                        : "bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10"
                    }`}
                  >
                    <span>{p.name.split(" ")[0]}</span>
                    <span className="text-[11px] opacity-75">({p.roleBadge})</span>
                  </button>
                );
              })}

              <Link
                href="/back-office"
                className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/15 hover:bg-white/25 text-white border border-white/15 transition-colors"
                title="Accéder à la console Back-Office Cabinet"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
                <span className="hidden sm:inline">Back-Office</span>
              </Link>

              <button
                onClick={handleLogout}
                className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-950/60 hover:bg-red-900 text-red-200 border border-red-800/40 transition-colors"
                title="Quitter la session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>

          {/* TITRE ET INFORMATIONS MAJEURES DE LA MISSION */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-gray-200">
                  {currentMission.reference}
                </span>
                <span className="text-xs font-medium text-emerald-300">
                  {currentMission.pillarLabel}
                </span>
                <span className="text-xs text-gray-300">
                  {currentMission.sector}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                {currentMission.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-4 flex-wrap">
                <span>Phase active : <strong className="text-white font-medium">{currentMission.currentPhase}</strong></span>
                <span>·</span>
                <span>Période : {currentMission.startDate} au {currentMission.targetEndDate}</span>
              </p>
            </div>

            {/* SELECTEUR RAPIDE DE MISSION */}
            <div className="flex-shrink-0 bg-white/5 p-3.5 rounded-xl border border-white/10 text-xs space-y-2 w-full sm:w-auto">
              <span className="text-gray-300 font-medium block text-xs">
                Missions en cours :
              </span>
              <div className="flex flex-wrap sm:flex-nowrap gap-2">
                {MOCK_CLIENT_MISSIONS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMissionId(m.id)}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg font-mono text-xs transition-colors text-center ${
                      m.id === activeMissionId
                        ? "bg-white text-gray-900 font-bold shadow-xs"
                        : "bg-white/10 hover:bg-white/20 text-gray-200"
                    }`}
                  >
                    {m.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* BARRE D'AVANCEMENT GLOBAL & 4 ÉTAPES */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-300" />
                <span>Progression de la mission</span>
              </span>
              <span className="font-mono font-bold text-white text-sm tabular-nums">
                {currentMission.progressPercent}%
              </span>
            </div>
            
            <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden">
              <div 
                className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                style={{ width: `${currentMission.progressPercent}%` }}
              />
            </div>

            {/* JALONS DES 4 ÉTAPES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 text-gray-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>1. Diagnostic 360° (Validé)</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>2. Plan d'Action (Validé)</span>
              </div>
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>3. Déploiement PMO (En cours)</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400">
                <div className="w-3.5 h-3.5 rounded-full border border-gray-500" />
                <span>4. Suivi & Clôture</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* NAVIGATION INTERNE PAR ONGLETS */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-xl p-1 border border-gray-200 shadow-xs flex items-center gap-1 overflow-x-auto">
          {[
            { key: "SYNTHESE", label: "Vue Synthétique", icon: BarChart3 },
            { key: "JALONS", label: "Jalons & Rétroplanning", icon: Calendar },
            { key: "ACTIONS", label: "Plan d'Action Opérationnel", icon: CheckCircle2 },
            { key: "LIVRABLES", label: "Livrables Sécurisés", icon: FileText },
            { key: "KPIS", label: "Indicateurs & KPIs", icon: TrendingUp },
            { key: "MESSAGES", label: "Comités & Échanges", icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as DashboardTab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  isCurrent
                    ? "bg-[#1B4332] text-white shadow-xs"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-gray-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* CONTENU PRINCIPAL DE L'ONGLET SÉLECTIONNÉ */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">

        {/* --------------------------------------------------------- */}
        {/* ONGLET 1 : VUE SYNTHÉTIQUE (OVERVIEW) */}
        {/* --------------------------------------------------------- */}
        {(activeTab === "SYNTHESE" || activeTab === "KPIS") && (
          <div className="space-y-8">
            
            {/* 4 CARTES KPIS MAJEURS (UNSLOPPED) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-heading font-bold text-gray-900">
                  Indicateurs de la mission
                </h2>
                <span className="text-xs text-gray-500">
                  Suivi consolidé pour le comité de direction
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentMission.indicators.map((kpi) => (
                  <div key={kpi.id} className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                        {kpi.category}
                      </span>
                      <TrendingUp className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-gray-900 tabular-nums">
                        {kpi.current} {kpi.unit}
                      </div>
                      <div className="text-xs font-medium text-gray-600 mt-1 line-clamp-2">
                        {kpi.title}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-gray-500">Cible : {kpi.target} {kpi.unit}</span>
                      <span className="font-semibold text-emerald-800 tabular-nums">{kpi.progression}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOUBLE BLOC : PROCHAIN COPIL & LEAD CONSULTANT */}
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* PROCHAIN COPIL */}
              <div className="md:col-span-2 bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-awaaya-forest">
                    <Calendar className="w-4 h-4 text-awaaya-forest" />
                    <span>Prochaine Échéance Institutionnelle</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {currentMission.nextCommitteeDate}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentMission.nextCommitteeTopic}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-xs text-gray-500">
                    Salle du Conseil / Visioconférence sécurisée
                  </span>
                  <button 
                    onClick={() => setActiveTab("LIVRABLES")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-awaaya-forest hover:text-awaaya-forestDark transition-colors"
                  >
                    <span>Consulter les pièces préparatoires</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CONSULTANT LEAD AWAAYA */}
              <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-awaaya-forest text-white font-heading font-bold text-lg flex items-center justify-center shadow-xs">
                    FT
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-awaaya-forest">
                      Consultant Référent
                    </span>
                    <h4 className="font-heading font-bold text-base text-gray-900">
                      {currentMission.consultantLead.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {currentMission.consultantLead.title}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-awaaya-forest" />
                    <span>{currentMission.consultantLead.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-awaaya-forest" />
                    <span>{currentMission.consultantLead.email}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab("MESSAGES")}
                  className="w-full py-2.5 px-4 rounded-xl bg-awaaya-forestPale hover:bg-awaaya-forest text-awaaya-forest hover:text-white transition-all text-xs font-extrabold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Écrire un message</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* --------------------------------------------------------- */}
        {/* ONGLET 2 : JALONS & RÉTROPLANNING */}
        {/* --------------------------------------------------------- */}
        {(activeTab === "SYNTHESE" || activeTab === "JALONS") && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 flex-wrap gap-2">
              <div>
                <span className="text-xs font-semibold text-awaaya-forest">
                  Rétroplanning & Échéances
                </span>
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Jalons Clés de la Mission
                </h3>
              </div>
              <span className="text-xs text-gray-500">
                Validation formelle en Comité de Pilotage
              </span>
            </div>

            <div className="space-y-4">
              {currentMission.milestones.map((milestone, idx) => (
                <div 
                  key={milestone.id}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center font-mono font-bold text-xs text-gray-700 flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        {milestone.phase}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-gray-900">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>Échéance : {milestone.dueDate}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === "VALIDATED"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : milestone.status === "IN_PROGRESS"
                        ? "bg-amber-100 text-amber-800 border border-amber-300"
                        : "bg-gray-200 text-gray-700 border border-gray-300"
                    }`}>
                      {milestone.status === "VALIDATED" && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                      {milestone.status === "IN_PROGRESS" && <Clock className="w-3.5 h-3.5 text-amber-700" />}
                      <span>{milestone.statusLabel}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --------------------------------------------------------- */}
        {/* ONGLET 3 : PLAN D'ACTION OPÉRATIONNEL (INTERACTIF) */}
        {/* --------------------------------------------------------- */}
        {(activeTab === "SYNTHESE" || activeTab === "ACTIONS") && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 flex-wrap gap-2">
              <div>
                <span className="text-xs font-semibold text-awaaya-forest">
                  Exécution PMO
                </span>
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Plan d'Action Opérationnel (Interactif)
                </h3>
              </div>
              <span className="text-xs text-gray-500">
                Cliquez sur une case pour basculer le statut en mode test
              </span>
            </div>

            <div className="space-y-3">
              {actionItems.map((action) => {
                const isDone = action.status === "DONE";
                return (
                  <div
                    key={action.id}
                    onClick={() => toggleActionStatus(action.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isDone
                        ? "bg-gray-50/70 border-gray-200 opacity-80"
                        : "bg-white border-gray-200 hover:border-awaaya-forest hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isDone 
                          ? "bg-awaaya-forest border-awaaya-forest text-white" 
                          : "border-gray-400 bg-white"
                      }`}>
                        {isDone && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <p className={`text-xs sm:text-sm font-semibold transition-colors ${
                          isDone ? "line-through text-gray-500" : "text-gray-900"
                        }`}>
                          {action.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Responsable : <strong className="text-gray-700">{action.responsible}</strong> · Échéance : {action.dueDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        action.priority === "HAUTE"
                          ? "bg-red-100 text-red-800"
                          : action.priority === "MOYENNE"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {action.priority}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --------------------------------------------------------- */}
        {/* ONGLET 4 : LIVRABLES SÉCURISÉS (DOWNLOADABLE) */}
        {/* --------------------------------------------------------- */}
        {(activeTab === "SYNTHESE" || activeTab === "LIVRABLES") && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 flex-wrap gap-2">
              <div>
                <span className="text-xs font-semibold text-awaaya-forest">
                  Bibliothèque Documentaire
                </span>
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Livrables & Rapports Stratégiques
                </h3>
              </div>
              <span className="text-xs text-gray-500">
                Chiffrés et certifiés par le cabinet AWAAYA
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentMission.deliverables.map((del) => (
                <div
                  key={del.id}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between space-y-4 hover:border-awaaya-forest transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-700">
                        {del.version}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {del.status}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-gray-900 line-clamp-2">
                      {del.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-mono">
                      {del.fileName} · {del.size}
                    </p>
                    <p className="text-xs text-gray-400">
                      Déposé le {del.date}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(del.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-awaaya-forest hover:bg-awaaya-forestDark text-white transition-all text-xs font-semibold shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Télécharger la version certifiée</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --------------------------------------------------------- */}
        {/* ONGLET 5 : MESSAGERIE & COMITÉ DE PILOTAGE */}
        {/* --------------------------------------------------------- */}
        {(activeTab === "SYNTHESE" || activeTab === "MESSAGES") && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 flex-wrap gap-2">
              <div>
                <span className="text-xs font-semibold text-awaaya-forest">
                  Canal Réservé
                </span>
                <h3 className="text-xl font-heading font-bold text-gray-900">
                  Fil d'Échanges du Comité de Pilotage
                </h3>
              </div>
              <span className="text-xs text-gray-500">
                Historique confidentiel entre l'équipe dirigeante et AWAAYA
              </span>
            </div>

            {/* MESSAGES THREAD */}
            <div className="space-y-4 max-h-96 overflow-y-auto p-2">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-3 text-xs sm:text-sm ${
                    msg.isAwaaya ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                    msg.isAwaaya ? "bg-awaaya-forest text-white" : "bg-gray-800 text-white"
                  }`}>
                    {msg.avatar}
                  </div>
                  <div className={`max-w-xl p-4 rounded-2xl ${
                    msg.isAwaaya
                      ? "bg-awaaya-forestPale text-awaaya-forestDark rounded-tl-none border border-awaaya-forest/20"
                      : "bg-gray-100 text-gray-900 rounded-tr-none border border-gray-200"
                  }`}>
                    <div className="flex items-center justify-between gap-3 text-[11px] mb-1 font-semibold opacity-80">
                      <span>{msg.sender} ({msg.senderRole})</span>
                      <span>{msg.date} à {msg.time}</span>
                    </div>
                    <p className="leading-relaxed">{msg.content}</p>
                    {msg.attachment && (
                      <div className="mt-2 pt-2 border-t border-black/10 flex items-center gap-1.5 text-xs font-bold">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Pièce jointe : {msg.attachment}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FORMULAIRE ENVOI MESSAGE TEST RESPONSIVE */}
            <form onSubmit={handleSendMessage} className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <input
                type="text"
                value={newMessageText}
                onChange={(e) => setNewMessageText(e.target.value)}
                placeholder={`Écrire en tant que ${activePersona.name} (${activePersona.roleBadge})...`}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest text-xs sm:text-sm bg-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-awaaya-forest hover:bg-awaaya-forestDark text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>Envoyer</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

