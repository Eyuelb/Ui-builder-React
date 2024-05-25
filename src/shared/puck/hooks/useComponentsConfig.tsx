import { Config } from "@measured/puck";
import { ComponentConfigProps, ShellProps } from "../model";
import Shell from "../components/shell";
import { Flex } from "../components/blocks/Flex";
import { Text } from "../components/blocks/Text";
import { Button } from "../components/blocks/Button";
import { Title } from "../components/blocks/Title/index";
import { Space } from "../components/blocks/Space/index";
import {Header} from "../components/blocks/Header";

import { defaultFields, defaultSizeFields } from "../config/fields";

export const useComponentsConfig = (): Config<
  ComponentConfigProps,
  ShellProps
> => {
  return {
    root: {

    },
    categories: {
      layout: {
        components: ["Flex"],
      },
      typography: {
        components: ["Title", "Text"],
      },
      interactive: {
        title: "Actions",
        components: ["Button"],
      },
    },
    components: {
      Flex,
      Text,
      Button,
      Title,
      Space,
      Header
    },
  };
};
