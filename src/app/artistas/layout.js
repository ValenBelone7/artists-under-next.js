import { ArtistasProvider } from "../context/ArtistasContext";

export default function ArtistasLayout({ children }) {
  return <ArtistasProvider>{children}</ArtistasProvider>;
}
