import { Data, Render } from "@measured/puck";
import React from "react";
import { RenderPageShellProps } from "../../model";
import { useStorage } from "../../hooks/useLocalStorage";

export function RenderPageShell({ config, id }: RenderPageShellProps) {
  const { data } = useStorage<Data>(id, {
    root: {},
    content: [],
  });
  return <Render config={config} data={data} />;
}
