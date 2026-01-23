import { useMutation, useQueryClient } from "@tanstack/react-query";
import {duplicateGuest } from "../../Services/guest.js";
import Toast from "../../Ui/Toast/Toast.jsx";

export function useDuplicateGuest() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: duplicateGuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      Toast({
        title: "Guest added successfullY",
        description: "Guest added successfullY",
      });
    },
    onError: (err) => {
      Toast({ title: "Something went wrong", description: `${err.message}` });
    },
  });
  return { mutate };
}
