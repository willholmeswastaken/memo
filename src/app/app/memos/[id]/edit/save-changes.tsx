"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function SaveChanges() {
  const { toast } = useToast();
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Saved Changes!",
          description: "Your memo has been saved as a draft.",
        })
      }
    >
      Save Changes
    </Button>
  );
}
