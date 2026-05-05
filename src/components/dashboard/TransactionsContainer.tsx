import TransactionsHistory from "./TransactionsHistory";

export default function TransactionsContainer() {
  return (
    <div className="bg-card border border-hover rounded-[18px] flex-1">
      <header className="flex justify-between text-txt-primary text-sm py-5 px-6">
        <h1>Transações</h1>
        <span className="text-xs bg-accent-blue/10 text-accent-blue border border-accent-blue rounded-xl px-2 py-1">
          12 esse mês
        </span>
      </header>
      <TransactionsHistory />
    </div>
  );
}
