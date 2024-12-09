import { useDocumentTitle } from "@uidotdev/usehooks";
import Popular from "./Popular";
import BannerSection from "./BannerSection";
import BookList from "./BookList";
import ScrollButton from "./ScrollButton";
import Banner from "@/components/home/book/Banner";

export default function Books() {
  useDocumentTitle(`SBA | Book `);

  return (
    <div>
      <Banner />
      <Popular />
      <BannerSection />
      <BookList />
      <ScrollButton />
    </div>
  );
}
