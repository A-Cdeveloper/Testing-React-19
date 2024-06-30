import { getMessages } from "../utils/messages";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useMessages = () => {
  console.log("render");
  const { isPending, data, error } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessages(),
    placeholderData: keepPreviousData,
  });

  // console.log(fetchStatus);

  return {
    isPending,
    messages: data?.data || [],
    error,
  };
};
