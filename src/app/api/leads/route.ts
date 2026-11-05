import { NextResponse } from "next/server";
import { DbService } from "@/lib/db-service";

export async function GET() {
  try {
    const leads = await DbService.getLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Impossible de récupérer les leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, organization, sector, size, serviceId, timeframe, message, source, score } = body;

    if (!fullName || !email || !organization) {
      return NextResponse.json(
        { success: false, error: "Nom, email et organisation sont obligatoires" },
        { status: 400 }
      );
    }

    const lead = await DbService.createLead({
      fullName,
      email,
      phone: phone || "+225 -- -- -- --",
      organization,
      sector,
      size,
      serviceId,
      timeframe,
      message,
      source: source || "DIAGNOSTIC_FORM",
      score,
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'enregistrement du lead" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { leadId, status } = body;

    if (!leadId || !status) {
      return NextResponse.json(
        { success: false, error: "leadId et status requis" },
        { status: 400 }
      );
    }

    const updated = await DbService.updateLeadStatus(leadId, status);
    return NextResponse.json({ success: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur lors de la mise à jour du lead" },
      { status: 500 }
    );
  }
}

