import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Invite() {
  return (
    <section className="w-full justify-self-center py-44 lg:py-64">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Document Invitation
            </h1>
            <p className="mx-auto flex max-w-[700px] flex-col text-gray-500 md:text-xl dark:text-gray-400">
              <span>
                Hello, info@willholmes.dev! You've been invited to view a memo.
              </span>
              <span>Would you like to proceed?</span>
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex space-x-2">
              <Button className="max-w-lg flex-1">Accept</Button>
              <Button className="max-w-lg flex-1" variant="outline">
                Decline
              </Button>
            </div>
            <p className="flex justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <span>By accepting, you agree to our</span>
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
