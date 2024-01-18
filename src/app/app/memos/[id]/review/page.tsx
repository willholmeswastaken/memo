import { ProtectedRoute } from "../../../components/protected";
import { remark } from "remark";
import html from "remark-html";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MarkdownRender } from "~/app/app/components/markdown-render";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default async function ReviewMemoPage() {
  const content = "*testing*123";
  return (
    <ProtectedRoute>
      <div className="mx-auto w-full max-w-3xl space-y-10 px-4 py-6">
        <header className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold">Document Title</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By Author Name
          </p>
        </header>
        <section className="rounded-lg border bg-white p-6 dark:bg-gray-800">
          <h2 className="sr-only">Document Content</h2>
          <MarkdownRender content={content} />
        </section>
        <section className="space-y-6">
          <Tabs defaultValue="comments" className="">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="reviewers">Reviewers</TabsTrigger>
            </TabsList>
            <TabsContent value="comments">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Comments</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 gap-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-medium">Reviewer Name</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          3 days ago
                        </div>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-200">
                        This is a comment about the document. It provides
                        feedback to the author.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 gap-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-medium">Reviewer Name</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          2 days ago
                        </div>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-200">
                        This is another comment about the document. It provides
                        additional feedback to the author.
                      </p>
                    </div>
                  </div>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="comment">Your Comment</Label>
                    <Textarea
                      id="comment"
                      placeholder="Leave your feedback here"
                    />
                  </div>
                  <Button type="submit">Submit Feedback</Button>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="reviewers">
              <div className="mt-4 space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <div className="font-medium">JP Morgan</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Reviewed 2 days ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <div className="font-medium">JP Morgan</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Viewed but did not review 2 days ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <div className="font-medium">JP Morgan</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Invited but did not review 2 days ago
                    </div>
                  </div>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="comment">Invite Reviewer</Label>
                    <Input
                      id="comment"
                      placeholder="info@willholmes.dev"
                      type="email"
                    />
                  </div>
                  <Button type="submit">Send Invite</Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </ProtectedRoute>
  );
}
