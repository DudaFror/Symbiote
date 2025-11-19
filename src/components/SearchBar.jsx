export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome, cargo ou tecnologia..."
      className="w-full p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}