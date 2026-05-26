import { NextRequest, NextResponse } from "next/server";
import { searchDiseaseSuggestions } from "@/lib/diseases-server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const suggestions = await searchDiseaseSuggestions(normalized);
    return NextResponse.json({ suggestions });
  } catch {
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }
}
