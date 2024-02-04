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
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function CreateMemoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Memo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Memo</DialogTitle>
          <DialogDescription>
            Tell us the name of your new memo and lets get started.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="memo-name" className="text-right">
              Name
            </Label>
            <Input
              id="memo-name"
              placeholder="My Memo"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Link href="app/memos/new/edit">
            <Button>Create</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
