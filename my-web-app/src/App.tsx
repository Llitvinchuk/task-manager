import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  DropdownProvider,
  FontsVTBGroup,
  LIGHT_THEME,
  TextInput,
  TextArea,
  Select,
  Option,
  Button,
} from "@admiral-ds/react-ui";
import { TaskContext } from "../context/TasksContext";
import { initialTasks } from "../data/initialTasks";
import { TaskDetails } from "../components/TaskDetails/TaskDetails";
import { TaskList } from "../components/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../models/Task";
import styles from "./App.module.css";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("Medium");
  const [category, setCategory] = useState<Task["category"]>("Feature");

  const addTask = (): void => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: "To Do",
      priority,
      category,
    };
    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      {FontsVTBGroup({})}
      <DropdownProvider>
        <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Task Manager</h1>
            <div className={styles.formCard}>
              <div className={styles.formRow}>
                <TextInput
                  placeholder="Task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ flex: 2 }}
                />
                <Select
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value as Task["priority"])
                  }
                  style={{ flex: 1 }}
                >
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="High">High</Option>
                </Select>
                <Select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as Task["category"])
                  }
                  style={{ flex: 1 }}
                >
                  <Option value="Bug">Bug</Option>
                  <Option value="Feature">Feature</Option>
                  <Option value="Documentation">Documentation</Option>
                  <Option value="Refactor">Refactor</Option>
                  <Option value="Test">Test</Option>
                </Select>
              </div>
              <TextArea
                placeholder="Task description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginBottom: 16 }}
              />
              <Button
                appearance="primary"
                onClick={addTask}
                style={{ width: "100%", marginTop: 16 }}
              >
                Add Task
              </Button>
            </div>

            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/task/:id" element={<TaskDetails />} />
            </Routes>
          </div>
        </TaskContext.Provider>
      </DropdownProvider>
    </ThemeProvider>
  );
};
