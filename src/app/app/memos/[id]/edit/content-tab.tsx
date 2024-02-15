"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { type JSONContent } from "@tiptap/react";
import { Editor } from "novel";
import { useState } from "react";

export function ContentTab({
  id,
  defaultContent,
}: {
  id: number;
  defaultContent: string;
}) {
  const [content, setContent] = useState<JSONContent | null>();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (content: JSONContent | null | undefined) => {
      await fetch(`/memos/${id}`, {
        method: "PUT",
        body: JSON.stringify({ content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      toast({
        title: "Saved Changes!",
        description: "Your memo has been saved as a draft.",
      });
    },
  });
  return (
    <TabsContent value="content">
      <div className="flex flex-col">
        <Editor
          disableLocalStorage
          defaultValue={JSON.parse(defaultContent) as JSONContent}
          onDebouncedUpdate={(editor) => {
            const text = editor?.getJSON();
            setContent(text);
            mutation.mutate(text);
          }}
          className="relative mb-6 min-h-[500px] w-full max-w-full rounded-lg border border-stone-200 bg-white shadow-md"
        />
        <div className="flex w-full flex-1 flex-grow gap-x-2">
          <div className="flex flex-1 justify-start">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Abandon</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone and will permanently delete
                    this memo.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex flex-row justify-end gap-x-2">
            <Button
              variant="outline"
              onClick={() => mutation.mutate(content)}
              disabled={mutation.isPending}
            >
              Save Changes
            </Button>
            <Button>Publish</Button>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
