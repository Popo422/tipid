"use client";
import Calendar from "@/components/modes/Calendar";
import Daily from "@/components/modes/Daily";
import Monthly from "@/components/modes/Monthly";
import Note from "@/components/modes/Note";
import Total from "@/components/modes/Total";
import { useContext } from "react";
import { Separator } from "@/components/ui/separator";
import { GlobalContext } from "@/context";
import Header from "@/components/Header";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useSession();
  const globalState = useContext(GlobalContext);
  const { currentMode } = globalState;
  const router = useRouter();
  const RenderMode = ({ mode }: { mode: string }): JSX.Element => {
    switch (mode) {
      case "Daily":
        return <Daily />;
      case "Calendar":
        return <Calendar />;
      case "Monthly":
        return <Monthly />;
      case "Total":
        return <Total />;
      case "Note":
        return <Note />;
      default:
        return <div />;
    }
  };
  if (!user) {
    router.push("/login");
  }
  return (
    <main className="mt-[112px] flex h-full w-full flex-col items-center justify-between">
      <Header />
      <div className="h-full w-full">
        <Separator />
        <div className="h-full w-full border-b-2">
          {currentMode && <RenderMode mode={currentMode} />}
        </div>
      </div>
    </main>
  );
}
