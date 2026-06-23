import FechasClient from "./FechasClient";

export default function FechasPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
      <h1
        className="text-4xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Fechas
      </h1>
      <FechasClient />
    </div>
  );
}