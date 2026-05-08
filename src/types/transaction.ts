export type CurrentTransaction = {
  transactionType: string;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: string;
};

export type Transaction = {
  id: string;
  transactionType: string;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: string;
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
