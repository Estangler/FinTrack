export type Category = {
  icon: string;
  label: string;
};
export type Transaction = {
  id: number;
  transactionType: string;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: string;
};
