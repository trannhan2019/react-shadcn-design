import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryParams from "@/hooks/use-query-params";

const dataSelect = [5, 10, 15, 20, 50];

export default function SelectPage({ defaultValue }: { defaultValue: number }) {
  const { queryObject, updateQueryParams } = useQueryParams();

  const handleChange = (value: string) => {
    updateQueryParams({ ...queryObject, per_page: value });
  };

  return (
    <Select onValueChange={handleChange} defaultValue={defaultValue.toString()}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Pages" />
      </SelectTrigger>
      <SelectContent>
        {dataSelect.map((item) => (
          <SelectItem key={item} value={item.toString()}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
