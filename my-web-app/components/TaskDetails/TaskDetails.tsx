import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextInput,
  TextArea,
  Select,
  Option,
  Button,
} from "@admiral-ds/react-ui";
import { TaskContext } from "../../context/TasksContext";
import type { Task } from "../../models/Task";

const categories: Task["category"][] = [
  "Bug",
  "Feature",
  "Documentation",
  "Refactor",
  "Test",
];
const statuses: Task["status"][] = ["To Do", "In Progress", "Done"];
const priorities: Task["priority"][] = ["Low", "Medium", "High"];

export const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);
  const [form, setForm] = useState<Task>(
    task ?? {
      id: "",
      title: "",
      description: "",
      category: "Bug",
      status: "To Do",
      priority: "Low",
    }
  );

  if (!task) return <div>Задача не найдена</div>;

  const handleChange = (field: keyof Task, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const updated = tasks.map((t) => (t.id === form.id ? form : t));
    setTasks(updated);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2>Редактировать задачу</h2>

      <TextInput
        value={form.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Заголовок"
      />

      <TextArea
        value={form.description}
        onChange={(e) => handleChange("description", e.target.value)}
        placeholder="Описание"
      />

      <Select
        value={form.category}
        onChange={(e) => handleChange("category", e.target.value)}
        placeholder="Категория"
      >
        {categories.map((c) => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>

      <Select
        value={form.status}
        onChange={(e) => handleChange("status", e.target.value)}
        placeholder="Статус"
      >
        {statuses.map((s) => (
          <Option key={s} value={s}>
            {s}
          </Option>
        ))}
      </Select>

      <Select
        value={form.priority}
        onChange={(e) => handleChange("priority", e.target.value)}
        placeholder="Приоритет"
      >
        {priorities.map((p) => (
          <Option key={p} value={p}>
            {p}
          </Option>
        ))}
      </Select>

      <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
        <Button appearance="secondary" onClick={() => navigate("/")}>
          Отмена
        </Button>
        <Button appearance="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
