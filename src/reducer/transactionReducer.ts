import { type Transaction } from "../components/modal/types/category";

export const INITIAL_STATE = {
  transactions: [],

  currentTransaction: {
    transactionType: "receita",
    category: "",
    description: "",
    amount: "",
    date: "",
    recurrence: "none",
  },
};

export type Action =
  | { type: "CHANGE_INPUT"; field: string; payload: string }
  | { type: "ADD_TRANSACTION" };

type CurrentTransaction = {
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
};

export const transactionReducer = (state: TransactionState, action: Action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,

        currentTransaction: {
          ...state.currentTransaction,
          [action.field]: action.payload,
        },
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            ...state.currentTransaction,
            id: crypto.randomUUID(),
          },
        ],

        currentTransaction: {
          transactionType: "receita",
          category: "",
          description: "",
          amount: "",
          date: "",
          recurrence: "none",
        },
      };

    default:
      return state;
  }
};
