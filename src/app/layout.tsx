import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { nunito } from "./fonts";
import { CursiveText } from "@/components/ui";

export const metadata: Metadata = {
  title: "Bestore",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextTopLoader />
        <Navbar />
        {children}
        <footer className="w-full bg-yellow-50 h-[60px] flex items-center mt-12 py-2 justify-center flex-col pt-3">
          <img className="w-[30px]" src="/images/logo2.png" alt="logo" />
          <CursiveText>
            <h3 className="text-lg text-red-500 mt-1">BeStore</h3>
          </CursiveText>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
