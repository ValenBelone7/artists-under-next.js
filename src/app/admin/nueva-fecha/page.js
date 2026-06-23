"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useArtistas } from "@/app/context/ArtistasContext";

export default function NuevaFechaPage() {
  const { addFecha } = useArtistas();
  const router = useRouter();

  const [form, setForm] = useState({
    artista: "",
    fecha: "",
    lugar: "",
    ciudad: "",
    precio: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFecha(form);
    router.push("/fechas");
  };

  return (
    <div className="flex flex-col gap-8 max-w-xl">

      <h1
        className="text-3xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Nueva fecha
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {[
          { id: "artista", label: "Artista", type: "text" },
          { id: "fecha", label: "Fecha", type: "date" },
          { id: "lugar", label: "Lugar", type: "text" },
          { id: "ciudad", label: "Ciudad", type: "text" },
          { id: "precio", label: "Precio ($ o \"Gratis\")", type: "text" },
        ].map(({ id, label, type }) => (
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
              type={type}
              value={form[id]}
              onChange={handleChange}
              required
              className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            />
          </div>
        ))}

        <button
          type="submit"
          className="border-2 border-[#39FF14] text-[#39FF14] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors self-start"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Guardar fecha
        </button>

      </form>
    </div>
  );
}