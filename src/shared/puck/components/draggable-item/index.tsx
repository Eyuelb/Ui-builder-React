import { Flex } from "@mantine/core";
import { IconGripVertical } from "@tabler/icons-react";
import { DraggableItemProps } from "../../model";

export const DraggableItem = (props: DraggableItemProps) => {
    const { name } = props;
    return (
      <Flex className="w-full justify-between border p-2 cursor-pointer mb-2 rounded-md bg-[--card]">
        {name} <IconGripVertical size={18} />
      </Flex>
    );
  };

