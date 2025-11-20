export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome, cargo ou tecnologia..."
      className="w-full p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow focus:ring-2 focus:ring-purple-500 outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}