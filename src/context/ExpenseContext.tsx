"use client";
import { expenseTracker } from "@/components/modes/DailyTypes";
import { createContext, useState } from "react";

export const ExpenseContext = createContext(null);

export default function ExpenseData({ children }) {
  const [expense, setExpense] = useState<expenseTracker[]>([]);

  return (
    <ExpenseContext.Provider value={{ expense, setExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}
