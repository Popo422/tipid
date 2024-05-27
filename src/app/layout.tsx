import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import GlobalState from "@/context";
import ExpenseData from "@/context/ExpenseContext";

import { SessionProvider } from "@/context/SessionContext";
import { validateRequest } from "../../auth";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Tipid",
  description: "A finance Tracker app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await validateRequest();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider value={sessionData}>
          <GlobalState>
            <ExpenseData>
              <div className="flex h-full w-full items-start">
                <div className="h-full w-full">
                  <div className="bg-primary-gray-100 h-full overflow-x-hidden">
                    {children}
                  </div>
                </div>
              </div>
            </ExpenseData>
          </GlobalState>
        </SessionProvider>
      </body>
    </html>
  );
}
