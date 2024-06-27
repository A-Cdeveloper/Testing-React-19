import Button from "./ui/Button";

// eslint-disable-next-line react/prop-types
const InputBox = () => {
  return (
    <form className="w-full sm:self-end sm:flex-1 flex space-x-2">
      <textarea
        className=" w-full p-3 focus:outline-none border border-1"
        placeholder="Write message here..."
        name="message"
        required
      ></textarea>
      <Button />
    </form>
  );
};

export default InputBox;
