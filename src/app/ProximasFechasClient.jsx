"use client";

import { useArtistas } from "@/app/context/ArtistasContext";
import FechaCard from "@/components/FechaCard";

export default function ProximasFechasClient() {
  const { fechas } = useArtistas();

  const proximas = fechas
    .filter((f) => new Date(f.fecha) >= new Date())
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    .slice(0, 3);

  if (proximas.length === 0) {
    return (
      <p className="text-gray-500 text-sm" style={{ fontFamily: "'Courier New', monospace" }}>
        — Próximamente —
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {proximas.map((fecha) => (
        <FechaCard key={fecha.id} fecha={fecha} />
      ))}
    </ul>
  );
}