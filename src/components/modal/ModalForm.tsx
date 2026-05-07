type ModalFormProps = {
  transactionType: string;
};

export default function ModalForm({ transactionType }: ModalFormProps) {
  return (
    <form className="space-y-4 grid grid-cols-2 gap-2 text-txt-primary">
      <label htmlFor="description" className="space-y-3">
        <p className="text-txt-secondary font-medium">Descrição</p>
        <input
          type="text"
          id="description"
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full"
          placeholder="Ex: Salário maio"
        />
      </label>

      <label htmlFor="wage" className="space-y-3">
        <p className="text-txt-secondary font-medium">Valor</p>
        <input
          type="text"
          id="wage"
          className={`${transactionType === "receita" ? "not-placeholder-shown:border-accent-gold ring-accent-gold" : "not-placeholder-shown:border-accent-red ring-accent-red"} border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full font-mono`}
          placeholder="Ex: R$ 4.200"
        />
      </label>

      <label htmlFor="date" className="space-y-3">
        <p className="text-txt-secondary font-medium">Data</p>
        <input
          type="date"
          id="date"
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm outline-none w-full scheme-dark"
        />
      </label>

      <label htmlFor="select" className="space-y-3">
        <p className="text-txt-secondary font-medium">Recorrência</p>
        <select
          id="select"
          className="border border-hover rounded-lg bg-card py-2 px-2 text-sm ring-accent-gold outline-none w-full"
        >
          <option value="none">Nenhuma</option>
          <option value="monthly">Mensal</option>
        </select>
      </label>
    </form>
  );
}
