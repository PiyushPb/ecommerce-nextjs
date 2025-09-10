// lib/auth.ts

import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET as string;
console.log(JWT_SECRET);

if (!JWT_SECRET) {
  throw new Error("❌ Please define the JWT_SECRET in .env.local");
}

export interface AuthPayload extends JwtPayload {
  id: string;
  email: string;
}

export function signToken(payload: AuthPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function verifyToken(token: string): Promise<AuthPayload | null> {
  try {
    return (await jwt.verify(token, JWT_SECRET)) as AuthPayload;
  } catch {
    return null;
  }
}

// Middleware for protecting routes
export async function authMiddleware(
  req: NextRequest
): Promise<NextResponse | AuthPayload> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;
  // console.log("Token:", token);
  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 401 });
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 403 }
    );
  }

  return decoded;
}
