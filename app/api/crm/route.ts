import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const leadsPath = join(process.cwd(), "data", "leads.json");

function readLeads() {
  try {
    return JSON.parse(readFileSync(leadsPath, "utf-8"));
  } catch {
    return [];
  }
}

function writeLeads(leads: unknown[]) {
  writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, serviceType, message, formType, sourcePage, timestamp } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "name and phone are required" }, { status: 400 });
  }

  const lead = {
    leadId: randomUUID(),
    name,
    phone,
    serviceType: serviceType || "",
    message: message || "",
    formType: formType || "contact",
    sourcePage: sourcePage || "/",
    timestamp: timestamp || new Date().toISOString(),
    status: "new",
  };

  const leads = readLeads();
  leads.push(lead);
  writeLeads(leads);

  return NextResponse.json({ success: true, leadId: lead.leadId });
}

export async function GET() {
  const leads = readLeads();
  return NextResponse.json(leads);
}
