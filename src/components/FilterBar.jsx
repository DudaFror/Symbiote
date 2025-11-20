export default function FilterBar({
  selectedArea,
  onAreaChange,
  selectedLocation,
  onLocationChange,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      <select
        value={selectedArea}
        onChange={(e) => onAreaChange(e.target.value)}
        className="p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="Todos">Todas as áreas</option>
        <option value="TI">TI</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Engenharia">Engenharia</option>
        <option value="Saúde">Saúde</option>
      </select>

      <select
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="Todos">Todas as cidades</option>
        <option value="São Paulo/SP">São Paulo/SP</option>
        <option value="Campinas/SP">Campinas/SP</option>
        <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
        <option value="Curitiba/PR">Curitiba/PR</option>
        <option value="Salvador/BA">Salvador/BA</option>
      </select>

    </div>
  );
}