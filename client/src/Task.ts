export type Task = {
  _id: string;
  assignee: string;
  status: string;
  title: string;
  description: string;
  createdDate: string;
  linkedTasks?: Task[];
};
