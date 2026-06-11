"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Buscar por nombre o género..."
      className="bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#39FF14] transition-colors w-full max-w-md"
      style={{ fontFamily: "'Courier New', monospace" }}
    />
  );
}
