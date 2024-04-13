import { useState } from "react";
import { BiCaretDown, BiCaretUp, BiSolidCheckCircle } from "react-icons/bi";
import BubbleLegend from "./BubbleLegend";

export default function ShareHolderInfoSection(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fieldRow = ({ label, content, required }, index) => {
    const isEmpty =
      required &&
      required.reduce((prev, current) => {
        if (current == null || current == "") {
          return true;
        } else {
          return prev;
        }
      }, false);
    return (
      <div className="w-full  flex pt-1 pb-2" key={index}>
        <div
          className={`w-1/3 ${isEmpty && " text-red-500"} flex items-center`}
        >
          {label}
        </div>
        <div className="w-2/3">{content}</div>
      </div>
    );
  };

  const { label, fields, onClick, image, type, legend } = props;

  const incompleteFields = fields.reduce((prev, current) => {
    const isEmpty =
      current.required &&
      current.required.reduce((prevReq, currentReq) => {
        if (currentReq == null || currentReq == "") {
          return true;
        } else {
          return prevReq;
        }
      }, false);
    if (isEmpty) {
      return prev + 1;
    } else {
      return prev;
    }
  }, 0);

  return (
    <div
      className={`flex flex-col w-full border ${
        type === "individual" ? "bg-secondary-green-100" : "bg-blue-100"
      }  p-7 lg:text-xs  text-xxs rounded-md relative gap-4`}
    >
      <div
        className={` absolute top-2 -left-3 ${
          incompleteFields > 0
            ? "text-white bg-red-500 text-center rounded-xl w-6 h-6"
            : "text-primary-green"
        }`}
      >
        {incompleteFields > 0 ? (
          incompleteFields
        ) : (
          <BiSolidCheckCircle size={24} />
        )}
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center">
          <BubbleLegend legend={legend} />

          <div
            className=" text-xs ml-2 underline text-primary-blue cursor-pointer font-semibold"
            onClick={onClick}
          >
            Edit
          </div>
        </div>

        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? <BiCaretUp /> : <BiCaretDown />}
        </button>
      </div>
      <div
        className={`relative overflow-x-auto  no-scroll duration-300  ease-in-out  transition-all ${
          isExpanded
            ? type === "individual"
              ? "h-[60rem]"
              : "h-[50rem]"
            : "h-24"
        }`}
      >
        <div className="flex flex-col divide-y-2 text-xs">
          {fields.map((field, index) => {
            return fieldRow(field, index);
          })}
        </div>
      </div>
    </div>
  );
}
