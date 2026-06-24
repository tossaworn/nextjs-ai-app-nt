import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบ E-Commerce",
  description: "เรียนรู้การเขียน Nex.tjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${libreBaskerville.variable} ${sourceCodePro.variable}`}>
      <body>
        <Suspense fallback={<div className="h-16 border-b bg-background" />}>
        <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

