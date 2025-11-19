import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Symbiote Profiles
      </h1>

      <ThemeToggle />
    </header>
  );
}