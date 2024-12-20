import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DOTS, usePagination } from "@/hooks/use-pagination";

interface PaginationLinkComponentProps {
  totalCount: number;
  siblingCount?: number;
  currentPage?: number;
  pageSize?: number;
}

export default function PaginationLinkComponent({
  totalCount,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 10,
}: PaginationLinkComponentProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            to={`/dashboard/congty?page=${currentPage - 1}`}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>

        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                to={`/dashboard/congty?page=${pageNumber}`}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            to={`/dashboard/congty?page=${currentPage + 1}`}
            aria-disabled={lastPage ? currentPage >= Number(lastPage) : false}
            tabIndex={
              lastPage
                ? currentPage >= Number(lastPage)
                  ? -1
                  : undefined
                : undefined
            }
            className={
              lastPage
                ? currentPage >= Number(lastPage)
                  ? "pointer-events-none opacity-50"
                  : undefined
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
