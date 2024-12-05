import Banner from "./Banner";
import Header from "./Header";
import { useDocumentTitle } from "@uidotdev/usehooks";
import Popular from "./Popular";

export default function Home() {
  useDocumentTitle(`SBA | Book `);

  return (
    <div className="font-poppins">
      <Header />
      <Banner />
      <Popular />
    </div>
  );
}
