import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEvent } from "../../utils/eventHttps";

// Update event
export function useUpdateEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEvent,
    onMutate: async ({ id, event }) => {
      const queryKey = ["events", id];
      await queryClient.cancelQueries({ queryKey });
      const prevData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (oldEvent) => ({
        id,
        ...oldEvent,
        ...event,
      }));

      return { queryKey, prevData };
    },
    onError: (error, newData, context) => {
      const { queryKey, prevData } = context;
      if (prevData) {
        queryClient.setQueryData(queryKey, prevData);
      }
    },
    onSettled: (data, error, variables, context) => {
      const { queryKey } = context;
      queryClient.invalidateQueries(queryKey);
    },
  });
}
