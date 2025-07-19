import { useTaskStore } from '@/entities/task/models/taskStore';
import type { Task } from '@/entities/task/models/Task';

export const getTasks = async (filters?: { title?: string; date?: string }): Promise<Task[]> => {
  const tasks = useTaskStore.getState().tasks;
  if (!filters) return tasks;

  return tasks.filter(task => {
    const titleMatch = filters.title
      ? task.title.toLowerCase().includes(filters.title.toLowerCase())
      : true;
    const dateMatch = filters.date ? task.createdAt.startsWith(filters.date) : true;
    return titleMatch && dateMatch;
  });
};

export const getTaskById = async (id: string): Promise<Task | undefined> => {
  return useTaskStore.getState().getTaskById(id);
};

export const createTask = async (data: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {
  const newTask: Task = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  useTaskStore.getState().createTask(data);
  return newTask;
};

export const updateTask = async (
  id: string,
  updates: Partial<Omit<Task, 'id' | 'createdAt'>>,
): Promise<Task | undefined> => {
  const task = useTaskStore.getState().getTaskById(id);
  if (!task) return undefined;

  const updatedTask: Task = { ...task, ...updates };
  useTaskStore.getState().updateTask(updatedTask);
  return updatedTask;
};

export const deleteTask = async (id: string): Promise<void> => {
  useTaskStore.getState().deleteTask(id);
};
