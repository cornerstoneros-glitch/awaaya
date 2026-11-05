export interface ServiceDetail {
  slug: string;
  code?: string; // S1, S2, S3, S4...
  pillar: "CONSEIL" | "PILOTAGE" | "FORMATION";
  pillarLabel: string;
  domain: string;
  title: string;
  commercialTitle?: string;
  subtitle: string;
  target: string;
  challenges: string;
  steps: { title: string; desc: string }[];
  deliverables: string[];
  duration: string;
  targetAudience: string[];
  faqs: { q: string; a: string }[];
  ctaLabel: string;
}

export const AWAAYA_BRAND = {
  name: "AWAAYA",
  tagline: "Croître en Afrique, de façon rentable et durable",
  subTagline: "Conseil en expansion régionale, gestion de comptes clés et transformation durable · Abidjan, Côte d’Ivoire",
  signature: "Conseils, Stratégies & Pilotage.",
  operatingModel: "Réseau de consultants experts sectoriels et directeurs de mission chevronnés mobilisés sur mesure.",
  description:
    "AWAAYA est un cabinet de conseil, de transformation et de durabilité basé à Abidjan. S'appuyant sur un réseau de consultants experts sectoriels, directeurs de mission chevronnés et praticiens de haut niveau, le cabinet accompagne les organisations dans leur développement commercial, le pilotage de leurs transformations et la mise en œuvre de leur démarche de durabilité. Il intervient du diagnostic au suivi des actions, avec des prestations adaptées aux objectifs, aux ressources et aux contraintes du client.",
  coreThesis:
    "Les entreprises qui visent l’Afrique de l’Ouest et du Centre ont besoin de vendre, de fidéliser et de se conformer aux exigences ESG de leurs clients. AWAAYA relie ces trois besoins dans une offre unique.",
  hub: "Un hub régional, bilingue français-anglais, au cœur de 13 marchés.",
  portfolioOverview: {
    conseil:
      "Conseil : deux domaines, Croissance commerciale & expansion et Durabilité & responsabilité sociétale, comprenant cinq prestations.",
    pilotage:
      "Pilotage de projets : transformations organisationnelles et numériques.",
    formation:
      "Formation & mobilisation : gestion et développement des grands comptes (Key Account Management).",
  },
};

export interface CoreOffer {
  code: "OFFRE 1" | "OFFRE 2" | "OFFRE A" | "OFFRE B";
  engine: "CROISSANCE" | "DURABILITE";
  engineLabel: string;
  name: string;
  summary: string;
  description: string;
  format: string;
  pricing: string;
  pricingDetail: string;
  deliverables: string[];
  cofinancingNote?: string;
  link: string;
}

export const AWAAYA_CORE_OFFERS: CoreOffer[] = [
  {
    code: "OFFRE 1",
    engine: "CROISSANCE",
    engineLabel: "Moteur Croissance",
    name: "Africa Market Entry",
    summary: "Étude pays, partenaires et distributeurs, plan commercial sur 12 mois, country manager externalisé.",
    description: "Pour les éditeurs de logiciels, fintechs, cybersécurité et fabricants internationaux souhaitant vendre et s'implanter en Afrique de l'Ouest et Centrale en mode Country Manager externalisé, sans filiale lourde préalable.",
    format: "Diagnostic, puis retainer et commission",
    pricing: "Diagnostic 5 à 15 K€",
    pricingDetail: "Tarif indicatif à valider selon la taille du client et le périmètre géographique.",
    deliverables: [
      "Étude pays et priorisation des marchés adressables",
      "Qualification et contractualisation des partenaires et distributeurs",
      "Plan commercial sur 12 mois avec rétroplanning d'exécution",
      "Country Manager externalisé à temps partagé"
    ],
    link: "/conseil/croissance-commerciale-expansion"
  },
  {
    code: "OFFRE 2",
    engine: "CROISSANCE",
    engineLabel: "Moteur Croissance",
    name: "Key Account Management",
    summary: "Audit de comptes, plans de compte, gestion déléguée de comptes clés, coaching des équipes locales.",
    description: "Destiné aux entreprises technologiques et B2B disposant de comptes stratégiques en Afrique (opérateurs télécoms, banques, multinationales) nécessitant un pilotage exécutif de proximité pour maximiser la rentabilité.",
    format: "Retainer mensuel par compte",
    pricing: "Retainer mensuel",
    pricingDetail: "Tarif indicatif au forfait mensuel par compte clé suivi.",
    deliverables: [
      "Audit de comptes et Power Mapping des décideurs C-Level",
      "Plans de compte stratégiques (Account Plans) complets",
      "Gestion déléguée de comptes clés en relation directe",
      "Coaching des équipes locales et outillage CRM (Salesforce)"
    ],
    link: "/formation/grands-comptes-rse"
  },
  {
    code: "OFFRE A",
    engine: "DURABILITE",
    engineLabel: "Moteur Durabilité",
    name: "Sustainable Market Entry",
    summary: "Due diligence ESG, cartographie des parties prenantes, plan ESG de lancement intégré au go-to-market.",
    description: "Sécuriser votre licence sociale d'opérer, prévenir les risques réputationnels et réussir votre implantation durable face aux exigences réglementaires internationales (CSRD, RDUE, chaîne de valeur durable).",
    format: "Module sur mission 1 ou diagnostic",
    pricing: "3 à 10 K€",
    pricingDetail: "Tarif indicatif selon la taille du client et l'envergure du projet d'implantation.",
    deliverables: [
      "Due diligence ESG des pays, distributeurs et sous-traitants",
      "Cartographie d'engagement des parties prenantes locales",
      "Matrice de prévention des risques réputationnels et de conformité",
      "Plan ESG de lancement sur 12 mois intégré au business plan commercial"
    ],
    link: "/conseil/durabilite-responsabilite-societale"
  },
  {
    code: "OFFRE B",
    engine: "DURABILITE",
    engineLabel: "Moteur Durabilité",
    name: "Circular Economy Programs",
    summary: "Diagnostic des flux de matières, projets de valorisation, écosystème multi-acteurs, pilotage de programme.",
    description: "Accompagner les industriels, entreprises de production et collectivités dans la transformation de leurs flux de matières et déchets en leviers d'économies, de rentabilité et d'impact durable.",
    format: "Diagnostic, puis pilotage de programme",
    pricing: "Diagnostic puis pilotage",
    pricingDetail: "Tarifs indicatifs à valider selon la taille du client. Les bailleurs peuvent cofinancer l'offre B.",
    cofinancingNote: "Les bailleurs de fonds internationaux peuvent cofinancer l'offre B.",
    deliverables: [
      "Diagnostic complet des flux de matières et gisements de déchets",
      "Études de faisabilité technique et économique de valorisation",
      "Mobilisation de l'écosystème multi-acteurs (entreprises, collectivités, ONG)",
      "Pilotage de programme PMO et reporting d'impact certifiable"
    ],
    link: "/pilotage"
  }
];

