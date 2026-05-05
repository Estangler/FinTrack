export default function Card() {
  const cardInfo = [
    { icon: "💰", label: "saldo", content: "R$ 1.450" },
    { icon: "📥", label: "receitas", content: "R$ 4.200" },
    { icon: "📤", label: "despesas", content: "R$ 2.750" },
  ];

  const cardTextVariant = {
    saldo: "text-accent-gold ",
    receitas: "text-accent-green ",
    despesas: "text-accent-red ",
  };

  const iconVariant = {
    saldo: "bg-accent-gold",
    receitas: "bg-accent-green",
    despesas: "bg-accent-red",
  };

  return (
    <section className="flex gap-3">
      {cardInfo.map((info) => (
        <div
          key={info.label}
          className="bg-card border border-hover py-5 px-6 overflow-hidden rounded-[18px] flex-1 relative"
        >
          <div
            className={`h-0.5 ${iconVariant[info.label as keyof typeof iconVariant]} absolute top-0 left-0 right-0`}
          />
          <p
            className={`${iconVariant[info.label as keyof typeof iconVariant]}/10 w-8 h-8 flex items-center justify-center rounded-lg mb-8`}
          >
            {info.icon}
          </p>
          <p className="text-txt-muted uppercase">{info.label}</p>
          <p
            className={`${cardTextVariant[info.label as keyof typeof iconVariant]} text-2xl font-mono`}
          >
            {info.content}
          </p>
        </div>
      ))}
    </section>
  );
}
