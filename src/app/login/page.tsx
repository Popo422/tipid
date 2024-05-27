import { compare } from "bcrypt";
import { db } from "@/db/drizzle/db";
import { user } from "@/db/drizzle/schema/user";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { lucia } from "../../../auth";


async function login(formData: FormData): Promise<ActionResult> {
  "use server";
  const email = formData.get("email");
  const password = formData.get("password");
  const userExists = (
    await db.select().from(user).where(eq(user.email, email))
  )[0];
  if (!userExists) {
    return {
      error: "Invalid username",
    };
  }
  console.log(userExists);
  const isPasswordValid = await compare(password || "", userExists.password);
  console.log(isPasswordValid, "password");
  if (!isPasswordValid) {
    return {
      error: "Invalid password",
    };
  }
  const userId = userExists.id.toString();
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
interface ActionResult {
  error: string;
}
const Login = async () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>Sign in</h1>
      <form action={login}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={"password"}
            id="password"
            name="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="inline-block rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
