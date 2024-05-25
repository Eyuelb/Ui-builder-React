import { Data, Puck } from "@measured/puck";
import { DesignerShellProps } from "../../model";
import { DraggableItem } from "../draggable-item";
import { useStorage } from "../../hooks/useLocalStorage";
import { Box, Flex, Group, Select, Text } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

export function DesignerShell(props: DesignerShellProps) {
  const { id, config } = props ?? {};
  const { data, saveData } = useStorage<Data>(id, {
    root: {},
    content: [],
  });
  const router = useRouter();
  const pageName = usePathname().split("/")[1];

  return (
    <Box>
      <Flex className=" justify-end border-b p-3">
        <Group>
          <Text fw={700}>Page</Text>
          <Select
            value={pageName}
            onChange={(value) => router.push(`/${value}/edit`)}
            data={[
              {
                label: "Home",
                value: "home",
              },
              {
                label: "About-Us",
                value: "about-us",
              },
              {
                label: "Contact",
                value: "contact",
              },
              {
                label: "Faq",
                value: "faq",
              },
            ]}
          />
        </Group>

        <Flex></Flex>
      </Flex>

      <Box>
        <Puck
          config={{
            ...config,
            root: {
              ...config.root,
              fields: {
                ...config.root?.fields,
                title: {
                  type: "custom",
                  render: () => <Text>{pageName}</Text>,
                },
              },
              defaultProps: {
                title: pageName,
              },
            },
          }}
          data={data}
          onPublish={() => "router.push(`/${name}`)"}
          onChange={saveData}
          iframe={{ enabled: false }}
          overrides={{
            componentItem: (props) => <DraggableItem {...props} />,
          }}
        />
      </Box>
    </Box>
  );
}