export const AWAAYA_VALUE_ENGINES = {
  tagline: "Un cabinet, deux moteurs de valeur",
  coreThesis: "Les entreprises qui visent l’Afrique de l’Ouest et du Centre ont besoin de vendre, de fidéliser et de se conformer aux exigences ESG de leurs clients. AWAAYA relie ces trois besoins dans une offre unique.",
  hub: {
    city: "Abidjan, Côte d'Ivoire",
    label: "Ancrage Abidjan",
    description: "Un hub régional, bilingue français-anglais, au cœur de 13 marchés africains stratégiques."
  },
  engines: [
    {
      id: "croissance",
      title: "Croissance",
      summary: "Entrer sur les marchés africains et piloter les comptes stratégiques.",
      offers: ["OFFRE 1 : Africa Market Entry", "OFFRE 2 : Key Account Management"]
    },
    {
      id: "durabilite",
      title: "Durabilité",
      summary: "Intégrer l’ESG et l’économie circulaire dans la stratégie et les opérations.",
      offers: ["OFFRE A : Sustainable Market Entry", "OFFRE B : Circular Economy Programs"]
    }
  ]
};

export const AWAAYA_PROVEN_METRICS = [
  { value: "20+", label: "Années d'expérience", desc: "En développement commercial et transformation d'organisations" },
  { value: "13", label: "Marchés africains", desc: "Couverts en Afrique de l'Ouest et du Centre" },
  { value: "30 M€+", label: "Opportunités commerciales", desc: "Influencées en Afrique de l'Ouest et Centrale" },
  { value: "5", label: "Programmes d'économie circulaire", desc: "Conçus et pilotés avec succès pour industriels et institutions" },
  { value: "100+", label: "Dirigeants et décideurs", desc: "Accompagnés dans leurs enjeux de transformation" },
  { value: "2025", label: "Swedish Institute", desc: "Leadership for Sustainability — Programme Exécutif Global" }
];

export const AWAAYA_RESULTS = [
  {
    client: "MTN",
    scope: "8 Filiales africaines",
    figure: "2,3 M$ / an",
    summary: "Revenus annuels générés sur des projets logiciels et services managés, avec gestion du P&L."
  },
  {
    client: "ORANGE",
    scope: "13 Filiales régionales",
    figure: "1,2 M€",
    summary: "Contrat d'infrastructure data center, plus des contrats de support avec SLA rigoureux."
  },
  {
    client: "Cybersécurité",
    scope: "Afrique de l'Ouest",
    figure: "2,0 M€",
    summary: "Projet de cybersécurité analytique, avec contrat de support de 3 ans inclus."
  },
  {
    client: "Durabilité — NT Consulting",
    scope: "Industrie & Collectivités",
    figure: "5+ Programmes",
    summary: "Programmes d'économie circulaire : flux de matières, déchets valorisés, économies et certification."
  }
];

