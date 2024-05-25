import { Fields } from "@measured/puck";
import React from "react";
import {
  DefaultFieldsActionProps,
  DefaultFieldsProps,
  DefaultFieldsSizeProps,
  DefaultFieldsTypographyProps,
} from "../model";
import { ColorInput } from "@mantine/core";
import {
  ConfiguratorBooleanControl,
  ConfiguratorColorControl,
  ConfiguratorNumberControl,
  ConfiguratorSizeControl,
} from "../components/config/controls";

interface FieldsType extends DefaultFieldsProps, DefaultFieldsActionProps {}
export const defaultFields: Fields<FieldsType> = {
  bg: {
    type: "custom",
    label: "Background Color",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorColorControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Background Color"}
        />
      );
    },
  },
  align: {
    label: "Align Items",
    type: "select",
    options: [
      { label: "Stretch", value: "stretch" },
      { label: "Flex Start", value: "flex-start" },
      { label: "Flex End", value: "flex-end" },
      { label: "Center", value: "center" },
      { label: "Baseline", value: "baseline" },
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
      { label: "Self-start", value: "self-start" },
      { label: "Self-end", value: "self-end" },
    ],
  },
  justify: {
    label: "Justify Content",
    type: "select",
    options: [
      { label: "Flex Start", value: "flex-start" },
      { label: "Flex End", value: "flex-end" },
      { label: "Center", value: "center" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" },
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
      { label: "Left", value: "left" },
      { label: "Right", value: "right" },
    ],
  },
  direction: {
    label: "Direction",
    type: "select",
    options: [
      { label: "None", value: "" },
      { label: "Row", value: "row" },
      { label: "Row Reverse", value: "row-reverse" },
      { label: "Column", value: "column" },
      { label: "Column Reverse", value: "column-reverse" },
    ],
  },
  gap: {
    type: "custom",
    label: "Gap",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorSizeControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Gap"}
        />
      );
    },
  },
  withBorder: {
    type: "custom",
    label: "Border",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorBooleanControl
          value={Boolean(value ?? false)}
          onChange={(value) => onChange(value as any)}
          prop={"Border"}
        />
      );
    },
  },
  radius: {
    type: "custom",
    label: "Radius",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorSizeControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Radius"}
        />
      );
    },
  },
  shadow: {
    label: "Shadow",
    type: "custom",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorSizeControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Shadow"}
        />
      );
    },
  },
  variant: {
    type: "select",
    options: [
      { label: "Default", value: "default" },
      { label: "Filled", value: "filled" },
      { label: "Light", value: "light" },
      { label: "Outline", value: "outline" },
      { label: "Subtle", value: "subtle" },
      { label: "Transparent", value: "transparent" },
      { label: "White", value: "white" },
    ],
  },
};

export const defaultTypographyFields: Fields<DefaultFieldsTypographyProps> = {
  fw: {
    label: "Font Weight",
    type: "select",
    options: [
      { label: "Thin", value: "100" },
      { label: "Extra Light", value: "200" },
      { label: "Light", value: "300" },
      { label: "Normal", value: "400" },
      { label: "Medium", value: "500" },
      { label: "Semi Bold", value: "600" },
      { label: "Bold", value: "700" },
      { label: "Extra Bold", value: "800" },
      { label: "Black", value: "900" },
    ],
  },
  size: {
    type: "custom",
    label: "Size",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorSizeControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Size"}
        />
      );
    },
  },
  fz: {
    label: "Font Size",
    type: "custom",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorSizeControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Font Size"}
        />
      );
    },
  },
  ta: {
    type: "radio",
    label: "Align",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  c: {
    type: "custom",
    label: "Color",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorColorControl
          value={String(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Color"}
        />
      );
    },
  },
  lineClamp: {
    label: "Line Clamp",
    type: "custom",
    render: ({ name, onChange, value }) => {
      return (
        <ConfiguratorNumberControl
          value={Number(value ?? "")}
          onChange={(value) => onChange(value as any)}
          prop={"Line Clamp"}
          min={1}
          max={8}
        />
      );
    },
  },
  textWrap: {
    type: "select",
    label: "Wrap",
    options: [
      { value: "wrap", label: "Wrap" },
      { value: "balance", label: "Balance" },
      { value: "pretty", label: "Pretty" },
      { value: "stable", label: "Stable" },
    ],
  },
};

export const defaultSizeFields: Fields<DefaultFieldsSizeProps> = {
  w: {
    label: "Width",
    type: "text",
  },
  h: {
    label: "Height",
    type: "text",
  },
  miw: {
    label: "Minimum Width",
    type: "text",
  },
  maw: {
    label: "Max Width",
    type: "text",
  },
  mih: {
    label: "Minimum Height",
    type: "text",
  },
  mah: {
    label: "Max Height",
    type: "text",
  },
  p: {
    label: "Padding",
    type: "select",
    options: [
      { label: "None", value: "" },
      { label: "Extra Small", value: "xs" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Extra Large", value: "xl" },
    ],
  },
  pt: {
    label: "Padding Top",
    type: "text",
  },
  pb: {
    label: "Padding Bottom",
    type: "text",
  },
  pl: {
    label: "Padding Left",
    type: "text",
  },
  pr: {
    label: "Padding Right",
    type: "text",
  },
};
