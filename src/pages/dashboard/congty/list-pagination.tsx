import PaginationLinkComponent from "@/components/pagination-link-component";
import SelectPage from "@/components/select-page";

interface ListPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage?: number;
  pageSize?: number;
}

export default function ListPagination({
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 10,
}: ListPaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <PaginationLinkComponent
        totalCount={totalCount}
        siblingCount={siblingCount}
        currentPage={currentPage}
        pageSize={pageSize}
      />

      <SelectPage />
    </div>
  );
}
