import fs from "node:fs";
import path from "node:path";
import { prisma } from "./prisma";
import { 
  TEST_PERSONAS, 
  TestPersona, 
  MOCK_CLIENT_MISSIONS, 
  ClientMission, 
  ActionItem, 
  MessageItem 
} from "@/data/mockClientData";
import { CASE_STUDIES, CaseStudy, PUBLICATIONS, Publication } from "@/data/caseStudies";

export interface LeadItem {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  sector?: string;
  size?: string;
  serviceId?: string;
  timeframe?: string;
  message?: string;
  source: "DIAGNOSTIC_FORM" | "RSE_ASSESSMENT" | "COMMERCIAL_ASSESSMENT" | "WHITEPAPER_DOWNLOAD";
  score?: number;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL_SENT" | "CONVERTED" | "LOST";
  createdAt: string;
}

// Initial mock leads for back-office preview
const INITIAL_LEADS: LeadItem[] = [
  {
    id: "lead-001",
    fullName: "Yao N'Dri",
    email: "y.ndri@palmindustrie.ci",
    phone: "+225 07 08 12 34 56",
    organization: "Palm Industrie Côte d'Ivoire",
    sector: "Agro-industrie",
    size: "250-500 employés",
    source: "RSE_ASSESSMENT",
    score: 62,
    status: "QUALIFIED",
    message: "Demande de rapport complet Durabilité & ESG et accompagnement sur la traçabilité des régimes de palme.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "lead-002",
    fullName: "Aïcha Sanogo",
    email: "a.sanogo@africabuild-ci.com",
    phone: "+225 05 45 67 89 01",
    organization: "Africa Build Matériaux",
    sector: "Industrie & Matériaux",
    size: "50-250 employés",
    source: "DIAGNOSTIC_FORM",
    serviceId: "audit-energetique-decarbonation",
    timeframe: "Moins de 3 mois",
    status: "NEW",
    message: "Audit énergétique requis avant l'inspection annuelle et restructuration des coûts de production.",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: "lead-003",
    fullName: "Marc-Arthur Bédié",
    email: "m.bedie@banque-atlantique-demo.ci",
    phone: "+225 01 23 45 67 89",
    organization: "Groupe Financier Régional",
    sector: "Banque & Finance",
    size: "> 500 employés",
    source: "COMMERCIAL_ASSESSMENT",
    score: 81,
    status: "PROPOSAL_SENT",
    message: "Académie KAM pour 40 chargés d'affaires corporate à Abidjan et Dakar.",
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
  },
  {
    id: "lead-004",
    fullName: "Christelle Akissi",
    email: "c.akissi@ci-logistics.ci",
    phone: "+225 07 77 88 99 00",
    organization: "CI Maritime & Logistics",
    sector: "Transport & Logistique",
    size: "50-250 employés",
    source: "WHITEPAPER_DOWNLOAD",
    status: "CONTACTED",
    message: "Téléchargement du Guide Décarbonation 2026. Souhaite une prise de contact avec le pôle Conseil.",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  }
];

// File-backed persistent fallback store
const STORE_DIR = path.join(process.cwd(), ".data");
const STORE_FILE = path.join(STORE_DIR, "store.json");

interface LocalStoreState {
  leads: LeadItem[];
  missions: ClientMission[];
}

