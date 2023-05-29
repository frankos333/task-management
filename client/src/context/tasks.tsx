import { createContext, useState, useCallback } from "react";
import axios from "axios";
import { Task } from "../Task";
import { TaskForm } from "../constants";

type ProviderProps = {
  children: React.ReactNode;
};

export type ContextInterface = {
  tasks: Task[];
  totalPages: number;
  currPage: number;
  isLoading: boolean;
  fetchTasks: () => Promise<void>;
  deleteTaskById: (id: string) => Promise<void>;
  createTask: (task: TaskForm) => Promise<void>;
  editTask: (id: string, name: string) => Promise<void>;
};

const BASE_URL = "http://localhost:5050/api";
export const TasksContext = createContext<ContextInterface | null>(null);

const TasksProvider: React.FC<ProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currPage, setCurrPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BASE_URL}?page=${currPage}`);
      if (currPage > 0) {
        setTasks((tasks) => [...tasks, ...data.items]);
      } else {
        setTasks(data.items);
      }
      setTotalPages(data.totalPages);
      setCurrPage((prevPage) => prevPage + 1);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [currPage]);

  const deleteTaskById = async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(updatedTasks);
  };

  const createTask = async (task: TaskForm) => {
    const { data } = await axios.post(BASE_URL, task);
    const updatedTasks = [...tasks, data];
    setTasks(updatedTasks);
  };

  const editTask = async (id: string, name: string) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, { name });
    const updatedTasks = tasks.map((todo) => (todo._id === id ? data : todo));
    setTasks(updatedTasks);
  };

  const valueToShare = {
    tasks,
    totalPages,
    currPage,
    isLoading,
    fetchTasks,
    deleteTaskById,
    createTask,
    editTask,
  };

  return (
    <>
      <TasksContext.Provider value={valueToShare}>
        {children}
      </TasksContext.Provider>
    </>
  );
};

export default TasksProvider;
