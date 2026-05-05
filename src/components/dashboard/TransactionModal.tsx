import Modal from "react-modal";
import { X } from "lucide-react";
import { useState } from "react";

type TransactionModalProps = {
  isModalOpen: boolean;
  handleModal: () => void;
};

export default function TransactionModal({
  isModalOpen,
  handleModal,
}: TransactionModalProps) {
  const [transitionType, setTransitionType] = useState("receita");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      overlayClassName={`
          fixed
          inset-0
          bg-base/70
          backdrop-blur-sm
          flex
          items-center
          justify-center
        `}
      className={`
          bg-surface
          border
          border-txt-muted
          outline-none
          p-8
          rounded-xl
          w-full
          max-w-120
          shadow-accent-purple/20
          shadow-lg
          space-y-5
          text-txt-secondary
          text-sm
        `}
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
          className="cursor-pointer w-8 h-8 bg-card border rounded-xl border-hover flex items-center justify-center text-txt-secondary hover:bg-card/10 transition duration-200 ease-linear"
        >
          <X size={18} />
        </button>
      </header>

      <div className="bg-card rounded-2xl p-1 flex justify-between">
        <button
          className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${transitionType === "receita" && `bg-accent-green/10 text-accent-green`}`}
          onClick={() => setTransitionType("receita")}
        >
          <span>📥</span>
          <p className="capitalize">receita</p>
        </button>
        <button
          className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${transitionType === "despesas" && `bg-accent-green/10 text-accent-green`}`}
          onClick={() => setTransitionType("despesas")}
        >
          <span>📥</span>
          <p className="capitalize">despesas</p>
        </button>
      </div>

      <div className="space-y-3">
        <h5>Categoria</h5>
        <div className="flex gap-3">
          <button className="bg-card border border-transparent flex flex-col items-center justify-center rounded-lg py-4 px-6 text-xs font-light gap-1 cursor-pointer hover:shadow-md hover:shadow-accent-gold/10 hover:border-accent-gold/90 hover:bg-accent-gold/10 transition-all duration-200 ease-linear">
            <span className="text-lg">💰</span>
            <p>Salário</p>
          </button>
        </div>
      </div>

      <form className="space-y-4 flex flex-col items-center">
        <div className="flex gap-2">
          <label htmlFor="description" className="space-y-3">
            <p>Descrição</p>
            <input
              type="text"
              id="description"
              className="border border-hover rounded-lg bg-card py-2 px-3 text-sm outline-none"
              placeholder="Ex: Salário maio"
            />
          </label>

          <label htmlFor="wage" className="space-y-3">
            <p>Valor</p>
            <input
              type="text"
              id="wage"
              className="border border-hover rounded-lg bg-card py-2 px-3 text-sm outline-none"
              placeholder="Ex: R$ 4.200"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <label htmlFor="description" className="space-y-3">
            <p>Data</p>
            <input
              type="date"
              id="description"
              className="border border-hover rounded-lg bg-card py-2 px-3 text-sm outline-none"
            />
          </label>

          <label htmlFor="wage" className="space-y-3">
            <p>Recorrência</p>
            <select
              id=""
              className="border border-hover rounded-lg bg-card py-2 px-3 text-sm outline-none"
            >
              <option value="none">Nenhuma</option>
              <option value="month">Mensal</option>
            </select>
          </label>
        </div>

        <div>
          <button>Cancelar</button>
          <button>Salvar Transação</button>
        </div>
      </form>
    </Modal>
  );
}
