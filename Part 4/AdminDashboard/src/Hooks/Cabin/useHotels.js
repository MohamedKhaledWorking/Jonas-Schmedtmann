import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../Services/cabin.js";

export default function useHotels() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return { hotels: data, isLoading, error };
}
