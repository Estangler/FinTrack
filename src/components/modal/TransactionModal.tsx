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
  const [selectedCategory, setSelectedCategory] = useState("");

  const incomeCategories = [
    { icon: "💰", label: "Salário" },
    { icon: "📈", label: "Invest." },
    { icon: "🎁", label: "Presente" },
    { icon: "🔄", label: "Outros" },
  ];

  const expenseCategories = [
    { icon: "🛒", label: "Mercado" },
    { icon: "🍔", label: "Alimentação" },
    { icon: "🚗", label: "Transporte" },
    { icon: "🏠", label: "Moradia" },
    { icon: "💊", label: "Saúde" },
    { icon: "📚", label: "Educação" },
    { icon: "🎮", label: "Lazer" },
    { icon: "👔", label: "Roupas" },
    { icon: "💻", label: "Tecnologia" },
    { icon: "✈️", label: "Viagem" },
    { icon: "⚡", label: "Conta" },
    { icon: "🔄", label: "Outros" },
  ];

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
          border-txt-secondary
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
          {transitionType === "receita"
            ? incomeCategories.map((category) => {
                const isSelected = selectedCategory === category.label;
                return (
                  <button
                    key={category.label}
                    className={`${isSelected ? `border-accent-gold bg-accent-gold/10` : "bg-card border-transparent"} flex flex-col items-center justify-center rounded-lg py-4 px-6 text-xs font-light gap-1 cursor-pointer hover:shadow-md hover:shadow-accent-gold/10 hover:border-accent-gold/90 transition-all duration-200 ease-linear flex-1 border `}
                    onClick={() => setSelectedCategory(category.label)}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <p className="text-[10px]">{category.label}</p>
                  </button>
                );
              })
            : expenseCategories.map((category) => {
                const isSelected = selectedCategory === category.label;
                return (
                  <button
                    key={category.label}
                    className={`${isSelected ? `border-accent-red bg-accent-red/10` : "bg-card border-transparent"} flex flex-col items-center justify-center rounded-lg py-4 px-6 text-xs font-light gap-1 cursor-pointer hover:shadow-md hover:shadow-accent-gold/10 hover:border-accent-red/90 transition-all duration-200 ease-linear flex-1 border `}
                    onClick={() => setSelectedCategory(category.label)}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <p className="text-[10px]">{category.label}</p>
                  </button>
                );
              })}
        </div>
      </div>

      <form className="space-y-4 grid grid-cols-2 items-center gap-3 text-txt-primary">
        <label htmlFor="description" className="space-y-3">
          <p className="text-txt-secondary font-medium">Descrição</p>
          <input
            type="text"
            id="description"
            className="border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full"
            placeholder="Ex: Salário maio"
          />
        </label>

        <label htmlFor="wage" className="space-y-3">
          <p className="text-txt-secondary font-medium">Valor</p>
          <input
            type="text"
            id="wage"
            className={`${transitionType === "receita" ? "not-placeholder-shown:border-accent-gold ring-accent-gold" : "not-placeholder-shown:border-accent-red ring-accent-red"} border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full font-mono`}
            placeholder="Ex: R$ 4.200"
          />
        </label>

        <label htmlFor="description" className="space-y-3">
          <p className="text-txt-secondary font-medium">Data</p>
          <input
            type="date"
            id="description"
            className="border border-hover rounded-lg bg-card py-2 px-2 text-sm ring-accent-gold outline-none w-full font-mono"
          />
        </label>

        <label htmlFor="wage" className="space-y-3">
          <p className="text-txt-secondary font-medium">Recorrência</p>
          <select
            id="wage"
            className="border border-hover rounded-lg bg-card py-2 px-2 text-sm ring-accent-gold outline-none w-full"
          >
            <option value="none">Nenhuma</option>
            <option value="monthly">Mensal</option>
          </select>
        </label>

        <div className="flex gap-3 text-xs font-semibold">
          <button className="px-4 py-2 border border-hover rounded-2xl">
            Cancelar
          </button>
          <button
            className={`${transitionType === "receita" ? "bg-linear-to-r from-accent-gold to-accent-gold/90 text-base shadow-xl/30 shadow-accent-gold" : "bg-linear-to-r from-accent-red to-accent-red/90 text-[#fff]"} py-2 px-1 rounded-xl cursor-pointer transition-all duration-200 ease-linear`}
          >
            Salvar Transação
          </button>
        </div>
      </form>
    </Modal>
  );
}
