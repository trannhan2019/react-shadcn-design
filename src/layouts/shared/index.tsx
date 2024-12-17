import ScrollButton from "@/components/scroll-top";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router";
import { useDocumentTitle } from "@uidotdev/usehooks";
export default function SharedLayout() {
  useDocumentTitle("SBA | Book");
  return (
    <div className="relative scroll-smooth">
      <Header />
      <Outlet />
      <Footer />
      <ScrollButton />
    </div>
  );
}
