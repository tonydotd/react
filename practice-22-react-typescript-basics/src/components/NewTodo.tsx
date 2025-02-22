import { useRef } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

const NewTodo = () => {
  const { addTodo } = useTodosContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function handlesubmit(e: React.FormEvent) {
    e.preventDefault();
    const inputVal = inputRef.current?.value?.trim();

    if (!inputVal) {
      return;
    }

    addTodo(inputVal);
    inputRef.current!.value = "";
  }

  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" name="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
