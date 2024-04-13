import { Fragment } from "react";

function Breadcrumbs(props) {
  const steps = [
    "Product Configuration",
    "Documents",
    "Payment Securities",
    "Repayment",
    "Interests & Fees",
  ];
  return (
    <div className="flex  text-xs w-full items-center justify-around px-3 text-black">
      {steps.map((step, index) => {
        return (
          <Fragment key={`step-${index}`}>
            <div className="flex items-center justify-center gap-4">
              <div
                className={`rounded-full text-white w-5 h-5 flex items-center justify-center ${
                  props.step >= index + 1
                    ? "bg-blue-500"
                    : "bg-primary-gray-500"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center ">
                  {index + 1}
                </div>
              </div>
              <span>{step}</span>
            </div>
            {index != steps.length - 1 && (
              <span className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-28"></span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
