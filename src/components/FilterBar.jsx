export default function FilterBar({ area, setArea, cidade, setCidade }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      
      <select
        className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">Todas as áreas</option>
        <option value="TI">TI</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select
        className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      >
        <option value="">Todas as cidades</option>
        <option value="São Paulo/SP">São Paulo/SP</option>
        <option value="Campinas/SP">Campinas/SP</option>
        <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
      </select>

    </div>
  );
}