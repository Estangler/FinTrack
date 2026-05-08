import Modal from "react-modal";
import CategorySelector from "./CategorySelector";
import ModalHeader from "./ModalHeader";
import ModalForm from "./ModalForm";
import TransactionTypeSelector from "./TransactionTypeSelector";
import { expenseCategories, incomeCategories } from "./data/category";
import { useTransaction } from "../../hook/useTransaction";

type TransactionModalProps = {
  isModalOpen: boolean;
  handleModal: () => void;
};

export default function TransactionModal({
  isModalOpen,
  handleModal,
}: TransactionModalProps) {
  const { state, dispatch } = useTransaction();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      field: name,
      payload: value,
    });
  }

  function onSelectType(type: string) {
    dispatch({ type: "CHANGE_INPUT", field: "transactionType", payload: type });
  }

  function onSelectCategory(category: string) {
    dispatch({ type: "CHANGE_INPUT", field: "category", payload: category });
  }

  function onSaveTransaction() {
    dispatch({ type: "ADD_TRANSACTION" });
  }

  console.log(state);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      overlayClassName={`fixed inset-0 bg-base/70 backdrop-blur-sm flex items-center justify-center`}
      className={`bg-surface border border-hover outline-none p-8 rounded-2xl w-full max-w-120 shadow-accent-purple/20 shadow-lg space-y-5 text-txt-secondary text-sm m-2`}
    >
      <ModalHeader handleModal={handleModal} />

      <TransactionTypeSelector
        categorie={state.currentTransaction.transactionType}
        onSelectType={onSelectType}
      />

      <div className="space-y-3">
        <h5 className="text-txt-secondary font-medium">Categoria</h5>
        <div className="grid grid-cols-4 gap-2">
          <CategorySelector
            categories={
              state.currentTransaction.transactionType === "income"
                ? incomeCategories
                : expenseCategories
            }
            variant={
              state.currentTransaction.transactionType === "income"
                ? "income"
                : "expense"
            }
            onSelectCategory={onSelectCategory}
            selectedCategory={state.currentTransaction.category}
          />
        </div>
      </div>

      <ModalForm
        transactionType={state.currentTransaction.transactionType}
        handleChange={handleChange}
        state={state.currentTransaction}
      />
      <div className="flex font-semibold">
        <button
          className={`${state.currentTransaction.transactionType === "income" ? "bg-linear-to-r from-accent-gold to-accent-gold/90 text-base shadow-xl/30 shadow-accent-gold" : "bg-linear-to-r from-accent-red to-accent-red/90 text-[#fff]"} py-2 px-1 rounded-lg cursor-pointer transition-all duration-200 ease-linear w-full hover:opacity-50`}
          onClick={onSaveTransaction}
        >
          {state.currentTransaction.transactionType === "income"
            ? "Salvar Receita"
            : "Salvar Despesa"}
        </button>
      </div>
    </Modal>
  );
}
