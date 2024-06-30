/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";

// eslint-disable-next-line react/prop-types
const MessagesBox = ({ messages, isLoading, error, isPending }) => {
  const endOfMessagesRef = useRef(null);
  let content;

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) {
    content = (
      <h2 className="text-center text-white pb-5">Loading messages...</h2>
    );
  }

  if (error) {
    content = <h2 className="text-center text-white pb-5">{error}</h2>;
  }

  if (!isLoading && !error && messages.length !== 0) {
    content = (
      <>
        <div className="overflow-y-scroll">
          <ul className="space-y-3 p-5">
            {messages.map((message) => {
              return (
                <SingleMessage
                  key={message.id}
                  message={message}
                  isPending={isPending}
                />
              );
            })}
          </ul>
          <div ref={endOfMessagesRef} />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-1 flex-col flex-wrap h-full justify-end bg-slate-700 rounded-lg text-sm  border border-1 border-slate-200">
      {content}
    </div>
  );
};

export default MessagesBox;