export const AWAAYA_TARGET_MARKETS = {
  local: {
    title: "Marchés Local & Régional",
    items: [
      "Industriels et entreprises de production",
      "Entreprises exportatrices vers l’Europe",
      "Opérateurs télécoms, banques et grands comptes"
    ]
  },
  international: {
    title: "Marchés Internationaux",
    items: [
      "Éditeurs, fintechs et cybersécurité",
      "Groupes européens, indiens et moyen-orientaux",
      "Bailleurs et institutions de développement"
    ]
  }
};

export const AWAAYA_ONBOARDING_PROCESS = [
  {
    period: "Semaines 1 à 2",
    step: "Diagnostic gratuit de 45 minutes",
    description: "Entretien de cadrage stratégique avec Nelly Touali pour clarifier vos priorités d'expansion ou de durabilité."
  },
  {
    period: "Semaines 3 à 6",
    step: "Proposition et périmètre de mission",
    description: "Coconstruction de la feuille de route, des livrables contractuels, du calendrier et des modalités d'intervention."
  },
  {
    period: "Mois 2",
    step: "Lancement et premiers résultats mesurables",
    description: "Démarrage des actions terrain à Abidjan et dans la sous-région, reporting bimensuel et premiers closing."
  }
];

export const AWAAYA_SERVICES: ServiceDetail[] = [
  // =========================================================
  // PILIER 01 : CONSEIL (2 Domaines, 5 Prestations)
  // =========================================================

  // --- Domaine 1 : Croissance commerciale & expansion ---
  {
    slug: "diagnostic-commercial-plan-croissance",
    pillar: "CONSEIL",
    pillarLabel: "Conseil",
    domain: "Croissance commerciale & expansion",
    title: "Diagnostic commercial et plan de croissance",
    commercialTitle: "Audit Commercial & Trajectoire de Croissance",
    subtitle: "Identifier vos gisements de valeur, structurer votre force de vente et accélérer vos revenus.",
    target: "Directions Générales, PME, ETI et filiales cherchant à clarifier la rentabilité de leur portefeuille et redynamiser leurs ventes.",
    challenges: "Face à une concurrence accrue et des cycles de décision rallongés, les directions manquent de visibilité sur la rentabilité réelle de leur portefeuille, l'efficacité des forces de vente et les leviers d'accélération prioritaires.",
    steps: [
      { title: "Audit du portefeuille clients & rentabilité", desc: "Segmentation ABC/Pareto, calcul du taux d'attrition (churn), de la valeur vie client et des marges contributives par segment de marché." },
      { title: "Évaluation du dispositif de vente & CRM", desc: "Diagnostic des compétences commerciales, des incitations, des outils de prospection, du pipeline et des cycles de closing." },
      { title: "Benchmark concurrentiel ouest-africain", desc: "Analyse du positionnement tarifaire, différenciation de l'offre et identification des barrières à l'entrée." },
      { title: "Plan d'Action Commercial (PAC) à 12 mois", desc: "Coconstruction des objectifs de revenus, rétroplanning d'exécution budgété et indicateurs clés de performance (KPIs)." }
    ],
    deliverables: [
      "Rapport d'audit commercial 360°",
      "Matrice stratégique du portefeuille clients",
      "Plan d'Action Commercial (PAC) chiffré sur 12 mois",
      "Tableau de bord de pilotage des ventes"
    ],
    duration: "4 à 6 semaines",
    targetAudience: ["Directions Générales", "Directeurs Commerciaux", "Dirigeants de PME & ETI"],
    faqs: [
      { q: "Nos équipes commerciales seront-elles sollicitées ?", a: "Oui, via des entretiens individuels confidentiels et des ateliers de travail pour garantir une adhésion totale au plan d'action." },
      { q: "Quels types d'entreprises sont concernées ?", a: "Toute PME ou ETI en phase d'accélération, de diversification ou souhaitant professionnaliser ses processus de vente." }
    ],
    ctaLabel: "Demander un diagnostic commercial"
  },
  {
    slug: "strategie-croissance-expansion-afrique",
    code: "S1",
    pillar: "CONSEIL",
    pillarLabel: "Conseil",
    domain: "Croissance commerciale & expansion",
    title: "Stratégie de croissance et expansion en Afrique",
    commercialTitle: "S1 : « Africa Market Entry & Go-to-Market » (expansion régionale)",
    subtitle: "Vendre et s'implanter avec succès en Afrique de l'Ouest et Centrale en mode Country Manager externalisé.",
    target: "Éditeurs de logiciels, fintechs, acteurs de la cybersécurité et fabricants (européens, indiens, moyen-orientaux, asiatiques) qui veulent vendre en Afrique de l’Ouest et centrale sans y avoir de structure physique immédiate.",
    challenges: "La complexité réglementaire, monétaire, fiscale et commerciale des marchés ouest et centre-africains rend toute implantation hasardeuse sans relais local expérimenté et réseau relationnel établi.",
    steps: [
      { title: "Étude de marché & priorisation des pays", desc: "Analyse d'opportunité pays (Côte d'Ivoire, Sénégal, Cameroun, Ghana...), taille de marché adressable, solvabilité et réglementation." },
      { title: "Qualification de partenaires & distributeurs", desc: "Identification, due diligence et sélection contractuelle des intégrateurs, grossistes et revendeurs locaux fiables." },
      { title: "Structure juridique & bureau local", desc: "Mise en place de la présence juridique, bancaire et fiscale, et formalisation du plan commercial sur 12 mois." },
      { title: "Country Manager externalisé à temps partagé", desc: "Nos équipes seniors jouent le rôle de Directeur Pays : prospection C-Level, pilotage des partenaires et closing des premiers contrats." }
    ],
    deliverables: [
      "Étude de marché et matrice de priorisation pays",
      "Cartographie des partenaires et distributeurs qualifiés",
      "Feuille de route d'implantation juridique et commerciale",
      "Direction pays externalisée (temps partagé) avec revues mensuelles"
    ],
    duration: "Étude : 8 semaines · Accompagnement : 6 à 12 mois",
    targetAudience: ["Éditeurs de logiciels", "Fintechs & Cybersécurité", "Fabricants industriels internationaux", "Multinationales"],
    faqs: [
      { q: "Comment fonctionne le mode Country Manager externalisé ?", a: "Un consultant senior d'AWAAYA agit sous votre marque comme votre représentant officiel en Afrique de l'Ouest, gérant vos rendez-vous stratégiques, vos distributeurs et vos négociations." },
      { q: "Quelle zone géographique couvrez-vous ?", a: "L'Afrique de l'Ouest (UEMOA/CEDEAO : Côte d'Ivoire, Sénégal, Ghana, Bénin, Togo...) et l'Afrique Centrale (CEMAC : Cameroun, Gabon...)." }
    ],
    ctaLabel: "Étudier votre entrée de marché en Afrique"
  },
  {
    slug: "gestion-developpement-grands-comptes",
    code: "S2",
    pillar: "CONSEIL",
    pillarLabel: "Conseil",
    domain: "Croissance commerciale & expansion",
    title: "Gestion et développement des grands comptes",
    commercialTitle: "S2 : « Key Account Management as a Service » (account management externalisé)",
    subtitle: "Piloter la relation, maximiser la rentabilité et développer vos comptes stratégiques en Afrique.",
    target: "Entreprises technologiques et B2B qui ont des comptes stratégiques en Afrique (opérateurs télécoms, banques, grandes entreprises) mais pas de responsable local capable de piloter la relation, la rentabilité et l’extension du compte.",
    challenges: "Perdre des comptes clés ou sous-exploiter leur potentiel d'up-sell / cross-sell faute d'une présence exécutive de proximité et d'une méthode rigoureuse de gestion des parties prenantes.",
    steps: [
      { title: "Audit du portefeuille de comptes clés", desc: "Cartographie détaillée des décideurs formels et informels (Power Mapping), analyse des risques de churn et détection du potentiel d'expansion." },
      { title: "Plan de compte stratégique (Account Plan)", desc: "Élaboration d'objectifs de revenus clairs, stratégies de pénétration, offres d'up-sell et cross-sell adaptées aux budgets du client." },
      { title: "Gestion déléguée de comptes clés", desc: "AWAAYA agit comme votre Key Account Manager externe : animation des relations C-Level, préparation des revues de performance et défense des marges." },
      { title: "Formation, coaching & outillage CRM", desc: "Coaching des forces commerciales locales et structuration des processus de suivi sur CRM (Salesforce, HubSpot)." }
    ],
    deliverables: [
      "Cartographie décisionnelle exhaustive des comptes clés",
      "Account Plans stratégiques complets avec objectifs de revenus",
      "Direction déléguée Key Account Management en régie",
      "Processus et paramétrage du CRM (Salesforce)"
    ],
    duration: "Audit : 4 semaines · Gestion déléguée : Mission continue 6 à 12 mois",
    targetAudience: ["Entreprises technologiques", "Équipementiers télécoms", "Fournisseurs de solutions bancaires", "Groupes de services B2B"],
    faqs: [
      { q: "Prenez-vous en charge la relation directe avec nos clients ?", a: "Oui, nos consultants interviennent directement auprès de vos interlocuteurs (directeurs achats, DSI, directeurs généraux) pour défendre vos intérêts et générer du business additionnel." },
      { q: "Aidez-vous à déployer un CRM ?", a: "Oui, nous configurons vos pipelines sur Salesforce ou vos outils CRM pour une visibilité totale de votre management sur l'avancement des deals." }
    ],
    ctaLabel: "Déléguer la gestion de vos comptes clés"
  },

  // --- Domaine 2 : Durabilité & responsabilité sociétale ---
  {
    slug: "diagnostic-rse-strategie-durabilite",
    code: "S3",
    pillar: "CONSEIL",
    pillarLabel: "Conseil",
    domain: "Durabilité & responsabilité sociétale",
    title: "Diagnostic et stratégie de durabilité",
    commercialTitle: "S3 : « Sustainable Market Entry » & Stratégie ESG",
    subtitle: "Sécuriser votre licence sociale d'opérer, prévenir les risques réputationnels et réussir votre implantation durable.",
    target: "Entreprises étrangères qui s’implantent en Afrique de l’Ouest et du Centre, et entreprises locales qui exportent vers des clients européens aux exigences ESG croissantes (CSRD, RDUE, chaîne de valeur durable).",
    challenges: "Les risques d'acceptabilité locale, de conformité environnementale et de chaîne d'approvisionnement peuvent bloquer une implantation ou disqualifier un exportateur face aux standards internationaux.",
    steps: [
      { title: "Due diligence ESG pays & partenaires", desc: "Audit de conformité sociale, environnementale et d'intégrité des pays, distributeurs et sous-traitants identifiés lors de l'étude d'entrée." },
      { title: "Intégration de la durabilité au Go-to-Market", desc: "Choix de partenaires locaux vertueux, conformité réglementaire locale et internationale, et prévention active des risques réputationnels." },
      { title: "Cartographie des parties prenantes locales", desc: "Consultation et alignement des institutions publiques, collectivités territoriales, ONG et communautés locales pour sécuriser la licence sociale d’opérer." },
      { title: "Plan ESG de lancement sur 12 mois", desc: "Définition d'engagements mesurables parfaitement articulés avec le plan de développement commercial." }
    ],
    deliverables: [
      "Rapport de due diligence ESG des partenaires locaux",
      "Matrice de gestion des risques réputationnels et de conformité",
      "Cartographie d'engagement des parties prenantes (licence d'opérer)",
      "Feuille de route ESG de lancement sur 12 mois intégrée au business plan"
    ],
    duration: "6 à 8 semaines d'audit · Accompagnement sur 12 mois",
    targetAudience: ["Entreprises internationales en implantation", "Exportateurs agricoles et industriels", "Opérateurs d'infrastructures", "Directions Durabilité & Juridiques"],
    faqs: [
      { q: "Qu'est-ce que la 'licence sociale d'opérer' ?", a: "C'est l'acceptation formelle et informelle de vos activités par les communautés locales, autorités et acteurs clés, indispensable pour éviter les blocages de chantiers ou les conflits sociaux." },
      { q: "Comment liez-vous le plan ESG au plan commercial ?", a: "Nous veillons à ce que les critères de durabilité soient un argument de différenciation pour remporter des appels d'offres et rassurer les bailleurs de fonds." }
    ],
    ctaLabel: "Sécuriser votre implantation durable"
  },
  {
    slug: "evaluation-esg-reporting-durabilite",
    pillar: "CONSEIL",
    pillarLabel: "Conseil",
    domain: "Durabilité & responsabilité sociétale",
    title: "Évaluation des pratiques ESG et reporting de durabilité",
    commercialTitle: "Évaluation des Pratiques ESG & Reporting de Durabilité",
    subtitle: "Mesurer vos indicateurs ESG, répondre aux exigences des bailleurs de fonds et publier votre rapport conforme.",
    target: "Entreprises cotées (BRVM), institutions financières, groupes industriels et entreprises en recherche de financements multilatéraux (BAD, SFI, BIDC, Proparco).",
    challenges: "La complexité des standards internationaux (GRI, ISSB, CSRD) et le manque de données fiables empêchent les entreprises de valoriser leurs performances extra-financières auprès des investisseurs.",
    steps: [
      { title: "Audit de maturité des indicateurs ESG", desc: "Collecte exhaustive et fiabilisation des données environnementales, sociales et de gouvernance (Scope 1-2-3, ratios sociaux, éthique)." },
      { title: "Alignement sur les standards internationaux & BRVM", desc: "Mise en conformité avec les référentiels GRI, ISSB, le guide de reporting ESG de la BRVM et les critères des banques de développement." },
      { title: "Mise en place de protocoles de collecte interne", desc: "Déploiement de fiches de reporting, outillage des contributeurs métiers et sécurisation des pistes d'audit." },
      { title: "Rédaction & mise en page du rapport annuel ESG", desc: "Production du document exécutif de référence prêt pour certification externe et diffusion aux comités d'investissement." }
    ],
    deliverables: [
      "Scorecard ESG exhaustive et benchmark sectoriel",
      "Protocole de collecte de données extra-financières",
      "Rapport annuel de durabilité / ESG complet prêt à publication",
      "Plan de mise à niveau de conformité auditable"
    ],
    duration: "8 à 10 semaines",
    targetAudience: ["Entreprises cotées (BRVM)", "Institutions financières", "Grands Groupes & ETI", "Directions Générales & DAF"],
    faqs: [
      { q: "Le rapport produit est-il recevable par les banques internationales ?", a: "Oui, notre méthodologie respecte les exigences de la SFI, de la BAD et des commissaires aux comptes indépendants." },
      { q: "Aidez-vous à former les équipes à la collecte des données ?", a: "Oui, nous formons les relais contributeurs au sein de chaque direction pour pérenniser l'exercice d'année en année." }
    ],
    ctaLabel: "Évaluer votre conformité ESG"
  },

  // =========================================================
  // PILIER 02 : PILOTAGE DE PROJETS (2 Prestations)
  // =========================================================
  {
    slug: "transformations-organisationnelles-numeriques",
    pillar: "PILOTAGE",
    pillarLabel: "Pilotage de projets",
    domain: "Pilotage de projets",
    title: "Transformations organisationnelles et numériques",
    commercialTitle: "Pilotage PMO & Transformations Numériques",
    subtitle: "Garantir le respect des délais, la maîtrise des coûts et l'adoption effective de vos chantiers stratégiques.",
    target: "Directeurs Généraux, Directeurs de la Transformation et DSI menant des réorganisations, fusions, déploiements d'ERP/CRM (Salesforce) ou structurations de filiales.",
    challenges: "Sans cellule de pilotage dédiée et sans méthode rigoureuse de conduite du changement, les projets majeurs accusent en moyenne 30% à 50% de retards et de dépassements budgétaires.",
    steps: [
      { title: "Installation de la cellule PMO de haute précision", desc: "Gouvernance de projet claire (CoStrat, CoPil), matrice RACI, rétroplanning maître et règles d'arbitrage." },
      { title: "Pilotage hebdomadaire & gestion des dérives", desc: "Suivi continu de l'avancement des livrables, détection précoce des goulets d'étranglement et gestion active du registre des risques." },
      { title: "Conduite du changement & adoption terrain", desc: "Communication managériale, formation opérationnelle des utilisateurs finaux et accompagnement des managers de proximité." },
      { title: "Mesure de la valeur créée & ROI", desc: "Mise en place de tableaux de bord d'usage et validation de l'atteinte des objectifs stratégiques initiaux." }
    ],
    deliverables: [
      "Dispositif PMO et chartes de gouvernance opérationnels",
      "Registre des risques dynamique et plans de contingence",
      "Plan complet de conduite du changement et d'acculturation",
      "Rapports hebdomadaires et mensuels d'avancement pour la Direction"
    ],
    duration: "3 à 12 mois selon l'envergure du chantier",
    targetAudience: ["Directions Générales", "Directeurs de la Transformation", "DSI", "Directeurs des Opérations"],
    faqs: [
      { q: "Vos directeurs de projet s'intègrent-ils à nos équipes ?", a: "Oui, nos consultants seniors s'immergent dans votre organisation à Abidjan pour un pilotage direct et quotidien." }
    ],
    ctaLabel: "Cadrer votre transformation"
  },
  {
    slug: "programmes-rse-economie-circulaire",
    code: "S4",
    pillar: "PILOTAGE",
    pillarLabel: "Pilotage de projets",
    domain: "Pilotage de projets",
    title: "Programmes de durabilité et économie circulaire",
    commercialTitle: "S4 : « Circular Economy Programs » (offre phare d'économie circulaire)",
    subtitle: "Réduire vos coûts matières et déchets en concevant et pilotant des symbioses industrielles rentables.",
    target: "Industriels et entreprises de production, d’emballage et de matériaux (cimenteries, imprimeries, agroalimentaire, distribution) qui veulent réduire leurs coûts matières et leurs déchets, ou anticiper la réglementation.",
    challenges: "L'inflation des coûts des matières premières, l'accumulation de déchets industriels coûteux à traiter et le durcissement des normes écologiques imposent de réinventer les modèles de production.",
    steps: [
      { title: "Diagnostic des flux de matières & déchets", desc: "Quantification précise des flux de matières entrantes, des pertes industrielles et des déchets pour identifier les gisements de valeur économique inexploités." },
      { title: "Conception des projets de valorisation & symbiose", desc: "Modélisation de solutions concrètes : réemploi d'emballages, recyclage en boucle fermée, valorisation énergétique et symbiose industrielle entre entreprises voisines." },
      { title: "Montage de l’écosystème multi-acteurs", desc: "Contractualisation et coordination des parties prenantes : entreprises partenaires, collectivités locales, ONG, collecteurs et filières de recyclage." },
      { title: "Pilotage opérationnel du programme sur 6 à 18 mois", desc: "Animation des comités de pilotage réguliers, résolution des blocages logistiques et suivi d'indicateurs mesurables de rentabilité et d'impact." }
    ],
    deliverables: [
      "Cartographie des flux de matières et identification des gisements de valeur",
      "Business case de valorisation et accords de partenariats filières",
      "Écosystème multi-acteurs formalisé (conventions, contrats de reprise)",
      "Tableau de bord de pilotage circulaire avec indicateurs d'économies financières"
    ],
    duration: "Diagnostic : 6 à 8 semaines · Déploiement et pilotage : 6 à 18 mois",
    targetAudience: ["Cimenteries & Matériaux", "Industries agroalimentaires", "Imprimeries & Emballage", "Groupes de Distribution"],
    faqs: [
      { q: "Qu'est-ce qu'une symbiose industrielle ?", a: "C'est l'utilisation des déchets, sous-produits ou effluents d'une entreprise comme matière première ou énergie pour une autre entreprise voisine, créant une économie financière pour les deux parties." },
      { q: "Quel est le retour sur investissement d'un tel programme ?", a: "Les économies sur les coûts de mise en décharge et les achats de matières premières vierges permettent généralement d'amortir le programme en moins de 12 mois." }
    ],
    ctaLabel: "Lancer un programme d'économie circulaire"
  },

  // =========================================================
  // PILIER 03 : FORMATION & MOBILISATION (2 Prestations)
  // =========================================================
  {
    slug: "formation-grands-comptes-kam",
    pillar: "FORMATION",
    pillarLabel: "Formation & mobilisation",
    domain: "Formation & mobilisation",
    title: "Gestion et développement des grands comptes",
    commercialTitle: "Masterclass Key Account Management (KAM) & Vente Complexe",
    subtitle: "Professionnaliser la négociation B2B, l'Account Planning et la posture de partenaire stratégique.",
    target: "Directions Commerciales, Key Account Managers, Ingénieurs d'Affaires B2B et Responsables Grands Comptes gérant des relations avec des banques, opérateurs télécoms et multinationales.",
    challenges: "Dépasser la vente transactionnelle et la guerre des prix en dotant les commerciaux des techniques de cartographie d'influence (Power Mapping) et d'Account Planning stratégique.",
    steps: [
      { title: "Cartographie décisionnelle (Power Mapping B2B)", desc: "Méthodologie pour identifier les circuits informels, les prescripteurs, les saboteurs et les décideurs C-Level." },
      { title: "Construction d'un Account Plan stratégique", desc: "Méthode pas-à-pas pour modéliser des opportunités d'up-sell / cross-sell et fixer des objectifs de revenus sur 12 à 24 mois." },
      { title: "Défense de la valeur & négociation à haut enjeu", desc: "Entraînement intensif sur des simulations réelles de soutenance face à des centrales d'achats agressives." },
      { title: "Évaluation & attestation certifiante AWAAYA", desc: "Validation des compétences sur cas réels ouest-africains et remise de l'attestation officielle nominative." }
    ],
    deliverables: [
      "Kit complet d'Account Planning opérationnel",
      "Fiches réflexes de négociation et de posture KAM",
      "Supports pédagogiques modulaires",
      "Attestations nominatives de compétences certifiées AWAAYA"
    ],
    duration: "Sessions intensives d'1 à 3 jours (inter ou intra-entreprise)",
    targetAudience: ["Directions Commerciales", "Key Account Managers (KAM)", "Ingénieurs d'Affaires B2B", "Directeurs de Business Units"],
    faqs: [
      { q: "La formation inclut-elle un coaching personnalisé ?", a: "Oui, les participants travaillent directement sur leurs propres comptes stratégiques réels avec le formateur." },
      { q: "Délivrez-vous une attestation officielle ?", a: "Oui, chaque participant validé reçoit une attestation nominative signée par le cabinet AWAAYA." }
    ],
    ctaLabel: "Inscrire vos équipes commerciales"
  },
  {
    slug: "formation-rse-sensibilisation-pratiques",
    pillar: "FORMATION",
    pillarLabel: "Formation & mobilisation",
    domain: "Formation & mobilisation",
    title: "Sensibilisation et appropriation des pratiques durables",
    commercialTitle: "Ateliers Durabilité & Appropriation des Pratiques",
    subtitle: "Acculturer managers et collaborateurs pour ancrer la responsabilité et la durabilité au cœur des décisions métiers.",
    target: "Membres de Comités de Direction, Managers de proximité, Référents Durabilité désignés et équipes opérationnelles dans les secteurs industriels, bancaires et de services.",
    challenges: "La démarche de durabilité reste stérile si elle n'est pas comprise, partagée et traduite en réflexes concrets par les équipes opérationnelles et les managers intermédiaires.",
    steps: [
      { title: "Diagnostic de sensibilisation & freins internes", desc: "Mesure de la maturité des équipes et identification des réticences culturelles face aux nouveaux impératifs durables." },
      { title: "Ingénierie pédagogique contextualisée au marché africain", desc: "Création de modules immersifs basés sur les réalités professionnelles concrètes en Côte d'Ivoire et dans l'UEMOA." },
      { title: "Ateliers participatifs & Fresques collaboratives", desc: "Mises en situation, arbitrages budgétaires durables et jeux de rôle managériaux pour comprendre les impacts métiers." },
      { title: "Plan d'engagement individuel et chartes d'équipe", desc: "Formalisation d'engagements opérationnels mesurables par service et remise des attestations de sensibilisation." }
    ],
    deliverables: [
      "Supports de formation modulaires et interactifs",
      "Guides pratiques des écogestes et de la gouvernance responsable",
      "Chartes d'engagement d'équipe opérationnelles",
      "Attestations nominatives certifiantes de sensibilisation à la durabilité"
    ],
    duration: "Sessions d'1 à 2 jours (inter ou intra-entreprise)",
    targetAudience: ["Comités de Direction", "Managers de proximité", "Référents Durabilité désignés", "Équipes opérationnelles"],
    faqs: [
      { q: "La formation peut-elle être organisée dans nos locaux ?", a: "Oui, nous animons des sessions intra-entreprises sur vos sites à Abidjan et dans les régions industrielles." }
    ],
    ctaLabel: "Organiser une session d'équipe"
  }
];

