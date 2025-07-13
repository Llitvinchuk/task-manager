import { useContext } from "react";
import { TaskContext } from "../../context/TasksContext";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";
import type { Task } from "../../models/Task";

export const TaskList = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const statuses: Task["status"][] = ["To Do", "In Progress", "Done"];

  const updateTaskStatus = (id: string, direction: "left" | "right") => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) return task;

      const index = statuses.indexOf(task.status);
      const newIndex = direction === "left" ? index - 1 : index + 1;

      if (newIndex < 0 || newIndex >= statuses.length) return task;

      return {
        ...task,
        status: statuses[newIndex],
      };
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.board}>
      {statuses.map((status) => (
        <div key={status} className={styles.column}>
          <h3 className={styles.columnTitle}>{status}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onStatusChange={updateTaskStatus}
              />
            ))}
        </div>
      ))}
    </div>
  );
};
