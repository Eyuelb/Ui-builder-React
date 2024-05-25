"use client";
import { Data } from "@measured/puck";
import React from "react";
import { DataContext } from "../context";

interface OrgProviderProps {
  children: React.ReactNode;
  data: Data | null;
}

export const DataProvider: React.FC<OrgProviderProps> = ({
  children,
  data,
}) => {
  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
