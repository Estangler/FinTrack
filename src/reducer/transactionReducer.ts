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

export const transactionReducer = (state, action) => {
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
