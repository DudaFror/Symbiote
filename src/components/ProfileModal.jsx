export default function ProfileModal({ profile, close }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-lg shadow-lg">

        <button
          className="mb-4 text-red-500 font-bold"
          onClick={close}
        >
          Fechar ✖
        </button>

        <div className="flex flex-col items-center">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-32 h-32 rounded-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100">
            {profile.nome}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">{profile.cargo}</p>

          <hr className="my-4 w-full border-gray-300 dark:border-gray-700" />

          <h3 className="font-bold text-gray-900 dark:text-gray-100">
            Habilidades Técnicas
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
            {profile.habilidadesTecnicas.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <h3 className="font-bold text-gray-900 dark:text-gray-100">
            Soft Skills
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
            {profile.softSkills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Recomendar
            </button>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Enviar mensagem
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}