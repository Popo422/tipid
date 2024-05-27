"use client";
import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
export type GlobalContent = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentMode: string;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with an initial null value
export const GlobalContext = createContext<GlobalContent | null>(null);

// Define the type for the props of GlobalState component
type GlobalStateProps = {
  children: ReactNode;
};

export default function GlobalState({ children }: GlobalStateProps) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState("Daily");

  return (
    <GlobalContext.Provider
      value={{ sideBarOpen, setSideBarOpen, currentMode, setCurrentMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
