import { NextRequest, NextResponse } from "next/server";
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

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ leadId: string }> }) {
  const { leadId } = await params;
  const { status } = await req.json();
  const validStatuses = ["new", "contacted", "booked", "closed"];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const leads = readLeads();
  const idx = leads.findIndex((l: { leadId: string }) => l.leadId === leadId);
  if (idx === -1) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

  leads[idx].status = status;
  writeFileSync(leadsPath, JSON.stringify(leads, null, 2));

  return NextResponse.json({ success: true });
}
