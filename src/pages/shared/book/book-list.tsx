import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const data = [
  {
    id: 1,
    title: "Bạn đang ở đây: Cuốn sách ngắn về thế giới ",
    author: "Nicholas Crane",
    price: "95k",
    description:
      "Cuốn sách giúp chúng ta nhìn nhận lại về địa lý, một môn học quan trọng trong việc củng cố nền tảng tư duy cho con người.",
    code: "SBA0004",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/33347.jpg?v=1&w=480&h=700",
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
      "https://omegaplus.vn/wp-content/uploads/2019/07/5-Copy-1024x1024.jpg",
  },
  {
    id: 6,
    title: "Lẽ thường",
    author: "Thomas Paine",
    price: "109k",
    description:
      "Trong Lẽ thường, Thomas Paine phân tích thực trạng, hoàn cảnh và quan hệ của các Thuộc địa đối với nước Anh. Với lý luận chặt chẽ và văn chương nghị luận sắc bén, ông đã giúp cho người dân Mỹ ở thuộc địa nhìn rõ vấn đề và chọn cho mình hướng đi đúng đắn. Tác giả dùng văn phong và từ ngữ giản dị để trình bày những vấn đề phức tạp thuộc về triết học, tôn giáo và chính trị nhằm vào đối tượng chính là đại chúng. Lẽ thường còn ảnh hưởng đến việc soạn thảo Tuyên ngôn Độc lập của Mỹ vào tháng Bảy năm 1776",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://down-vn.img.susercontent.com/file/1a7c93ad401e5e97658b829c05ad07f9",
  },
];

const bookCategories = [
  "Khoa học",
  "Kinh điển",
  "Lịch sử Việt Nam",
  "Văn học",
  "Lịch sử Thế giới",
  "Nhật Bản",
  "Vật lý",
  "Nghệ thuật",
  "Tâm lý học",
  "Thiếu nhi",
  "Y học",
  "Ngôn ngữ",
  "Kinh tế",
  "Âm nhạc",
  "Y sinh",
  "Giáo dục",
  "Mẹ và bé",
  "Quản trị",
  "Cuộc sống",
  "Ẩm thực",
];

export default function BookList() {
  return (
    <div className="mt-10">
      <div className="container mx-auto px-5">
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-4xl font-semibold">Product Listing</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus
            lacus faucibus lectus, sed cursused eros ligula non odio.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* START STICKY NAV */}
          <div className="flex w-full flex-col pr-3 md:w-4/12">
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-medium">Search</h5>
              <div className="flex gap-1">
                <Input type="text" placeholder="Search name or author ..." />
                <Button variant="outline" size="icon">
                  <Search />
                </Button>
              </div>
            </div>

            <div className="flex flex-col p-3">
              <h5 className="mb-2 text-2xl font-medium">Category</h5>
              <ScrollArea className="h-[300px] w-full p-4">
                {bookCategories.map((item, index) => (
                  <div className="mb-3 flex items-center space-x-2" key={index}>
                    <Checkbox id={`terms-${index}`} />
                    <label
                      htmlFor={`terms-${index}`}
                      className="cursor-pointer text-sm font-medium leading-none hover:text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </div>
          {/* END STICKY NAV */}

          {/* START PRODUCT COL 8 */}
          <div className="w-full p-3 md:w-8/12">
            {/* START LISTING HEADING */}

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <Link to={`/detail/${item.id}`} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0.2, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Card className="w-full overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <CardContent
                        className="h-[250px] w-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></CardContent>
                      <CardFooter className="mt-5 h-[80px] flex-col items-start gap-y-1">
                        <CardTitle className="text-black/80">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-left">
                          {item.author}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Pagination className="mt-5">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          {/* END PRODUCT COL 8 */}
        </div>
      </div>
    </div>
  );
}
