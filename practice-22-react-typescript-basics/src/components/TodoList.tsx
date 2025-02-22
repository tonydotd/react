import { useTodosContext } from "../hooks/useTodosContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { items } = useTodosContext();
  return (
    <ul>
      {items?.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
