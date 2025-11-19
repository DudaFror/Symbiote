import { useEffect, useState } from "react";
import profilesData from "../data/profiles.json";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("Todos");
  const [selectedLocation, setSelectedLocation] = useState("Todos");
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.cargo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesArea =
      selectedArea === "Todos" || p.area === selectedArea;

    const matchesLocation =
      selectedLocation === "Todos" || p.localizacao === selectedLocation;

    return matchesSearch && matchesArea && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <FilterBar
          selectedArea={selectedArea}
          onAreaChange={setSelectedArea}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />

        <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              openModal={() => setSelectedProfile(profile)}
            />
          ))}
        </div>

        {selectedProfile && (
          <ProfileModal
            profile={selectedProfile}
            closeModal={() => setSelectedProfile(null)}
          />
        )}
      </main>
    </div>
  );
}