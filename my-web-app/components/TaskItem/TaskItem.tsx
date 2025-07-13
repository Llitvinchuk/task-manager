import { useNavigate } from "react-router-dom";
import { Button, Tag } from "@admiral-ds/react-ui";
import styles from "./TaskItem.module.css";
import type { Task } from "../../models/Task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, direction: "left" | "right") => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onStatusChange,
}) => {
  const navigate = useNavigate();

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "Low":
        return "#D1FADF";
      case "Medium":
        return "#FEF9C3";
      case "High":
        return "#FECACA";
      default:
        return "#E5E7EB";
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "To Do":
        return "#FACC15";
      case "In Progress":
        return "#60A5FA";
      case "Done":
        return "#34D399";
      default:
        return "#E5E7EB";
    }
  };

  return (
    <div className={styles.card}>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}

      <div className={styles.tags}>
        <Tag style={{ backgroundColor: getStatusColor(task.status) }}>
          {task.status}
        </Tag>
        <Tag style={{ backgroundColor: getPriorityColor(task.priority) }}>
          {task.priority}
        </Tag>
        <Tag>{task.category}</Tag>
      </div>

      <div className={styles.actions}>
        <Button dimension="s" onClick={() => onStatusChange(task.id, "left")}>
          ←
        </Button>
        <Button dimension="s" onClick={() => navigate(`/task/${task.id}`)}>
          Edit
        </Button>
        <Button
          dimension="s"
          appearance="secondary"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
        <Button dimension="s" onClick={() => onStatusChange(task.id, "right")}>
          →
        </Button>
      </div>
    </div>
  );
};
