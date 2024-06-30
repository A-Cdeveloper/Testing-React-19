import { useMessages } from "../hooks/useMessages";

import MessagesBox from "./MessagesBox";

import InputBox from "./InputBox";

const Messanger = () => {
  const { messages, isPending: isLoading, error } = useMessages();

  return (
    <div className="container mx-auto max-w-4xl flex-col sm:flex-row h-screen flex px-4 py-6 gap-4">
      <MessagesBox messages={messages} isLoading={isLoading} error={error} />
      <InputBox />
    </div>
  );
};

export default Messanger;
