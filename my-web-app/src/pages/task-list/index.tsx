import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TaskItem } from '../task-item/TaskItem';
import styles from './TaskList.module.css';
import { Button } from '@admiral-ds/react-ui';
import type { Task } from '../../entities/task/models/Task';
import * as api from '@/shared/api/fakeApi';

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await api.getTasks();
      setTasks(result);
    };
    fetchTasks();
  }, []);

  const navigate = useNavigate();

  const statuses: Task['status'][] = ['To Do', 'In Progress', 'Done'];

  const updateTaskStatus = async (id: string, direction: 'left' | 'right') => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const index = statuses.indexOf(task.status);
    const newIndex = direction === 'left' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= statuses.length) return;

    await api.updateTask(id, { status: statuses[newIndex] });

    const updated = await api.getTasks();
    setTasks(updated);
  };
  const handleDelete = async (id: string) => {
    await api.deleteTask(id);
    const updated = await api.getTasks();
    setTasks(updated);
  };

  return (
    <div className={styles.board}>
      <div className={styles.button}>
        <Button appearance="primary" onClick={() => navigate('/task/new')}>
          Добавить задачу
        </Button>
      </div>
      <div className={styles.row}>
        {statuses.map(status => (
          <div key={status} className={styles.column}>
            <h3 className={styles.columnTitle}>{status}</h3>
            {tasks
              .filter(task => task.status === status)
              .map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={handleDelete}
                  onStatusChange={updateTaskStatus}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
