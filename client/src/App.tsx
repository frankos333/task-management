import * as React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  theme,
} from "@chakra-ui/react";
import TasksList from "./TasksList";
import tasksData from "./tasks.json";
import Task from "./Task";

export const App: React.FC = () => {
  const tasks: Task[] = tasksData;
  return (
    <ChakraProvider theme={theme}>
      <Container height="100vh" maxW="100vw" centerContent>
        <Box w="100%" h="100%" pl="100px" >
          <Heading p="4">Entro's Task Manager</Heading>
          <Flex gap="20px" alignItems="center" justifyContent="flex-start" mb="5">
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
            >
              New Task
            </Button>
          </Flex>
          <TasksList tasks={tasks} />
        </Box>
      </Container>
    </ChakraProvider>
  );
};
// #F0F2F7
