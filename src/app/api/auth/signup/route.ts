import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // use bcryptjs (async) in Next.js
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { signToken } from "@/lib/auth";
import { z } from "zod";

// zod schema for request body
const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP is required"),
  country: z.string().min(1, "Country is required"),
});

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(8, "Phone number is too short"),
  address: addressSchema,
});

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    // 1. validate with zod
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return NextResponse.json({ errors }, { status: 400 });
    }

    const { name, email, password, phone, address } = parsed.data;

    // 2. check if email exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // 3. check if phone exists
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return NextResponse.json(
        { error: "Phone already registered" },
        { status: 400 }
      );
    }

    // 4. hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role: "buyer",
    });

    // 6. generate JWT
    const token = signToken({
      id: newUser._id.toString(),
      email: newUser.email,
    });

    // 7. Build response
    const response = NextResponse.json(
      {
        message: "Signup successful",
        token, // keep in JSON for client usage
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          address: newUser.address,
        },
      },
      { status: 201 }
    );

    // 8. Attach HttpOnly cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong during signup" },
      { status: 500 }
    );
  }
}
