"use client";

import { useArtistas } from "@/app/context/ArtistasContext";
import FechaCard from "@/components/FechaCard";

export default function FechasClient() {
  const { fechas } = useArtistas();

  if (fechas.length === 0) {
    return (
      <p className="text-gray-500 text-sm uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
        — No hay fechas cargadas —
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {fechas.map((fecha) => (
        <li key={fecha.id}>
          <FechaCard fecha={fecha} />
        </li>
      ))}
    </ul>
  );
}