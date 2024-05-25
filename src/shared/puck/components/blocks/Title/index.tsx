import React from "react";

import { ComponentConfig } from "@measured/puck";
import { MantineSize, Title as MTitle, StyleProp, TitleOrder, TitleSize } from "@mantine/core";
import { DefaultFieldsTypographyProps } from "@/shared/puck/model";
import {
  defaultSizeFields,
  defaultTypographyFields,
} from "@/shared/puck/config/fields";
import { ConfiguratorNumberControl } from "../../config/controls";
const { fz, size, ...fields } = defaultTypographyFields;

export interface TitleProps
  extends Omit<DefaultFieldsTypographyProps, "fz" | "size"> {
  title?: string;
  w?: StyleProp<MantineSize | (string & {}) | number>;
  order?: TitleOrder;
  size?: TitleSize;
  // color?: MantineColor;
}
export const Title: ComponentConfig<TitleProps> = {
  fields: {
    title: { type: "textarea" },
    order: {
      label: "Order",
      type: "custom",
      render: ({ name, onChange, value }) => {
        return (
          <ConfiguratorNumberControl
            value={Number(value ?? "")}
            onChange={(value) => onChange(value as any)}
            prop={"Order"}
            min={1}
            max={6}
          />
        );
      },
    },
    w: defaultSizeFields.w,
    size: {
      label: "Size",
      type: "select",
      options: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
        { label: "H3", value: "h3" },
        { label: "H4", value: "h4" },
        { label: "H5", value: "h5" },
        { label: "H6", value: "h6" },
      ],
    },
    ...fields,
  },
  defaultProps: {
    title: "Title",
    size: "h1",
  },
  render: ({ title, ...props }) => {
    return <MTitle {...props}>{title}</MTitle>;
  },
};
