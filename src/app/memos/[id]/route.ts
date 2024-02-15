import { and, eq } from "drizzle-orm";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { memos } from "~/server/db/schema";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerAuthSession();
  if (!session) {
    return new Response(null, { status: 401 });
  }
  const { content } = (await req.json()) as { content: string };

  await db
    .update(memos)
    .set({ content })
    .where(
      and(
        eq(memos.id, parseInt(params.id)),
        eq(memos.createdBy, session.user.id),
      ),
    );

  return new Response(null, { status: 204 });
}
