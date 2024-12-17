import Banner from "./banner";
import BannerSection from "./banner-section";
import BookList from "./book-list";
import Popular from "./popular";

export default function Book() {
  return (
    <div>
      <Banner />
      <Popular />
      <BannerSection />
      <BookList />
    </div>
  );
}
