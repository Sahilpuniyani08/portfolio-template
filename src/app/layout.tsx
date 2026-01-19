import type { Metadata } from "next";

import "./globals.css";
import { playfair, poppins } from "@/typography/fonts";
import Header from "@/components/layout/header";
export const metadata: Metadata = {
  title: "Sahil Puniyani",
  description: "This is my profolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
