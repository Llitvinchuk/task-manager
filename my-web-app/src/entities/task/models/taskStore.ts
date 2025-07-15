import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { Task } from './Task';

interface TaskStore {
  tasks: Task[];
  createTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  deleteTask: (id: string) => void;
  updateTask: (updatedTask: Task) => void;
  getTaskById: (id: string) => Task | undefined;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],

      createTask: taskData => {
        const newTask: Task = {
          ...taskData,
          id: uuidv4(),
          createdAt: new Date().toISOString(),
        };
        set(state => ({ tasks: [newTask, ...state.tasks] }));
      },

      deleteTask: id => {
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id),
        }));
      },

      updateTask: updatedTask => {
        set(state => ({
          tasks: state.tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)),
        }));
      },

      getTaskById: id => {
        return get().tasks.find(task => task.id === id);
      },
    }),
    {
      name: 'task-storage',
    },
  ),
);
