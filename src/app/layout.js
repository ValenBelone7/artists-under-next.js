import { Geist } from "next/font/google";
import "./globals.css";
import { ArtistasProvider } from "./context/ArtistasContext";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Under Fechas",
  description: "La agenda de la escena under",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geist.className} bg-black text-white min-h-screen flex flex-col`}>
        <ArtistasProvider>

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

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

        </ArtistasProvider>
      </body>
    </html>
  );
}