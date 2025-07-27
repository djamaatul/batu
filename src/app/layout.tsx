import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Providers } from "@/lib/providers";
import "./globals.css";
import Footer from "./components/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BATU - Bagi bagi tugas",
  description: "Task Manager",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="bg-background text-foreground dark">
      <body className={`${geistMono.variable} antialiased`}>
        <Providers>
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
