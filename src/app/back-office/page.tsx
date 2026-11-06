"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Filter, 
  MessageSquare, 
  Send, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  Sparkles, 
  UserCheck, 
  LogOut, 
  ChevronRight, 
  Download, 
  Phone, 
  Mail, 
  Check, 
  RefreshCw 
} from "lucide-react";
import { TEST_PERSONAS, TestPersona, MOCK_CLIENT_MISSIONS, ClientMission, MessageItem } from "@/data/mockClientData";
import { LeadItem } from "@/lib/db-service";

type BackOfficeTab = "LEADS" | "MISSIONS" | "MESSAGES";

export default function BackOfficePage() {
  const [activeTab, setActiveTab] = useState<BackOfficeTab>("LEADS");
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("ALL");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  // Missions state
  const [missions, setMissions] = useState<ClientMission[]>(MOCK_CLIENT_MISSIONS);
  const [activeMissionId, setActiveMissionId] = useState<string>("AWY-2026-001");
  const [replyMessage, setReplyMessage] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Consultant Profile
  const consultantPersona: TestPersona = TEST_PERSONAS.find(p => p.id === "persona-consultant") || TEST_PERSONAS[1];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Fetch leads
  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        if (data.leads) setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateLeadStatus = async (leadId: string, newStatus: LeadItem["status"]) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
        showToast(`Statut du lead mis à jour : ${newStatus}`);
      }
    } catch (err) {
      console.error("Update lead status error:", err);
    }
  };

  const handleToggleMilestone = (missionId: string, milestoneId: string) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.id !== missionId) return m;
        const updatedMilestones = m.milestones.map((ml) => {
          if (ml.id !== milestoneId) return ml;
          const nextStatus = ml.status === "VALIDATED" ? "IN_PROGRESS" : "VALIDATED";
          return { ...ml, status: nextStatus as any };
        });
        const validatedCount = updatedMilestones.filter((ml) => ml.status === "VALIDATED").length;
        const newProgress = Math.round((validatedCount / updatedMilestones.length) * 100);
        return { ...m, milestones: updatedMilestones, progressPercent: newProgress };
      })
    );
    showToast("Jalon actualisé. Progression recalculée !");
  };

  const handleSendConsultantMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    const newMsg: MessageItem = {
      id: `msg-${Date.now()}`,
      sender: consultantPersona.name,
      senderRole: "Senior Manager AWAAYA",
      avatar: consultantPersona.avatarInitials,
      date: "À l'instant",
      time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      content: replyMessage.trim(),
      isAwaaya: true,
    };

    setMissions((prev) =>
      prev.map((m) => {
        if (m.id !== activeMissionId) return m;
        return { ...m, messages: [...m.messages, newMsg] };
      })
    );

    setReplyMessage("");
    showToast("Message transmis au client en temps réel !");
  };

  const currentMission = missions.find((m) => m.id === activeMissionId) || missions[0];

  const filteredLeads = leadStatusFilter === "ALL"
    ? leads
    : leads.filter((l) => l.status === leadStatusFilter);

  return (
    <div className="min-h-screen bg-[#F0F3F0] text-gray-900 pb-24">
      
      {/* ========================================================= */}
      {/* TOAST NOTIFICATION FLOTTANT */}
      {/* ========================================================= */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* BANDEAU SUPÉRIEUR BACK-OFFICE */}
      {/* ========================================================= */}
      <header className="bg-awaaya-forestDark text-white sticky top-0 z-40 shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-white text-awaaya-forest font-heading font-bold flex items-center justify-center text-lg shadow-xs">
                A
              </div>
              <div>
                <span className="font-heading font-bold text-lg tracking-tight text-white block leading-none">
                  AWAAYA
                </span>
                <span className="text-xs text-emerald-300 block mt-0.5 font-medium">
                  Back-Office & Console Cabinet
                </span>
              </div>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider text-white">
              Vue Consultant Senior
            </span>
          </div>

          {/* ACTIONS RAPIDES & BASCULE ESPACE CLIENT */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{consultantPersona.name}</span>
              <span className="text-gray-300">({consultantPersona.roleBadge})</span>
            </div>

            <Link
              href="/espace-client"
              className="inline-flex items-center gap-1.5 bg-white text-gray-900 hover:bg-gray-100 text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
            >
              <span>Voir vue Client</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* NAVIGATION DES ONGLETS DU BACK-OFFICE */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 flex gap-1.5 overflow-x-auto scrollbar-none py-2">
          <button
            type="button"
            onClick={() => setActiveTab("LEADS")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeTab === "LEADS"
                ? "bg-white text-gray-900 font-semibold shadow-xs"
                : "text-gray-200 hover:bg-white/10"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Pipeline des prospects ({leads.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("MISSIONS")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeTab === "MISSIONS"
                ? "bg-white text-gray-900 font-semibold shadow-xs"
                : "text-gray-200 hover:bg-white/10"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pilotage des missions ({missions.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("MESSAGES")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              activeTab === "MESSAGES"
                ? "bg-white text-gray-900 font-semibold shadow-xs"
                : "text-gray-200 hover:bg-white/10"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Console d'échanges client</span>
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* CORPS PRINCIPAL DU BACK-OFFICE */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* ========================================================= */}
        {/* ONGLET 1 : PIPELINE DES LEADS & DIAGNOSTICS */}
        {/* ========================================================= */}
        {activeTab === "LEADS" && (
          <div className="space-y-6">
            
            {/* CARTOUCHES KPIS LEADS (UNSLOPPED) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <span className="text-xs font-medium text-gray-500">Total prospects</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 mt-1 tabular-nums">{leads.length}</div>
                <span className="text-xs text-gray-500 mt-1 block">Demandes captées</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <span className="text-xs font-medium text-gray-500">Nouveaux à traiter</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 mt-1 tabular-nums">
                  {leads.filter(l => l.status === "NEW").length}
                </div>
                <span className="text-xs text-amber-700 font-medium mt-1 block">Priorité sous 24h</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <span className="text-xs font-medium text-gray-500">Qualifiés / En cours</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#1B4332] mt-1 tabular-nums">
                  {leads.filter(l => ["QUALIFIED", "CONTACTED", "PROPOSAL_SENT"].includes(l.status)).length}
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Pipeline actif</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <span className="text-xs font-medium text-gray-500">Taux de conversion</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-900 mt-1 tabular-nums">
                  {leads.length > 0 ? Math.round((leads.filter(l => l.status === "CONVERTED" || l.status === "QUALIFIED").length / leads.length) * 100) : 0}%
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Ratio qualification</span>
              </div>
            </div>

            {/* FILTRES ET BOUTON RECHARGER */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200/90 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Statut :
                </span>
                {["ALL", "NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "CONVERTED"].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      leadStatusFilter === st
                        ? "bg-awaaya-forest text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {st === "ALL" ? "Tous" : st}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={fetchLeads}
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-bold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Actualiser</span>
              </button>
            </div>

            {/* TABLEAU DES LEADS */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAFCFA] border-b border-gray-200 text-gray-500 font-semibold text-xs">
                    <tr>
                      <th className="p-4 pl-6">Organisation & Contact</th>
                      <th className="p-4">Source & Score</th>
                      <th className="p-4">Secteur / Taille</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Statut</th>
                      <th className="p-4 pr-6 text-right">Actions Qualification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {filteredLeads.map((lead) => {
                      const statusColor = lead.status === "NEW"
                        ? "bg-amber-100 text-amber-900 border-amber-300"
                        : lead.status === "QUALIFIED"
                        ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                        : lead.status === "PROPOSAL_SENT"
                        ? "bg-indigo-100 text-indigo-900 border-indigo-300"
                        : "bg-gray-100 text-gray-800 border-gray-300";

                      return (
                        <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="p-4 pl-6">
                            <div className="font-bold text-gray-900 text-sm">{lead.organization}</div>
                            <div className="text-gray-600 text-xs mt-0.5">{lead.fullName}</div>
                            <div className="text-gray-400 text-xs flex items-center gap-2 mt-1">
                              <span>{lead.email}</span>
                              <span>•</span>
                              <span>{lead.phone}</span>
                            </div>
                          </td>

                          <td className="p-4">
                            <span className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium text-xs">
                              {lead.source}
                            </span>
                            {lead.score !== undefined && (
                              <div className="mt-1 text-awaaya-forest font-mono font-bold text-xs tabular-nums">
                                Score : {lead.score}%
                              </div>
                            )}
                          </td>

                          <td className="p-4 text-gray-600">
                            <div>{lead.sector || "Non spécifié"}</div>
                            <div className="text-[11px] text-gray-400">{lead.size || "--"}</div>
                          </td>

                          <td className="p-4 text-gray-500 text-[11px]">
                            {new Date(lead.createdAt).toLocaleDateString("fr-FR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>

                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${statusColor}`}>
                              {lead.status}
                            </span>
                          </td>

                          <td className="p-4 pr-6 text-right">
                            <div className="inline-flex items-center gap-1.5">
                              {lead.status === "NEW" && (
                                <button
                                  type="button"
                                  onClick={() => handleUpdateLeadStatus(lead.id, "QUALIFIED")}
                                  className="px-2.5 py-1.5 rounded-lg bg-awaaya-forest hover:bg-awaaya-forestDark text-white text-[11px] font-bold transition-all shadow-xs"
                                >
                                  Qualifier
                                </button>
                              )}
                              {lead.status === "QUALIFIED" && (
                                <button
                                  type="button"
                                  onClick={() => handleUpdateLeadStatus(lead.id, "PROPOSAL_SENT")}
                                  className="px-2.5 py-1.5 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-[11px] font-bold transition-all shadow-xs"
                                >
                                  Envoyer Propale
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => setSelectedLead(lead)}
                                className="px-2.5 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 text-[11px] font-bold"
                              >
                                Détails
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MODALE DÉTAILS D'UN LEAD */}
            {selectedLead && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-xl relative space-y-5 border border-gray-200 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold text-awaaya-forest bg-awaaya-forestPale px-2.5 py-1 rounded-md">
                        Fiche Prospect
                      </span>
                      <h3 className="font-heading font-bold text-xl text-gray-900 mt-2">
                        {selectedLead.organization}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedLead(null)}
                      className="text-gray-400 hover:text-gray-600 text-lg font-bold p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-200">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-gray-400 block font-bold">Contact principal</span>
                        <strong className="text-gray-900">{selectedLead.fullName}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-bold">Coordonnées</span>
                        <span className="text-gray-800 block">{selectedLead.email}</span>
                        <span className="text-gray-800 block">{selectedLead.phone}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-bold">Secteur</span>
                        <span className="text-gray-800">{selectedLead.sector || "Non spécifié"}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-bold">Origine</span>
                        <span className="text-gray-800">{selectedLead.source}</span>
                      </div>
                    </div>

                    {selectedLead.message && (
                      <div className="pt-2 border-t border-gray-200">
                        <span className="text-gray-400 block font-bold mb-1">Message / Enjeux exprimés :</span>
                        <p className="text-gray-700 italic bg-white p-3 rounded-xl border border-gray-200/80 leading-relaxed">
                          « {selectedLead.message} »
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleUpdateLeadStatus(selectedLead.id, "QUALIFIED")}
                        className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs"
                      >
                        Marquer Qualifié
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateLeadStatus(selectedLead.id, "CONVERTED")}
                        className="px-3 py-2 rounded-xl bg-awaaya-forest hover:bg-awaaya-forestDark text-white font-bold text-xs"
                      >
                        Converti en Mission
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedLead(null)}
                      className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* ONGLET 2 : PILOTAGE DES MISSIONS CLIENTS */}
        {/* ========================================================= */}
        {activeTab === "MISSIONS" && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {missions.map((m) => (
                <div 
                  key={m.id}
                  className="bg-white rounded-xl border border-gray-200/90 p-6 shadow-xs flex flex-col justify-between hover:border-gray-300 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-awaaya-forestPale text-awaaya-forest font-mono font-bold text-xs">
                        {m.id}
                      </span>
                      <span className="text-xs font-mono font-bold text-awaaya-forest tabular-nums">
                        {m.progressPercent}% complété
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-base text-gray-900">
                        {m.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-1">
                        Client : {m.organization}
                      </p>
                    </div>

                    {/* Barre de progression */}
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-awaaya-forest h-full rounded-full transition-all duration-500"
                        style={{ width: `${m.progressPercent}%` }}
                      />
                    </div>

                    {/* Jalons de la mission */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Jalons de la mission (Cliquer pour valider) :
                      </span>
                      {m.milestones.map((ml) => (
                        <div 
                          key={ml.id}
                          onClick={() => handleToggleMilestone(m.id, ml.id)}
                          className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                            ml.status === "VALIDATED"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              ml.status === "VALIDATED" ? "bg-emerald-600 text-white" : "bg-gray-300 text-gray-700"
                            }`}>
                              {ml.status === "VALIDATED" ? "✓" : "○"}
                            </span>
                            <span className="font-bold text-[11px]">{ml.title}</span>
                          </div>
                          <span className="text-[10px] text-gray-400">{ml.dueDate}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">
                      Phase actuelle : <strong className="text-gray-700">{m.currentPhase}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveMissionId(m.id);
                        setActiveTab("MESSAGES");
                      }}
                      className="text-xs font-bold text-awaaya-forest hover:text-awaaya-forestDark flex items-center gap-1"
                    >
                      <span>Ouvrir les échanges</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* ONGLET 3 : CONSOLE D'ÉCHANGES CONSULTANT <-> CLIENT */}
        {/* ========================================================= */}
        {activeTab === "MESSAGES" && (
          <div className="bg-white rounded-xl border border-gray-200/90 shadow-xs p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-semibold text-awaaya-forest bg-awaaya-forestPale px-2.5 py-1 rounded-md">
                  Console de Messagerie Partagée
                </span>
                <h3 className="font-heading font-bold text-lg text-gray-900 mt-1">
                  Échanges sur : {currentMission.title} ({currentMission.organization})
                </h3>
              </div>

              {/* Sélecteur de mission */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500">Mission :</span>
                <select
                  value={activeMissionId}
                  onChange={(e) => setActiveMissionId(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-gray-300 text-xs font-bold bg-white focus:ring-2 focus:ring-awaaya-forest focus:outline-hidden"
                >
                  {missions.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.id} — {m.organization}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Historique des messages */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto p-4 rounded-2xl bg-gray-50 border border-gray-100">
              {currentMission.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-xl ${
                    msg.isAwaaya ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-xs ${
                      msg.isAwaaya
                        ? "bg-awaaya-forest text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {msg.avatar}
                  </div>
                  <div>
                    <div className={`flex items-center gap-2 text-[10px] text-gray-400 mb-1 ${
                      msg.isAwaaya ? "justify-end" : ""
                    }`}>
                      <strong className="text-gray-700">{msg.sender}</strong>
                      <span>({msg.senderRole})</span>
                      <span>•</span>
                      <span>{msg.date} {msg.time}</span>
                    </div>
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.isAwaaya
                          ? "bg-awaaya-forest text-white rounded-tr-none shadow-xs"
                          : "bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-xs"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire de réponse du consultant */}
            <form onSubmit={handleSendConsultantMessage} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="text"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Rédiger une réponse ou une recommandation en tant que consultant AWAAYA..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest"
              />
              <button
                type="submit"
                className="bg-awaaya-forest hover:bg-awaaya-forestDark text-white px-6 py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer au client</span>
              </button>
            </form>

          </div>
        )}

      </main>

    </div>
  );
}
