import MessagesBox from "./MessagesBox";
import InputBox from "./InputBox";
import { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../utils/messages";

const Messanger = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [isSending, setIsSending] = useState(false);

  const handlerSendingMessage = async (e) => {
    e.preventDefault();
    const message = { message: e.target.message.value };

    e.target.message.value = "";
    setIsSending(true);
    await sendMessage(message);
    setIsSending(false);
    // setMessages([...messages, message]);
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
    fetchMessages();
  }, [isSending]);

  return (
    <div className="container mx-auto max-w-4xl flex-col sm:flex-row h-screen flex px-4 py-6 gap-4">
      <MessagesBox
        messages={messages}
        isLoading={isLoading}
        error={error}
        isSending={isSending}
      />
      <InputBox send={handlerSendingMessage} />
    </div>
  );
};

export default Messanger;
