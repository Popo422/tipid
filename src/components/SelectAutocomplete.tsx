import React from "react";
import Select, { components } from "react-select";
const { Option } = components;
const SelectAutocomplete = (props) => {
  const IconOption = (props) => (
    <Option {...props}>
      <div className="flex w-full gap-7 px-5 justify-between">
        {props.data.label}
        {props?.data?.icon}
      </div>
    </Option>
  );
  return (
    <>
      {" "}
      <Select
        {...props}
        value={props.value}
        menuPlacement="auto"
        options={props.options}
        placeholder={props.label}
        minMenuHeight={300}
        components={{ Option: IconOption }}
        defaultValue={props.defaultValue || "Select"}
        isMulti={props?.isMulti}
        className=" w-full rounded-lg text-sm"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "white",
            borderRadius: "4px",
          }),
          menu: (provided) => ({
            ...provided,
            border: "none",
            backgroundColor: "white",
          }),
          input: (provided, state) => ({
            ...provided,
            border: "none !important",
            outline: "none",
            "[type='text']:focus": {
              border: "none !important",
              outline: "none",
              "--tw-ring-shadow": "0",
            },
          }),
          option: (provided, state) => ({
            ...provided,
            border: "none !important",
            backgroundColor: state.isSelected ? "#007BFF" : "white",
            color: state.isSelected ? "white" : "black",
          }),
          multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: "black",
            ":hover": {
              backgroundColor: "gray",
              color: "white",
            },
          }),
        }}
      />
    </>
  );
};
export default SelectAutocomplete;
