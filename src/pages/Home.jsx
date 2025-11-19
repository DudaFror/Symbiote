import { useEffect, useState } from "react";
import profilesData from "../data/profiles.json";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  // carregar perfis do JSON
  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  // filtrar lógica
  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      p.nome.toLowerCase().includes(search.toLowerCase()) ||
      p.cargo.toLowerCase().includes(search.toLowerCase()) ||
      p.habilidadesTecnicas.some((h) =>
        h.toLowerCase().includes(search.toLowerCase())
      );

    const matchesArea = area ? p.area === area : true;
    const matchesCidade = cidade ? p.localizacao === cidade : true;

    return matchesSearch && matchesArea && matchesCidade;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      <Header />

      <main className="max-w-6xl mx-auto p-6">

        {/* BUSCA */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* FILTROS */}
        <div className="mt-6">
          <FilterBar
            area={area}
            setArea={setArea}
            cidade={cidade}
            setCidade={setCidade}
          />
        </div>

        {/* LISTA DE PERFIS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              openModal={setSelectedProfile}
            />
          ))}
        </div>

      </main>

      {/* MODAL */}
      <ProfileModal profile={selectedProfile} close={() => setSelectedProfile(null)} />

    </div>
  );
}