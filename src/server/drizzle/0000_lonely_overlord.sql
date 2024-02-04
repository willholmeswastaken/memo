CREATE TABLE IF NOT EXISTS "memo_memo" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"content" varchar,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp,
	"createdBy" varchar
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "createdBy" ON "memo_memo" ("createdBy");