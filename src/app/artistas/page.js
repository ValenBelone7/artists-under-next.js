import Link from "next/link";

const artistas = [
  { slug: "los-tormentos", nombre: "Los Tormentos", genero: "Punk / Hardcore", ciudad: "Buenos Aires" },
  { slug: "vortex-negro", nombre: "Vórtex Negro", genero: "Metal / Sludge", ciudad: "Córdoba" },
  { slug: "la-grieta", nombre: "La Grieta", genero: "Post-punk / Noise", ciudad: "Rosario" },
  { slug: "electrochoque", nombre: "Electrochoque", genero: "Industrial / EBM", ciudad: "Buenos Aires" },
  { slug: "ruido-blanco", nombre: "Ruido Blanco", genero: "Ambient / Drone", ciudad: "Mendoza" },
];

export default function ArtistasPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">

      <h1
        className="text-4xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Artistas
      </h1>

      <ul className="flex flex-col gap-4">
        {artistas.map((artista) => (
          <li key={artista.slug}>
            <Link
              href={`/artistas/${artista.slug}`}
              className="flex items-center justify-between border border-gray-800 px-6 py-5 hover:border-[#39FF14] hover:bg-gray-900 transition-colors group"
            >
              <div className="flex flex-col gap-1">
                <span
                  className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#39FF14] transition-colors"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {artista.nombre}
                </span>
                <span
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {artista.genero}
                </span>
              </div>
              <span
                className="text-sm text-gray-600 uppercase tracking-widest"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {artista.ciudad}
              </span>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
