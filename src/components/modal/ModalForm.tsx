type State = {
  amount: string;
  category: string;
  date: string;
  description: string;
  recurrence: string;
  transactionType: string;
};
type ModalFormProps = {
  transactionType: string;

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;

  state: State;
};

export default function ModalForm({
  transactionType,
  state,
  handleChange,
}: ModalFormProps) {
  return (
    <form className="space-y-4 grid grid-cols-2 gap-2 text-txt-primary">
      <label htmlFor="description" className="space-y-3">
        <p className="text-txt-secondary font-medium">Descrição</p>
        <input
          type="text"
          id="description"
          name="description"
          value={state.description}
          onChange={handleChange}
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full"
          placeholder="Ex: Salário maio"
        />
      </label>

      <label htmlFor="wage" className="space-y-3">
        <p className="text-txt-secondary font-medium">Valor</p>
        <input
          type="text"
          onChange={handleChange}
          value={state.amount}
          name="amount"
          id="amount"
          className={`${transactionType === "receita" ? "not-placeholder-shown:border-accent-gold ring-accent-gold" : "not-placeholder-shown:border-accent-red ring-accent-red"} border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full font-mono`}
          placeholder="Ex: R$ 4.200"
        />
      </label>

      <label htmlFor="date" className="space-y-3">
        <p className="text-txt-secondary font-medium">Data</p>
        <input
          type="date"
          id="date"
          name="date"
          value={state.date}
          onChange={handleChange}
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full scheme-dark"
        />
      </label>

      <label htmlFor="select" className="space-y-3">
        <p className="text-txt-secondary font-medium">Recorrência</p>
        <select
          id="select"
          name="recurrence"
          onChange={handleChange}
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm ring-accent-gold outline-none w-full"
        >
          <option value="none">Nenhuma</option>
          <option value="monthly">Mensal</option>
        </select>
      </label>
    </form>
  );
}
