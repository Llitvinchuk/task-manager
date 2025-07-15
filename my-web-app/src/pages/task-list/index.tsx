import { useNavigate } from 'react-router-dom';
import { useTaskStore } from '../../entities/task/models/taskStore';
import { TaskItem } from '../task-item/TaskItem';
import styles from './TaskList.module.css';
import { Button } from '@admiral-ds/react-ui';
import type { Task } from '../../entities/task/models/Task';

export const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);
  const updateTask = useTaskStore(state => state.updateTask);
  const deleteTask = useTaskStore(state => state.deleteTask);
  const navigate = useNavigate();

  const statuses: Task['status'][] = ['To Do', 'In Progress', 'Done'];

  const updateTaskStatus = (id: string, direction: 'left' | 'right') => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const index = statuses.indexOf(task.status);
    const newIndex = direction === 'left' ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= statuses.length) return;

    updateTask({ ...task, status: statuses[newIndex] });
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
                  onDelete={deleteTask}
                  onStatusChange={updateTaskStatus}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
