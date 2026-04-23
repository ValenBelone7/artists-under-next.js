import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Under Fechas",
  description: "La agenda de la escena under",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geist.className} bg-black text-white min-h-screen flex flex-col`}>

        {/* Barra de navegacion fija */}
        <nav className="w-full border-b-4 border-[#39FF14] bg-black px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">

            {/* Logo con ida al home */}
            <Link
              href="/"
              className="text-2xl font-black uppercase tracking-widest"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              UNDER<span className="text-[#FF2D78]">FECHAS</span>
            </Link>

            {/* Links del nav */}
            <ul className="flex items-center gap-8">
              {[
                { href: "/", label: "Home" },
                { href: "/artistas", label: "Artistas" },
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

        {/* Contenido de las otras paginas */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="w-full border-t-4 border-[#FF2D78] bg-black px-6 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

            <p
              className="text-xs uppercase tracking-widest text-gray-500"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              © {new Date().getFullYear()} —{" "}
              <span className="text-[#39FF14]">UNDERFECHAS</span>
            </p>

            <p
              className="text-xs uppercase tracking-widest text-[#FF2D78]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              La escena no para. La fecha tampoco.
            </p>

            <p
              className="text-xs uppercase tracking-widest text-gray-600"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Hecho con ruido 🎸
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}