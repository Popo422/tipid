import React, { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Separator } from "../ui/separator";
import AddTrackerField from "../field/AddTrackerField";

import { ExpenseContext } from "@/context/ExpenseContext";

import { expenseCategoryIcons } from "./ExpenseEnum";
import { AbsoluteOutsideAlerter } from "../AbsoluteOutsideAlerter";
import { expenseTracker, expenseTrackerList } from "./DailyTypes";
import { isSameDay } from "date-fns";

// Example usage
const dates = [
  { date: "2024-04-15" },
  { date: "2024-04-15" },
  { date: "2024-04-16" },
  { date: "2024-04-17" },
  { date: "2024-04-17" },
];

const uniqueDates = (dates) => {
  const result = [];
  const uniqueDatesSet = new Set();
  dates.forEach((obj) => {
    const date = obj.date;
    const formattedDate = date.toISOString().slice(0, 10);

    if (!uniqueDatesSet.has(formattedDate)) {
      result.push(obj);
      uniqueDatesSet.add(formattedDate);
    } else {
      const existingIndex = result.findIndex((item) =>
        isSameDay(new Date(item.date), date),
      );
      if (existingIndex !== -1) {
        result[existingIndex] = obj;
      }
    }
  });
  console.log(result);
  return result;
};

const Daily = () => {
  const expenseData = useContext(ExpenseContext);
  const { expense, setExpense } = expenseData;
  const [openTrackerField, setOpenTrackerField] = useState(false);

  const ExpenseList = ({ value, id }) => {
    return (
      <li className="flex flex-col px-2" key={id}>
        {/* expense Header */}
        <div className="flex items-center justify-between gap-5 px-2 ">
          <span>{value?.date?.toDateString()}</span>
          <div className="flex gap-7">
            {/* income */}
            <span className="text-blue-500"></span>
            {/* expenses */}
            <span className="text-red-500"></span>
          </div>
        </div>
        {/* list  */}
        <Separator />
        <ul>
          {" "}
          {expense.map((current: expenseTracker, index: number) => {
            if (isSameDay(current?.date, value?.date)) {
              return (
                <li
                  className="flex items-center justify-between px-2 py-4"
                  key={index}
                >
                  <div className="flex items-center gap-5  ">
                    {expenseCategoryIcons[current?.type]}
                    <span>{current?.type}</span>
                    <div className="flex flex-col items-center text-sm">
                      <span>{current?.notes}</span>
                      <span>{current?.account}</span>
                    </div>
                  </div>
                  <div className="flex gap-7">
                    {/* expenses */}
                    <span
                      className={`${current?.mode === "expense" ? "text-red-500" : "text-blue-500"}`}
                    >
                      {current?.amount}
                    </span>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </li>
    );
  };
  //   const { income } = userData;
  const RenderDaily = ({ expenseList }) => {
    return (
      <div className="mb-1 flex w-full flex-col justify-between divide-y-2 divide-white rounded-2xl  bg-gray-700 px-2 py-3 md:w-[500px] md:px-4">
        <div className="flex flex-col ">
          <div>
            {expense ? (
              <ul className="divide-y-2 divide-white">
                {uniqueDates(expense).map((value, index) => (
                  <ExpenseList value={value} key={index} />
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      <div className="flex h-full w-full flex-col">
        {/* Header */}
        <nav className=" flex w-full items-center justify-between bg-gray-200 px-10 py-5 text-center text-xs font-bold shadow-lg md:px-32 md:text-sm">
          <div className="flex flex-col gap-2 rounded border-2 border-gray-50 bg-white px-4 py-2 text-blue-500 md:flex-row">
            <span className="text-black">Income</span>
            {expense &&
              expense.reduce(
                (accumulator: number, currentValue: expenseTracker) => {
                  if (currentValue.mode === "income") {
                    return accumulator + currentValue.amount;
                  } else {
                    return accumulator; // Return accumulator unchanged for non-income expenses
                  }
                },
                0,
              )}
          </div>
          <div className="flex flex-col gap-2 rounded border-2 border-gray-300 bg-white px-4 py-2 text-red-500 md:flex-row">
            <span className="text-black">Expenses</span>
            {expense &&
              expense.reduce(
                (accumulator: number, currentValue: expenseTracker) => {
                  if (currentValue.mode === "expense") {
                    return accumulator + currentValue.amount;
                  } else {
                    return accumulator; // Return accumulator unchanged for non-income expenses
                  }
                },
                0,
              )}
          </div>
          <div className="flex flex-col gap-2 rounded border-2 border-gray-300 bg-white px-4  py-2 text-black md:flex-row">
            <span className="text-black">Total</span>
            {expense &&
              expense.reduce(
                (accumulator: number, currentValue: expenseTracker) => {
                  return accumulator + currentValue.amount;
                },
                0,
              )}
          </div>
        </nav>
        {/* Body */}

        <div className="flex h-full w-full p-2 text-white ">
          {/* list */}
          <RenderDaily expenseList={expense} />
          {/* Graph and Accounts*/}
          <div className="hidden"></div>
        </div>
      </div>
      <button
        className=" absolute  bottom-32 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 md:right-32 md:h-16 md:w-16 "
        onClick={() => setOpenTrackerField(true)}
      >
        <BiPlus size={24} />
      </button>
      {openTrackerField && (
        <>
          {" "}
          <div
            className={`fixed inset-0 grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300 `}
          />
          <AbsoluteOutsideAlerter className="text-blue-gray-500 fixed right-0 top-0 h-screen w-full rounded-l-lg  bg-gray-400 font-sans text-base font-light shadow-2xl transition-transform  duration-300  lg:w-2/5 ">
            <div className="flex h-full w-full flex-col p-3">
              <AddTrackerField setOpenTrackerField={setOpenTrackerField} />
            </div>
          </AbsoluteOutsideAlerter>
        </>
      )}
    </>
  );
};

export default Daily;
