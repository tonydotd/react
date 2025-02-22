import { useState } from "react";
import { TodosContextProviderProps, TodoType } from "../models/todo";
import { TodosContext } from "./TodosContext";

export const TodosContextProvider = ({
  children,
}: TodosContextProviderProps) => {
  const [items, setItems] = useState<TodoType[]>([]);

  const addTodo = (text: string) => {
    console.log("addtodo");
    setItems((prev) => [...prev, { id: Date.now().toString(), text }]);
  };

  const deleteTodo = (id: string) => {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ items, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
