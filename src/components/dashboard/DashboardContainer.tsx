import { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import Card from "./Card";
import GraficContainer from "./GraficContainer";
import TransactionsContainer from "./TransactionsContainer";

export default function DashboardContainer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="p-6 overflow-auto w-full">
      <header className="flex justify-between items-center mb-5">
        <div>
          <h3 className="font-serif text-2xl text-txt-primary">Dashboard</h3>
          <p className="text-xs mt-0.5 text-txt-muted">
            Visão geral das suas finanças
          </p>
        </div>

        <button
          className={`px-6 h-10 text-start rounded-xl items-center transition duration-200 ease-linear text-base text-sm cursor-pointer bg-linear-to-r from-accent-gold to-txt-primary shadow-2xl shadow-accent-gold hover:scale-110 hover:shadow-md`}
          onClick={() => setModalIsOpen(true)}
        >
          +Nova
        </button>
      </header>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
          rounded-lg
          w-full
          max-w-120
          shadow-lg
          space-y-5
          text-txt-secondary
          text-sm
          `}
      >
        <header className="flex items-center justify-between">
          <div>
            <h4 className="font-serif text-2xl text-txt-primary mb-3">
              Nova Transação
            </h4>
            <p className="text-xs text-txt-muted">Preencha os dados abaixo</p>
          </div>
          <button
            onClick={() => setModalIsOpen(false)}
            className="cursor-pointer w-8 h-8 bg-card border rounded-xl border-hover flex items-center justify-center text-txt-secondary"
          >
            <X size={18} />
          </button>
        </header>

        <div className="bg-card rounded-2xl p-1 flex justify-between">
          <button className="px-18 bg-accent-green/10 rounded-2xl h-8 text-accent-green font-semibold flex items-center justify-center cursor-pointer">
            <span>📥</span>Receita
          </button>
          <button className="px-18 rounded-2xl h-8 text-txt-muted flex items-center justify-center cursor-pointer">
            <span>📥</span>Despesa
          </button>
        </div>

        <div className="space-y-3">
          <h5>Categoria</h5>
          <div className="flex gap-3">
            <button className="bg-card flex flex-col items-center justify-center rounded-lg py-4 px-4 text-[12px] font-light gap-1">
              <span className="text-[18px]">💰</span>
              <p>Salário</p>
            </button>
            <button>
              <span>📈</span>
              <p>Invest.</p>
            </button>
            <button>
              <span>🎁</span>
              <p>Presente</p>
            </button>
            <button>
              <span>🔄</span>
              <p>Outros</p>
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
      <main className="flex flex-col gap-4">
        <Card />
        <TransactionsContainer />
        <GraficContainer />
      </main>
    </div>
  );
}
