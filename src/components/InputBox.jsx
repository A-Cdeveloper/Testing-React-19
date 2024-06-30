import Button from "./ui/Button";
import { useActionState } from "react";
import { useAddNewMessage } from "../hooks/useAddNewMessage";

// eslint-disable-next-line react/prop-types
const InputBox = () => {
  const { isAddNewLoading, addNewMessage } = useAddNewMessage();
  //const [optimisticMessages, setOptimisticMessage] = useOptimistic(messages);

  async function formActionNewMessage(prevFormData, formData) {
    // setOptimisticMessage((state) => {
    //   return [
    //     ...state,
    //     {
    //       id: Math.random(),
    //       message: formData.get("message"),
    //       time: Date.now(),
    //       status: 0,
    //     },
    //   ];
    // });
    addNewMessage({
      message: formData.get("message"),
    });
  }

  const [error, formAction, isPending] = useActionState(
    formActionNewMessage,
    null
  );

  return (
    <form
      className="w-full sm:self-end sm:flex-1 flex flex-wrap space-x-2"
      action={formAction}
    >
      <textarea
        className=" flex-1 p-3 focus:outline-none border border-1 disabled:bg-slate-100 disabled:text-slate-600"
        placeholder="Write message here..."
        name="message"
        required
      ></textarea>
      <Button isPending={isAddNewLoading} />
      <span className="text-red-500 w-full font-semibold">
        {error && error}
      </span>
    </form>
  );
};

export default InputBox;
