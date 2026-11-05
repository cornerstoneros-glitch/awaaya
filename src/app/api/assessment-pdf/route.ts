import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName = "Organisation Partenaire",
      email = "contact@entreprise.ci",
      assessmentType = "rse",
      globalScore = 65,
      levelLabel = "Maturité Intermédiaire",
    } = body;

    const isRse = assessmentType === "rse";
    const reportTitle = isRse
      ? "Rapport d'Évaluation Flash : Maturité RSE & Stratégie ESG"
      : "Rapport d'Évaluation Flash : Efficacité Commerciale B2B & Grands Comptes";

    const reportCode = `AWY-EVAL-${Date.now().toString(36).toUpperCase()}`;
    const dateFormatted = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    // Recommendations tailored by score
    const recommendations = globalScore >= 75
      ? [
          "Valorisation de leadership : Formaliser un rapport public conforme aux standards internationaux (GRI / Pacte Mondial).",
          "Transmission interne : Former vos équipes intermédiaires via l'Académie AWAAYA.",
          "Innovation d'impact : Intégrer des critères d'éco-conception et de rentabilité durable sur l'ensemble de vos filières UEMOA.",
        ]
      : globalScore >= 45
      ? [
          "Structuration du pilotage : Mettre en place un tableau de bord mensuel avec KPIs quantifiables partagés en Comité de Direction.",
          "Formalisation des processus : Rédiger et diffuser les chartes méthodologiques et protocoles d'action.",
          "Cadrage d'accompagnement : Planifier une mission d'accélération avec le pôle Conseil & Stratégie d'AWAAYA.",
        ]
      : [
          "Diagnostic d'urgence : Cartographier les risques immédiats de non-conformité et d'attrition commerciale.",
          "Mobilisation de la gouvernance : Organiser un séminaire de sensibilisation des directeurs de département.",
          "Feuille de route prioritaire : Définir 3 victoires rapides (quick wins) à 90 jours avec l'appui d'un consultant senior.",
        ];

    const htmlReport = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>${reportTitle} - ${companyName}</title>
  <style>
    @page { margin: 15mm; size: A4; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1f2937;
      background: #ffffff;
      line-height: 1.5;
      padding: 24px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #1B4332;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-box {
      width: 42px;
      height: 42px;
      background-color: #1B4332;
      color: #ffffff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 24px;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 900;
      color: #1B4332;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .brand-subtitle {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #6b7280;
      font-weight: 700;
      margin: 0;
    }
    .meta-box {
      text-align: right;
      font-size: 12px;
      color: #4b5563;
    }
    .meta-code {
      font-weight: 800;
      color: #1B4332;
    }
    .banner {
      background: #F4F6F4;
      border-left: 4px solid #1B4332;
      padding: 16px 20px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
    }
    .banner h1 {
      font-size: 18px;
      color: #1B4332;
      margin: 0 0 6px 0;
      font-weight: 800;
    }
    .banner p {
      margin: 0;
      font-size: 13px;
      color: #4b5563;
    }
    .score-container {
      display: flex;
      gap: 20px;
      margin-bottom: 24px;
    }
    .score-card {
      flex: 1;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 18px;
      text-align: center;
      background: #fafafa;
    }
    .score-value {
      font-size: 42px;
      font-weight: 900;
      color: #1B4332;
      line-height: 1;
      margin-bottom: 6px;
    }
    .score-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #4b5563;
    }
    .level-badge {
      display: inline-block;
      margin-top: 8px;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      background: #1B4332;
      color: #ffffff;
    }
    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #1B4332;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 8px;
      margin-top: 24px;
      margin-bottom: 12px;
    }
    .roadmap-list {
      padding-left: 20px;
      font-size: 13px;
      color: #374151;
    }
    .roadmap-list li {
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      font-size: 10px;
      color: #9ca3af;
      text-align: center;
      line-height: 1.4;
    }
    .print-btn {
      display: block;
      margin: 20px auto;
      background: #1B4332;
      color: #ffffff;
      border: none;
      padding: 10px 24px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      font-size: 13px;
    }
    @media print {
      .print-btn { display: none; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand">
      <div class="logo-box">A</div>
      <div>
        <div class="brand-title">AWAAYA</div>
        <div class="brand-subtitle">Conseils, Stratégies & Pilotage • Abidjan</div>
      </div>
    </div>
    <div class="meta-box">
      <div>Réf : <span class="meta-code">${reportCode}</span></div>
      <div>Date : ${dateFormatted}</div>
    </div>
  </div>

  <div class="banner">
    <h1>${reportTitle}</h1>
    <p>Document d'évaluation préparé pour l'organisation : <strong>${companyName}</strong> (${email})</p>
  </div>

  <div class="score-container">
    <div class="score-card">
      <div class="score-value">${globalScore}%</div>
      <div class="score-label">Indice Global de Maturité</div>
      <div class="level-badge">${levelLabel}</div>
    </div>
  </div>

  <div class="section-title">Recommandations Stratégiques Prioritaires (Feuille de Route 90 Jours)</div>
  <ol class="roadmap-list">
    ${recommendations.map((rec) => `<li>${rec}</li>`).join("")}
  </ol>

  <div class="section-title">Prochaine Étape Recommandée</div>
  <p style="font-size: 13px; color: #374151; line-height: 1.6;">
    Pour transformer ce diagnostic flash en plan d'action opérationnel et mesurer vos indicateurs d'impact, réservez un créneau de cadrage avec notre équipe d'experts seniors basée à Abidjan.
  </p>
  <p style="font-size: 13px; font-weight: 700; color: #1B4332;">
    Cabinet AWAAYA — Immeuble Le Quartz, Cocody Ambassades, Abidjan, Côte d'Ivoire<br>
    Contact direct : contact@awaaya.ci | +225 27 22 00 00 00
  </p>

  <button class="print-btn" onclick="window.print()">Télécharger / Imprimer en PDF</button>

  <div class="footer">
    Conformité Loi n° 2013-450 relative à la protection des données à caractère personnel (Autorité ARTCI).<br>
    Ce rapport constitue un document d'orientation préliminaire et ne remplace pas une mission d'audit exhaustif sur site.
  </div>
</body>
</html>`;

    return new NextResponse(htmlReport, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `inline; filename="rapport-awaaya-${reportCode}.html"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur lors de la génération du rapport" },
      { status: 500 }
    );
  }
}

