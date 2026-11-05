export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientSector: string;
  clientType: string;
  location: string;
  year: string;
  pillar: "CONSEIL" | "PILOTAGE" | "FORMATION";
  summary: string;
  context: string;
  challenges: string[];
  solution: {
    approach: string;
    phases: { title: string; description: string }[];
  };
  metrics: { value: string; label: string; detail: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  category: "RSE_ESG" | "COMMERCIAL" | "STRATEGIE";
  categoryLabel: string;
  readingTime: string;
  pages: number;
  publishDate: string;
  summary: string;
  highlights: string[];
  coverColor: string;
  downloadCount: number;
}

export const CASE_STUDIES: CaseStudy[] = [
  // =========================================================
  // ÉTUDE DE CAS 1 — S1 : AFRICA MARKET ENTRY & GO-TO-MARKET
  // =========================================================
  {
    id: "cs-cyber-market-entry",
    slug: "africa-market-entry-cybersecurite-saas-afrique-ouest",
    title: "Implantation régionale & Go-to-Market en Afrique de l'Ouest pour un éditeur européen de cybersécurité",
    clientSector: "Tech, Logiciels & Fintech",
    clientType: "Éditeur Européen SaaS & Cybersécurité",
    location: "Abidjan (Hub Régional), Dakar, Lomé",
    year: "2025 - 2026",
    pillar: "CONSEIL",
    summary: "Cadrage de marché UEMOA, qualification d'un réseau de 12 intégrateurs et pilotage en mode « Country Manager externalisé » sur 12 mois sans filiale préalable.",
    context: "L'éditeur souhaitait accélérer ses ventes auprès des banques et opérateurs télécoms ouest-africains sans engager immédiatement les coûts et la lourdeur administrative d'une structure locale.",
    challenges: [
      "Absence de présence physique et méconnaissance des circuits de distribution IT en Côte d'Ivoire et au Sénégal.",
      "Nécessité de bâtir une grille tarifaire et contractuelle adaptée aux contraintes de devises et de conformité bancaire locale.",
      "Besoin d'un pilotage commercial immédiat C-Level pour signer les premiers comptes de référence régionaux."
    ],
    solution: {
      approach: "Déploiement de l'offre S1 « Africa Market Entry & Go-to-Market » : étude de priorisation pays, sélection des distributeurs, mise en place du bureau agile et direction pays à temps partagé.",
      phases: [
        { title: "Étude de Marché & Priorisation UEMOA", description: "Cartographie des opportunités bancaires, assurances et opérateurs en Côte d'Ivoire et Sénégal." },
        { title: "Qualification du Réseau de Distribution", description: "Sélection et contractualisation de 12 intégrateurs et distributeurs informatiques certifiés." },
        { title: "Mode Country Manager Externalisé", description: "Direction pays assurée par les associés AWAAYA à temps partagé pour piloter les cycles de closing." },
        { title: "Plan Commercial & Pipeline à 12 Mois", description: "Animation des roadshows exécutifs et structuration du pipeline sous CRM Salesforce." }
      ]
    },
    metrics: [
      { value: "1,4 M€", label: "Pipeline B2B Généré", detail: "Opportunités qualifiées sous Salesforce en 9 mois" },
      { value: "12", label: "Intégrateurs Qualifiés", detail: "Réseau de partenaires distributeurs opérationnel" },
      { value: "0 FCFA", label: "Structure Lourde", detail: "Implantation agile sans frais de filiale précoce" },
      { value: "4", label: "Banques Signées", detail: "Contrats de référence conclus dès l'an 1" }
    ],
    testimonial: {
      quote: "Le mode Country Manager externalisé d'AWAAYA nous a fait gagner deux ans d'implantation en Afrique de l'Ouest. Nous avons signé des banques de premier rang dès les six premiers mois sans mobiliser d'équipe fixe sur place.",
      author: "Laurent Mercier",
      role: "Vice President International Sales",
      company: "Nexura Cyber Systems Europe"
    }
  },

  // =========================================================
  // ÉTUDE DE CAS 2 — S2 : KEY ACCOUNT MANAGEMENT AS A SERVICE
  // =========================================================
  {
    id: "cs-fintech-kam-service",
    slug: "key-account-management-as-a-service-fintech-operateurs",
    title: "Key Account Management as a Service pour une fintech paneuropéenne auprès des opérateurs et banques",
    clientSector: "Tech, Logiciels & Fintech",
    clientType: "Fintech Européenne (Paiement & API B2B)",
    location: "Abidjan, Côte d'Ivoire & UEMOA",
    year: "2025",
    pillar: "CONSEIL",
    summary: "Audit de portefeuille grands comptes, déploiement d'Account Plans stratégiques et gestion déléguée de 6 comptes clés télécoms et bancaires.",
    context: "Disposant de contrats cadres signés depuis l'étranger mais sans KAM expérimenté sur place, la fintech subissait une érosion de ses volumes de transactions et un manque de réactivité opérationnelle.",
    challenges: [
      "Perte de contact régulier avec les comités de direction des opérateurs télécoms et des grandes banques partenaires.",
      "Sous-exploitation des opportunités d'up-sell et de cross-sell sur les nouveaux services d'encaissement et de transfert.",
      "Processus de gouvernance commerciale non alignés avec le CRM central Salesforce de l'entreprise."
    ],
    solution: {
      approach: "Intervention S2 « Key Account Management as a Service » : audit 360° du portefeuille, formalisation des plans de comptes stratégiques et prise en charge de la gestion déléguée.",
      phases: [
        { title: "Audit Portefeuille & Cartographie Décisionnelle", description: "Identification des sponsors C-Level, matrice d'influence et détection des risques d'attrition." },
        { title: "Strategic Account Plans Chiffrés", description: "Plans de comptes sur-mesure avec objectifs de volume de flux, opportunités d'up-sell et plans d'actions." },
        { title: "Gestion Déléguée KAM par AWAAYA", description: "Représentation directe de la fintech en comités de gouvernance et négociation des avenants stratégiques." },
        { title: "Outillage CRM & Coaching Local", description: "Paramétrage Salesforce, reporting mensuel pour le siège européen et formation des relais opérationnels." }
      ]
    },
    metrics: [
      { value: "+54%", label: "Croissance Flux / Compte", detail: "Augmentation moyenne des revenus sur les comptes suivis" },
      { value: "100%", label: "Taux de Rétention", detail: "Zéro churn sur l'ensemble des 6 comptes stratégiques" },
      { value: "3", label: "Avenants Majeurs", detail: "Contrats d'extension de périmètre signés en 12 mois" },
      { value: "4 Sem.", label: "Mise en Place", detail: "Délai de déploiement de la cellule KAM externalisée" }
    ],
    testimonial: {
      quote: "AWAAYA a pris en main la relation de nos plus gros clients avec une rigueur et une crédibilité remarquables. Ils sont notre bras armé en Afrique de l'Ouest pour consolider nos marges.",
      author: "Arjun Mehta",
      role: "Chief Commercial Officer",
      company: "Finovate Global Payments"
    }
  },

  // =========================================================
  // ÉTUDE DE CAS 3 — S3 : SUSTAINABLE MARKET ENTRY
  // =========================================================
  {
    id: "cs-agro-esg-sustainable-entry",
    slug: "sustainable-market-entry-agro-industrie-export-ue",
    title: "Sustainable Market Entry & Conformité ESG pour un leader agro-industriel exportateur",
    clientSector: "Agro-Industrie & Distribution",
    clientType: "Groupe Exportateur Agro-Industriel (CA > 120 Mrds FCFA)",
    location: "San Pedro & Abidjan, Côte d'Ivoire",
    year: "2025 - 2026",
    pillar: "CONSEIL",
    summary: "Due diligence ESG des filières partenaires, intégration de critères durables au go-to-market européen et sécurisation de la licence sociale d'opérer.",
    context: "Face aux nouvelles réglementations européennes (RDUE, CSRD) et aux exigences croissantes des acheteurs multinationaux, l'exportateur risquait des blocages douaniers et la perte de ses marchés clés.",
    challenges: [
      "Due diligence ESG et cartographie polygonale de 1 200 coopératives partenaires en zone rurale.",
      "Conformité avec les critères de durabilité européens pour sécuriser les autorisations d'exportation.",
      "Cartographie des parties prenantes locales (collectivités, ONG, communautés) pour consolider la licence sociale d'opérer."
    ],
    solution: {
      approach: "Déploiement de l'offre S3 « Sustainable Market Entry » : due diligence ESG complète des pays et partenaires, plan d'action d'alignement sur 12 mois et gouvernance multi-acteurs.",
      phases: [
        { title: "Due Diligence ESG & Cartographie des Risques", description: "Audit des coopératives, vérification de conformité légale et traçabilité des parcelles." },
        { title: "Intégration ESG au Go-to-Market Export", description: "Formalisation des clauses de durabilité et des protocoles de reporting pour les acheteurs européens." },
        { title: "Licence Sociale & Ancrage Communautaire", description: "Concertations locales, programmes communautaires et adhésion des leaders régionaux." },
        { title: "Plan ESG de Lancement sur 12 Mois", description: "Tableaux de bord de gouvernance et audit de conformité préalable aux expéditions." }
      ]
    },
    metrics: [
      { value: "100%", label: "Conformité RDUE / ESG", detail: "Zéro blocage ou rejet douanier sur les marchés européens" },
      { value: "+18%", label: "Primes de Durabilité", detail: "Valorisation supérieure auprès des négociants internationaux" },
      { value: "45 000", label: "Producteurs Sécurisés", detail: "Intégrés dans la chaîne d'approvisionnement certifiée" },
      { value: "0 Litige", label: "Licence Sociale", detail: "Adhésion totale des communautés et collectivités locales" }
    ],
    testimonial: {
      quote: "L'expertise d'AWAAYA a permis de transformer une contrainte réglementaire lourde en un levier d'excellence concurrentielle reconnu par nos bailleurs et clients européens.",
      author: "Adama Coulibaly",
      role: "Directeur Général Adjoint",
      company: "Union Agro-Industrielle Ivoirienne"
    }
  },

  // =========================================================
  // ÉTUDE DE CAS 4 — S4 : CIRCULAR ECONOMY PROGRAMS
  // =========================================================
  {
    id: "cs-circular-economy-cimenterie-agro",
    slug: "programmes-economie-circulaire-symbiose-industrielle",
    title: "Programme d'Économie Circulaire & Symbiose Industrielle pour un conglomérat de production & cimenterie",
    clientSector: "Industrie, Cimenteries & Matériaux",
    clientType: "Groupe Industriel & Manufacturier (3 usines)",
    location: "Zone Industrielle de Yopougon & San Pedro",
    year: "2024 - 2025",
    pillar: "PILOTAGE",
    summary: "Diagnostic des flux de matières et de déchets, conception de filières de valorisation et pilotage d'une symbiose industrielle inter-entreprises sur 14 mois.",
    context: "L'envolée des coûts des matières premières importées et le durcissement de la réglementation environnementale sur les déchets industriels menaçaient les marges opérationnelles du site.",
    challenges: [
      "Facture d'achat de matières premières et d'énergie représentant plus de 40% des coûts directs d'exploitation.",
      "Plus de 2 800 tonnes de résidus de production, cendres et emballages éliminés chaque année à perte financière nette.",
      "Absence d'écosystème structuré entre entreprises voisines pour échanger et valoriser les sous-produits industriels."
    ],
    solution: {
      approach: "Déploiement de l'offre S4 « Circular Economy Programs » : diagnostic des flux matières, ingénierie de symbiose industrielle, montage du consortium multi-acteurs et pilotage PMO sur 14 mois.",
      phases: [
        { title: "Diagnostic Flux Matières & Gisements", description: "Bilan matière exhaustif, caractérisation des rebuts et identification des poches de valorisation financière." },
        { title: "Conception du Dispositif de Symbiose", description: "Modélisation des boucles de réemploi : substitution de combustibles par résidus de biomasse et valorisation des scories." },
        { title: "Montage de l'Écosystème Multi-Acteurs", description: "Contractualisation tripartite entre l'industriel, les collecteurs certifiés et les usines partenaires de la zone." },
        { title: "Pilotage Opérationnel PMO (14 mois)", description: "Comité de pilotage mensuel, indicateurs mesurables de rentabilité et suivi de la conformité environnementale." }
      ]
    },
    metrics: [
      { value: "210 M", label: "FCFA d'Économies / an", detail: "Réduction nette des coûts d'approvisionnement matières" },
      { value: "72%", label: "Taux de Valorisation", detail: "Rebuts industriels réemployés ou recyclés en boucle locale" },
      { value: "-22%", label: "Empreinte Carbone", detail: "Émissions évitées via l'économie circulaire de proximité" },
      { value: "14 Mois", label: "Durée de Déploiement", detail: "Pilotage PMO rigoureux sans interruption de production" }
    ],
    testimonial: {
      quote: "AWAAYA a su concevoir un modèle de symbiose industrielle qui réduit à la fois nos coûts d'achat de matières et notre empreinte environnementale avec un retour sur investissement spectaculaire.",
      author: "Yannick Gnahoré",
      role: "Directeur des Opérations Industrielles",
      company: "Cimenteries & Travaux Industriels SA"
    }
  },

  // =========================================================
  // ÉTUDE DE CAS 5 — FORMATION : MASTERCLASS GRANDS COMPTES
  // =========================================================
  {
    id: "cs-telecom-formation-kam",
    slug: "masterclass-grands-comptes-academie-b2b",
    title: "Académie Commerciale & Masterclass Gestion Grands Comptes pour un opérateur Télécoms & Cloud",
    clientSector: "Télécoms & Infrastructures",
    clientType: "Opérateur Télécoms & Fournisseur Cloud Régional",
    location: "Cocody & Plateau, Abidjan",
    year: "2025",
    pillar: "FORMATION",
    summary: "Conception et animation d'un cursus certifiant d'excellence pour 140 Key Account Managers et ingénieurs d'affaires B2B sur les cycles de vente complexes.",
    context: "La transition vers la vente de solutions d'infrastructure complexes (Data Center, Cloud souverain, Cybersécurité) exigeait une montée en gamme rapide des commerciaux habitués à la vente transactionnelle.",
    challenges: [
      "Difficulté à engager les Directeurs des Systèmes d'Information (DSI) et Directeurs Généraux sur des enjeux stratégiques.",
      "Pression tarifaire excessive exercée par les centrales d'achats lors des négociations de contrats cadres.",
      "Besoin d'un programme d'entraînement pratique orienté deals réels et maîtrise de l'Account Planning."
    ],
    solution: {
      approach: "Cursus d'élite déployé en 4 modules progressifs : vente consultative, négociation complexe C-Level, coaching in situ sur opportunités réelles et soutenance certifiante.",
      phases: [
        { title: "Vente Consultative & Découverte Métier", description: "Méthodologie de cadrage des enjeux de transformation et calcul du coût de l'inaction pour le client." },
        { title: "Défense de la Valeur & Closing C-Level", description: "Techniques de protection de la marge face aux centrales d'achats et négociation des contrats cadres." },
        { title: "Coaching In Situ sur Affaires Clés", description: "Préparation des soutenances stratégiques pour des affaires supérieures à 100 millions FCFA." },
        { title: "Évaluation & Certification Nominative", description: "Soutenances devant jury exécutif et remise d'attestations certifiantes reconnues par la profession." }
      ]
    },
    metrics: [
      { value: "140", label: "Cadres Certifiés", detail: "Key Account Managers et ingénieurs d'affaires formés" },
      { value: "+34%", label: "Taux de Transformation", detail: "Propositions commerciales B2B converties en signatures" },
      { value: "+55%", label: "Ventes Cloud / Sécurité", detail: "Progression annuelle sur les segments à forte valeur ajoutée" },
      { value: "4,9 / 5", label: "Satisfaction Apprenants", detail: "Score moyen d'évaluation pédagogique du programme" }
    ],
    testimonial: {
      quote: "Une formation percutante qui a décomplexé nos équipes commerciales et leur a donné les réflexes nécessaires pour signer des contrats majeurs avec les plus grands groupes de la place.",
      author: "Bamba Lassina",
      role: "Directeur Exécutif B2B & Solutions Entreprises",
      company: "Opérateur Télécoms Côte d'Ivoire"
    }
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-01",
    slug: "guide-africa-market-entry-go-to-market-2026",
    title: "Guide Directeur 2026 : Réussir son Implantation & Go-to-Market en Afrique de l'Ouest",
    category: "COMMERCIAL",
    categoryLabel: "Expansion & Market Entry",
    readingTime: "15 min de lecture",
    pages: 36,
    publishDate: "Janvier 2026",
    summary: "Méthodologie concrète pour éditeurs de logiciels, fintechs et fabricants internationaux souhaitant conquérir les marchés de l'UEMOA sans filiale lourde préalable, grâce au mode Country Manager externalisé.",
    highlights: [
      "Comparatif macro-économique et priorisation des marchés d'entrée : Côte d'Ivoire, Sénégal, Bénin, Cameroun.",
      "Grille d'évaluation et critères de sélection des intégrateurs et distributeurs locaux fiables.",
      "Le modèle du « Country Manager externalisé » : fonctionnement, coûts et jalons de rentabilité à 12 mois.",
      "Checklist juridique, fiscale et contractuelle pour sécuriser ses premières transactions B2B."
    ],
    coverColor: "from-[#1B4332] to-[#0A1F17]",
    downloadCount: 460
  },
  {
    id: "pub-02",
    slug: "barometre-commercial-grands-comptes-uemoa-2026",
    title: "Baromètre Commercial Grands Comptes UEMOA : Pratiques d'Élite & Négociation B2B",
    category: "COMMERCIAL",
    categoryLabel: "Performance Commerciale",
    readingTime: "12 min de lecture",
    pages: 28,
    publishDate: "Février 2026",
    summary: "Enquête menée auprès de 150 directeurs commerciaux et directeurs généraux en Côte d'Ivoire et au Sénégal sur la gestion des comptes clés et les cycles d'achat.",
    highlights: [
      "Évolution de la durée moyenne des cycles de décision B2B dans les secteurs clés (banque, télécoms, agro, BTP).",
      "Les 5 critères déterminants sur lesquels les comités de direction ouest-africains sélectionnent leurs prestataires.",
      "Comment structurer une équipe de Key Account Managers (KAM) performante avec les bons indicateurs de closing.",
      "Checklist de sécurisation des marges lors des négociations avec les centrales d'achats."
    ],
    coverColor: "from-[#143527] to-[#0A1F17]",
    downloadCount: 385
  },
  {
    id: "pub-03",
    slug: "economie-circulaire-symbiose-industrielle-afrique",
    title: "Livre Blanc : Économie Circulaire & Symbiose Industrielle pour les Usines Ouest-Africaines",
    category: "STRATEGIE",
    categoryLabel: "Durabilité & Industrie",
    readingTime: "14 min de lecture",
    pages: 32,
    publishDate: "Mars 2026",
    summary: "Guide opérationnel pour industriels, cimentiers et transformateurs agroalimentaires : comment valoriser ses sous-produits, réduire la facture d'importation matière et créer des boucles circulaires rentables.",
    highlights: [
      "Cartographie des gisements de valeur inexploités dans les zones industrielles d'Abidjan et San Pedro.",
      "Méthode de conception de projets de symbiose industrielle entre entreprises voisines.",
      "Montage juridique et opérationnel d'écosystèmes multi-acteurs (collectivités, recycleurs, industriels).",
      "Études de cas réelles et rentabilité financière mesurée sur 3 sites industriels de référence."
    ],
    coverColor: "from-[#1A2E26] to-[#0A1F17]",
    downloadCount: 340
  }
];
