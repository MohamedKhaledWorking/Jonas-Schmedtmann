import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../Services/cabin.js";
import Toast from "../../Ui/Toast/Toast.js";

export default function useAddCabin() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["addCabin"],
    mutationFn: createCabin,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError(err) {
      Toast({ title: "Something went wrong", description: `${err.message}` });
    },
  });

  return { mutate };
}
