import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { getServerAuthSession } from "../lib/auth-options";
import { SignIn } from "@/components/sign-in";

export default async function Header() {
  const session = await getServerAuthSession();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          {session ? <UserNav /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}
