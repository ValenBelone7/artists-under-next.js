import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b-4 border-[#39FF14] bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-black uppercase tracking-widest"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          UNDER<span className="text-[#FF2D78]">FECHAS</span>
        </Link>

        <ul className="flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/artistas", label: "Artistas" },
            { href: "/fechas", label: "Fechas" },
            { href: "/buscar", label: "Buscar" },
            { href: "/contacto", label: "Contacto" },
            { href: "/admin", label: "Admin" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#39FF14] transition-colors duration-200"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
