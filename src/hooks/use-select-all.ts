import { useMemo, useState } from "react";

export const useSelectAll = <T extends { id: number }>(data: T[]) => {
  const [selected, setSelected] = useState<number[]>([]);

  const isSelectedAll = useMemo(() => {
    return selected.length === data?.length;
  }, [selected, data]);

  const isSelected = (item: number) => {
    return selected.includes(item);
  };

  const handleSelectAll = (value: boolean) => {
    if (value) {
      setSelected(data?.map((item: T) => item.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (value: boolean, item: number) => {
    if (value) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((id) => id !== item));
    }
  };

  return { selected, handleSelectAll, handleSelect, isSelectedAll, isSelected };
};
