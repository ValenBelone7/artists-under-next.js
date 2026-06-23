"use client";

import { useState } from "react";
import { useArtistas } from "@/app/context/ArtistasContext";
import ArtistaCard from "@/components/ArtistaCard";
import SearchBar from "@/components/SearchBar";

export default function ArtistasClient() {
  const { artistas } = useArtistas();
  const [query, setQuery] = useState("");

  const filtrados = artistas.filter(
    (a) =>
      a.nombre.toLowerCase().includes(query.toLowerCase()) ||
      a.genero.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <SearchBar onSearch={setQuery} />
      <ul className="flex flex-col gap-4">
        {filtrados.length > 0 ? (
          filtrados.map((artista) => (
            <ArtistaCard key={artista.slug} artista={artista} />
          ))
        ) : (
          <p className="text-gray-500 font-mono">No se encontraron artistas.</p>
        )}
      </ul>
    </div>
  );
}