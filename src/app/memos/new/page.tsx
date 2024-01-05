import { type Metadata } from "next";
import { Editor } from "novel";
import { MainNav } from "../../dashboard/components/main-nav";
import { Search } from "../../dashboard/components/search";
import { UserNav } from "../../dashboard/components/user-nav";
import Footer from "../../dashboard/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function NewMemoPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">New Memo</h2>
          </div>
          <Tabs
            defaultValue="content"
            className="justify-items-center space-y-4"
          >
            <TabsList>
              <TabsTrigger value="content" defaultChecked>
                Content
              </TabsTrigger>
              <TabsTrigger value="reviewers">Reviewers</TabsTrigger>
            </TabsList>
            <TabsContent value="content">
              <div className="flex flex-col">
                <Editor className="relative mb-6 min-h-[500px] w-full max-w-full rounded-lg border border-stone-200 bg-white shadow-md" />
                <div className="flex w-full flex-1 flex-grow gap-x-2">
                  <div className="flex flex-1 justify-start">
                    <Button variant="destructive">Abandon</Button>
                  </div>
                  <div className="flex flex-row justify-end gap-x-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}
