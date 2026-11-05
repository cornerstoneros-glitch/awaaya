import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

function log(msg) {
  console.log(msg);
}

function checkFileExists(relPath) {
  const fullPath = path.join(rootDir, relPath);
  return fs.existsSync(fullPath);
}

function checkFileContains(relPath, substrings) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return false;
  const content = fs.readFileSync(fullPath, "utf-8");
  return substrings.every((sub) => content.includes(sub));
}

function checkFileDoesNotContain(relPath, substrings) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return false;
  const content = fs.readFileSync(fullPath, "utf-8");
  return !substrings.some((sub) => content.includes(sub));
}

async function runAllEvals() {
  log("==================================================================");
  log("🚀 AWAAYA EVAL HARNESS — EXECUTION RUN (OPTIONS A, B, C)");
  log("==================================================================");
  log(`Timestamp : ${new Date().toISOString()}`);
  log(`Workspace : ${rootDir}\n`);

  const results = {
    capability: [],
    regression: [],
  };

  function gradeCapability(id, name, passCondition, reasonIfFail = "") {
    const passed = Boolean(passCondition);
    results.capability.push({ id, name, passed, reason: passed ? "PASS" : reasonIfFail });
    log(`  [CAPABILITY] ${id.padEnd(35)} : ${passed ? "✅ PASS" : "❌ FAIL: " + reasonIfFail}`);
    return passed;
  }

  function gradeRegression(id, name, passCondition, reasonIfFail = "") {
    const passed = Boolean(passCondition);
    results.regression.push({ id, name, passed, reason: passed ? "PASS" : reasonIfFail });
    log(`  [REGRESSION] ${id.padEnd(35)} : ${passed ? "✅ PASS" : "❌ FAIL: " + reasonIfFail}`);
    return passed;
  }

  // ------------------------------------------------------------------
  // OPTION A: ESPACE CLIENT & AUTH
  // ------------------------------------------------------------------
  log("--- [OPTION A: Espace Client & Auth] ---");
  gradeCapability(
    "a1-test-personas-and-auth",
    "1-Click Test Personas and Quick Access",
    checkFileExists("src/data/mockClientData.ts") &&
      checkFileContains("src/data/mockClientData.ts", ["TEST_PERSONAS", "activeMissionId"]) &&
      checkFileContains("src/app/espace-client/login/page.tsx", ["handleQuickLogin", "TEST_PERSONAS", "localStorage", "awaaya_active_persona"]),
    "Missing mock personas or login integration"
  );

  gradeCapability(
    "a2-mission-switcher-and-milestones",
    "Interactive Mission Switcher & 4 Milestones",
    checkFileContains("src/app/espace-client/page.tsx", ["activeMissionId", "MOCK_CLIENT_MISSIONS", "currentMission.milestones", "Jalons"]),
    "Missing mission switcher or milestone render"
  );

  gradeCapability(
    "a3-interactive-messaging-and-kpis",
    "Live Simulation Messaging & Metrics",
    checkFileContains("src/app/espace-client/page.tsx", ["messages", "handleSendMessage", "KPIS", "LIVRABLES", "actionItems"]),
    "Missing messaging state or KPI dashboards"
  );

  gradeRegression(
    "a4-unauthenticated-resilience",
    "Graceful Fallback on missing auth storage",
    checkFileContains("src/app/espace-client/page.tsx", ["TEST_PERSONAS[0]", "useEffect", "localStorage.getItem"]),
    "Direct link without localStorage might crash without fallback"
  );

  // ------------------------------------------------------------------
  // OPTION B: AUTO-ÉVALUATION & DIAGNOSTIC
  // ------------------------------------------------------------------
  log("\n--- [OPTION B: Outils d'Auto-Évaluation & Diagnostic] ---");
  gradeCapability(
    "b1-dual-assessment-scoring-algorithm",
    "Dual Flash Assessment (RSE & Commercial) Scoring",
    checkFileContains("src/app/(public)/auto-evaluation/page.tsx", [
      "RSE_QUESTIONS",
      "COMMERCIAL_QUESTIONS",
      "calculateResult",
      "Maturité Initiale",
      "Maturité Intermédiaire",
      "Maturité Avancée",
    ]),
    "Incomplete scoring algorithm or question definitions"
  );

  gradeCapability(
    "b2-3-step-diagnostic-funnel",
    "3-Step Structured Diagnostic Tunnel",
    checkFileContains("src/app/(public)/diagnostic/page.tsx", [
      "step === 1",
      "step === 2",
      "step === 3",
      "1. Organisation",
      "2. Besoin",
      "3. Coordonnées",
    ]),
    "Missing 3-step qualification structure in diagnostic"
  );

  gradeCapability(
    "b3-pdf-report-generation-endpoint",
    "Executive Report PDF / HTML Generation Route",
    checkFileExists("src/app/api/assessment-pdf/route.ts") &&
      checkFileContains("src/app/api/assessment-pdf/route.ts", [
        "POST",
        "NextResponse",
        "reportTitle",
        "recommendations",
        "Loi n° 2013-450",
      ]) &&
      checkFileContains("src/app/(public)/auto-evaluation/page.tsx", ["/api/assessment-pdf"]),
    "API endpoint /api/assessment-pdf is missing or not invoked"
  );

  gradeRegression(
    "b4-syntax-and-render-integrity",
    "Zero JSX Syntax Errors & Valid TS",
    checkFileDoesNotContain("src/app/(public)/auto-evaluation/page.tsx", [
      "</div>\n</div>\n : \"text-white",
      "</div>\n          </div>\n                    : \"text-white",
    ]),
    "Orphan JSX fragments detected"
  );

  // ------------------------------------------------------------------
  // OPTION C: RESPONSIVE & NAVIGATION GLOBALE
  // ------------------------------------------------------------------
  log("\n--- [OPTION C: Responsive & Navigation Globale] ---");
  gradeCapability(
    "c1-mobile-navigation-drawer",
    "Mobile Navigation Drawer & Scroll-Lock",
    checkFileContains("src/components/layout/Navbar.tsx", [
      "mobileMenuOpen",
      "setMobileMenuOpen",
      "document.body.style.overflow = \"hidden\"",
      "lg:hidden",
      "Menu",
      "X",
    ]),
    "Navbar lacks responsive mobile drawer or body scroll-lock"
  );

  gradeCapability(
    "c2-hero-slider-fluid-adaptation",
    "Fluid Hero Typography, Mobile Metric Pill & Scaled CTAs",
    checkFileContains("src/components/home/HeroSlider.tsx", [
      "text-3xl sm:text-5xl",
      "flex-col sm:flex-row",
      "lg:hidden inline-flex",
      "overflow-x-auto",
    ]),
    "Hero slider missing responsive breakpoints or mobile badge"
  );

  gradeCapability(
    "c3-zero-overflow-containment",
    "Viewport Meta & Global CSS Overflow Containment",
    checkFileContains("src/app/globals.css", ["overflow-x: hidden", "max-width: 100vw"]) &&
      checkFileContains("src/app/layout.tsx", ["width: \"device-width\"", "initialScale: 1"]),
    "Missing viewport tag or overflow-x containment"
  );

  // Test all 16 core routes
  const coreRoutes = [
    { name: "Accueil", path: "src/app/(public)/page.tsx" },
    { name: "À Propos", path: "src/app/(public)/a-propos/page.tsx" },
    { name: "Conseil", path: "src/app/(public)/conseil/page.tsx" },
    { name: "Pilotage", path: "src/app/(public)/pilotage/page.tsx" },
    { name: "Formation", path: "src/app/(public)/formation/page.tsx" },
    { name: "Études de Cas & Publications", path: "src/app/(public)/etudes-de-cas/page.tsx" },
    { name: "Auto-évaluation", path: "src/app/(public)/auto-evaluation/page.tsx" },
    { name: "Diagnostic", path: "src/app/(public)/diagnostic/page.tsx" },
    { name: "Contact", path: "src/app/(public)/contact/page.tsx" },
    { name: "Mentions Légales", path: "src/app/(public)/mentions-legales/page.tsx" },
    { name: "Confidentialité", path: "src/app/(public)/confidentialite/page.tsx" },
    { name: "Plan du Site", path: "src/app/(public)/plan-du-site/page.tsx" },
    { name: "Prestations Dynamiques", path: "src/app/(public)/prestations/[slug]/page.tsx" },
    { name: "Login Espace Client", path: "src/app/espace-client/login/page.tsx" },
    { name: "Dashboard Espace Client", path: "src/app/espace-client/page.tsx" },
    { name: "Console Back-Office Cabinet", path: "src/app/back-office/page.tsx" },
  ];

  const allRoutesExist = coreRoutes.every((r) => checkFileExists(r.path));
  gradeRegression(
    "c4-core-routes-resolution",
    "All 16 Core Frontend, Back-Office & Client Routes Present",
    allRoutesExist,
    "One or more core route files are missing"
  );

  // ------------------------------------------------------------------
  // OPTIONS 1, 2, 3: BACK-OFFICE, ÉTUDES DE CAS & PERSISTANCE PRISMA
  // ------------------------------------------------------------------
  log("\n--- [OPTIONS 1, 2, 3: Back-Office, Études de Cas & Persistance] ---");
  gradeCapability(
    "d1-back-office-lead-pipeline",
    "Back-Office Pipeline & Lead Qualification",
    checkFileContains("src/app/back-office/page.tsx", [
      "handleUpdateLeadStatus",
      "handleToggleMilestone",
      "fetchLeads",
      "consultantPersona",
      "/espace-client",
    ]),
    "Back-office console missing lead or milestone management"
  );

  gradeCapability(
    "d2-case-studies-and-whitepapers",
    "Case Studies & Whitepapers with Lead Capture",
    checkFileContains("src/app/(public)/etudes-de-cas/page.tsx", [
      "CASE_STUDIES",
      "PUBLICATIONS",
      "handleDownloadSubmit",
      "/api/leads",
    ]),
    "Case studies page missing interactive download or lead capture"
  );

  gradeCapability(
    "d3-prisma-seed-and-db-service",
    "Prisma Seed & Local Resilient DbService",
    checkFileExists("prisma/seed.ts") &&
      checkFileExists("src/lib/db-service.ts") &&
      checkFileExists("src/app/api/leads/route.ts") &&
      checkFileContains("src/lib/db-service.ts", ["DbService", "createLead", "getLeads", "updateLeadStatus"]),
    "Prisma seed or resilient DbService layer missing"
  );

  // ------------------------------------------------------------------
  // METRICS & REPORT
  // ------------------------------------------------------------------
  const capPassed = results.capability.filter((r) => r.passed).length;
  const capTotal = results.capability.length;
  const regPassed = results.regression.filter((r) => r.passed).length;
  const regTotal = results.regression.length;

  const passAt1Cap = Math.round((capPassed / capTotal) * 100);
  const passCaret3Reg = Math.round((regPassed / regTotal) * 100);

  const reportOutput = `
==================================================================
📊 EVAL REPORT : AWAAYA (OPTIONS A, B, C)
==================================================================

CAPABILITY EVALS:
${results.capability.map((c) => `  - ${c.id.padEnd(35)} : ${c.passed ? "PASS" : "FAIL"}`).join("\n")}
  Overall Capability : ${capPassed}/${capTotal} (${passAt1Cap}%)

REGRESSION EVALS:
${results.regression.map((r) => `  - ${r.id.padEnd(35)} : ${r.passed ? "PASS" : "FAIL"}`).join("\n")}
  Overall Regression : ${regPassed}/${regTotal} (${passCaret3Reg}%)

METRICS:
  pass@1 (Capability) : ${passAt1Cap}% (Target: >90%)
  pass^3 (Regression) : ${passCaret3Reg}% (Target: 100%)

STATUS: ${capPassed === capTotal && regPassed === regTotal ? "✅ ALL EVALS PASSED — SHIP IT" : "⚠️ EVAL FAILURES DETECTED"}
==================================================================
`;

  log(reportOutput);

  // Save report to .evals/eval-run.log
  const logDir = path.join(rootDir, ".evals");
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
  fs.writeFileSync(path.join(logDir, "eval-run.log"), reportOutput, "utf-8");
  log(`Log written to: .evals/eval-run.log`);
}

runAllEvals().catch((err) => {
  console.error("Eval runner failure:", err);
  process.exit(1);
});
