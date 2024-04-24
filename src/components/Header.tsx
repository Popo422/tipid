"use client";

import { BiSearch, BiSolidBell, BiMenu } from "react-icons/bi";

import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import SideBar from "./SideBar";
import { GlobalContext } from "@/context";
import { Separator } from "./ui/separator";
import SigninButton from "./SigninButton";

function Header(props) {
  const pathname = usePathname();
  const sideBarState = useContext(GlobalContext);
  const { sideBarOpen, setSideBarOpen, currentMode, setCurrentMode } =
    sideBarState;
  // const [openSideBar, setOpenSideBar] = useState(false);
  const list = [
    { title: "Daily" },
    { title: "Calendar" },
    { title: "Monthly" },
    { title: "Total" },
    { title: "Note" },
  ];

  return (
    <nav className="header-content fixed top-0 flex w-full bg-white">
      {sideBarOpen && (
        <div className="absolute z-20 h-screen w-full">
          <SideBar />
        </div>
      )}

      <div className=" flex w-full flex-col">
        <div className=" flex w-full flex-row items-center justify-between px-4 md:my-1 md:px-10">
          {/* Title */}
          <div className="flex p-1.5">
            <button onClick={() => setSideBarOpen(!sideBarOpen)}>
              {" "}
              <BiMenu size={40} color="black" />
            </button>
          </div>
          <span className="text-base font-bold text-blue-400 md:text-xl">
            Tipid
          </span>
          <SigninButton />
        </div>
        <div className="flex  w-full  justify-center gap-2 py-2 shadow">
          <ul className="flex w-full justify-between gap-2 text-sm font-semibold text-black md:mx-40 md:text-base ">
            {list &&
              list.map((mode, index): JSX.Element => {
                return (
                  <li
                    key={mode.title + index}
                    className={`flex flex-col gap-2`}
                    onClick={() => setCurrentMode(mode.title)}
                  >
                    <button
                      className="px-3"
                      onClick={() => setCurrentMode(mode.title)}
                    >
                      {mode?.title}
                    </button>
                    {currentMode === mode.title && (
                      <span className="h-1 w-full rounded bg-gray-500 " />
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {props.children}
    </nav>
  );
}

export default Header;
