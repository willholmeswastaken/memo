import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "../../@/components/header";
import Footer from "../../@/components/footer";
import { ReactQueryClientProvider } from "~/components/ReactQueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body
          className={`flex min-h-screen flex-col font-sans ${inter.variable}`}
        >
          <Header />
          <main className="flex h-full flex-1 flex-grow flex-col">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
