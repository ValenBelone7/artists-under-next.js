export default function NuevoArtistaPage() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">

      <h1
        className="text-3xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Nuevo artista
      </h1>

      <form className="flex flex-col gap-6">

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
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="slug"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="genero"
            className="text-xs uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Género
          </label>
          <input
            id="genero"
            name="genero"
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
