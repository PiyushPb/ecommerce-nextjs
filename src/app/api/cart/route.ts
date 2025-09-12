import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import Cart from "@/models/Cart";
import Item from "@/models/Item";
import { authMiddleware, AuthPayload } from "@/lib/auth";
import Product from "@/types/products";

export async function GET(req: NextRequest) {
  await dbConnect();

  const auth = authMiddleware(req);
  if ("status" in auth) return auth;
  const user = (await auth) as AuthPayload;

  const cart = await Cart.findOne({ userId: user.id }).populate({
    path: "items.itemId",
    model: Item,
    select: "title price images.thumbnail",
  });

  if (!cart) {
    return NextResponse.json({
      status: "success",
      message: "Cart is empty",
      payload: { items: [] },
    });
  }

  const formattedItems = cart.items.map((item) => {
    const product = (item as any).itemId;

    return {
      itemId: product?._id ?? null,
      title: product?.title ?? null,
      price: product?.price ?? null,
      thumbnail: product?.images?.thumbnail ?? null,
      quantity: item.quantity,
      size: item.size,
    };
  });

  return NextResponse.json({
    status: "success",
    message: "Cart fetched successfully",
    payload: {
      _id: cart._id,
      items: formattedItems,
    },
  });
}

export async function POST(req: NextRequest) {
  await dbConnect();

  const auth = authMiddleware(req);
  if ("status" in auth) return auth;
  const user = (await auth) as AuthPayload;

  const body = await req.json();
  const { itemId, quantity, size } = body;

  // ✅ Strict validation
  if (!itemId || !quantity || quantity < 1 || !size) {
    return NextResponse.json(
      { error: "Invalid itemId, quantity, or size" },
      { status: 400 }
    );
  }

  // ✅ Ensure ObjectId
  const itemObjectId = new mongoose.Types.ObjectId(itemId);

  let cart = await Cart.findOne({ userId: user.id });

  if (!cart) {
    // If no cart exists, create new one
    cart = new Cart({
      userId: user.id,
      items: [{ itemId: itemObjectId, quantity, size }],
    });
  } else {
    // ✅ Ensure all existing items have a size (fixes old bad data)
    cart.items = cart.items.map((item) => ({
      ...(item.toObject?.() ?? item),
      size: item.size || "M", // fallback default
    }));

    // Check if item with same itemId + size already exists
    const existingItemIndex = cart.items.findIndex(
      (item) => item.itemId.toString() === itemId && item.size === size
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ itemId: itemObjectId, quantity, size });
    }
  }

  await cart.save();

  return NextResponse.json({
    status: "success",
    message: "Item added to cart",
    payload: cart,
  });
}

export async function DELETE(req: NextRequest) {
  await dbConnect();

  const auth = authMiddleware(req);
  if ("status" in auth) return auth;
  const user = (await auth) as AuthPayload;

  const cart = await Cart.findOne({ userId: user.id });

  if (!cart) {
    return NextResponse.json({
      status: "success",
      message: "Cart already empty",
    });
  }

  cart.items = [];
  await cart.save();

  return NextResponse.json({
    status: "success",
    message: "Cart cleared",
  });
}
