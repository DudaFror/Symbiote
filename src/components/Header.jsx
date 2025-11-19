import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Symbiote — Profissionais IA-Ready
      </h1>
      <ThemeToggle />
    </header>
  );
}