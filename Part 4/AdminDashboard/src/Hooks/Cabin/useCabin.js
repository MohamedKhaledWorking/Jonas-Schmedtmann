import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../Services/cabin.js";
export default function useCabin() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins: data, isLoading, error };
}
