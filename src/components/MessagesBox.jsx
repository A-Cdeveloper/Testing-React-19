/* eslint-disable react/prop-types */
import { messageDate } from "../utils/dates";

// eslint-disable-next-line react/prop-types
const MessagesBox = ({ messages, isLoading, error, isSending }) => {
  let content;

  if (isLoading) {
    content = <h2 className="text-center text-white">Loading messages...</h2>;
  }

  if (error) {
    content = <h2 className="text-center text-white">{error}</h2>;
  }

  if (!isLoading && !error && messages.length !== 0) {
    content = (
      <ul className="space-y-3">
        {messages.map((message) => {
          return (
            <li className="" key={message.id}>
              <span className="block font-semibold text-xs mb-1 text-white text-right italic">
                {messageDate(message.time)}
              </span>
              <div className="bg-yellow-100  rounded-lg px-3 py-4 pb-6 relative font-semibold">
                {message.message}
                <span className="block font-semibold text-xs mb-1 absolute right-4 bottom-1">
                  {/* {isSending ? "Sending..." : "Delivered"} */}
                  Delivered
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="flex flex-1 flex-col flex-wrap h-full justify-end bg-slate-700 rounded-lg text-sm  border border-1 border-slate-200">
      <div className="overflow-scroll p-5 ">{content}</div>
    </div>
  );
};

export default MessagesBox;
