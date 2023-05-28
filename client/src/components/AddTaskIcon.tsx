import { Icon, IconProps } from "@chakra-ui/react";

const TaskIcon = (props: IconProps) => (
  <Icon viewBox="-14 0 64 32"  {...props}>
    <path
      fill="#0F52BA"
      stroke="#DEE5F0"
      stroke-width="2"
      d="M18 11.333v13.334M11.333 18h13.334m10 0c0 9.205-7.462 16.667-16.667 16.667-9.205 0-16.667-7.462-16.667-16.667C1.333 8.795 8.795 1.333 18 1.333c9.205 0 16.667 7.462 16.667 16.667z"
    />
  </Icon>
);

export default TaskIcon;
