/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css";
import { Button as MButton } from "@mantine/core";
import {
  DefaultFieldsActionProps,
  DefaultFieldsSizeProps,
} from "@/shared/puck/model";
import { defaultFields, defaultSizeFields } from "@/shared/puck/config/fields";

export interface ButtonProps
  extends DefaultFieldsActionProps,
    DefaultFieldsSizeProps {
  label: string;
}

export const Button: ComponentConfig<ButtonProps> = {
  label: "Button ",
  fields: {
    label: {
      label: "Name",
      type: "text",
    },
    variant: defaultFields.variant,
    ...defaultSizeFields,
  },
  defaultProps: {
    label: "Button",
    variant: "default",
  },
  render: ({ variant, label,...p }) => {
    return <MButton variant={variant} {...p}>{label}</MButton>;
  },
};
