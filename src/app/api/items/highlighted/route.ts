// app/api/items/highlighted/route.ts

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Item from "@/models/Item";

export async function GET() {
  await dbConnect();

  try {
    // Fetch 4 top products excluding T-shirts
    const topProducts = await Item.find({ category: { $ne: "T-shirt" } })
      .sort({ createdAt: -1 })
      .limit(4);

    // Fetch 4 T-shirts
    const tshirts = await Item.find({ category: "T-shirt" })
      .sort({ createdAt: -1 })
      .limit(4);

    return NextResponse.json(
      {
        status: "success",
        payload: {
          topProducts,
          tshirts,
        },
        message: "products fetched successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching highlighted products:", err);
    return NextResponse.json(
      {
        status: "failed",
        payload: {
          topProducts: [],
          tshirts: [],
        },
        message: "Something went wrong while fetching products",
      },
      { status: 500 }
    );
  }
}
