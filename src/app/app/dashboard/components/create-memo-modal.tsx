"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateMemoModal() {
  const [memoTitle, setMemoTitle] = useState("");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (title: string) => {
      const response = await fetch("/memos/create", {
        method: "POST",
        body: JSON.stringify({ title }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return (await response.json()) as { id: string };
    },
    onSuccess: ({ id }) => {
      router.push(`app/memos/${id}/edit`);
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Memo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Memo</DialogTitle>
          <DialogDescription>
            Tell us the title of your new memo and lets get started.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="memo-title" className="text-right">
              Title
            </Label>
            <Input
              id="memo-title"
              placeholder="My Memo"
              className="col-span-3"
              value={memoTitle}
              onChange={(event) => {
                setMemoTitle(event.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              mutation.mutate(memoTitle);
            }}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
