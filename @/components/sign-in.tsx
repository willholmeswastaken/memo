"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <Button
      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      onClick={() => signIn("github", { callbackUrl: "/app" })}
    >
      Sign In
    </Button>
  );
}
