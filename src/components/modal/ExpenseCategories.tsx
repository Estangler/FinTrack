import { useState } from "react";

const expenseCategories = [
  { icon: "🛒", label: "Mercado" },
  { icon: "🍔", label: "Alimentação" },
  { icon: "🚗", label: "Transporte" },
  { icon: "🏠", label: "Moradia" },
  { icon: "💊", label: "Saúde" },
  { icon: "📚", label: "Educação" },
  { icon: "🎮", label: "Lazer" },
  { icon: "👔", label: "Roupas" },
  { icon: "💻", label: "Tecnologia" },
  { icon: "✈️", label: "Viagem" },
  { icon: "⚡", label: "Conta" },
  { icon: "🔄", label: "Outros" },
];

export default function ExpenseCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return expenseCategories.map((category) => {
    const isSelected = selectedCategory === category.label;
    return (
      <button
        key={category.label}
        className={`${isSelected ? `border-accent-red bg-accent-red/10` : "bg-card border-transparent"} flex flex-col items-center justify-center rounded-lg py-4 px-6 text-xs font-light gap-1 cursor-pointer hover:shadow-md hover:shadow-accent-gold/10 hover:border-accent-red/90 transition-all duration-200 ease-linear flex-1 border `}
        onClick={() => setSelectedCategory(category.label)}
      >
        <span className="text-lg">{category.icon}</span>
        <p className="text-[10px]">{category.label}</p>
      </button>
    );
  });
}
