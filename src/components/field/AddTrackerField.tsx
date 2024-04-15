import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  BiArrowBack,
  BiAward,
  BiCoinStack,
  BiGroup,
  BiMoney,
  BiMoneyWithdraw,
  BiPlus,
  BiX,
} from "react-icons/bi";
import { format } from "date-fns";
import { Separator } from "../ui/separator";
import { DatePicker } from "../input/DatePicker";
import { Input } from "../ui/input";
import { IoFastFood } from "react-icons/io5";
import SelectAutocomplete from "../SelectAutocomplete";
import { FaDog, FaPaintBrush } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { IoMdCut } from "react-icons/io";
import { IoMedkitOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ExpenseContext } from "@/context/ExpenseContext";
import { expenseTracker } from "../modes/DailyTypes";
const AddTrackerField = (props) => {
  const { setOpenTrackerField } = props;
  // const [tracker, setTracker] = useState("Income");
  const [currentTracker, setCurrentTracker] = useState<expenseTracker>({
    mode: "expense",
    amount: 0,
    type: "",
  });
  const expenseData = useContext(ExpenseContext);
  const { expense, setExpense } = expenseData;
  const EXPENSE_CATEGORY = [
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

  const ACCOUNT = [
    { value: "cash", label: "Cash" },
    { value: "accounts", label: "Accounts" },
    { value: "card", label: "Card" },
  ];
  const INCOME_CATEGORY = [
    { value: "allowance", label: "Allowance", icon: <BiMoneyWithdraw /> },
    { value: "salary", label: "Salary", icon: <BiMoney /> },
    { value: "petty_cash", label: "Petty Cash", icon: <BiCoinStack /> },
    { value: "bonus", label: "Bonus", icon: <BiAward /> },
    { value: "other", label: "Other" },
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
            <span className={`text-white`}>
              {currentTracker?.mode &&
                currentTracker?.mode?.charAt(0).toUpperCase() +
                  currentTracker?.mode.slice(1)}
            </span>
          </div>

          <div className="flex justify-between gap-5"></div>
        </div>
        <span className="border-t border-gray-200" />
        <div className="no-scrollbar flex h-full w-full flex-col gap-5 overflow-y-scroll p-2">
          <div className="flex w-full justify-around gap-3 text-gray-300">
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${currentTracker?.mode === "income" && "border-2 border-blue-300 text-white"}`}
              onClick={() =>
                setCurrentTracker((prevTracker) => ({
                  ...prevTracker,
                  mode: "income",
                }))
              }
            >
              Income
            </button>
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${currentTracker?.mode === "expense" && "border-2 border-red-300 text-white"}`}
              onClick={() =>
                setCurrentTracker((prevTracker) => ({
                  ...prevTracker,
                  mode: "expense",
                }))
              }
            >
              Expense
            </button>
            <button
              className={`rounded bg-gray-600 px-4 py-1 shadow-lg ${currentTracker?.mode === "transfer" && "border-2 border-green-300 text-white"}`}
              onClick={() =>
                setCurrentTracker((prevTracker) => ({
                  ...prevTracker,
                  mode: "transfer",
                }))
              }
            >
              Transfer
            </button>
          </div>
          <div className="flex w-full flex-col gap-5 pt-5 text-sm">
            {" "}
            <div className="relative  flex w-full items-center justify-around">
              <span>Date</span>
              <div className="relative w-8/12">
                {" "}
                <DatePicker
                  date={currentTracker?.date}
                  onInput={(selectedDate: Date) =>
                    setCurrentTracker((prevTracker) => ({
                      ...prevTracker,
                      date: selectedDate,
                    }))
                  }
                />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Amount</span>
              <div className="mr-2  w-8/12">
                {" "}
                <Input
                  className="bg-white"
                  value={currentTracker?.amount}
                  type="number"
                  onChange={(event) => {
                    setCurrentTracker((prevTracker) => ({
                      ...prevTracker,
                      amount: parseInt(event.target.value),
                    }));
                  }}
                />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Category</span>
              <div className="mr-2 w-8/12">
                {" "}
                <SelectAutocomplete
                  options={
                    currentTracker?.mode === "expense"
                      ? EXPENSE_CATEGORY
                      : INCOME_CATEGORY
                  }
                  onChange={(input: any) => {
                    setCurrentTracker((prevTracker) => ({
                      ...prevTracker,
                      type: input.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Account</span>
              <div className="mr-2 w-8/12">
                {" "}
                <SelectAutocomplete
                  options={ACCOUNT}
                  onChange={(input: any) => {
                    setCurrentTracker((prevTracker) => ({
                      ...prevTracker,
                      account: input.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="relative  flex w-full items-center justify-around">
              <span>Note</span>
              <div className="w-8/12">
                {" "}
                <Input
                  className="bg-white"
                  onChange={(event) => {
                    setCurrentTracker((prevTracker) => ({
                      ...prevTracker,
                      notes: event.target.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end pr-2">
          <button
            className="bg-blue rounded-md bg-blue-400 p-3 text-white hover:bg-blue-500"
            onClick={() => {
              setExpense((prevExpense) => [...prevExpense, currentTracker]);
              setOpenTrackerField(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTrackerField;
