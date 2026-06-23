"use client";

import { useState } from "react";
import DiscogsCard from "@/components/DiscogsCard";

export default function BuscarPage() {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await fetch(`/api/discogs?q=${query}`);
    const data = await res.json();
    setResultados(data);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
      <h1
        className="text-4xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Buscar artistas
      </h1>

      <form onSubmit={handleSearch} className="flex gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ej: punk argentina..."
          className="flex-1 bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
          style={{ fontFamily: "'Courier New', monospace" }}
        />
        <button
          type="submit"
          className="border-2 border-[#39FF14] text-[#39FF14] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Buscar
        </button>
      </form>

      {loading && (
        <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
          Buscando...
        </p>
      )}

      {!loading && resultados.length > 0 && (
        <ul className="flex flex-col gap-4">
          {resultados.map((artista) => (
            <li key={artista.id}>
              <DiscogsCard artista={artista} />
            </li>
          ))}
        </ul>
      )}

      {!loading && resultados.length === 0 && query && (
        <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
          — Sin resultados —
        </p>
      )}
    </div>
  );
}