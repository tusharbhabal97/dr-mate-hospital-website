import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  createAdminSessionToken,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { username?: string; password?: string };
    const username = body.username?.trim() || "";
    const password = body.password?.trim() || "";

    if (!validateAdminCredentials(username, password)) {
      return NextResponse.json(
        { error: "Invalid admin credentials" },
        { status: 401 },
      );
    }

    const token = createAdminSessionToken(username);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE_NAME, token, adminCookieOptions);
    return res;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
