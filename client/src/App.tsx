import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Skeleton,
  Stack,
  VStack,
  theme,
  useDisclosure,
} from "@chakra-ui/react";
import TasksList from "./TasksList";
import TaskFormModal from "./components/TaskFormModal";
import { ContextInterface, TasksContext } from "./context/tasks";

export const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tasks, totalPages, currPage, isLoading, fetchTasks } = useContext(
    TasksContext
  ) as ContextInterface;
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (
        container != null &&
        currPage <= totalPages &&
        container.scrollTop + container.clientHeight >= container.scrollHeight
      ) {
        fetchTasks();
      }
    };
    if (container !== null) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container !== null) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currPage]);
  return (
    <ChakraProvider theme={theme}>
      <Container height="100vh" maxW="100vw" centerContent py="5">
        <Box
          ref={containerRef}
          h="1000px"
          overflowY="scroll"
          border="1px solid"
          borderColor="gray.200"
          p={8}
          minW="800px"
        >
          <TaskFormModal isOpen={isOpen} onClose={onClose} />
          <Flex
            gap="20px"
            alignItems="center"
            justifyContent="flex-start"
            mb="5"
          >
            <Heading fontWeight="600" fontSize="22px" color="#475467">
              Tasks
            </Heading>
            <Button
              colorScheme="#DFE3EB"
              color="#98A2B3"
              variant="outline"
              maxW="100px"
              fontSize="12px"
              fontWeight="500"
              border="1px solid"
              borderColor="#DFE3EB"
              maxH="32px"
              p="6px 34px 6px 12px"
              onClick={onOpen}
            >
              New Task
            </Button>
          </Flex>
          <Stack spacing={4} px="8">
            {isLoading &&
              [...Array(22)].map((_) => (
                <Skeleton
                  key={Math.floor(Math.random() * 10000)}
                  height="20px"
                  borderRadius="4"
                  width="664px"
                />
              ))}
          </Stack>

          <VStack spacing={4}>
            <TasksList tasks={tasks} />
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
};
