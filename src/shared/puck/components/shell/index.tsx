import { Box } from "@mantine/core";
import { ShellProps } from "../../model";

function Shell({ children, editMode, bg, p }: ShellProps) {
  const bgColor =
    !bg || bg === "transparent" ? "var(--mantine-color-body)" : bg;
  return (
    <Box bg={bgColor} p={p} w={"100%"} h={"100%"}>
      {children}
    </Box>
  );
}

export default Shell;
