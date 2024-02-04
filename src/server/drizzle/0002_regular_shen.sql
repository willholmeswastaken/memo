DROP INDEX IF EXISTS "accUserId_idx";--> statement-breakpoint
DROP INDEX IF EXISTS "sessionUserId_idx";--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "provider" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "providerAccountId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "refresh_token" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "access_token" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "token_type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "scope" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "id_token" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_account" ALTER COLUMN "session_state" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_session" ALTER COLUMN "sessionToken" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_session" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "emailVerified" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "emailVerified" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "memo_user" ALTER COLUMN "image" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_verificationToken" ALTER COLUMN "identifier" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memo_verificationToken" ALTER COLUMN "token" SET DATA TYPE text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "memo_account" ADD CONSTRAINT "memo_account_userId_memo_user_id_fk" FOREIGN KEY ("userId") REFERENCES "memo_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "memo_session" ADD CONSTRAINT "memo_session_userId_memo_user_id_fk" FOREIGN KEY ("userId") REFERENCES "memo_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
