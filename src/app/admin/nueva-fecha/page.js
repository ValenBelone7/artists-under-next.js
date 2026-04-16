export default function NuevaFechaPage() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">

      <h1
        className="text-3xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Nueva fecha
      </h1>

      <form className="flex flex-col gap-6">

        <div className="flex flex-col gap-2">
          <label
            htmlFor="artista"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Artista
          </label>
          <input
            id="artista"
            name="artista"
            type="text"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="fecha"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Fecha
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lugar"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Lugar
          </label>
          <input
            id="lugar"
            name="lugar"
            type="text"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="ciudad"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Ciudad
          </label>
          <input
            id="ciudad"
            name="ciudad"
            type="text"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="precio"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Precio ($ o "Gratis")
          </label>
          <input
            id="precio"
            name="precio"
            type="text"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

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
