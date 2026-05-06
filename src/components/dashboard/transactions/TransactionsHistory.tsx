export default function TransactionsHistory() {
  const transactionsList = [
    {
      id: 1,
      icon: "💰",
      label: "Salário",
      date: "01 Mai",
      value: "R$ 4.200",
      type: "expense",
    },
    {
      id: 2,
      icon: "💰",
      label: "Salário",
      date: "01 Mai",
      value: "R$ 4.200",
      type: "expense",
    },
    {
      id: 3,
      icon: "💰",
      label: "Salário",
      date: "01 Mai",
      value: "R$ 4.200",
      type: "income",
    },
    {
      id: 4,
      icon: "💰",
      label: "Salário",
      date: "01 Mai",
      value: "R$ 4.200",
      type: "income",
    },
  ];

  const valueVariant = {
    income: "text-accent-green",
    expense: "text-accent-red",
  };

  return (
    <ul>
      {transactionsList.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between text-xs border-t border-t-hover py-3 px-6"
        >
          <div>
            <p>{item.label}</p>
            <p>{item.date}</p>
          </div>
          <p
            className={`font-mono ${valueVariant[item.type] as keyof typeof valueVariant}`}
          >
            {item.value}
          </p>
        </li>
      ))}
    </ul>
  );
}
