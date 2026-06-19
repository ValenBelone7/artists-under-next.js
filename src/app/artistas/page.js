import ArtistasClient from "./ArtistasClient";

export default function ArtistasPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
      <h1
        className="text-4xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Artistas
      </h1>
      <ArtistasClient />
    </div>
  );
}