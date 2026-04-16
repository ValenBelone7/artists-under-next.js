"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-10">

      <h1
        className="text-4xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Contacto
      </h1>

      {enviado ? (
        <p
          className="text-[#39FF14] text-lg uppercase tracking-widest border border-[#39FF14] px-6 py-4"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Mensaje enviado. Te contactamos pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label
              htmlFor="nombre"
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="mensaje"
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors resize-none"
              style={{ fontFamily: "'Courier New', monospace" }}
            />
          </div>

          <button
            type="submit"
            className="border-2 border-[#FF2D78] text-[#FF2D78] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#FF2D78] hover:text-black transition-colors self-start"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Enviar
          </button>

        </form>
      )}

    </div>
  );
}
