`use client`;
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { useContext } from "react";
import GlobalState from "@/context";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tipid",
  description: "A finance Tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalState>
          <div className="flex h-full w-full items-start">
            <div className="w-full h-full">
              <Header />
              <div className="h-full overflow-x-hidden bg-primary-gray-100">{children}</div>
            </div>
          </div>
        </GlobalState>
      </body>
    </html>
  );
}
