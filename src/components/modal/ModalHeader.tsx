import { X } from "lucide-react";

type ModalHeaderProps = {
  handleModal: () => void;
};

export default function ModalHeader({ handleModal }: ModalHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h4 className="font-serif text-2xl text-txt-primary">Nova Transação</h4>
        <p className="text-xs text-txt-muted">Preencha os dados abaixo</p>
      </div>
      <button
        onClick={handleModal}
        className="cursor-pointer w-8 h-8 bg-elevated border rounded-md border-txt-secondary flex items-center justify-center text-txt-secondary hover:bg-card/10 transition duration-200 ease-linear"
      >
        <X size={18} />
      </button>
    </header>
  );
}
