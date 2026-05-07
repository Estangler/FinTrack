import { useState } from "react";

const incomeCategories = [
  { icon: "💰", label: "Salário" },
  { icon: "📈", label: "Invest." },
  { icon: "🎁", label: "Presente" },
  { icon: "🔄", label: "Outros" },
];

export default function IncomingCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return incomeCategories.map((category) => {
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
  });
}
