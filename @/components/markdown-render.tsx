"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export function MarkdownRender({ content }: { content: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ReactMarkdown>{content}</ReactMarkdown>
  ) : (
    <div className="flex flex-col space-y-4">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-14 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
