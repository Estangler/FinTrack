export type Category = {
  icon: string;
  label: string;
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
