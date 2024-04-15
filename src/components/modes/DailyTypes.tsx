export type expenseTracker = {
  mode: string;
  type: string;
  amount: number;
  notes?: string;
  account?: string;
  date: Date;
};

export type expenseTrackerList = [expenseTracker];
