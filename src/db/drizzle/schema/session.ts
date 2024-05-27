import { relations } from "drizzle-orm";
import { pgTable, integer, serial, timestamp, text } from "drizzle-orm/pg-core";
import { user } from "./user";

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: integer("userId")
    .references(() => user.id)
    .notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

//RELATIONS
export const sessionRelations = relations(session, ({ one, many }) => ({
  user: one(user, { fields: [session.userId], references: [user.id] }),
}));
