ALTER TABLE "memo_memo" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "memo_memo" ALTER COLUMN "status" SET DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE "memo_memo" ALTER COLUMN "status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "memo_memo" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "memo_memo" ALTER COLUMN "updatedAt" SET NOT NULL;