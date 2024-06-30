import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../utils/messages";

export const useAddNewMessage = () => {
  const queryClient = useQueryClient();

  const { isPending: isAddNewLoading, mutate: addNewMessage } = useMutation({
    mutationFn: sendMessage,

    // onMutate: (newMessage) => {
    //   console.log(newMessage);
    //   queryClient.cancelQueries(["messages"]);

    //   const previousMessages = queryClient.getQueryData(["messages"]);

    //   queryClient.setQueryData(["messages"], (old) => [
    //     ...old.data,
    //     newMessage,
    //   ]);

    //   return { previousMessages };
    // },
    // onError: (err, newMessage, context) => {
    //   queryClient.setQueryData(["messages"], context.previousMessages);
    // },
    onSettled: () => {
      queryClient.invalidateQueries(["messages"]);
    },

    // onMutate: () => {
    //   queryClient.cancelQueries(["messages"]);
    //   queryClient.setQueryData(["messages"], () => {
    //     //return optimisticMessages;
    //     return [...optimisticMessages];
    //   });

    //   console.log("muting");
    // },

    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["messages"] });
    // },

    //onError: (err) => toast.error(err.message),
  });

  return { isAddNewLoading, addNewMessage };
};
