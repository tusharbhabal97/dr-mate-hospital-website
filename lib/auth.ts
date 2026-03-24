import crypto from "crypto";

export const AUTH_COOKIE_NAME = "drmate_session";

const OTP_TTL_MINUTES = 10;
const SESSION_TTL_DAYS = 7;

const authSecret = process.env.AUTH_SECRET || "replace-me-in-env";

type SessionPayload = {
  userId: string;
  email: string;
  exp: number;
};

function base64Url(input: string) {
  return Buffer.from(input).toString("base64url");
}

function sign(input: string) {
  return crypto.createHmac("sha256", authSecret).update(input).digest("base64url");
}

export function generateOtp() {
  return String(crypto.randomInt(100000, 1000000));
}

export function hashOtp(email: string, otp: string) {
  return crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}::${otp}::${authSecret}`)
    .digest("hex");
}

export function getOtpExpiryDate() {
  return new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);
}

export function createSessionToken(userId: string, email: string) {
  const payload: SessionPayload = {
    userId,
    email,
    exp: Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000,
  };
  const payloadEncoded = base64Url(JSON.stringify(payload));
  const signature = sign(payloadEncoded);
  return `${payloadEncoded}.${signature}`;
}

export function verifySessionToken(token?: string | null): SessionPayload | null {
  if (!token) return null;

  const [payloadEncoded, signature] = token.split(".");
  if (!payloadEncoded || !signature) return null;

  const expectedSig = sign(payloadEncoded);
  const sigA = Buffer.from(signature);
  const sigB = Buffer.from(expectedSig);
  if (sigA.length !== sigB.length) return null;
  if (!crypto.timingSafeEqual(sigA, sigB)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(payloadEncoded, "base64url").toString("utf8"),
    ) as SessionPayload;
    if (!payload.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export const authCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_TTL_DAYS * 24 * 60 * 60,
};
