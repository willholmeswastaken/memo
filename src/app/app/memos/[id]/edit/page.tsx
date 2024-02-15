import { Editor } from "novel";
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
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { eq, and } from "drizzle-orm";
import { memos } from "~/server/db/schema";
import { SaveChanges } from "./save-changes";
import { ContentTab } from "./content-tab";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

async function getMemo(memoId: number) {
  const session = await getServerAuthSession();
  if (!session) {
    return null;
  }
  const memo = await db.query.memos.findFirst({
    where: (memo) =>
      and(eq(memo.createdBy, session.user.id), eq(memo.id, memoId)),
  });
  return memo;
}

export default async function NewMemoPage({
  params,
}: {
  params: { id: string };
}) {
  const memo = await getMemo(parseInt(params.id));
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-center space-x-2 space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">{memo?.title}</h2>
          </div>
          <Tabs defaultValue="content" className="flex flex-col space-y-4">
            <TabsList className="self-center">
              <TabsTrigger value="content" defaultChecked>
                Content
              </TabsTrigger>
              <TabsTrigger value="reviewers">Reviewers</TabsTrigger>
            </TabsList>
            <ContentTab id={memo!.id} defaultContent={memo?.content ?? ""} />
            <TabsContent value="reviewers">
              <Card>
                <CardHeader>
                  {/* We must do a check before reviewers land on the page to make sure their
                    account email is on the reviewers list. If not, boot them out. */}
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
      </div>
    </>
  );
}
