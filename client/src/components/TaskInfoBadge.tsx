import { Text, Badge, Flex } from "@chakra-ui/react";

interface TaskBadgeProps {
  label: string;
  value: string;
}

const TaskInfoBadge: React.FC<TaskBadgeProps> = ({ label, value }) => (
  <Flex direction="column">
    <Text color="#98A2B3" fontSize="12px" fontWeight="500" mb="2">
      {label}
    </Text>
    <Badge
      color="#475467"
      fontWeight="500"
      fontSize="13px"
      p="2px 12px 2px 12px"
      borderRadius="16"
      className="info-badge"
    >
      {value}
    </Badge>
  </Flex>
);

export default TaskInfoBadge;
