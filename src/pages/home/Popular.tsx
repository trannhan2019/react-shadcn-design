import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    id: 1,
    title: "Bạn Đang Ở Đây: Cuốn Sách Ngắn Về Thế Giới",
    author: "Nicholas Crane",
    price: "95k",
    description:
      "Cuốn sách giúp chúng ta nhìn nhận lại về địa lý, một môn học quan trọng trong việc củng cố nền tảng tư duy cho con người.",
    code: "SBA0004",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image: "https://www.vinabook.com/images/detailed/360/P91714Escan0001.jpg",
  },
  {
    id: 2,
    title: "Yến Hội và Phaedrus",
    author: "Platon",
    price: "135k",
    description:
      "Tác phẩm gồm hai phần, 'Yến Hội' và 'Phaedrus', dành cho những ai quan tâm tới văn học và triết học Hy-La cổ đại.",
    code: "SBA0010",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/yen-hoi-va-phaedrus-tac-gia-platon.jpg",
  },
  {
    id: 3,
    title: "Trò Chơi và Thú Tiêu Khiển của Người Huế",
    author: "Trần Đức Anh Sơn",
    price: "139k",
    description:
      "Cuốn sách nghiên cứu, trình bày và phân tích các trò chơi, thú tiêu khiển truyền thống của người dân Huế.",
    code: "SBA0050",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/537/products/43033226-79e3-4182-afcb-55d3dfd20236.jpg?v=1671349837817",
  },
  {
    id: 4,
    title: "Thời Khắc Tươi Đẹp",
    author: "Nina Riggs",
    price: "159k",
    description:
      "Cuốn hồi ký tuyệt vời về sự sống và cái chết, từ nhà thơ Nina Riggs.",
    code: "SBA0074",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://omegaplus.vn/wp-content/uploads/2020/02/khoanh-khac-tuoi-dep-ok.jpg",
  },
  {
    id: 5,
    title: "Mọi Chuyện Trên Đời Đều Có Nguyên Do",
    author: "Kate Bowler",
    price: "109k",
    description:
      "Hành trình đi tìm ý nghĩa cuộc đời của một bệnh nhân ung thư.",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://pos.nvncdn.net/fd5775-40602/ps/20191113_K3WqrdfSd489EF0SZElQWcue.jpg",
  },
];

export default function Popular() {
  return (
    <div className="py-24">
      <div className="container mx-auto p-5">
        <div className="flex">
          {/* START PORTFOLIO HEADING */}
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">Our Popular Product</h1>
              <p className="mt-7">
                Aenean imperdiet. Etiam ultricies nisi vel augue men tuhi
                spectrum alle me.
              </p>
            </div>
          </div>
          {/* END PORTFOLIO HEADING */}

          {/* START PORTFOLIO IMAGES */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
          {/* END PORTFOLIO IMAGES */}
        </div>
      </div>
    </div>
  );
}
