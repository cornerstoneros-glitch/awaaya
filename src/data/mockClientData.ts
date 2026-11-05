export interface TestPersona {
  id: string;
  name: string;
  role: string;
  roleBadge: string;
  organization: string;
  email: string;
  avatarInitials: string;
  activeMissionId: string;
}

export const TEST_PERSONAS: TestPersona[] = [
  {
    id: "persona-dg",
    name: "Kouamé N'Guessan",
    role: "Direction Générale / Client Entreprise",
    roleBadge: "Client DG",
    organization: "Agro-Industrie & Distribution SA (Abidjan)",
    email: "k.nguessan@agro-ci.com",
    avatarInitials: "KN",
    activeMissionId: "AWY-2026-001"
  },
  {
    id: "persona-consultant",
    name: "Fatou Traoré",
    role: "Senior Manager Stratégie & PMO",
    roleBadge: "AWAAYA Team",
    organization: "Cabinet AWAAYA Consulting",
    email: "fatou.traore@awaaya-consulting.com",
    avatarInitials: "FT",
    activeMissionId: "AWY-2026-001"
  },
  {
    id: "persona-rse",
    name: "Amadou Koné",
    role: "Directeur RSE & Développement Durable",
    roleBadge: "Client RSE",
    organization: "Société Ivoirienne de Valorisation (SIV)",
    email: "a.kone@siv-ci.com",
    avatarInitials: "AK",
    activeMissionId: "AWY-2026-002"
  }
];

export interface Milestone {
  id: string;
  title: string;
  phase: string;
  dueDate: string;
  status: "VALIDATED" | "IN_PROGRESS" | "PENDING" | "DELAYED";
  statusLabel: string;
}

export interface ActionItem {
  id: string;
  title: string;
  responsible: string;
  dueDate: string;
  status: "TODO" | "IN_PROGRESS" | "DONE" | "BLOCKED";
  priority: "HAUTE" | "MOYENNE" | "BASSE";
}

export interface Deliverable {
  id: string;
  title: string;
  fileName: string;
  category: "RAPPORT" | "LIVRABLE_PMO" | "GRILLE_EXCEL" | "SYNTHESE";
  version: string;
  date: string;
  size: string;
  status: "VALIDÉ" | "EN_REVUE" | "PROVISOIRE";
  downloadUrl: string;
}

export interface Indicator {
  id: string;
  title: string;
  category: "COMMERCIAL" | "ESG" | "PMO";
  unit: string;
  baseline: number;
  current: number;
  target: number;
  progression: string;
  trend: "up" | "down" | "neutral";
}

export interface MessageItem {
  id: string;
  sender: string;
  senderRole: string;
  avatar: string;
  date: string;
  time: string;
  content: string;
  isAwaaya: boolean;
  attachment?: string;
}

export interface ClientMission {
  id: string;
  reference: string;
  title: string;
  pillar: "CONSEIL" | "PILOTAGE" | "FORMATION";
  pillarLabel: string;
  organization: string;
  sector: string;
  currentPhase: string;
  phaseIndex: number; // 1 to 4
  progressPercent: number;
  startDate: string;
  targetEndDate: string;
  consultantLead: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };
  nextCommitteeDate: string;
  nextCommitteeTopic: string;
  milestones: Milestone[];
  actionItems: ActionItem[];
  deliverables: Deliverable[];
  indicators: Indicator[];
  messages: MessageItem[];
}

