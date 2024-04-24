import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GlobalState from "@/context";
import ExpenseData from "@/context/ExpenseContext";
import { NextAuthProvider } from "@/sessionprovider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Tipid",
  description: "A finance Tracker app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthProvider>
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
        </NextAuthProvider>
      </body>
    </html>
  );
}
