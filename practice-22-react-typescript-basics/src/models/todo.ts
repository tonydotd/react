import { ReactNode } from "react";

export type TodoType = {
  id: string;
  text: string;
};

export type TodoItemProps = {
  id: string;
  text: string;
};

export type TodosContextType = {
  items: TodoType[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export type TodosContextProviderProps = {
  children: ReactNode;
};
