// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  serial,
  index,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const pgTable = pgTableCreator((name) => `memo_${name}`);

export const memos = pgTable(
  "memo",
  {
    id: serial("id").primaryKey(),
    title: varchar("title"),
    content: varchar("content"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
    createdBy: varchar("createdBy"),
  },
  (memo) => ({
    createdByIndex: index("createdBy").on(memo.createdBy),
  }),
);
