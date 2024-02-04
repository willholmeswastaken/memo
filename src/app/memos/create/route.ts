import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { memos } from "~/server/db/schema";

export async function POST(req: Request) {
  const session = await getServerAuthSession();
  if (!session) {
    return new Response(null, { status: 401 });
  }
  const { title } = (await req.json()) as { title: string };

  const memo = await db
    .insert(memos)
    .values({ title, createdBy: session.user.id })
    .returning({ id: memos.id });

  return Response.json({ id: memo[0]!.id });
}
