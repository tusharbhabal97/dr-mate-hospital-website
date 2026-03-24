import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import {
  AUTH_COOKIE_NAME,
  authCookieOptions,
  createSessionToken,
  hashOtp,
} from "@/lib/auth";
import { getDb } from "@/lib/mongodb";

type RequestBody = {
  email?: string;
  otp?: string;
  fullName?: string;
  phone?: string;
  mode?: "login" | "register";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody;
    const email = body.email?.trim().toLowerCase() || "";
    const otp = body.otp?.trim() || "";
    const mode = body.mode === "login" ? "login" : "register";

    if (!emailRegex.test(email) || !/^\d{6}$/.test(otp)) {
      return NextResponse.json({ error: "Invalid email or OTP" }, { status: 400 });
    }

    const db = await getDb();
    const users = db.collection("users");
    const otps = db.collection("otp_codes");

    const otpDoc = await otps.findOne(
      { email },
      { sort: { createdAt: -1 } },
    );

    if (!otpDoc) {
      return NextResponse.json(
        { error: "OTP not found. Please request a new one." },
        { status: 404 },
      );
    }

    if (otpDoc.expiresAt && new Date(otpDoc.expiresAt).getTime() < Date.now()) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    if ((otpDoc.attempts ?? 0) >= 5) {
      return NextResponse.json(
        { error: "Too many invalid attempts. Request a new OTP." },
        { status: 429 },
      );
    }

    const incomingHash = hashOtp(email, otp);
    if (incomingHash !== otpDoc.otpHash) {
      await otps.updateOne({ _id: otpDoc._id }, { $inc: { attempts: 1 } });
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    await otps.deleteMany({ email });

    const existingUser = await users.findOne({ email });
    if (mode === "login" && !existingUser) {
      return NextResponse.json(
        { error: "No account found. Please register first." },
        { status: 404 },
      );
    }

    const fullName = body.fullName?.trim() || otpDoc.fullName || "";
    const phone = body.phone?.trim() || otpDoc.phone || "";

    let userId: string;

    if (existingUser) {
      await users.updateOne(
        { _id: existingUser._id },
        {
          $set: {
            ...(fullName ? { fullName } : {}),
            ...(phone ? { phone } : {}),
            lastLoginAt: new Date(),
            updatedAt: new Date(),
          },
        },
      );
      userId = String(existingUser._id);
    } else {
      if (!fullName || !phone) {
        return NextResponse.json(
          { error: "Full name and phone are required for registration." },
          { status: 400 },
        );
      }

      const insertResult = await users.insertOne({
        _id: new ObjectId(),
        email,
        fullName,
        phone,
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: new Date(),
      });
      userId = String(insertResult.insertedId);
    }

    const token = createSessionToken(userId, email);
    const response = NextResponse.json({ ok: true, redirectTo: "/book-appointment" });
    response.cookies.set(AUTH_COOKIE_NAME, token, authCookieOptions);
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to verify OTP right now." },
      { status: 500 },
    );
  }
}
