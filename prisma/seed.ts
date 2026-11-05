import { PrismaClient, Role, PillarType, MissionPhase, MilestoneStatus, ActionStatus, LeadStatus, TrainingFormat } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting AWAAYA Database Seed...");

  // 1. ORGANISATIONS
  const orgAgro = await prisma.organization.upsert({
    where: { id: "org-agro-001" },
    update: {},
    create: {
      id: "org-agro-001",
      name: "Agro-Industrie & Distribution SA",
      sector: "Agro-industrie & Cacao",
      country: "Côte d'Ivoire",
      city: "Abidjan",
      sizeRange: "250-500 employés",
    },
  });

  const orgSiv = await prisma.organization.upsert({
    where: { id: "org-siv-002" },
    update: {},
    create: {
      id: "org-siv-002",
      name: "Société Ivoirienne de Valorisation (SIV)",
      sector: "Environnement & Recyclage",
      country: "Côte d'Ivoire",
      city: "San Pedro",
      sizeRange: "50-250 employés",
    },
  });

  // 2. UTILISATEURS
  const userDg = await prisma.user.upsert({
    where: { email: "k.nguessan@agro-ci.com" },
    update: {},
    create: {
      email: "k.nguessan@agro-ci.com",
      passwordHash: "$2b$10$EpOdN5wG...mockhash",
      firstName: "Kouamé",
      lastName: "N'Guessan",
      phone: "+225 07 07 11 22 33",
      role: Role.CLIENT_USER,
      organizationId: orgAgro.id,
    },
  });

  const userConsultant = await prisma.user.upsert({
    where: { email: "fatou.traore@awaaya-consulting.com" },
    update: {},
    create: {
      email: "fatou.traore@awaaya-consulting.com",
      passwordHash: "$2b$10$EpOdN5wG...mockhash",
      firstName: "Fatou",
      lastName: "Traoré",
      phone: "+225 27 22 00 00 01",
      role: Role.CONSULTANT,
    },
  });

  const userRse = await prisma.user.upsert({
    where: { email: "a.kone@siv-ci.com" },
    update: {},
    create: {
      email: "a.kone@siv-ci.com",
      passwordHash: "$2b$10$EpOdN5wG...mockhash",
      firstName: "Amadou",
      lastName: "Koné",
      phone: "+225 05 05 44 55 66",
      role: Role.CLIENT_USER,
      organizationId: orgSiv.id,
    },
  });

  // 3. DOMAINES & PRESTATIONS
  const domainRse = await prisma.domain.upsert({
    where: { slug: "durabilite-rse-esg" },
    update: {},
    create: {
      slug: "durabilite-rse-esg",
      title: "Durabilité, RSE & Conformité ESG",
      pillar: PillarType.CONSEIL,
      description: "Accompagnement stratégique sur les critères environnementaux, sociaux et de gouvernance.",
    },
  });

  const serviceRse = await prisma.service.upsert({
    where: { slug: "strategie-rse-decarbonation" },
    update: {},
    create: {
      slug: "strategie-rse-decarbonation",
      title: "Stratégie RSE, bilan carbone et plan de décarbonation",
      subtitle: "Transformer les exigences environnementales en valeur économique mesurable.",
      domainId: domainRse.id,
      challenges: "Pression croissante des régulateurs et donneurs d'ordres internationaux sur les émissions de gaz à effet de serre.",
      steps: [
        { title: "Bilan Carbone Bilan GES", desc: "Mesure des postes Scope 1, 2 et 3." },
        { title: "Trajectoire de réduction", desc: "Coconstruction d'un plan d'actions chiffré à 5 ans." }
      ],
      deliverables: ["Rapport Bilan Carbone conforme ISO 14064", "Plan de transition bas-carbone"],
      durationText: "6 à 10 semaines",
      targetAudience: ["Directions Générales", "Directions RSE & QSE"],
      faqs: [
        { q: "Quelles sont les normes appliquées ?", a: "Protocole GHG, ISO 14064 et standards GRI." }
      ],
    },
  });

  // 4. MISSIONS
  const mission001 = await prisma.mission.upsert({
    where: { reference: "AWY-2026-001" },
    update: {},
    create: {
      reference: "AWY-2026-001",
      title: "Structuration Stratégie RSE & Décarbonation Fillière Cacao",
      organizationId: orgAgro.id,
      serviceId: serviceRse.id,
      currentPhase: MissionPhase.IMPLEMENTATION,
      progressPercent: 78,
      startDate: new Date("2026-01-10"),
      targetEndDate: new Date("2026-05-30"),
      consultants: {
        connect: [{ id: userConsultant.id }],
      },
    },
  });

  // 5. JALONS DE LA MISSION
  await prisma.milestone.createMany({
    data: [
      {
        missionId: mission001.id,
        title: "Cadrage & Périmètre d'Audit",
        dueDate: new Date("2026-01-30"),
        status: MilestoneStatus.VALIDATED,
      },
      {
        missionId: mission001.id,
        title: "Collecte & Analyse des Données Carbone",
        dueDate: new Date("2026-02-28"),
        status: MilestoneStatus.VALIDATED,
      },
      {
        missionId: mission001.id,
        title: "Coconstruction de la Feuille de Route 2030",
        dueDate: new Date("2026-03-31"),
        status: MilestoneStatus.IN_PROGRESS,
      },
      {
        missionId: mission001.id,
        title: "Restitution Exécutive en Conseil d'Administration",
        dueDate: new Date("2026-04-30"),
        status: MilestoneStatus.PENDING,
      },
    ],
    skipDuplicates: true,
  });

  // 6. ÉTUDES DE CAS
  await prisma.caseStudy.create({
    data: {
      title: "Traçabilité Déforestation Zéro & Stratégie ESG pour un leader agro-industriel",
      sector: "Agro-Industrie & Cacao",
      clientProfile: "Groupe Exportateur (CA > 120 Mrds FCFA)",
      challenge: "Conformité stricte au Règlement Européen Déforestation (RDUE) et risque de blocage douanier.",
      solution: "Standardisation du protocole d'audit terrain, kit mobile géoréférencé et dashboard ESG d'administration.",
      impactResults: [
        { metric: "100%", label: "Conformité RDUE sans rejet" },
        { metric: "-28%", label: "Émissions Scope 3" },
        { metric: "+18%", label: "Primes de Durabilité" }
      ],
    },
  });

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

