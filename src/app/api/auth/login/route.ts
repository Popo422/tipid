import { NextResponse } from "next/server";
import { hash, compare } from "bcrypt";
import { db } from "@/db/drizzle/db";
import { user } from "@/db/drizzle/schema/user";
import { eq } from "drizzle-orm";
import { generateIdFromEntropySize } from "lucia";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { isValid } from "date-fns";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // validate email and password
    const userExists = (
      await db.select().from(user).where(eq(user.email, email))
    )[0];
    if (!userExists) {
      NextResponse.json({ success: 400, isValid: false });
    }
    const isPasswordValid = await compare(password || "", userExists.password);
    if (!isPasswordValid) {
      NextResponse.json({ success: 400, isValid: false });
    }

    return NextResponse.json({
      success: 200,
      isValid: true,
      userId: userExists.id,
    });
  } catch (e) {
    console.log({ e });
  }
}