export const MOCK_CLIENT_MISSIONS: ClientMission[] = [
  {
    id: "AWY-2026-001",
    reference: "AWY-2026-001",
    title: "Accélération Commerciale & Expansion UEMOA",
    pillar: "CONSEIL",
    pillarLabel: "Conseil Stratégique & Croissance",
    organization: "Agro-Industrie & Distribution SA",
    sector: "Agro-industrie & Grande Distribution",
    currentPhase: "Déploiement des Forces de Vente & KAM",
    phaseIndex: 3,
    progressPercent: 68,
    startDate: "15 Janvier 2026",
    targetEndDate: "30 Juin 2026",
    consultantLead: {
      name: "Fatou Traoré",
      title: "Senior Manager Stratégie & PMO AWAAYA",
      email: "fatou.traore@awaaya-consulting.com",
      phone: "+225 27 20 00 12 34"
    },
    nextCommitteeDate: "12 Novembre 2026 à 10h00",
    nextCommitteeTopic: "Comité de Pilotage Mensuel #4 — Revue de performance Q3 & Closing UEMOA",
    milestones: [
      {
        id: "m-1",
        title: "Audit 360° du portefeuille et segmentation ABC/Pareto",
        phase: "Phase 1 - Diagnostic",
        dueDate: "15 Février 2026",
        status: "VALIDATED",
        statusLabel: "Validé en CoPil"
      },
      {
        id: "m-2",
        title: "Validation de la nouvelle politique tarifaire et incitations",
        phase: "Phase 2 - Cadrage",
        dueDate: "30 Mars 2026",
        status: "VALIDATED",
        statusLabel: "Validé DG"
      },
      {
        id: "m-3",
        title: "Masterclass Key Account Management & Déploiement KAM",
        phase: "Phase 3 - Déploiement",
        dueDate: "20 Mai 2026",
        status: "IN_PROGRESS",
        statusLabel: "En cours d'exécution"
      },
      {
        id: "m-4",
        title: "Revue semestrielle et ajustement des quotas d'expansion",
        phase: "Phase 4 - Bilan",
        dueDate: "30 Juin 2026",
        status: "PENDING",
        statusLabel: "Planifié"
      }
    ],
    actionItems: [
      {
        id: "act-1",
        title: "Finalisation du mapping des 20 comptes prioritaires à Abidjan",
        responsible: "Kouamé N'Guessan (DG) / Dir. Commercial",
        dueDate: "05 Nov 2026",
        status: "DONE",
        priority: "HAUTE"
      },
      {
        id: "act-2",
        title: "Installation du dashboard de closing hebdomadaire sur CRM",
        responsible: "Équipe IT & AWAAYA PMO",
        dueDate: "15 Nov 2026",
        status: "IN_PROGRESS",
        priority: "HAUTE"
      },
      {
        id: "act-3",
        title: "Atelier de simulation de négociation pour 6 responsables régionaux",
        responsible: "Fatou Traoré (AWAAYA)",
        dueDate: "24 Nov 2026",
        status: "TODO",
        priority: "MOYENNE"
      },
      {
        id: "act-4",
        title: "Validation des fiches de poste des Key Account Managers",
        responsible: "Direction des Ressources Humaines",
        dueDate: "30 Nov 2026",
        status: "TODO",
        priority: "BASSE"
      }
    ],
    deliverables: [
      {
        id: "del-1",
        title: "Rapport d'Audit Commercial 360° & Matrice de Rentabilité",
        fileName: "AWY-2026-001_Audit_Commercial_v2.pdf",
        category: "RAPPORT",
        version: "v2.1 Définitif",
        date: "28 Février 2026",
        size: "4.8 Mo",
        status: "VALIDÉ",
        downloadUrl: "#"
      },
      {
        id: "del-2",
        title: "Plan d'Action Commercial (PAC) & Grille de Rémunération Variable",
        fileName: "AWY-2026-001_PAC_Simulateur.xlsx",
        category: "GRILLE_EXCEL",
        version: "v1.4 Validé",
        date: "02 Avril 2026",
        size: "2.1 Mo",
        status: "VALIDÉ",
        downloadUrl: "#"
      },
      {
        id: "del-3",
        title: "Playbook Stratégique Key Account Management (KAM)",
        fileName: "AWY-2026-001_Playbook_KAM_Provisoire.pdf",
        category: "SYNTHESE",
        version: "v1.0 En Revue",
        date: "18 Octobre 2026",
        size: "9.2 Mo",
        status: "EN_REVUE",
        downloadUrl: "#"
      }
    ],
    indicators: [
      {
        id: "ind-1",
        title: "Croissance Chiffre d'Affaires Grands Comptes",
        category: "COMMERCIAL",
        unit: "%",
        baseline: 0,
        current: 18.4,
        target: 25.0,
        progression: "+18.4% vs N-1",
        trend: "up"
      },
      {
        id: "ind-2",
        title: "Taux de Transformation / Closing",
        category: "COMMERCIAL",
        unit: "%",
        baseline: 21,
        current: 34,
        target: 40,
        progression: "+13 pts",
        trend: "up"
      },
      {
        id: "ind-3",
        title: "Respect des Jalons du Rétroplanning PMO",
        category: "PMO",
        unit: "%",
        baseline: 100,
        current: 92,
        target: 95,
        progression: "92% d'adhérence",
        trend: "neutral"
      },
      {
        id: "ind-4",
        title: "Taux d'Attrition Client (Churn)",
        category: "COMMERCIAL",
        unit: "%",
        baseline: 14.2,
        current: 8.1,
        target: 6.0,
        progression: "-6.1 pts de rétention",
        trend: "up"
      }
    ],
    messages: [
      {
        id: "msg-1",
        sender: "Fatou Traoré",
        senderRole: "Senior Manager AWAAYA",
        avatar: "FT",
        date: "Hier",
        time: "16:45",
        content: "Bonjour M. N'Guessan. Nous avons finalisé l'intégration des retours de votre Direction Financière dans le simulateur de rentabilité. Le document v1.4 est téléchargeable dans l'onglet Livrables.",
        isAwaaya: true,
        attachment: "AWY-2026-001_PAC_Simulateur.xlsx"
      },
      {
        id: "msg-2",
        sender: "Kouamé N'Guessan",
        senderRole: "Directeur Général",
        avatar: "KN",
        date: "Hier",
        time: "17:10",
        content: "Merci Fatou. Je valide la version pour la présentation au Conseil de surveillance de jeudi matin.",
        isAwaaya: false
      },
      {
        id: "msg-3",
        sender: "Fatou Traoré",
        senderRole: "Senior Manager AWAAYA",
        avatar: "FT",
        date: "Aujourd'hui",
        time: "09:15",
        content: "Bien reçu. Nous préparons la note exécutive de 3 pages de synthèse à distribuer aux administrateurs.",
        isAwaaya: true
      }
    ]
  },
  {
    id: "AWY-2026-002",
    reference: "AWY-2026-002",
    title: "Feuille de Route Décarbonation & Économie Circulaire",
    pillar: "PILOTAGE",
    pillarLabel: "Pilotage & Transition Circulaire",
    organization: "Société Ivoirienne de Valorisation (SIV)",
    sector: "Agro-transformation & Énergie",
    currentPhase: "Montage Financier & Valorisation Biomasse",
    phaseIndex: 2,
    progressPercent: 42,
    startDate: "01 Février 2026",
    targetEndDate: "31 Août 2026",
    consultantLead: {
      name: "Dr. Christian K.",
      title: "Directeur de Pôle Transition Bas-Carbone",
      email: "c.kone@awaaya-consulting.com",
      phone: "+225 27 20 00 55 66"
    },
    nextCommitteeDate: "19 Novembre 2026 à 14h30",
    nextCommitteeTopic: "Comité ESG Trimestriel — Arbitrage technologique cogénération biomasse",
    milestones: [
      {
        id: "m-21",
        title: "Bilan Carbone Scopes 1 & 2 (Norme ISO 14064 / GHG Protocol)",
        phase: "Phase 1 - Diagnostic",
        dueDate: "15 Mars 2026",
        status: "VALIDATED",
        statusLabel: "Rapport Validé"
      },
      {
        id: "m-22",
        title: "Étude technico-économique de valorisation des coques de cacao",
        phase: "Phase 2 - Étude d'Impact",
        dueDate: "15 Mai 2026",
        status: "IN_PROGRESS",
        statusLabel: "En cours de finalisation"
      },
      {
        id: "m-23",
        title: "Structuration du dossier de financement vert (BIDC / BOAD)",
        phase: "Phase 3 - Financement",
        dueDate: "15 Juillet 2026",
        status: "PENDING",
        statusLabel: "À démarrer"
      }
    ],
    actionItems: [
      {
        id: "act-21",
        title: "Collecte des relevés de consommation électrique sur les 3 usines",
        responsible: "Responsable Technique SIV",
        dueDate: "10 Nov 2026",
        status: "DONE",
        priority: "HAUTE"
      },
      {
        id: "act-22",
        title: "Rencontre avec le fournisseur de chaudières industrielles",
        responsible: "Dr. Christian K. (AWAAYA)",
        dueDate: "18 Nov 2026",
        status: "IN_PROGRESS",
        priority: "MOYENNE"
      }
    ],
    deliverables: [
      {
        id: "del-21",
        title: "Rapport d'Empreinte Carbone & Plan de Décarbonation 2030",
        fileName: "SIV_Bilan_Carbone_Scopes1-2-3_v1.0.pdf",
        category: "RAPPORT",
        version: "v1.0 Définitif",
        date: "20 Mars 2026",
        size: "6.4 Mo",
        status: "VALIDÉ",
        downloadUrl: "#"
      }
    ],
    indicators: [
      {
        id: "ind-21",
        title: "Taux de Valorisation Énergétique des Déchets",
        category: "ESG",
        unit: "%",
        baseline: 12,
        current: 48,
        target: 85,
        progression: "+36 pts de valorisation",
        trend: "up"
      },
      {
        id: "ind-22",
        title: "Émissions Évitées Annuelles Estimées",
        category: "ESG",
        unit: "tCO2e/an",
        baseline: 0,
        current: 1420,
        target: 3500,
        progression: "1 420 tCO2e sécurisées",
        trend: "up"
      }
    ],
    messages: [
      {
        id: "msg-21",
        sender: "Dr. Christian K.",
        senderRole: "Pôle Transition AWAAYA",
        avatar: "CK",
        date: "26 Octobre",
        time: "11:20",
        content: "Bonjour Amadou. Nous avons bouclé la pré-qualification des équipementiers. Le tableau comparatif sera partagé avant le comité du 19 novembre.",
        isAwaaya: true
      }
    ]
  }
];

