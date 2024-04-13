"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState("Daily");
  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen,currentMode,setCurrentMode }}>
      {children}
    </GlobalContext.Provider>
  );
}
