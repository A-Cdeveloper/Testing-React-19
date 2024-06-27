// eslint-disable-next-line react/prop-types
// import { useFormStatus } from "react-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ isPending }) => {
  // const { pending } = useFormStatus();
  return (
    <button className="p-3 text-white  bg-orange-700   rounded-lg self-center">
      {isPending ? "Sending..." : "Send"}
    </button>
  );
};

export default Button;
