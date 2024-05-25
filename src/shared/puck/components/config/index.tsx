import { Config } from "@measured/puck";
import { ComponentConfigProps, ShellProps } from "../../model";
import Shell from "../shell";
import { Flex } from "../blocks/Flex";
import { Text } from "../blocks/Text";
import { Button } from "../blocks/Button";

export const ComponentConfig: Config<ComponentConfigProps, ShellProps> = {
  root: {
    defaultProps: {
      title: "My Page",
    },
    render: Shell,
  },
  categories: {
    layout: {
      components: [],
    },
    typography: {
      components: [],
    },
    interactive: {
      title: "Actions",
      components: [],
    },
  },
  components: { Flex, Text, Button },
};
