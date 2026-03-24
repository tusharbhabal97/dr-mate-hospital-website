import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const token = cookies().get(AUTH_COOKIE_NAME)?.value;
    const session = verifySessionToken(token);

    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const db = await getDb();
    const user = await db.collection("users").findOne(
      { email: session.email },
      { projection: { email: 1, fullName: 1, phone: 1 } },
    );

    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        email: user.email,
        fullName: user.fullName ?? "",
        phone: user.phone ?? "",
      },
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
