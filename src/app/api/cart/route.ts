// src/app/api/cart/route.ts

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Cart, { ICart } from "@/models/Cart";
import { authMiddleware, AuthPayload } from "@/lib/auth";

export async function GET(req: NextRequest) {
  await dbConnect();

  // Verify JWT
  const auth = authMiddleware(req);
  if ("status" in auth) return auth;

  const user = auth as Promise<AuthPayload>;
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const cart = await Cart.findOne({ userId: (await user).id }).populate("items.itemId");

  return NextResponse.json({
    status: "success",
    payload: cart || { items: [] },
    message: "Cart fetched successfully",
  });
}
