export type TransactionType = "income" | "expense";
export type RecurrenceType = "none" | "monthly";

export type CurrentTransaction = {
  transactionType: TransactionType;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: RecurrenceType;
};

export type Transaction = {
  id: string;
  transactionType: TransactionType;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: RecurrenceType;
};

export type TransactionState = {
  transactions: Transaction[];
  currentTransaction: CurrentTransaction;

  errors: {
    description?: string;
    amount?: string;
    date?: string;
    category?: string;
  };
};
