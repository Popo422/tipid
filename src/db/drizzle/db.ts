import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as admin from "./schema/admin";
import * as auditHistory from "./schema/audit-history";
import * as employee from "./schema/employee";
import * as item from "./schema/item";
import * as manager from "./schema/manager";
import * as user from "./schema/user";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { session } from "./schema/session";

const pool = new Pool({
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DATABASE!,
  ssl: true,
});

const userTable = pgTable("dc-user", {
  id: serial("id").primaryKey().notNull(),
  employeeId: uuid("employeeId").defaultRandom().notNull(),
  firstName: varchar("firstName", { length: 256 }).notNull(),
  lastName: varchar("lastName", { length: 256 }),
  email: varchar("email", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

const sessionTable = pgTable("session", {
  id: text("id").primaryKey().notNull(),
  userId: serial("userId")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
// { schema } is used for relational queries
export const db = drizzle(pool, {
  schema: {
    ...admin,
    ...auditHistory,
    ...employee,
    ...item,
    ...manager,
    ...user,
    ...session,
  },
});

export const adapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionTable,
  userTable,
);
