export default function ProfileModal({ profile, close }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-lg shadow-lg overflow-y-auto max-h-[90vh]">

        {/* Botão fechar */}
        <button
          onClick={close}
          className="text-red-500 font-bold mb-4 hover:scale-110 transition"
        >
          ✖ Fechar
        </button>

        <div className="flex flex-col items-center">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-28 h-28 rounded-full object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {profile.nome}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            {profile.cargo}
          </p>

          <hr className="my-4 w-full border-gray-300 dark:border-gray-700" />

          {/* Habilidades Técnicas */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Habilidades Técnicas
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 text-sm">
            {profile.habilidadesTecnicas.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          {/* Soft Skills */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Soft Skills
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 text-sm">
            {profile.softSkills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          {/* Projetos */}
          {profile.projetos.length > 0 && (
            <>
              <h3 className="text-lg font-semibold dark:text-gray-100 mb-2">
                Projetos
              </h3>
              {profile.projetos.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  className="block mb-3 bg-gray-200 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  <p className="font-bold">{p.titulo}</p>
                  <p className="text-sm opacity-80">{p.descricao}</p>
                </a>
              ))}
            </>
          )}

          {/* Botões de ação */}
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Recomendar
            </button>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              Enviar mensagem
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}