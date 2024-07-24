import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ptPT } from "@clerk/localizations";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

import { SpeedInsights } from "@vercel/speed-insights/next";
import Drawer from "./components/Cart/Drawer/Drawer";

export const metadata: Metadata = {
  title: "MT Next Store.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptPT}>
      <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          <SpeedInsights />
          <Drawer />
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
