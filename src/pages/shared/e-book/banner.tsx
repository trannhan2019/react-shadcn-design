import BgImage from "@/assets/img/banner1.3.jpg";

export default function Banner() {
  return (
    <section
      className="min-h-[500px] bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    ></section>
  );
}
