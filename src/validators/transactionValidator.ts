import type { CurrentTransaction } from "../types/transaction";

type ValidationErros = {
  description?: string;
  amount?: string;
  date?: string;
  category?: string;
};

export function validateTransaction(
  transaction: CurrentTransaction,
): ValidationErros {
  const errors: ValidationErros = {};

  if (!transaction.description.trim()) {
    errors.description = "Descrição obrigatória.";
  }

  if (!transaction.amount.trim()) {
    errors.amount = "Valor obrigatório.";
  }

  if (!transaction.date) {
    errors.date = "Data obrigatória";
  }

  if (!transaction.category) {
    errors.category = "Selecione uma categoria";
  }

  return errors;
}
