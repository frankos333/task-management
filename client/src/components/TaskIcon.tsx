import { Icon, IconProps } from "@chakra-ui/react";

const TaskIcon = (props: IconProps) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <path
      fill="#0F52BA"
      stroke="#DEE5F0"
      strokeWidth="2"
      d="M25.333 28.667L32 35.333l6.667-6.666M18.667 17h26.666a3.334 3.334 0 013.334 3.333v10a16.667 16.667 0 01-33.334 0v-10A3.333 3.333 0 0118.667 17z"
    />
  </Icon>
);

export default TaskIcon;
