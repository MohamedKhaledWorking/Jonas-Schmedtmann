import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGuests } from "../../Services/guest.js";
import Toast from "../../Ui/Toast/Toast.jsx";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export function useDeleteGuest() {
  const queryClient = useQueryClient();
  const { selectedGuest } = useSelectedGuest();
  const mutation = useMutation({
    mutationFn: deleteGuests,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
      Toast({
        title: "Guest deleted successfully",
        description: `${selectedGuest?.full_name} deleted successfully`,
        theme: "theme",
      });
    },
    onError: (err) => {
      Toast({
        title: "Something went wrong on deleting guest",
        description: `${err.message}`,
        theme: "rose",
      });
    },
  });

  return { mutation };
}
