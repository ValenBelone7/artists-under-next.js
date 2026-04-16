import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">

      <h1
        className="text-3xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Panel <span className="text-[#39FF14]">Admin</span>
      </h1>

      <p
        className="text-gray-500 text-sm uppercase tracking-widest"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        ¿Qué querés hacer?
      </p>

      <div className="flex flex-col gap-4">
        <Link
          href="/admin/nuevo-artista"
          className="border-2 border-[#39FF14] text-[#39FF14] px-6 py-4 uppercase font-bold tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          + Nuevo artista
        </Link>
        <Link
          href="/admin/nueva-fecha"
          className="border-2 border-[#FF2D78] text-[#FF2D78] px-6 py-4 uppercase font-bold tracking-widest hover:bg-[#FF2D78] hover:text-black transition-colors"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          + Nueva fecha
        </Link>
      </div>

    </div>
  );
}