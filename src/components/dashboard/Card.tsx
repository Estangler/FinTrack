import { useTransaction } from "../../hook/useTransaction";

export default function Card() {
  const { state } = useTransaction();

  console.log(state);

  const cardTextVariant = {
    amount: "text-accent-gold",
    income: "text-accent-green",
    expense: "text-accent-red ",
  };

  const iconVariant = {
    amount: "bg-accent-gold",
    income: "bg-accent-green",
    expense: "bg-accent-red",
  };

  return (
    <section className="flex gap-3">
      {state.transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-card border border-hover py-5 px-6 overflow-hidden rounded-[18px] flex-1 relative"
        >
          <div
            className={`h-0.5 ${iconVariant[transaction.transactionType as keyof typeof iconVariant]} absolute top-0 left-0 right-0`}
          />
          <p className="text-txt-muted uppercase text-xs">
            {transaction.category}
          </p>
          <p
            className={`${cardTextVariant[transaction.transactionType as keyof typeof iconVariant]} text-2xl font-mono`}
          >
            {transaction.amount}
          </p>
        </div>
      ))}
    </section>
  );
}
