export default function FechaCard({ fecha }) {
  return (
    <div className="border border-gray-800 px-6 py-5 flex flex-col gap-2 hover:border-[#FF2D78] transition-colors">
      <div className="flex items-center justify-between">
        <span
          className="text-lg font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {fecha.artista}
        </span>
        <span
          className="text-sm text-[#39FF14] font-bold uppercase tracking-widest"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {fecha.precio}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500" style={{ fontFamily: "'Courier New', monospace" }}>
        <span>{fecha.fecha}</span>
        <span className="text-gray-700">—</span>
        <span>{fecha.lugar}</span>
        <span className="text-gray-700">—</span>
        <span className="uppercase tracking-widest">{fecha.ciudad}</span>
      </div>
    </div>
  );
}
