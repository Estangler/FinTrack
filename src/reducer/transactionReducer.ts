import {
  EMPTY_TRANSACTION,
  type CurrentTransaction,
  type TransactionState,
} from "../types/transaction";
import {
  validateTransaction,
  type ValidationErrors,
} from "../validators/transactionValidator";

export const INITIAL_STATE: TransactionState = {
  transactions: [],

  currentTransaction: EMPTY_TRANSACTION,

  errors: {},
};

export type Action =
  | {
      type: "CHANGE_INPUT";
      field: keyof CurrentTransaction;
      payload: CurrentTransaction[keyof CurrentTransaction];
    }
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

          ...(action.field in state.errors && {
            [action.field]: "",
          }),
        },
      };

    case "ADD_TRANSACTION": {
      const errors: ValidationErrors = validateTransaction(
        state.currentTransaction,
      );

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

        currentTransaction: EMPTY_TRANSACTION,

        errors: {},
      };
    }

    default:
      return state;
  }
};
