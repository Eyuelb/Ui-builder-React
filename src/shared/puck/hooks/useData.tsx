import { useContext } from "react";
import { DataContext } from "../context";
import { Data } from "@measured/puck";

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("usePageData must be used within an PageDataProvider");
  }
  return context.data as Data;
};

