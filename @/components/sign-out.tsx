"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { DropdownMenuItem, DropdownMenuShortcut } from "./ui/dropdown-menu";

export function SignOut() {
  return (
    <Button
      variant="ghost"
      className="flex w-full pl-0 pr-0"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <DropdownMenuItem className="flex-grow">
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </Button>
  );
}
