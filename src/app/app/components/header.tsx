import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const user = await isAuthenticated();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          {user ? (
            <UserNav />
          ) : (
            <LoginLink className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Sign In
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
}
