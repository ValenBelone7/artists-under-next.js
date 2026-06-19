// src/app/admin/nuevo-artista/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useArtistas } from "@/app/context/ArtistasContext";

export default function NuevoArtistaPage() {
  const { addArtista } = useArtistas();
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    slug: "",
    genero: "",
    ciudad: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArtista({
      ...form,
      integrantes: [],
      proximaFecha: "Próximamente",
    });
    router.push("/artistas");
  };

  return (
    <div className="flex flex-col gap-8 max-w-xl">

      <h1
        className="text-3xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Nuevo artista
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {[
          { id: "nombre", label: "Nombre" },
          { id: "slug", label: "Slug" },
          { id: "genero", label: "Género" },
          { id: "ciudad", label: "Ciudad" },
        ].map(({ id, label }) => (
          <div key={id} className="flex flex-col gap-2">
            <label
              htmlFor={id}
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {label}
            </label>
            <input
              id={id}
              name={id}
              type="text"
              value={form[id]}
              onChange={handleChange}
              required
              className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <label
            htmlFor="bio"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            value={form.bio}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors resize-none"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <button
          type="submit"
          className="border-2 border-[#39FF14] text-[#39FF14] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors self-start"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Guardar artista
        </button>

      </form>
    </div>
  );
}