/* eslint-disable react/prop-types */

import { messageDate } from "../utils/dates";

const SingleMessage = ({ message }) => {
  const { id, message: messageText, time, status } = message;

  return (
    <li className="" key={id} id={id}>
      <span className="block font-semibold text-xs mb-1 text-white text-right italic">
        {status ? `Delivered ${messageDate(time)}` : "Sending..."}
      </span>
      <div
        className={`${"rounded-lg px-3 py-4 pb-6 relative font-semibold bg-yellow-200"} ${
          !status ? "bg-opacity-50" : ""
        }`}
      >
        {messageText}
      </div>
    </li>
  );
};

export default SingleMessage;
