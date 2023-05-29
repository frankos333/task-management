import React from "react";
import { Task } from "../Task";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  Flex,
  Button,
  Text,
  Divider,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Textarea,
} from "@chakra-ui/react";
import AddTaskIcon from "./AddTaskIcon";
import TaskInfoBadge from "./TaskInfoBadge";
import { formatDate } from "../utils";
import TaskCard from "./TaskCard";
import DeleteModal from "./DeleteModal";

interface TaskInfoProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

const tabStyles = {
  color: "#667085",
  fontWeight: "600",
  fontSize: "14px",
};
const selectedTabStyles = {
  color: "#1D2939",
  fontWeight: "500",
  borderBottom: "2px",
  borderColor: "#1D2939",
};
const TaskInfoModal: React.FC<TaskInfoProps> = ({ task, isOpen, onClose }) => {
  const badgeItems = [
    { label: "Status", value: task.status },
    {
      label: "Date created",
      value: formatDate(task.createdDate, "MMM DD, yyyy h:mm A"),
    },
    { label: "Assignee", value: task.assignee },
  ];

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="720px">
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
      <ModalContent w="720px" bg="gray.50" p="6">
        <ModalHeader>
          <Flex alignItems="center" mb="4">
            <AddTaskIcon boxSize="16" bg="#0F52BA" borderRadius="10" mr="6" />
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
              <Flex fontSize="12px" color="#667085" fontWeight="500">
                {formatDate(task.createdDate, "MMM DD, yyyy h:mm A")}
              </Flex>
            </Flex>
          </Flex>
          <Divider color="gray.300" borderBottom="2px" />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="12" mb="6">
            {badgeItems.map((item, idx) => (
              <TaskInfoBadge key={idx} label={item.label} value={item.value} />
            ))}
          </Flex>
          <Text color="#98A2B3" fontSize="12px" fontWeight="500" mb="2">
            Description
          </Text>
          <Textarea
            bg="#EEF2F8"
            borderRadius="6"
            fontSize="14px"
            fontWeight="500"
            color="#475467"
            minH="134"
            mb="10"
            value={task.description}
            readOnly
          />
          <Tabs variant="unstyled">
            <TabList>
              <Tab style={tabStyles} _selected={selectedTabStyles}>
                Related Tasks
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {task.linkedTasks?.length
                  ? task.linkedTasks.map((linkedTask, idx) => {
                      return (
                        <TaskCard
                          task={linkedTask}
                          key={`${linkedTask._id}-${idx}`}
                          related={true}
                        />
                      );
                    })
                  : "There are no related tasks"}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <DeleteModal id={task._id} />
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskInfoModal;
