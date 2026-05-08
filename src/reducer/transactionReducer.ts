import type {
  CurrentTransaction,
  TransactionState,
} from "../types/transaction";
import { validateTransaction } from "../validators/transactionValidator";

export const INITIAL_STATE: TransactionState = {
  transactions: [],

  currentTransaction: {
    transactionType: "expense",
    category: "",
    description: "",
    amount: "",
    date: "",
    recurrence: "none",
  },

  errors: {},
};

export type Action =
  | { type: "CHANGE_INPUT"; field: keyof CurrentTransaction; payload: string }
  | { type: "ADD_TRANSACTION" };

export const transactionReducer = (
  state: TransactionState,
  action: Action,
): TransactionState => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,

        currentTransaction: {
          ...state.currentTransaction,

          [action.field]: action.payload,
        },

        errors: {
          ...state.errors,

          [action.field]: "",
        },
      };

    case "ADD_TRANSACTION": {
      const errors = validateTransaction(state.currentTransaction);

      const hasErrors = Object.keys(errors).length > 0;

      if (hasErrors) {
        return {
          ...state,
          errors,
        };
      }

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
          transactionType: "expense",
          category: "",
          description: "",
          amount: "",
          date: "",
          recurrence: "none",
        },

        errors: {},
      };
    }

    default:
      return state;
  }
};
