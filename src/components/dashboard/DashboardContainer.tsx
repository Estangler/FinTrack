import Card from "./Card";
import TransactionsContainer from "./TransactionsContainer";

export default function DashboardContainer() {
  return (
    <div className="flex-1 p-6 overflow-auto space-y-5">
      <header>
        <h3 className="font-serif text-2xl text-txt-primary">Dashboard</h3>
        <p className="text-xs mt-0.5 text-txt-muted">
          Visão geral das suas finanças
        </p>
      </header>

      <Card />
      <TransactionsContainer />
    </div>
  );
}
