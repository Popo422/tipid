import React from "react";

const Switch = ({ isChecked, onClick }) => {
  return (
    <div>
      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isChecked}
          onChange={onClick}
        />
        <span
          className={`slider mr-3 flex h-[18px] w-[37px] items-center rounded-full p-1 transition-all duration-300 ${
            isChecked ? "bg-blue-500" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-[14px] w-[14px] rounded-full bg-white transition-all duration-200 ${
              isChecked ? "translate-x-4" : ""
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Switch;
