import { useState } from "react";

function AddForm({ displayStatus, onAddActivity, addedClass }) {
  const [textareaValue, setTextareaValue] = useState("");
  const submitFormHandler = (e) => {
    e.preventDefault();

    //validate input
    if (textareaValue.trim() === "") return;

    console.log(textareaValue);
    onAddActivity(textareaValue);
    setTextareaValue("");
  };
  return (
    <form
      className={`flex items-center gap-2 pb-3 ${addedClass} ${
        displayStatus ? "block" : "hidden"
      }`}
      onSubmit={submitFormHandler}
    >
      <textarea
        className={`bg-blue-50 border-[1px] border-solid border-blue-200 rounded-md min-w-[250px] sm:min-w-[400px]  p-2 ${addedClass}`}
        rows="3"
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
      />
      <input
        type="submit"
        value="Add"
        className={`cursor-pointer bg-blue-900 px-2 py-1 rounded-lg text-white hover:bg-blue-500 hover:text-black ${addedClass}`}
      />
    </form>
  );
}

export default AddForm;
