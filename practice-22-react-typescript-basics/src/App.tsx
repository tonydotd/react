import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./store/TodosContextProvider";

export default function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <TodoList />
    </TodosContextProvider>
  );
}
