import { Checkbox } from "./ui/checkbox";

interface CheckboxTableProps {
  checked: boolean;
  updateValue: (value: boolean) => void;
}

export default function CheckboxTable({
  checked = false,
  updateValue,
}: CheckboxTableProps) {
  const handleChange = (value: boolean) => {
    updateValue(value);
  };

  return <Checkbox checked={checked} onCheckedChange={handleChange} />;
}
