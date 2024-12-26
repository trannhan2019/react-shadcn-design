import { deleteCongty, deleteCongtys } from "@/api/congty";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CongTy } from "@/types/congty";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function DeleteAlert({
  open,
  onOpen,
  type,
  ids = [],
  congty,
  reset,
  setCongty,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
  type: "single" | "multiple";
  ids?: number[];
  congty?: CongTy | null;
  reset: () => void;
  setCongty: (congty: CongTy | null) => void;
}) {
  const queryClient = useQueryClient();
  const mutationDelete = useMutation({
    mutationFn: (ids: number | number[]) => {
      if (type === "single") {
        return deleteCongty(congty?.id as number);
      }
      return deleteCongtys(ids as number[]);
    },
  });

  const handleDelete = () => {
    mutationDelete.mutate(type === "single" ? (congty?.id as number) : ids, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["congties"] });
        onOpen(false);
        toast.success("Xóa công ty thành công");
        reset();
        setCongty(null);
      },
      onError: () => {
        toast.error("Xóa công ty thất bại");
      },
    });
  };

  console.log(ids, congty?.id);

  return (
    <AlertDialog open={open} onOpenChange={onOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
