import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import ListSearch from "./_list-search";
import { XIcon, CheckIcon, EllipsisVertical, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCongtys } from "@/api/congty";
import Loading from "@/components/loading";
import { CongTy } from "@/types/congty";
import { toast } from "sonner";
import ListPagination from "./list-pagination";

const ListCongTy = () => {
  const {
    data: congTys,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["congties"],
    queryFn: () => getCongtys(),
    placeholderData: keepPreviousData,
    retry: false,
  });

  if (isError) {
    toast.error(error.message);
  }

  return (
    <div className="relative">
      {/* <ListSearch /> */}

      {isPending ? (
        <Loading />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tên công ty</TableHead>
              <TableHead>Tên viết tắt</TableHead>
              <TableHead>Địa chỉ</TableHead>
              <TableHead>Số điện thoại</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.isArray(congTys?.data?.data) &&
            congTys?.data?.data?.length > 0 ? (
              congTys?.data?.data?.map((congTy: CongTy) => (
                <TableRow key={congTy.id}>
                  <TableCell className="text-sm text-gray-800">
                    {congTy.ten}
                  </TableCell>
                  <TableCell className="text-sm text-gray-800">
                    {congTy.ten_viet_tat}
                  </TableCell>
                  <TableCell className="text-sm text-gray-800">
                    {congTy.dia_chi}
                  </TableCell>
                  <TableCell className="text-sm text-gray-800">
                    {congTy.sdt}
                  </TableCell>
                  <TableCell>
                    {congTy.trang_thai ? (
                      <CheckIcon color="green" className="h-4 w-4" />
                    ) : (
                      <XIcon color="red" className="h-4 w-4" />
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Pencil />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-sm text-gray-500"
                >
                  Không có dữ liệu
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      <ListPagination />
    </div>
  );
};

export default ListCongTy;
