import Banner from "./Banner";
import Header from "./Header";
import { useDocumentTitle } from "@uidotdev/usehooks";
import Popular from "./Popular";
import BannerSection from "./BannerSection";
import BookList from "./BookList";
import ScrollButton from "./ScrollButton";
import Footer from "./Footer";

export default function Home() {
  useDocumentTitle(`SBA | Book `);

  return (
    <div className="relative scroll-smooth font-roboto">
      <Header />
      <Banner />
      <Popular />
      <BannerSection />
      <BookList />
      <ScrollButton />
      <Footer />
    </div>
  );
}
