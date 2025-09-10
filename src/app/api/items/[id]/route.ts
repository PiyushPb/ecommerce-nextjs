import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import Item, { IItem } from "@/models/Item";

// GET /api/items/:id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const { id } = params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      {
        status: "failed",
        payload: null,
        message: "Invalid product ID",
      },
      { status: 400 }
    );
  }

  try {
    const item: IItem | null = await Item.findById(id);

    if (!item) {
      return NextResponse.json(
        {
          status: "success",
          payload: null,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        payload: item,
        message: "Product fetched successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching product:", err);
    return NextResponse.json(
      {
        status: "failed",
        payload: null,
        message: "Something went wrong while fetching the product",
      },
      { status: 500 }
    );
  }
}
