import type { ValidationErrors } from "../validators/transactionValidator";

export type TransactionType = "income" | "expense";
export type RecurrenceType = "none" | "monthly";
export type TransactionErrors = ValidationErrors;

type BaseTransaction = {
  transactionType: TransactionType;
  category: string;
  description: string;
  amount: string;
  date: string;
  recurrence: RecurrenceType;
};

export type CurrentTransaction = BaseTransaction;

export type Transaction = BaseTransaction & {
  id: string;
};

export type TransactionState = {
  transactions: Transaction[];
  currentTransaction: CurrentTransaction;

  errors: TransactionErrors;
};

export const EMPTY_TRANSACTION: CurrentTransaction = {
  transactionType: "expense",
  category: "",
  description: "",
  amount: "",
  date: "",
  recurrence: "none",
};