function getLocalStore(): LocalStoreState {
  try {
    if (!fs.existsSync(STORE_DIR)) {
      fs.mkdirSync(STORE_DIR, { recursive: true });
    }
    if (fs.existsSync(STORE_FILE)) {
      const data = fs.readFileSync(STORE_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Local store read error, using memory defaults", e);
  }
  const defaultState: LocalStoreState = {
    leads: INITIAL_LEADS,
    missions: MOCK_CLIENT_MISSIONS,
  };
  saveLocalStore(defaultState);
  return defaultState;
}

function saveLocalStore(state: LocalStoreState) {
  try {
    if (!fs.existsSync(STORE_DIR)) {
      fs.mkdirSync(STORE_DIR, { recursive: true });
    }
    fs.writeFileSync(STORE_FILE, JSON.stringify(state, null, 2), "utf-8");
  } catch (e) {
    console.error("Local store write error", e);
  }
}

export class DbService {
  // ----------------------------------------------------
  // LEADS & QUALIFICATION
  // ----------------------------------------------------
  static async getLeads(): Promise<LeadItem[]> {
    try {
      if (process.env.DATABASE_URL) {
        const dbLeads = await prisma.lead.findMany({
          orderBy: { createdAt: "desc" },
        });
        if (dbLeads.length > 0) {
          return dbLeads.map((l) => ({
            id: l.id,
            fullName: l.fullName,
            email: l.email,
            phone: l.phone,
            organization: l.organization,
            sector: l.sector || undefined,
            size: l.size || undefined,
            serviceId: l.serviceId || undefined,
            timeframe: l.timeframe || undefined,
            message: l.message || undefined,
            source: l.source as any,
            status: l.status as any,
            createdAt: l.createdAt.toISOString(),
          }));
        }
      }
    } catch {
      // Fallback
    }
    const store = getLocalStore();
    return store.leads;
  }

  static async createLead(data: Omit<LeadItem, "id" | "createdAt" | "status">): Promise<LeadItem> {
    const newLead: LeadItem = {
      ...data,
      id: `lead-${Date.now()}`,
      status: "NEW",
      createdAt: new Date().toISOString(),
    };

    try {
      if (process.env.DATABASE_URL) {
        await prisma.lead.create({
          data: {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            organization: data.organization,
            sector: data.sector,
            size: data.size,
            serviceId: data.serviceId,
            timeframe: data.timeframe,
            message: data.message,
            source: data.source,
            status: "NEW",
          },
        });
      }
    } catch {
      // Fallback
    }

    const store = getLocalStore();
    store.leads.unshift(newLead);
    saveLocalStore(store);
    return newLead;
  }

  static async updateLeadStatus(leadId: string, status: LeadItem["status"]): Promise<boolean> {
    try {
      if (process.env.DATABASE_URL) {
        await prisma.lead.update({
          where: { id: leadId },
          data: { status: status as any },
        });
      }
    } catch {
      // Fallback
    }
    const store = getLocalStore();
    const idx = store.leads.findIndex((l) => l.id === leadId);
    if (idx !== -1) {
      store.leads[idx].status = status;
      saveLocalStore(store);
      return true;
    }
    return false;
  }

  // ----------------------------------------------------
  // MISSIONS & JALONS
  // ----------------------------------------------------
  static async getMissions(): Promise<ClientMission[]> {
    const store = getLocalStore();
    return store.missions;
  }

  static async getMissionById(missionId: string): Promise<ClientMission | undefined> {
    const store = getLocalStore();
    return store.missions.find((m) => m.id === missionId);
  }

  static async updateMilestoneStatus(
    missionId: string, 
    milestoneId: string, 
    status: "VALIDATED" | "IN_PROGRESS" | "PENDING" | "DELAYED"
  ): Promise<boolean> {
    const store = getLocalStore();
    const mission = store.missions.find((m) => m.id === missionId);
    if (!mission) return false;

    const milestone = mission.milestones.find((ml) => ml.id === milestoneId);
    if (!milestone) return false;

    milestone.status = status;
    // Recompute progress
    const validatedCount = mission.milestones.filter((m) => m.status === "VALIDATED").length;
    mission.progressPercent = Math.round((validatedCount / mission.milestones.length) * 100);

    saveLocalStore(store);
    return true;
  }

  static async addMessage(missionId: string, message: MessageItem): Promise<boolean> {
    const store = getLocalStore();
    const mission = store.missions.find((m) => m.id === missionId);
    if (!mission) return false;

    mission.messages.push(message);
    saveLocalStore(store);
    return true;
  }

  // ----------------------------------------------------
  // ÉTUDES DE CAS & PUBLICATIONS
  // ----------------------------------------------------
  static getCaseStudies(): CaseStudy[] {
    return CASE_STUDIES;
  }

  static getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return CASE_STUDIES.find((cs) => cs.slug === slug);
  }

  static getPublications(): Publication[] {
    return PUBLICATIONS;
  }
}
