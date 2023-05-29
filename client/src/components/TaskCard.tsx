import React, { useEffect } from "react";
import { Task } from "../Task";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TaskIcon from "./TaskIcon";
import { useDisclosure } from "@chakra-ui/react";
import TaskInfoModal from "./TaskInfoModal";
import { formatDate } from "../utils";

interface TaskCardProps {
  task: Task;
  related: Boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, related }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = related
    ? { width: "600px" }
    : { width: "664px", _hover: { shadow: "md" } };
  return (
    <Box
      style={styles}
      shadow="xs"
      borderRadius="10"
      p="8"
      mb="4"
      cursor="pointer"
      onClick={onOpen}
    >
      <TaskInfoModal isOpen={isOpen} task={task} onClose={onClose} />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" flex="2">
          <TaskIcon boxSize="16" bg="#0F52BA" borderRadius="10" mr="6" />
          <Flex direction="column">
            <Text
              color="#101828"
              fontWeight="600"
              fontSize="14px"
              mb="1"
              _firstLetter={{ textTransform: "uppercase" }}
            >
              {task.title}
            </Text>
            <Flex fontSize="12px" color="#98A2B3">
              <Text
                fontWeight="600"
                _firstLetter={{ textTransform: "uppercase" }}
              >
                {task.assignee}
              </Text>
              <Text mx="1">·</Text>
              <Flex fontWeight="500" gap="1">
                Creation Date{" "}
                <Text fontWeight="400" color="#667085">
                  {formatDate(task.createdDate, "MMM DD, yyyy h:mm")}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" flex="1">
          <Divider
            orientation="vertical"
            border="1px"
            h="56px"
            color="#DFE3EB"
          />
          <Button
            variant="outline"
            ml="8"
            mr="6"
            borderRadius="6"
            h="32px"
            fontSize="13px"
            fontWeight="500"
            minW="100px"
            p="6px 12px"
            cursor="default"
            isActive={true}
            colorScheme="#475467"
            borderColor="#DFE3EB"
            className="task-status"
          >
            {task.status}
          </Button>
          <ChevronRightIcon boxSize="24px" cursor="pointer" color="#98A2B3" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TaskCard;
