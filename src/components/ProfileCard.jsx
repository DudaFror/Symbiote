export default function ProfileCard({ profile, openModal }) {
  return (
    <div
      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer hover:scale-[1.02] transition"
      onClick={() => openModal(profile)}
    >
      <img
        src={profile.foto}
        alt={profile.nome}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />

      <h2 className="mt-4 text-lg font-bold text-center text-gray-800 dark:text-gray-100">
        {profile.nome}
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300">
        {profile.cargo}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}