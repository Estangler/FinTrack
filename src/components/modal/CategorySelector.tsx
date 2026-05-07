import type { Category } from "./types/category";

type CategorySelector = {
  onSelectCategory: (label: string) => void;
  selectedCategory: string;
  categories: Category[];
  variant: "income" | "expense";
};

const selectedButtonVariant = {
  income: "border-accent-gold bg-accent-gold/10 ",
  expense: "border-accent-red bg-accent-red/10 ",
};

const buttonVariant = {
  income: "hover:shadow-accent-gold/10 hover:border-accent-gold/90",
  expense: "hover:shadow-accent-red/10 hover:border-accent-red/90",
};

export default function CategorySelector({
  variant,
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySelector) {
  return categories.map((category) => {
    const isSelected = selectedCategory === category.label;
    return (
      <button
        key={category.label}
        className={`${isSelected ? selectedButtonVariant[variant] : "bg-card border-transparent"} flex flex-col items-center justify-center rounded-lg py-4 px-6 text-xs font-light gap-1 cursor-pointer hover:shadow-md ${buttonVariant[variant]} transition-all duration-200 ease-linear flex-1 border`}
        onClick={() => onSelectCategory(category.label)}
      >
        <span className="text-lg">{category.icon}</span>
        <p className="text-[10px]">{category.label}</p>
      </button>
    );
  });
}
