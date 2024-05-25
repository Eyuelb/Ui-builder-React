import React from "react";
import {
  MantineProvider as Provider,
  MantineThemeOverride,
  ColorSchemeScript,
} from "@mantine/core";
import { theme as baseTheme } from "./theme";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: Partial<MantineThemeOverride> = baseTheme;

  return (
    <Provider theme={theme}>
      <ColorSchemeScript />
      {children}{" "}
    </Provider>
  );
}
