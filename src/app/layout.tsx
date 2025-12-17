import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@campnetwork/ui-kit/toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Kit Demo | @campnetwork/ui-kit",
  description: "Component showcase for @campnetwork/ui-kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-surface text-text`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
