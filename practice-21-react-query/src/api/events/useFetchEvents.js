// useFetchEvents.js
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../utils/eventHttps";

export function useFetchEvents(searchTerm, limit = 3) {
  const queryKey = ["events", { search: searchTerm, max: limit }];
  return useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchEvents({ signal, params: queryKey[1] }),
    staleTime: 5000,
    enabled: searchTerm !== undefined,
  });
}
