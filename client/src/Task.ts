interface Task {
  id: number;
  assignee: string;
  status: string;
  title: string;
  description: string;
  created_date: string; 
  linkedTasks?: Task[];
}

export default Task;
