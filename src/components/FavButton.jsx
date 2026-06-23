"use client";

import { useArtistas } from "@/app/context/ArtistasContext";

export default function FavButton({ artistaSlug }) {
  const { toggleFavorito, isFavorito } = useArtistas();
  const activo = isFavorito(artistaSlug);

  return (
    <button
      onClick={() => toggleFavorito(artistaSlug)}
      className="text-2xl transition-colors"
      style={{ fontFamily: "'Courier New', monospace" }}
      aria-label={activo ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {activo ? "★" : "☆"}
    </button>
  );
}
