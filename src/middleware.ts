// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

// Define which routes are protected
const PROTECTED_ROUTES = ["/api/cart", "/api/orders", "/api/user"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for unprotected routes
  if (!PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Get Authorization header
  const authHeader = req.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 403 }
    );
  }

  // ✅ If valid, forward request
  return NextResponse.next();
}

// Only run middleware on API routes
export const config = {
  matcher: ["/api/:path*"],
};
