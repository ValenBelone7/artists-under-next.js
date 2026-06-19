import Link from "next/link";
import ProximasFechasClient from "./ProximasFechasClient";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6">
        <h1
          className="text-6xl font-black uppercase tracking-widest text-white leading-tight"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          La escena <span className="text-[#39FF14]">under</span>
          <br />en un solo lugar.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl" style={{ fontFamily: "'Courier New', monospace" }}>
          Artistas, fechas y ruido. Todo lo que necesitás saber antes de salir.
        </p>
        <div className="flex gap-4">
          <Link
            href="/artistas"
            className="border-2 border-[#39FF14] text-[#39FF14] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Ver artistas
          </Link>
          <Link
            href="/contacto"
            className="border-2 border-[#FF2D78] text-[#FF2D78] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#FF2D78] hover:text-black transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Contacto
          </Link>
        </div>
      </section>

      {/* Próximas fechas */}
      <section className="flex flex-col gap-4">
        <h2
          className="text-2xl font-black uppercase tracking-widest text-[#FF2D78]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Próximas fechas
        </h2>
        <ProximasFechasClient />
      </section>

    </div>
  );
}