import React from "react";

import { ComponentConfig } from "@measured/puck";
import { MantineSize, Text as MText, StyleProp } from "@mantine/core";
import { DefaultFieldsTypographyProps } from "@/shared/puck/model";
import {
  defaultSizeFields,
  defaultTypographyFields,
} from "@/shared/puck/config/fields";

export interface TextProps extends DefaultFieldsTypographyProps {
  text?: string;
  w?: StyleProp<MantineSize | (string & {}) | number>;
  // color?: MantineColor;
}
export const Text: ComponentConfig<TextProps> = {
  fields: {
    text: { type: "textarea" },
    w: defaultSizeFields.w,
    ...defaultTypographyFields,
  },
  defaultProps: {
    text: "Text",
    fz: "xs",
  },
  render: ({ text, ...props }) => {
    return <MText {...props}>{text}</MText>;
  },
};
