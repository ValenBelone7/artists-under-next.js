import Link from "next/link";

export default function ArtistaCard({ artista }) {
  return (
    <li>
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
  );
}
