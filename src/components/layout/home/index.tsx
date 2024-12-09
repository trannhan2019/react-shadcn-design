import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div className="relative scroll-smooth font-roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
