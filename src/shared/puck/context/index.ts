import { Data } from "@measured/puck";
import { createContext } from "react";

interface ContextType {
  data: Data | null;
}

export const DataContext = createContext<ContextType>({
  data: null,
});
