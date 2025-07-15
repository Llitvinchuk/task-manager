import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';
import { TaskList } from '@pages/task-list';
import { TaskForm } from '@pages/task-form';
import styles from './App.module.css';

export const App = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      {FontsVTBGroup({})}
      <DropdownProvider>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Task Manager</h1>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/task/:id" element={<TaskForm />} />
            <Route path="/task/new" element={<TaskForm />} />
          </Routes>
        </div>
      </DropdownProvider>
    </ThemeProvider>
  );
};
