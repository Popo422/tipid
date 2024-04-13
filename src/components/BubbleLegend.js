import React from "react";

const BubbleLegend = ({ legend }) => {
  const bubble = (itemType) => {
    let render;
    switch (itemType) {
      case "company":
        render = (
          <div className="border-primary-blue  border px-2 p-1 rounded-2xl text-primary-blue ">
            <span className="lg:flex hidden">Company</span>
          </div>
        );
        break;
      case "individual":
        render = (
          <div className="border-green-500 border px-2 p-1 rounded-2xl text-green-500 ">
            <span className="lg:flex hidden">Individual</span>
          </div>
        );
        break;
      case "beneficialOwner":
        render = (
          <div className="bg-secondary-blue border px-2 p-1 rounded-2xl text-white">
            <span className="lg:flex hidden"> Beneficial Owner</span>
          </div>
        );
        break;
      case "brSignature":
        render = (
          <div className="bg-primary-orange-500 text-white border px-2 p-1 rounded-2xl">
            <span className="lg:flex hidden">BR Signature</span>
          </div>
        );
        break;
      case "authorizedSignature":
        render = (
          <div className="border-green-500 bg-secondary-green-500 text-white border px-2 p-1 rounded-2xl">
            <span className="lg:flex hidden">Authorized Signature</span>
          </div>
        );
        break;
      case "termSheetAcceptance":
        render = (
          <div className=" bg-primary-orange-500 text-white border px-2 p-1 rounded-2xl">
            <span className="lg:flex hidden">Term Sheet Acceptance</span>
          </div>
        );
        break;
    }
    return render;
  };

  return (
    <div className="flex gap-2 flex-shrink-0">
      {legend.map((item) => {
        return bubble(item);
      })}
    </div>
  );
};

export default BubbleLegend;
