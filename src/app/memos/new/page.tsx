import { type Metadata } from "next";
import { Editor } from "novel";
import { MainNav } from "../../dashboard/components/main-nav";
import { Search } from "../../dashboard/components/search";
import { UserNav } from "../../dashboard/components/user-nav";
import Footer from "../../dashboard/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            <TabsContent value="reviewers">
              <Card>
                <CardHeader>
                  <CardTitle>Share this document</CardTitle>
                  <CardDescription>
                    Enter the email of the desired reviewer and submit to send
                    an email link.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input value="joe@bloggs.net" type="email" readOnly />
                    <Button className="shrink-0">Invite</Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">People with access</h4>
                    <div className="grid gap-6">
                      <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/avatars/03.png" />
                            <AvatarFallback>OM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">
                              Olivia Martin
                            </p>
                            <p className="text-sm text-muted-foreground">
                              m@example.com
                            </p>
                          </div>
                        </div>
                        <Select defaultValue="edit">
                          <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="edit">Can edit</SelectItem>
                            <SelectItem value="view">Can view</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/avatars/05.png" />
                            <AvatarFallback>IN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">
                              Isabella Nguyen
                            </p>
                            <p className="text-sm text-muted-foreground">
                              b@example.com
                            </p>
                          </div>
                        </div>
                        <Select defaultValue="view">
                          <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="edit">Can edit</SelectItem>
                            <SelectItem value="view">Can view</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback>SD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">
                              Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">
                              p@example.com
                            </p>
                          </div>
                        </div>
                        <Select defaultValue="view">
                          <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="edit">Can edit</SelectItem>
                            <SelectItem value="view">Can view</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}
