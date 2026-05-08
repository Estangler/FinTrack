import type { CurrentTransaction } from "../types/transaction";

export type ValidationErrors = {
  description?: string;
  amount?: string;
  date?: string;
  category?: string;
};

export function validateTransaction(
  transaction: CurrentTransaction,
): ValidationErrors {
  const amount = Number(transaction.amount);
  const errors: ValidationErrors = {};

  if (!transaction.description.trim()) {
    errors.description = "Descrição obrigatória.";
  }

  if (!transaction.amount.trim()) {
    errors.amount = "Valor obrigatório.";
  } else if (isNaN(amount) || amount <= 0) {
    errors.amount = "Digite um valor válido";
  }

  if (!transaction.date) {
    errors.date = "Data obrigatória";
  }

  if (!transaction.category) {
    errors.category = "Selecione uma categoria";
  }

  return errors;
}
