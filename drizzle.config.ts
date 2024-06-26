import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/drizzle/schema/*.ts",
  out: "./src/db/drizzle/migrations",
  // driver: "pg",
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
  dialect: "postgresql",
  verbose: true,
  strict: true,
} satisfies Config;
