import Modal from "react-modal";
import IncomingCategories from "./IncomingCategories";
import ExpenseCategories from "./ExpenseCategories";
import ModalHeader from "./ModalHeader";
import ModalForm from "./ModalForm";
import { useState } from "react";
import TransactionTypeSelector from "./TransactionTypeSelector";

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
      className={`bg-surface border border-txt-secondary outline-none p-8 rounded-xl w-full max-w-120 shadow-accent-purple/20 shadow-lg space-y-5 text-txt-secondary text-sm`}
    >
      <ModalHeader handleModal={handleModal} />

      <TransactionTypeSelector
        categorie={transactionType}
        handleCategory={setTransactionType}
      />

      <div className="space-y-3">
        <h5 className="text-txt-secondary font-medium">Categoria</h5>
        <div className="grid grid-cols-4 gap-3">
          {transactionType === "receita" ? (
            <IncomingCategories
              handleCategory={setSelectedCategory}
              categorie={selectedCategory}
            />
          ) : (
            <ExpenseCategories
              handleCategory={setSelectedCategory}
              categorie={selectedCategory}
            />
          )}
        </div>
      </div>

      <ModalForm type={transactionType} />
      <div className="flex gap-3 text-xs font-semibold">
        <button
          className="px-4 py-2 border border-hover rounded-2xl cursor-pointer hover:opacity-80 transition-all duration-300"
          onClick={handleModal}
        >
          Cancelar
        </button>
        <button
          className={`${transactionType === "receita" ? "bg-linear-to-r from-accent-gold to-accent-gold/90 text-base shadow-xl/30 shadow-accent-gold" : "bg-linear-to-r from-accent-red to-accent-red/90 text-[#fff]"} py-2 px-1 rounded-xl cursor-pointer transition-all duration-200 ease-linear`}
        >
          Salvar Transação
        </button>
      </div>
    </Modal>
  );
}
