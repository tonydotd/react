import { useTodosContext } from "../hooks/useTodosContext";
import { TodoItemProps } from "../models/todo";

const TodoItem = ({ id, text }: TodoItemProps) => {
  const { deleteTodo } = useTodosContext();
  function handleDelete() {
    deleteTodo(id);
  }
  return (
    <li onClick={handleDelete}>
      {id} - {text}
    </li>
  );
};

export default TodoItem;
