import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { signToken } from "@/lib/auth";
import { z } from "zod";

// Zod schema: accept either email or phone
const loginSchema = z.object({
  identifier: z.string().min(1, "Email or phone is required"), // can be email OR phone
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    // 1. validate with Zod
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return NextResponse.json({ errors }, { status: 400 });
    }

    const { identifier, password } = parsed.data;

    // 2. Find user by email OR phone
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email/phone or password" },
        { status: 400 }
      );
    }

    // 3. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email/phone or password" },
        { status: 400 }
      );
    }

    // 4. Generate JWT
    const token = signToken({
      id: user._id.toString(),
      email: user.email,
    });

    // 5. Build response
    const response = NextResponse.json(
      {
        message: "Login successful",
        token, // still return token in JSON for client usage
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
      },
      { status: 200 }
    );

    // 6. Attach HttpOnly cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Something went wrong during login" },
      { status: 500 }
    );
  }
}
