import { useQuery } from "@tanstack/react-query";
import { fetchSelectableImages } from "../../utils/eventHttps";

export function useFetchSelectableImages() {
  return useQuery({
    queryKey: ["events-images"],
    queryFn: ({ signal }) => fetchSelectableImages({ signal }),
  });
}
