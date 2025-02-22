import { createContext } from "react";
import { TodosContextType } from "../models/todo";

export const TodosContext = createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});
