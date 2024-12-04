import Header from "./Header";
import { useDocumentTitle } from "@uidotdev/usehooks";

export default function Home() {
  useDocumentTitle(`SBA | Book `);

  return (
    <div className="font-poppins">
      <Header />
    </div>
  );
}
