import NavSection from "./NavSection";

export default function Sidebar() {
  return (
    <aside className="w-65 bg-surface h-dvh p-5 border border-hover">
      <header className="flex gap-3 items-center">
        <p className="text-sm bg-accent-gold rounded-sm h-8 w-8 flex items-center justify-center">
          💰
        </p>
        <h1 className="font-serif text-xl">FinTrack</h1>
      </header>

      <NavSection />
    </aside>
  );
}
