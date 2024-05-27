"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  RiDashboard3Line,
  RiClipboardLine,
  RiGridLine,
  RiSettings2Line,
  RiLogoutBoxLine,
  RiShutDownLine,
  RiUser2Line,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { FiUsers, FiUser } from "react-icons/fi";
import "@/app/globals.css";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/context";
import { BiArrowBack, BiMoney } from "react-icons/bi";
import { useDimensions } from "./Dimentions";
const SideBar = () => {
  const [link, setLink] = useState("");
  const router = useRouter();
  const sideBarState = useContext(GlobalContext);
  const { sideBarOpen, setSideBarOpen } = sideBarState;
  type MenuItem = {
    link: string;
  };
  const handleNavigate = (getMenuItem: MenuItem) => {
    setLink(getMenuItem.link);
    router.push(getMenuItem.link);
  };
  const pathname = usePathname();
  const adminLinks = [
    {
      label: "Dashboard",
      link: "/",
      icon: <RiDashboard3Line size={22} />,
    },

    {
      label: "My Contacts",
      link: "/contacts",
      icon: <FiUsers size={22} />,
    },
    {
      label: "My Blasts",
      link: "/blasts",
      icon: <FiUser size={22} />,
    },
    {
      label: "Jobs",
      link: "/jobs",
      icon: <RiClipboardLine size={22} />,
    },
    {
      label: "Job Calendar",
      link: "/job-calendar",
      icon: <RiGridLine size={22} />,
    },
  ];
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  // if (!sideBarOpen) return;
  return (
    <motion.div
      className="h-full w-full bg-white md:w-1/4"
      animate={sideBarOpen ? "open" : "closed"}
      variants={sidebar}
      ref={containerRef}
    >
      <aside
        className={` left-0 top-0  flex h-full w-full  flex-col overflow-hidden  bg-white shadow-lg transition-all duration-300`}
      >
        <div className="flex h-full w-full flex-col overflow-hidden overflow-y-auto duration-300">
          <nav className=" h-full w-full">
            <div className="flex h-full w-full  flex-col justify-between py-3">
              <div className="flex h-full w-full flex-col  justify-between">
                <div className="flex flex-col gap-5">
                  <div className="flex w-full justify-between gap-2 px-5">
                    <div></div>
                    <div className="flex items-center gap-5">
                      {" "}
                      <BiMoney size={30} color="skyblue" />
                      <span className="text-xxl flex items-center font-bold text-blue-300">
                        Tipid
                      </span>
                    </div>
                    <div>
                      <button
                        className="rounded-full bg-blue-400 p-3 hover:bg-blue-500"
                        onClick={() => setSideBarOpen(false)}
                      >
                        <BiArrowBack size={22} color="white" />
                      </button>
                    </div>
                  </div>

                  <ul className="mb-6 flex w-full flex-col gap-2  text-sm font-semibold">
                    {adminLinks.map((menuItem) => (
                      <li key={menuItem.label} className="w-full ">
                        <div className="flex w-full gap-4">
                          {" "}
                          <div
                            className={`h-11 w-1 ${pathname === menuItem.link ? " bg-primary-green-500" : ""} my-2 `}
                          />
                          <div className="flex w-full pl-2 pr-8">
                            {" "}
                            <label
                              onClick={() => handleNavigate(menuItem)}
                              className={`group flex h-14  w-full cursor-pointer items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-blue-700 hover:text-white 
                             ${pathname === menuItem.link ? "bg-blue-200 text-black" : "text-black"}
                            `}
                            >
                              <span className={`icon`}> {menuItem.icon}</span>

                              <div className="">{menuItem.label}</div>
                            </label>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-black">
                  {" "}
                  <ul className="mb-6 flex w-full flex-col gap-2  text-sm font-semibold">
                    <li key={"settings"} className="w-full ">
                      <div className="flex w-full gap-4">
                        <div
                          className={`my-2 h-11 
                        w-1 `}
                        />
                        <div className="flex w-full pl-2 pr-8">
                          {" "}
                          <label
                            // onClick={() => handleNavigate()}
                            className={`group flex h-14  w-full cursor-pointer items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-gray-200 hover:text-white`}
                          >
                            <span className={`icon`}>
                              {" "}
                              <RiSettings2Line size={22} />
                            </span>

                            <div className="">Settings</div>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li key={"logout"} className="w-full ">
                      <div className="flex w-full gap-4">
                        <div
                          className={`my-2 h-11 
                        w-1 `}
                        />
                        <div className="flex w-full pl-2 pr-8">
                          {" "}
                          <label
                            // onClick={() => handleNavigate()}
                            className={`group flex h-14  w-full cursor-pointer items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-gray-200 hover:text-white`}
                          >
                            <span className={`icon`}>
                              {" "}
                              <RiShutDownLine size={22} />
                            </span>

                            <div className="">Logout</div>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </motion.div>
  );
};

export default SideBar;
