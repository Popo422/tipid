import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { BiArrowBack, BiGroup, BiPlus, BiX } from "react-icons/bi";
import { format } from "date-fns";
import { Separator } from "../ui/separator";
import { DatePicker } from "../input/DatePicker";
import { Input } from "../ui/input";
import { IoFastFood, IoFastFoodOutline } from "react-icons/io5";
import { Select } from "../ui/select";
import SelectAutocomplete from "../SelectAutocomplete";
import { FaDog, FaHeart, FaPaintBrush } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { IoMdCut } from "react-icons/io";
import { IoMedkitOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const AddTrackerField = (props) => {
  const { setOpenTrackerField } = props;
  const [tracker, setTracker] = useState("Income");
  const [showCategory, setShowCategory] = useState(false);
  const expenseCategory = [
    { value: "food", label: "Food", icon: <IoFastFood /> },
    { value: "social", label: "Social Life", icon: <BiGroup /> },
    { value: "pets", label: "Pets", icon: <FaDog /> }, // Assuming you want to use the same icon for pets as for social life
    { value: "transport", label: "Transport", icon: <IoCar /> },
    { value: "culture", label: "Culture", icon: <FaPaintBrush /> },
    { value: "household", label: "Household", icon: <IoHome /> },
    { value: "apparel", label: "Apparel", icon: <IoShirtOutline /> },
    { value: "beauty", label: "Beauty", icon: <IoMdCut /> },
    { value: "health", label: "Health", icon: <IoMedkitOutline /> },
    { value: "education", label: "Education", icon: <IoSchoolOutline /> },
    { value: "gifts", label: "Gifts", icon: <FaGift /> },
    { value: "other", label: "Other", icon: <AiOutlineQuestionCircle /> },
  ];
  return (
    <>
      <div className="flex h-full flex-col  gap-3  px-2 py-5 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 text-lg font-semibold ">
            {" "}
            <button
              className="bg-primary-gray-500 rounded-full p-1 text-black hover:bg-gray-500 hover:text-white"
              onClick={() => {
                setOpenTrackerField(false);
              }}
            >
              <BiArrowBack size={22} />
            </button>
            <span className={`text-white`}>{tracker}</span>
          </div>

          <div className="flex justify-between gap-5"></div>
        </div>
        <span className="border-t border-gray-200" />
        <div className="no-scrollbar flex h-full w-full flex-col gap-5 overflow-y-scroll p-2">
          <div className="flex w-full justify-around gap-3 text-gray-300">
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${tracker === "Income" && "border-2 border-blue-300 text-white"}`}
              onClick={() => setTracker("Income")}
            >
              Income
            </button>
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${tracker === "Expense" && "border-2 border-red-300 text-white"}`}
              onClick={() => setTracker("Expense")}
            >
              Expense
            </button>
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${tracker === "Transfer" && "border-2 border-green-300 text-white"}`}
              onClick={() => setTracker("Transfer")}
            >
              Transfer
            </button>
          </div>
          <div className="flex w-full flex-col gap-5 pt-5 text-sm">
            {" "}
            <div className="relative  flex w-full items-center justify-around">
              <span>Date</span>
              <div className="w-8/12">
                {" "}
                <DatePicker />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Amount</span>
              <div className="mr-2  w-8/12">
                {" "}
                <Input className="bg-white" />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Category</span>
              <div className="mr-2 w-8/12">
                {" "}
                <SelectAutocomplete options={expenseCategory} />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Account</span>
              <div className="mr-2 w-8/12">
                {" "}
                <SelectAutocomplete options={expenseCategory} />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Note</span>
              <div className="w-8/12">
                {" "}
                <Input className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTrackerField;
