export default function FilterBar({ area, setArea, cidade, setCidade }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* FILTRO POR ÁREA */}
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">Todas as áreas</option>
        <option value="TI">TI</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Engenharia">Engenharia</option>
        <option value="Saúde">Saúde</option>
      </select>

      {/* FILTRO POR CIDADE */}
      <select
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className="p-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      >
        <option value="">Todas as cidades</option>
        <option value="São Paulo/SP">São Paulo/SP</option>
        <option value="Campinas/SP">Campinas/SP</option>
        <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
        <option value="Curitiba/PR">Curitiba/PR</option>
        <option value="Salvador/BA">Salvador/BA</option>
      </select>
    </div>
  );
}