import { useState, useTransition } from "react";
import { useMessages } from "../hooks/useMessages";

import MessagesBox from "./MessagesBox";
import Button from "./ui/Button";
import { sendMessage } from "../utils/messages";

const Messanger = () => {
  const { messages, isLoading, error, revalidateHandler } = useMessages();

  //const [isSending, setIsSending] = useState(false);
  const [errorSending, setErrorSending] = useState(null);

  console.log(errorSending);

  const [isSending, setTransition] = useTransition();

  const handlerSendMessage = async (e) => {
    setTransition(async () => {
      e.preventDefault();
      try {
        await sendMessage({ message: e.target.message.value });
        setErrorSending(null);
      } catch (error) {
        setErrorSending(error.message);
      }

      e.target.message.value = "";
      revalidateHandler();
    });
  };

  return (
    <div className="container mx-auto max-w-4xl flex-col sm:flex-row h-screen flex px-4 py-6 gap-4">
      <MessagesBox messages={messages} isLoading={isLoading} error={error} />
      {/* <InputBox /> */}

      <form
        className="w-full sm:self-end sm:flex-1 flex flex-wrap space-x-2"
        onSubmit={handlerSendMessage}
      >
        <textarea
          className=" flex-1 p-3 focus:outline-none border border-1 disabled:bg-slate-100 disabled:text-slate-600"
          placeholder="Write message here..."
          name="message"
          required
          disabled={isSending}
        ></textarea>
        <Button isSending={isSending} />
        <span className="text-red-500 w-full font-semibold">
          {errorSending && errorSending}
        </span>
      </form>
    </div>
  );
};

export default Messanger;
