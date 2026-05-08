import React, { createContext } from "react";
import {
  type Action,
  type TransactionState,
} from "../reducer/transactionReducer";

type TransactionContextType = {
  state: TransactionState;

  dispatch: React.Dispatch<Action>;
};

export const TransactionContext = createContext<TransactionContextType | null>(
  null,
);
