import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  XIcon,
  CheckIcon,
  EllipsisVertical,
  Pencil,
  Trash,
} from "lucide-react";
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
import useQueryParams from "@/hooks/use-query-params";
import SearchInput from "@/components/search-input";
import CheckboxTable from "@/components/checkbox-table";
import { useSelectAll } from "@/hooks/use-select-all";
import DeleteAlert from "./delete-alert";
import { useState } from "react";

const ListCongTy = () => {
  const { queryObject } = useQueryParams();
  const page = queryObject.page ? Number(queryObject.page) : 1;
  const per_page = queryObject.per_page ? Number(queryObject.per_page) : 10;
  const search = queryObject.search || "";
  const {
    data: congTys,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["congties", page, per_page, search],
    queryFn: () => getCongtys({ page, per_page, search }),
    placeholderData: keepPreviousData,
    retry: false,
  });

  //delete cong ty
  const [openAlertDel, setOpenAlertDel] = useState(false);

  const { selected, handleSelectAll, handleSelect, isSelectedAll, isSelected } =
    useSelectAll<CongTy>(congTys?.data?.data);

  if (isPending) {
    return (
      <div className="relative">
        <Loading />
      </div>
    );
  }

  if (isError) {
    toast.error(error.message);
  }

  return (
    <div>
      <div className="flex items-center space-x-4">
        <SearchInput />
        <Button
          variant="destructive"
          className={selected.length > 0 ? "flex" : "hidden"}
          onClick={() => setOpenAlertDel(true)}
        >
          <Trash />
          <span className="hidden md:flex">Xóa tất cả</span>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <CheckboxTable
                checked={isSelectedAll}
                updateValue={handleSelectAll}
              />
            </TableHead>
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
                  <CheckboxTable
                    checked={isSelected(congTy.id)}
                    updateValue={(value) => handleSelect(value, congTy.id)}
                  />
                </TableCell>
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
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Pencil />
                        <span className="ml-4 text-sm">Sửa</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setOpenAlertDel(true)}>
                        <Trash color="red" />
                        <span className="ml-4 text-sm">Xóa</span>
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
      <ListPagination
        totalCount={congTys?.data?.meta?.total}
        currentPage={page}
        pageSize={per_page}
        siblingCount={1}
      />

      <DeleteAlert open={openAlertDel} onOpen={setOpenAlertDel} />
    </div>
  );
};

export default ListCongTy;
