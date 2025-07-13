import type { Task } from "../models/Task";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Обновить иконки",
    description: "Добавить кастомные иконки кнопок",
    category: "Refactor",
    status: "To Do",
    priority: "Low",
  },
  {
    id: "2",
    title: "Сделать drag-and-drop между колонками",
    description: "Использовать библиотеку react-beautiful-dnd",
    category: "Feature",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "3",
    title: "Добавить адаптивную вёрстку",
    description: "Поддержка мобильных и планшетных экранов",
    category: "Documentation",
    status: "Done",
    priority: "Medium",
  },
];
