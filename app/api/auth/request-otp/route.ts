import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { generateOtp, getOtpExpiryDate, hashOtp } from "@/lib/auth";
import { sendOtpEmail } from "@/lib/email";
import { getDb } from "@/lib/mongodb";

type RequestBody = {
  email?: string;
  fullName?: string;
  phone?: string;
  mode?: "login" | "register";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody;
    const email = body.email?.trim().toLowerCase() || "";
    const mode = body.mode === "login" ? "login" : "register";

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const db = await getDb();
    const users = db.collection("users");
    const otps = db.collection("otp_codes");

    const existingUser = await users.findOne({ email });
    if (mode === "login" && !existingUser) {
      return NextResponse.json(
        { error: "No account found for this email. Please register first." },
        { status: 404 },
      );
    }

    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const recentOtp = await otps.findOne({
      email,
      createdAt: { $gte: oneMinuteAgo },
    });
    if (recentOtp) {
      return NextResponse.json(
        { error: "Please wait before requesting another OTP." },
        { status: 429 },
      );
    }

    const otp = generateOtp();
    const otpHash = hashOtp(email, otp);
    const expiresAt = getOtpExpiryDate();

    await otps.insertOne({
      _id: new ObjectId(),
      email,
      otpHash,
      expiresAt,
      attempts: 0,
      mode,
      fullName: body.fullName?.trim() || "",
      phone: body.phone?.trim() || "",
      createdAt: new Date(),
    });

    await sendOtpEmail(email, otp);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send OTP at the moment." },
      { status: 500 },
    );
  }
}
