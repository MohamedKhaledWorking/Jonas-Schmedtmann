import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGuests } from "../../Services/guest.js";
import Toast from "../../Ui/Toast/Toast.jsx";

export function useDeleteGuest() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id }) => deleteGuests(id),
    onSuccess: (_, { name }) => {
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
      Toast({
        title: "Guest deleted successfully",
        description: `${name} deleted successfully`,
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
