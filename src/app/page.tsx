"use client";
import Calendar from "@/components/modes/Calendar";
import Daily from "@/components/modes/Daily";
import Monthly from "@/components/modes/Monthly";
import Note from "@/components/modes/Note";
import Total from "@/components/modes/Total";
import Image from "next/image";
import { useContext, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { GlobalContext } from "@/context";
export default function Home() {
  const globalState = useContext(GlobalContext);
  const { currentMode } = globalState;

  const RenderMode = ({ mode }): JSX.Element => {
    switch (mode) {
      case "Daily":
        return <Daily />;
        break;
      case "Calendar":
        return <Calendar />;
        break;
      case "Monthly":
        return <Monthly />;
        break;
      case "Total":
        return <Total />;
        break;
      case "Note":
        return <Note />;
        break;
      default:
      // code block
    }
  };
  return (
    <main className="flex h-full w-full flex-col items-center justify-between mt-[112px]">
      <div className="h-full w-full">
        <Separator />
        <div className="h-full w-full border-b-2">
          {currentMode && <RenderMode mode={currentMode} />}
        </div>
      </div>
    </main>
  );
}
