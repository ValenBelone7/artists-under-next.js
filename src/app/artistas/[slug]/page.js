import Link from "next/link";
import { notFound } from "next/navigation";

const artistas = [
  {
    slug: "los-tormentos",
    nombre: "Los Tormentos",
    genero: "Punk / Hardcore",
    ciudad: "Buenos Aires",
    bio: "Formados en 2015 en el conurbano bonaerense. Tres discos, cientos de shows en sótanos y un sonido que no pide permiso.",
    integrantes: ["Rulo — voz / guitarra", "Nati — bajo", "Facu — batería"],
    proximaFecha: "25 de abril — Club Cultural Matienzo",
  },
  {
    slug: "vortex-negro",
    nombre: "Vórtex Negro",
    genero: "Metal / Sludge",
    ciudad: "Córdoba",
    bio: "Riffs pesados, tempos lentos y distorsión máxima. Vórtex Negro lleva diez años aplastando escenarios del interior.",
    integrantes: ["Damián — voz / guitarra", "Caro — guitarra", "Topo — bajo", "Sergio — batería"],
    proximaFecha: "3 de mayo — La Sala del Horror",
  },
  {
    slug: "la-grieta",
    nombre: "La Grieta",
    genero: "Post-punk / Noise",
    ciudad: "Rosario",
    bio: "Post-punk oscuro con influencias del noise rock y la new wave. Su último EP fue grabado en vivo en una fábrica abandonada.",
    integrantes: ["Vera — voz / teclados", "Nico — guitarra", "Lu — bajo / coros"],
    proximaFecha: "10 de mayo — El Galpón de la Música",
  },
  {
    slug: "electrochoque",
    nombre: "Electrochoque",
    genero: "Industrial / EBM",
    ciudad: "Buenos Aires",
    bio: "Electrónica de cuerpo presente. Máquinas, sintetizadores analógicos y performances que desafían el límite entre música y ruido.",
    integrantes: ["Axel — producción / voz", "Sil — sintetizadores"],
    proximaFecha: "17 de mayo — Crobar",
  },
  {
    slug: "ruido-blanco",
    nombre: "Ruido Blanco",
    genero: "Ambient / Drone",
    ciudad: "Mendoza",
    bio: "Paisajes sonoros que se despliegan lentamente. Ruido Blanco propone una experiencia de escucha activa e inmersiva.",
    integrantes: ["Matías — guitarras / efectos", "Paula — electrónica / field recordings"],
    proximaFecha: "Próximamente",
  },
];

export default async function ArtistaPage({ params }) {
  const { slug } = await params;
  const artista = artistas.find((a) => a.slug === slug);

  if (!artista) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
        <Link href="/artistas" className="hover:text-[#39FF14] transition-colors">Artistas</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-400">{artista.nombre}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col gap-3 border-b-2 border-[#39FF14] pb-8">
        <h1
          className="text-5xl font-black uppercase tracking-widest text-white"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {artista.nombre}
        </h1>
        <div className="flex gap-4 text-sm" style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="text-[#39FF14] uppercase tracking-widest">{artista.genero}</span>
          <span className="text-gray-600">—</span>
          <span className="text-gray-400 uppercase tracking-widest">{artista.ciudad}</span>
        </div>
      </div>

      {/* Bio */}
      <section className="flex flex-col gap-3">
        <h2
          className="text-xs uppercase tracking-widest text-[#FF2D78]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Sobre el artista
        </h2>
        <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
          {artista.bio}
        </p>
      </section>

      {/* Integrantes */}
      <section className="flex flex-col gap-3">
        <h2
          className="text-xs uppercase tracking-widest text-[#FF2D78]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Integrantes
        </h2>
        <ul className="flex flex-col gap-2">
          {artista.integrantes.map((i) => (
            <li
              key={i}
              className="text-gray-400 text-sm"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              — {i}
            </li>
          ))}
        </ul>
      </section>

      {/* Próxima fecha */}
      <section className="border border-[#39FF14] px-6 py-4 flex flex-col gap-1">
        <span
          className="text-xs uppercase tracking-widest text-gray-500"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Próxima fecha
        </span>
        <span
          className="text-[#39FF14] font-bold uppercase tracking-widest"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {artista.proximaFecha}
        </span>
      </section>

    </div>
  );
}
