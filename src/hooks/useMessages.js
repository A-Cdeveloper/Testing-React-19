import { useState } from "react";
import { getMessages } from "../utils/messages";
import { useEffect } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [revalidate, setRevalidate] = useState(false);

  const revalidateHandler = () => {
    setRevalidate((prevState) => !prevState);
  };

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const data = await getMessages();
      setMessages(data.data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("fetch messages");
    fetchMessages();
  }, [revalidate]);

  return {
    messages,
    isLoading,
    error,
    revalidateHandler,
  };
};
