import React from "react";
import Task from "./Task";
import { Flex } from "@chakra-ui/react";
import TaskCard from "./components/TaskCard";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <Flex direction="column" color="#475467">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Flex>
  );
};

export default TaskList;
