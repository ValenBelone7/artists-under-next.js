import Image from "next/image";

export default function DiscogsCard({ artista }) {
  return (
    <div className="border border-gray-800 px-6 py-5 flex gap-6 items-center">
      {artista.cover_image ? (
        <Image
          src={artista.cover_image}
          alt={artista.title}
          className="w-16 h-16 object-cover grayscale"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-900 border border-gray-700 flex items-center justify-center">
          <span className="text-gray-600 text-xs font-mono">SIN IMG</span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span
          className="text-white font-bold uppercase tracking-widest"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {artista.title}
        </span>
        {artista.genre && (
          <span
            className="text-[#39FF14] text-sm uppercase tracking-widest"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {artista.genre.join(" / ")}
          </span>
        )}
        {artista.country && (
          <span
            className="text-gray-500 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {artista.country}
          </span>
        )}
      </div>
    </div>
  );
}