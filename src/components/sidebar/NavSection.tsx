import { useState } from "react";

export default function NavSection() {
  const [active, setActive] = useState("dashboard");
  const navTitle = [
    {
      title: "dashboard",
      icon: "📊",
    },
    {
      title: "transações",
      icon: "💳",
    },
    {
      title: "relatórios",
      icon: "📈",
    },
    {
      title: "categorias",
      icon: "🏷️",
    },
  ];
  return (
    <section className="my-5 text-txt-muted space-y-3">
      <h2 className="uppercase font-mono text-xs px-3">principal</h2>
      <nav>
        <ul className="space-y-3">
          {navTitle.map((category) => (
            <li key={category.title} className="flex gap-3 items-center">
              <button
                className={`px-3 flex gap-3 h-10 w-full text-start rounded-xl items-center transition duration-150 ease-in
                ${active === category.title && `bg-accent-gold/15 text-accent-gold`}`}
                onClick={() => setActive(category.title)}
              >
                <span>{category.icon}</span>
                <span className="capitalize">{category.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
