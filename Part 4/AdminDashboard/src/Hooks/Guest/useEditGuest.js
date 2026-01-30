import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGuest } from "../../Services/guest.js";
import Toast from "../../Ui/Toast/Toast.js";

export function useEditGuest() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateGuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      Toast({
        title: "Guest updated successfullY",
        description: "Guest updated successfullY",
      });
    },
    onError: (err) => {
      Toast({ title: "Something went wrong", description: `${err.message}` });
    },
  });

  return { mutate };
}
