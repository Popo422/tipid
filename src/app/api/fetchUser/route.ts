import { NextResponse } from "next/server";
import { db } from "@/db/drizzle/db";
import { user } from "@/db/drizzle/schema/user";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    const queryUser = await db.select().from(user).where(eq(user.id, id));
    const { email, firstName, lastName } = queryUser[0];
    return NextResponse.json({ email, firstName, lastName });
  } catch (e) {
    console.log({ e });
  }
}
