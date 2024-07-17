import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Trello",
  description: "Simple trello web app clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <main className=" flex items-start">
            <Sidebar />
            <div>
              <Navbar />
              {children}
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
