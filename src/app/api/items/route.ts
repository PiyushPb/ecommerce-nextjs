import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import Item, { IItem } from "@/models/Item";
import dbConnect from "@/lib/dbConnect";

// Zod schema for query parameters
const querySchema = z.object({
  category: z.string().optional(),
  size: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
});

export async function GET(req: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(req.url);

  const queryObj = {
    category: searchParams.get("category") || undefined,
    size: searchParams.get("size") || undefined,
    minPrice: searchParams.get("minPrice") || undefined,
    maxPrice: searchParams.get("maxPrice") || undefined,
  };

  // Validate query parameters
  const parsed = querySchema.safeParse(queryObj);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return NextResponse.json(
      {
        status: "failed",
        payload: [],
        message: "Validation failed",
        errors,
      },
      { status: 400 }
    );
  }

  const { category, size, minPrice, maxPrice } = parsed.data;

  // Type-safe MongoDB filter
  type FilterType = Partial<{
    category: IItem["category"];
    sizes: string;
    price: { $gte?: number; $lte?: number };
  }>;

  const filter: FilterType = {};

  if (category) filter.category = category;
  if (size) filter.sizes = size;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = parseFloat(minPrice);
    if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
  }

  try {
    const items = await Item.find(filter).sort({ createdAt: -1 });

    if (items.length === 0) {
      return NextResponse.json(
        {
          status: "success",
          payload: [],
          message: "No items found",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        payload: items,
        message: "Items fetched successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching items:", err);
    return NextResponse.json(
      {
        status: "failed",
        payload: [],
        message: "Something went wrong while fetching items",
      },
      { status: 500 }
    );
  }
}
