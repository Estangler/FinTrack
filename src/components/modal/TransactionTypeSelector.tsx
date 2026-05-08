type TransactionTypeSelectorProps = {
  onSelectType: (type: string) => void;
  categorie: string;
};

export default function TransactionTypeSelector({
  onSelectType,
  categorie,
}: TransactionTypeSelectorProps) {
  return (
    <div className="bg-card rounded-lg p-1 flex justify-between">
      <button
        className={`flex-1 rounded-lg h-8 font-semibold flex items-center justify-center cursor-pointer ${categorie === "income" && `bg-accent-green/10 text-accent-green transition-all duration-200 ease-linear`}`}
        onClick={() => onSelectType("income")}
      >
        <span>📥</span>
        <p className="capitalize">receita</p>
      </button>

      <button
        className={`flex-1 rounded-lg h-8 font-semibold flex items-center justify-center cursor-pointer ${categorie === "expense" && `bg-accent-red/10 text-accent-red transition-all duration-200 ease-in-out`}`}
        onClick={() => onSelectType("expense")}
      >
        <span>📤</span>
        <p className="capitalize">despesas</p>
      </button>
    </div>
  );
}
