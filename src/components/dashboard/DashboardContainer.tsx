import Card from "./Card";
import GraficContainer from "./GraficContainer";
import TransactionsContainer from "./TransactionsContainer";

export default function DashboardContainer() {
  return (
    <div className="p-6 overflow-auto space-y-5 w-full">
      <header>
        <h3 className="font-serif text-2xl text-txt-primary">Dashboard</h3>
        <p className="text-xs mt-0.5 text-txt-muted">
          Visão geral das suas finanças
        </p>
      </header>

      <Card />
      <TransactionsContainer />
      <GraficContainer />
    </div>
  );
}
