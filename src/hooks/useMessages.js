import { useState } from "react";
import { getMessages } from "../utils/messages";
import { useEffect } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
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
    fetchMessages();
  }, []);

  return {
    messages,
    isLoading,
    error,
  };
};
