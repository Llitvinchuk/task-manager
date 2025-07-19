import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextInput, TextArea, Select, Option, Button } from '@admiral-ds/react-ui';
import { v4 as uuidv4 } from 'uuid';
import type { Task } from '../../entities/task/models/Task';
import * as api from '@/shared/api/fakeApi';
import styles from './TaskForm.module.css';

const categories: Task['category'][] = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
const statuses: Task['status'][] = ['To Do', 'In Progress', 'Done'];
const priorities: Task['priority'][] = ['Low', 'Medium', 'High'];

export const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState<Task | null>(null);
  const [titleError, setTitleError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        const task = await api.getTaskById(id);
        if (task) setForm(task);
      } else {
        setForm({
          id: uuidv4(),
          title: '',
          description: '',
          category: 'Feature',
          status: 'To Do',
          priority: 'Medium',
          createdAt: new Date().toISOString(),
        });
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (field: keyof Task, value: string) => {
    if (!form) return;
    setForm(prev => ({ ...prev!, [field]: value }));
    if (field === 'title' && value.trim()) {
      setTitleError(null);
    }
  };

  const handleSubmit = async () => {
    if (!form) return;

    if (!form.title.trim()) {
      setTitleError('Заголовок обязателен');
      return;
    }

    try {
      if (id) {
        await api.updateTask(id, form);
      } else {
        await api.createTask(form);
      }
      navigate('/');
    } catch (error) {
      console.error('Ошибка при сохранении задачи:', error);
    }
  };

  if (!form) return null;

  return (
    <div className={styles.formContainer}>
      <h2>{id ? 'Редактировать задачу' : 'Создать задачу'}</h2>

      <div>
        <TextInput
          placeholder="Заголовок"
          value={form.title}
          status={titleError ? 'error' : undefined}
          onChange={e => handleChange('title', e.target.value)}
        />
        {titleError && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{titleError}</div>
        )}
      </div>

      <TextArea
        placeholder="Описание"
        value={form.description}
        onChange={e => handleChange('description', e.target.value)}
      />

      <Select value={form.category} onChange={e => handleChange('category', e.target.value)}>
        {categories.map(c => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>

      <Select value={form.status} onChange={e => handleChange('status', e.target.value)}>
        {statuses.map(s => (
          <Option key={s} value={s}>
            {s}
          </Option>
        ))}
      </Select>

      <Select value={form.priority} onChange={e => handleChange('priority', e.target.value)}>
        {priorities.map(p => (
          <Option key={p} value={p}>
            {p}
          </Option>
        ))}
      </Select>

      <div className={styles.actions}>
        <Button appearance="secondary" onClick={() => navigate('/')}>
          Отмена
        </Button>
        <Button appearance="primary" onClick={handleSubmit}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
