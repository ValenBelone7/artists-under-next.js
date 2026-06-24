"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { artistas as defaultArtistas, fechas as defaultFechas } from "@/lib/data";

const ArtistasContext = createContext();

export function ArtistasProvider({ children }) {
  const [artistas, setArtistas] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedArtistas = localStorage.getItem("under_artistas");
    const savedFechas = localStorage.getItem("under_fechas");
    const savedFavoritos = localStorage.getItem("under_favoritos");

    setArtistas(savedArtistas ? JSON.parse(savedArtistas) : defaultArtistas);
    setFechas(savedFechas ? JSON.parse(savedFechas) : defaultFechas);
    setFavoritos(savedFavoritos ? JSON.parse(savedFavoritos) : []);

    if (!savedArtistas) localStorage.setItem("under_artistas", JSON.stringify(defaultArtistas));
    if (!savedFechas) localStorage.setItem("under_fechas", JSON.stringify(defaultFechas));

    setIsMounted(true);
  }, []);

  const saveArtistas = (nuevos) => {
    setArtistas(nuevos);
    localStorage.setItem("under_artistas", JSON.stringify(nuevos));
  };

  const saveFechas = (nuevas) => {
    setFechas(nuevas);
    localStorage.setItem("under_fechas", JSON.stringify(nuevas));
  };

  const saveFavoritos = (nuevos) => {
    setFavoritos(nuevos);
    localStorage.setItem("under_favoritos", JSON.stringify(nuevos));
  };

  const addArtista = (artista) => {
    saveArtistas([...artistas, artista]);
  };

  const addFecha = (fecha) => {
    const newId = fechas.length > 0 ? Math.max(...fechas.map((f) => f.id)) + 1 : 1;
    saveFechas([...fechas, { ...fecha, id: newId }]);
  };

  const toggleFavorito = (slug) => {
    if (favoritos.includes(slug)) {
      saveFavoritos(favoritos.filter((s) => s !== slug));
    } else {
      saveFavoritos([...favoritos, slug]);
    }
  };

  const isFavorito = (slug) => favoritos.includes(slug);

  if (!isMounted) return null;

  return (
    <ArtistasContext.Provider
      value={{ artistas, fechas, favoritos, addArtista, addFecha, toggleFavorito, isFavorito }}
    >
      {children}
    </ArtistasContext.Provider>
  );
}

export const useArtistas = () => useContext(ArtistasContext);
