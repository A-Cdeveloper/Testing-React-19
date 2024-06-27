// eslint-disable-next-line react/prop-types
const Button = ({ isSending }) => {
  return (
    <button className="p-3 text-white  bg-orange-700   rounded-lg self-center">
      {isSending ? "Sending..." : "Send"}
    </button>
  );
};

export default Button;
