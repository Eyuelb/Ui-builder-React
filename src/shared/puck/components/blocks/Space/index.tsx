import React from "react";

import { ComponentConfig } from "@measured/puck";
import { Space as MSpace } from "@mantine/core";

export type SpaceProps = {
  w?: number | string;
  h?: number | string;
};

export const Space: ComponentConfig<SpaceProps> = {
  label: "Space",
  fields: {
    w: {
      type: "text",
      label: 'Width',
    },
    h: {
      type: "text",
      label: 'Height',
    },
  },
  defaultProps: {
    w: "100%",
    h: 20
  },
  render: ({ w,h }) => {
    return <MSpace w={w} h={h} />;
  },
};
