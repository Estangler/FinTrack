type TransactionTypeSelectorProps = {
  handleCategory: (label: string) => void;
  categorie: string;
};

export default function TransactionTypeSelector({
  handleCategory,
  categorie,
}: TransactionTypeSelectorProps) {
  return (
    <div className="bg-card rounded-2xl p-1 flex justify-between">
      <button
        className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${categorie === "receita" && `bg-accent-green/10 text-accent-green transition-all duration-200 ease-linear`}`}
        onClick={() => handleCategory("receita")}
      >
        <span>📥</span>
        <p className="capitalize">receita</p>
      </button>
      <button
        className={`px-16 rounded-2xl h-8 font-semibold flex items-center justify-center cursor-pointer ${categorie === "despesas" && `bg-accent-red/10 text-accent-red transition-all duration-200 ease-in-out`}`}
        onClick={() => handleCategory("despesas")}
      >
        <span>📤</span>
        <p className="capitalize">despesas</p>
      </button>
    </div>
  );
}
