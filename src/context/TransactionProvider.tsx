import { useReducer } from "react";
import { TransactionContext } from "./TransactionContext";
import {
  transactionReducer,
  INITIAL_STATE,
} from "../reducer/transactionReducer";

type TransactionProviderProps = {
  children: React.ReactNode;
};

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [state, dispatch] = useReducer(transactionReducer, INITIAL_STATE);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}
