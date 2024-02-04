import { redirect } from "next/navigation";
import React from "react";
import { getServerAuthSession } from "../lib/auth-options";

export async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/signin");
    return <>Please login</>;
  }

  return <>{children}</>;
}
