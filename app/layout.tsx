import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import TopBar from "@/components/shared/TopBar";
import { ThemeProvider } from "@/provider/theme-provider";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Threads App",
  description: "A Next.js 13 application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="flex flex-row">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TopBar />
              <SignedIn>
                <LeftSideBar />
                <section className="main-container">
                  <div className="w-full max-w-4xl">{children}</div>
                </section>
                <RightSideBar />
                <BottomBar />
              </SignedIn>
              <SignedOut>
                <section className="main-container">
                  <div className="w-full max-w-4xl flex flex-1 justify-center items-center">
                    {children}
                  </div>
                </section>
              </SignedOut>
            </ThemeProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
