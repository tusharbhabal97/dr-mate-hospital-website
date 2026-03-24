import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "drmate_admin_session";

const ADMIN_USER = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "DrMate@2026";
const ADMIN_SECRET = process.env.ADMIN_AUTH_SECRET || "replace-admin-secret";
// ok
type AdminSessionPayload = {
  username: string;
  exp: number;
};

function sign(input: string) {
  return crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(input)
    .digest("base64url");
}

export function validateAdminCredentials(username: string, password: string) {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export function createAdminSessionToken(username: string) {
  const payload: AdminSessionPayload = {
    username,
    exp: Date.now() + 24 * 60 * 60 * 1000,
  };
  const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  const signature = sign(payloadEncoded);
  return `${payloadEncoded}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) return null;
  const [payloadEncoded, signature] = token.split(".");
  if (!payloadEncoded || !signature) return null;

  const expected = sign(payloadEncoded);
  const sigA = Buffer.from(signature);
  const sigB = Buffer.from(expected);
  if (sigA.length !== sigB.length) return null;
  if (!crypto.timingSafeEqual(sigA, sigB)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(payloadEncoded, "base64url").toString("utf8"),
    ) as AdminSessionPayload;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export const adminCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 24 * 60 * 60,
};
