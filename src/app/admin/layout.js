import Link from "next/link";

const navItems = [
  { href: "/admin/nuevo-artista", label: "Nuevo artista" },
  { href: "/admin/nueva-fecha", label: "Nueva fecha" },
];

export const metadata = {
  title: "Admin — UnderFechas",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-[calc(100vh-120px)]">

      {/* Sidebar */}
      <aside className="w-56 border-r-2 border-[#39FF14] bg-black px-4 py-8 flex flex-col gap-6 shrink-0">
        <span
          className="text-xs uppercase tracking-widest text-[#FF2D78] font-bold"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          Panel admin
        </span>
        <nav className="flex flex-col gap-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-[#39FF14] transition-colors py-2 px-3 hover:bg-gray-900 border border-transparent hover:border-gray-800"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Contenido */}
      <div className="flex-1 px-10 py-8">
        {children}
      </div>

    </div>
  );
}
