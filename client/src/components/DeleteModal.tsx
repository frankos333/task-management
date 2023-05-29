import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ContextInterface, TasksContext } from "../context/tasks";

interface DeleteModalProps {
  id: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTaskById } = useContext(TasksContext) as ContextInterface;

  const onConfirm = () => {
    deleteTaskById(id);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} mr="2" bg="red.400" _hover={{ bg: "red.500" }}>
        Delete
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2" fontSize="16px" fontWeight="400">
              Are you sure you want to delete this task?
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr="2">
              Cancel
            </Button>
            <Button onClick={onConfirm} colorScheme="blue">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
