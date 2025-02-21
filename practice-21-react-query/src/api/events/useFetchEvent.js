import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../utils/eventHttps";

// Fetch single event
export function useFetchEvent(id) {
  const queryKey = ["events", id];
  return useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    enabled: Boolean(id),
  });
}
