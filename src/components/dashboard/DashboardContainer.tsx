import Card from "./Card";
import GraficContainer from "./GraficContainer";
import TransactionsContainer from "./TransactionsContainer";

type DashboardContainerProps = {
  handleModal: () => void;
};

export default function DashboardContainer({
  handleModal,
}: DashboardContainerProps) {
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
          onClick={handleModal}
        >
          +Nova
        </button>
      </header>

      <main className="flex flex-col gap-4">
        <Card />
        <TransactionsContainer />
        <GraficContainer />
      </main>
    </div>
  );
}
