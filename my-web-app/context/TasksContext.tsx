import { createContext } from "react";
import type { Task } from "../models/Task";

export type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: () => void;
  deleteTask?: (id: string) => void;
  updateTask?: (task: Task) => void;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => {},
  addTask: () => {},
});
