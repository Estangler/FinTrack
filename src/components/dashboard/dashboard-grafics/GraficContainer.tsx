import ExpenseGrafic from "./ExpenseGrafic";

export default function GraficContainer() {
  return (
    <div className="flex gap-3">
      <ExpenseGrafic />
      <ExpenseGrafic />
    </div>
  );
}
