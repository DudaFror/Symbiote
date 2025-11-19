export default function ProfileCard({ profile, openModal }) {
  return (
    <div
      className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] cursor-pointer transition"
      onClick={() => openModal(profile)}
    >
      <img
        src={profile.foto}
        alt={profile.nome}
        className="w-24 h-24 object-cover rounded-full mx-auto"
      />

      <h2 className="text-center mt-3 text-lg font-bold text-gray-800 dark:text-gray-100">
        {profile.nome}
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300">
        {profile.cargo}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}