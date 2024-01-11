import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          {user && <UserNav />}
        </div>
      </div>
    </div>
  );
}
