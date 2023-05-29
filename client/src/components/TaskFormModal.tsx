import { useReducer, useRef, useState, useEffect, useContext } from "react";
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
  Textarea,
  Input,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { MultiSelect } from "react-multi-select-component";
import AddTaskIcon from "./AddTaskIcon";
import { TASK_BASE_FORM, TaskForm } from "../constants";
import { formatDate } from "../utils";
import { ContextInterface, TasksContext } from "../context/tasks";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const TaskFormModal: React.FC<TaskModalProps> = ({ isOpen, onClose }) => {
  const [nextStep, setNextStep] = useState(false);
  const [selected, setSelected] = useState([]);
  const [task, updateTask] = useReducer(
    (prev: TaskForm, next: TaskForm) => ({ ...prev, ...next }),
    TASK_BASE_FORM
  );
  const titleRef = useRef(null);
  const { tasks, createTask } = useContext(TasksContext) as ContextInterface;

  const options = tasks.map(({ _id, title }) => ({ label: title, value: _id }));
  const isBtnDisabled = !task.assignee || !task.title;
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      updateTask(TASK_BASE_FORM);
      setNextStep(false);
    }
  }, [isOpen]);

  const onSave = () => {
    let linkedTasks;
    if (selected) {
      linkedTasks = tasks.filter(({ _id }) =>
        selected.find(({ value }) => value === _id)
      );
    }
    createTask({ ...task, linkedTasks });
    onClose();
  };

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={handleClose}
      size="720px"
      initialFocusRef={titleRef}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
      <ModalContent w="720px" bg="gray.50" p="6">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignItems="center" mb="4" justifyContent="space-between">
            <Flex>
              <AddTaskIcon boxSize="16" bg="#0F52BA" borderRadius="10" mr="6" />
              <Flex direction="column">
                <Input
                  placeholder="Enter task title"
                  size="sm"
                  mb="1"
                  minWidth="250px"
                  ref={titleRef}
                  value={task.title}
                  onChange={(e) =>
                    updateTask({ ...task, title: e.target.value })
                  }
                />
                <Text color="#667085" fontWeight="400" fontSize="12px">
                  {formatDate(new Date().toString(), "MMM DD, yyyy h:mm A")}
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems="center">
              <Text
                fontSize="13px"
                fontWeight="500"
                color="#98A2B3"
                whiteSpace="nowrap"
              >
                Assign to:
              </Text>
              <Select
                className="assignee-select"
                placeholder="Unassigned"
                border="none"
                cursor="pointer"
                _focusVisible={{ border: "none" }}
                onChange={(e) =>
                  updateTask({ ...task, assignee: e.target.value })
                }
              >
                <option value="Adam" color="#475467">
                  Adam
                </option>
                <option value="Muki">Muki</option>
                <option value="Nadav">Nadav</option>
                <option value="Jenny">Jenny</option>
                <option value="Messi">Messi</option>
              </Select>
            </Flex>
          </Flex>
          <Divider color="gray.300" borderBottom="2px" mb="10" />
          {nextStep && (
            <>
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
                onChange={(e) =>
                  updateTask({ ...task, description: e.target.value })
                }
              ></Textarea>
              <Tabs variant="unstyled">
                <TabList>
                  <Tab
                    style={{
                      color: "#667085",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    _selected={{
                      color: "#1D2939",
                      fontWeight: "500",
                      borderBottom: "2px",
                      borderColor: "#1D2939",
                    }}
                  >
                    Related Tasks
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <div>
                      <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                        hasSelectAll={false}
                      />
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          {(!nextStep && (
            <Button
              onClick={() => setNextStep(true)}
              mr="1.5"
              minW="100px"
              borderRadius="6"
              fontSize="13px"
              fontWeight="500"
              background="blue.500"
              color="white"
              isDisabled={isBtnDisabled}
              _hover={{ background: "#0F52BA" }}
            >
              Next
            </Button>
          )) || (
            <Button
              onClick={onSave}
              mr="1.5"
              minW="100px"
              borderRadius="6"
              fontSize="13px"
              fontWeight="500"
              background="blue.500"
              color="white"
              isDisabled={isBtnDisabled}
              _hover={{ background: "#0F52BA" }}
            >
              Save
            </Button>
          )}
          <Button
            onClick={onClose}
            minW="100px"
            borderRadius="6"
            fontSize="13px"
            fontWeight="500"
            border="1px"
            borderColor="#DFE3EB"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskFormModal;
