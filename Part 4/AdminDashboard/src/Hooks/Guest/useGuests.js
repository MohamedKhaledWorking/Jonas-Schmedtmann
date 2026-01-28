import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../Services/guest.js";

export function useGuests() {
  const {
    data: guests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
  });


  return { guests, isLoading, error };
}
