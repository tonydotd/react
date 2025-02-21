import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent } from "../../utils/eventHttps";

export function useDeleteEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
  });
}
