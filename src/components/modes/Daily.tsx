import React, { useState } from "react";
import { BiFoodMenu, BiFoodTag, BiPlus } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { Separator } from "../ui/separator";
import AddTrackerField from "../field/AddTrackerField";
import AbsoluteOutsideAlerter from "../AbsoluteOutsideAlerter";
import OutsideAlerter from "../OutsideAlerter";

const Daily = ({ userData }) => {
  //   const { income } = userData;
  const [openTrackerField, setOpenTrackerField] = useState(false);
  return (
    <>
      {" "}
      <div className="flex h-full w-full flex-col">
        {/* Header */}
        <nav className=" flex w-full items-center justify-between bg-gray-200 px-10 py-5 text-center text-xs font-bold shadow-lg md:px-32 md:text-sm">
          <div className="flex flex-col gap-2 rounded border-2 border-gray-50 bg-white px-4 py-2 text-blue-500 md:flex-row">
            <span className="text-black">Income</span>
            $10000
          </div>
          <div className="flex flex-col gap-2 rounded border-2 border-gray-300 bg-white px-4 py-2 text-red-500 md:flex-row">
            <span className="text-black">Expenses</span>
            $10000
          </div>
          <div className="flex flex-col gap-2 rounded border-2 border-gray-300 bg-white px-4  py-2 text-black md:flex-row">
            <span className="text-black">Total</span>
            $10000
          </div>
        </nav>
        {/* Body */}

        <div className="flex h-full w-full p-2 text-white ">
          {/* list */}
          <div className="mb-1 flex w-full flex-col justify-between divide-y-2 divide-white rounded-2xl  bg-gray-700 px-2 py-3 md:w-[500px] md:px-4">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between gap-5 px-2 ">
                <span> 08 , Monday 2024</span>
                <div className="flex gap-7">
                  {/* income */}
                  <span className="text-blue-500"> $1000</span>
                  {/* expenses */}
                  <span className="text-red-500"> $1000</span>
                </div>
              </div>
              <Separator />
              <div>
                <ul className="divide-y-2 divide-white">
                  <li className="flex items-center justify-between px-2 py-4">
                    <div className="flex items-center gap-3 px-2 ">
                      <IoFastFood size={17} />
                      <span>Food</span>
                    </div>
                    <div className="flex gap-7">
                      {/* expenses */}
                      <span className="text-red-500"> $1000</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between px-2 py-4">
                    <div className="flex items-center gap-3 px-2 ">
                      <IoFastFood size={17} />
                      <span>Food</span>
                    </div>
                    <div className="flex gap-7">
                      {/* expenses */}
                      <span className="text-red-500"> $1000</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between px-2 py-4">
                    <div className="flex items-center gap-3 px-2 ">
                      <IoFastFood size={17} />
                      <span>Food</span>
                    </div>
                    <div className="flex gap-7">
                      {/* expenses */}
                      <span className="text-red-500"> $1000</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <button
              className=" absolute  bottom-32 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 md:right-32 md:h-16 md:w-16 "
              onClick={() => setOpenTrackerField(true)}
            >
              <BiPlus size={24} />
            </button>
          </div>
          {/* Graph and Accounts*/}
          <div className="hidden"></div>
        </div>
      </div>
      {openTrackerField && (
        <>
          {" "}
          <div
            className={`fixed inset-0 z-20 grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300 `}
          />
          <OutsideAlerter clickedOutside={() => setOpenTrackerField(false)}>
            {" "}
            <div
              className={`text-blue-gray-500 fixed right-0 top-0  z-20 h-screen w-full rounded-l-lg  bg-gray-400 font-sans text-base font-light shadow-2xl transition-transform  duration-300  lg:w-2/5 `}
            >
              <div className="flex h-full w-full flex-col p-3">
                <AddTrackerField setOpenTrackerField={setOpenTrackerField} />
              </div>
            </div>
          </OutsideAlerter>
        </>
      )}
    </>
  );
};

export default Daily;
