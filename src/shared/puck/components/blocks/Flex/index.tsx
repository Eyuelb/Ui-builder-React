import React, { useContext } from "react";
import { ComponentConfig, DropZone, dropZoneContext } from "@measured/puck";
import styles from "./styles.module.css";
import { Box, Paper, rem, useProps } from "@mantine/core";
import { Flex as MFlex } from "@mantine/core";
import { defaultFields, defaultSizeFields } from "@/shared/puck/config/fields";
import {
  DefaultFieldsProps,
  DefaultFieldsSizeProps,
} from "@/shared/puck/model";
export interface FieldsType
  extends DefaultFieldsProps,
    DefaultFieldsSizeProps {}
export interface FlexProps extends FieldsType {
  items: FieldsType[];
}
const FlexBody = ({ items, ...p }: FlexProps) => {
  
  const w = p.w ? (p.w === 0 ? "100%" : rem(p.w)) : "auto";
  const h = p.h ? (p.h === 0 ? "100%" : rem(p.h)) : "auto";
  return (
    <MFlex component={Paper} {...p} w={w}>
      {items?.map((item, idx) => (
        <MFlex id={`item-${idx}`} key={`item-${idx}`} {...item}>
          <DropZone
            zone={`item-${idx}`}
            style={{
              width: item.w
                ? item.w === 0
                  ? "100%"
                  : rem(item.w)
                : rem(100),
              height: item.h
                ? item.h === 0
                  ? "100%"
                  : rem(item.h)
                : rem(60),
              maxWidth: rem(item.maw ?? "auto"),
              maxHeight: rem(item.mah ?? "auto"),
              minWidth: rem(item.miw ?? "auto"),
              minHeight: rem(item.mih ?? "auto"),
              paddingTop: rem(item.pt ?? "auto"),
              paddingBottom: rem(item.pb ?? "auto"),
              paddingLeft: rem(item.pl ?? "auto"),
              paddingRight: rem(item.pr ?? "auto"),
              display: "flex",
              justifyContent: String(item.justify),
              alignItems: String(item.align),
              gap: String(item.gap),
              //@ts-ignore
              flexDirection: String(item.direction),
            }}
          />
        </MFlex>
      ))}
    </MFlex>
  );
}
export const Flex: ComponentConfig<FlexProps> = {
  fields: {
    items: {
      type: "array",
      arrayFields: {
        ...defaultFields,
        ...defaultSizeFields,
      },
      // getItemSummary: (_, id) => `Item ${id + 1}`,
    },
    ...defaultFields,
    ...defaultSizeFields,
  },
  defaultProps: {
    items: [{}],
    shadow: "",
    withBorder: false,
    align: "center",
    justify: "center",
  },
  render: FlexBody,
};




