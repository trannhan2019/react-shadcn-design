import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useQueryParams from "@/hooks/use-query-params";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormField, Form } from "./ui/form";

export default function SearchInput() {
  const { queryObject, updateQueryParams } = useQueryParams();

  const form = useForm<{
    search: string;
  }>({
    defaultValues: {
      search: queryObject.search || "",
    },
  });

  const onSubmit = (value: { search: string }) => {
    updateQueryParams({ ...queryObject, page: "1", search: value.search });
  };

  //them 1 button clear search
  const handleClearSearch = () => {
    form.reset();
    updateQueryParams({ ...queryObject, search: "" });
  };

  return (
    <div className="my-4 w-full md:w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <div className="relative w-full">
                  <Input
                    {...field}
                    placeholder="Tìm kiếm theo tên hoặc tên viết tắt"
                  />
                  {form.getValues("search") && (
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-0 top-0"
                    >
                      <X color="red" />
                    </Button>
                  )}
                </div>
              )}
            />
            <Button type="submit" size="icon" variant="outline">
              <Search />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
