import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export async function GET() {
  const session = await getServerAuthSession();
  if (!session) {
    return new Response(null, { status: 401 });
  }
  const memos = await db.query.memos.findMany();

  return Response.json(memos);
}
