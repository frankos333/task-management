import React from "react";
import { Task } from "./Task";
import { Flex } from "@chakra-ui/react";
import TaskCard from "./components/TaskCard";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <Flex direction="column" color="#475467">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} related={false} />
      ))}
    </Flex>
  );
};

export default TaskList;
