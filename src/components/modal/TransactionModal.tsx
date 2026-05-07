import Modal from "react-modal";
import { X } from "lucide-react";
import IncomingCategories from "./IncomingCategories";
import ExpenseCategories from "./ExpenseCategories";
import ModalForm from "./ModalForm";
import { useState } from "react";

type TransactionModalProps = {
  isModalOpen: boolean;
  handleModal: () => void;
};

export default function TransactionModal({
  isModalOpen,
  handleModal,
}: TransactionModalProps) {
  const [transitionType, setTransitionType] = useState<string>("receita");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      overlayClassName={`fixed inset-0 bg-base/70 backdrop-blur-sm flex items-center justify-center`}
      className={`bg-surface border border-txt-secondary outline-none p-8 rounded-xl w-full max-w-120 shadow-accent-purple/20 shadow-lg space-y-5 text-txt-secondary text-sm`}
    >
      <header className="flex items-center justify-between">
        <div>
          <h4 className="font-serif text-2xl text-txt-primary">
            Nova Transação
          </h4>
          <p className="text-xs text-txt-muted">Preencha os dados abaixo</p>
        </div>
        <button
          onClick={handleModal}
          className="cursor-pointer w-8 h-8 bg-elevated border rounded-md border-txt-secondary flex items-center justify-center text-txt-secondary hover:bg-card/10 transition duration-200 ease-linear"
        >
          <X size={18} />
        </button>
      </header>

      <div className="bg-card rounded-2xl p-1 flex justify-between">
        <button
          className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${transitionType === "receita" && `bg-accent-green/10 text-accent-green transition-all duration-200 ease-linear`}`}
          onClick={() => setTransitionType("receita")}
        >
          <span>📥</span>
          <p className="capitalize">receita</p>
        </button>
        <button
          className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${transitionType === "despesas" && `bg-accent-red/10 text-accent-red transition-all duration-200 ease-in-out`}`}
          onClick={() => setTransitionType("despesas")}
        >
          <span>📥</span>
          <p className="capitalize">despesas</p>
        </button>
      </div>

      <div className="space-y-3">
        <h5 className="text-txt-secondary font-medium">Categoria</h5>
        <div className="grid grid-cols-4 gap-3">
          {transitionType === "receita" ? (
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

      <ModalForm type={transitionType} />
      <div className="flex gap-3 text-xs font-semibold">
        <button
          className="px-4 py-2 border border-hover rounded-2xl cursor-pointer hover:opacity-80 transition-all duration-300"
          onClick={handleModal}
        >
          Cancelar
        </button>
        <button
          className={`${transitionType === "receita" ? "bg-linear-to-r from-accent-gold to-accent-gold/90 text-base shadow-xl/30 shadow-accent-gold" : "bg-linear-to-r from-accent-red to-accent-red/90 text-[#fff]"} py-2 px-1 rounded-xl cursor-pointer transition-all duration-200 ease-linear`}
        >
          Salvar Transação
        </button>
      </div>
    </Modal>
  );
}
