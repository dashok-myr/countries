import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Navbar from "@/components/Navbar";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Countries App",
  description: "Find your favorite cocktail",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/icons/globe.png" />
        <Providers>
          <div className="bg-light-gray dark:bg-very-dark-blue bg-auto min-h-screen tracking-wide pb-20">
            <div className="font-sans">
              <div className="bg-white dark:bg-dark-blue">
                <div className="mx-auto max-w-screen-xl px-4">
                  <Navbar />
                </div>
              </div>
              <div className="mt-6" />
              <div className="mx-auto max-w-screen-xl px-4">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
