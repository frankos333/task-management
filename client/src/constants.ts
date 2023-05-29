import { Task } from "./Task";

export type TaskForm = {
  assignee: string;
  status: string;
  title: string;
  description: string;
  linkedTasks?: Task[];
};

export const TASK_BASE_FORM: TaskForm = {
  assignee: "",
  status: "open",
  title: "",
  description: "",
  linkedTasks: [],
};
