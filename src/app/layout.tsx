`use client`;
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { useContext } from "react";
import GlobalState from "@/context";
import ExpenseData from "@/context/ExpenseContext";

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
          <ExpenseData>
            <div className="flex h-full w-full items-start">
              <div className="h-full w-full">
                <Header />
                <div className="bg-primary-gray-100 h-full overflow-x-hidden">
                  {children}
                </div>
              </div>
            </div>
          </ExpenseData>
        </GlobalState>
      </body>
    </html>
  );
}