// Dictionnaire exhaustif d'alias pour garantir qu'aucune ancienne URL ne provoque de 404
export const SERVICE_SLUG_ALIASES: Record<string, string> = {
  // Alias S1
  "africa-market-entry": "strategie-croissance-expansion-afrique",
  "go-to-market-afrique": "strategie-croissance-expansion-afrique",
  "expansion-afrique": "strategie-croissance-expansion-afrique",
  "country-manager-externalise": "strategie-croissance-expansion-afrique",

  // Alias S2
  "key-account-management-as-a-service": "gestion-developpement-grands-comptes",
  "kamaas": "gestion-developpement-grands-comptes",
  "gestion-grands-comptes": "gestion-developpement-grands-comptes",
  "kam-externalise": "gestion-developpement-grands-comptes",

  // Alias S3
  "sustainable-market-entry": "diagnostic-rse-strategie-durabilite",
  "licence-sociale-operer": "diagnostic-rse-strategie-durabilite",
  "diagnostic-rse": "diagnostic-rse-strategie-durabilite",
  "diagnostic-strategie-rse": "diagnostic-rse-strategie-durabilite",

  // Alias S4
  "circular-economy-programs": "programmes-rse-economie-circulaire",
  "symbiose-industrielle": "programmes-rse-economie-circulaire",
  "pilotage-programmes-rse-economie-circulaire": "programmes-rse-economie-circulaire",
  "programmes-economie-circulaire": "programmes-rse-economie-circulaire",
  "economie-circulaire": "programmes-rse-economie-circulaire",

  // Autres alias
  "audit-commercial": "diagnostic-commercial-plan-croissance",
  "croissance-commerciale": "diagnostic-commercial-plan-croissance",
  "reporting-esg": "evaluation-esg-reporting-durabilite",
  "reporting-extra-financier-esg": "evaluation-esg-reporting-durabilite",
  "evaluation-esg": "evaluation-esg-reporting-durabilite",
  "pilotage-transformations-organisationnelles-numeriques": "transformations-organisationnelles-numeriques",
  "transformations-organisationnelles": "transformations-organisationnelles-numeriques",
  "gestion-pilotage-projets-complexes": "transformations-organisationnelles-numeriques",
  "conduite-du-changement": "transformations-organisationnelles-numeriques",
  "conduite-du-changement-mobilisation": "transformations-organisationnelles-numeriques",
  "formation-grands-comptes": "formation-grands-comptes-kam",
  "formation-kam": "formation-grands-comptes-kam",
  "formation-gestion-developpement-grands-comptes": "formation-grands-comptes-kam",
  "formation-rse": "formation-rse-sensibilisation-pratiques",
  "rse-sensibilisation-appropriation": "formation-rse-sensibilisation-pratiques",
  "evaluation-carbone-efficience-energetique": "programmes-rse-economie-circulaire",
  "bilan-carbone": "programmes-rse-economie-circulaire",
  "finance-durable-mobilisation-fonds-climat": "evaluation-esg-reporting-durabilite",
  "finance-verte": "evaluation-esg-reporting-durabilite",
  "audit-esg-chaine-approvisionnement": "diagnostic-rse-strategie-durabilite",
  "audit-fournisseurs": "diagnostic-rse-strategie-durabilite"
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const directMatch = AWAAYA_SERVICES.find((s) => s.slug === slug);
  if (directMatch) return directMatch;

  const resolvedSlug = SERVICE_SLUG_ALIASES[slug];
  if (resolvedSlug) {
    return AWAAYA_SERVICES.find((s) => s.slug === resolvedSlug);
  }

  return undefined;
}
