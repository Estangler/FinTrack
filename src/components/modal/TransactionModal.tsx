import Modal from "react-modal";
import IncomingCategories from "./CategorySelector";
import ModalHeader from "./ModalHeader";
import ModalForm from "./ModalForm";
import { useState } from "react";
import TransactionTypeSelector from "./TransactionTypeSelector";
import { expenseCategories, incomeCategories } from "./data/category";

type TransactionModalProps = {
  isModalOpen: boolean;
  handleModal: () => void;
};

export default function TransactionModal({
  isModalOpen,
  handleModal,
}: TransactionModalProps) {
  const [transactionType, setTransactionType] = useState<string>("receita");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      overlayClassName={`fixed inset-0 bg-base/70 backdrop-blur-sm flex items-center justify-center`}
      className={`bg-surface border border-txt-secondary outline-none p-8 rounded-2xl w-full max-w-120 shadow-accent-purple/20 shadow-lg space-y-5 text-txt-secondary text-sm m-2`}
    >
      <ModalHeader handleModal={handleModal} />

      <TransactionTypeSelector
        categorie={transactionType}
        onSelectType={setTransactionType}
      />

      <div className="space-y-3">
        <h5 className="text-txt-secondary font-medium">Categoria</h5>
        <div className="grid grid-cols-4 gap-2">
          <IncomingCategories
            category={
              transactionType === "receita"
                ? incomeCategories
                : expenseCategories
            }
            variant={transactionType === "receita" ? "income" : "expense"}
            handleCategory={setSelectedCategory}
            categorie={selectedCategory}
          />
        </div>
      </div>

      <ModalForm transactionType={transactionType} />
      <div className="flex font-semibold">
        <button
          className={`${transactionType === "receita" ? "bg-linear-to-r from-accent-gold to-accent-gold/90 text-base shadow-xl/30 shadow-accent-gold" : "bg-linear-to-r from-accent-red to-accent-red/90 text-[#fff]"} py-2 px-1 rounded-lg cursor-pointer transition-all duration-200 ease-linear w-full`}
        >
          Salvar Transação
        </button>
      </div>
    </Modal>
  );
}
