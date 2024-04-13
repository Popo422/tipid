import { BiSolidCheckCircle } from "react-icons/bi";

export default function InfoSection(props) {
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
      <div className="w-full  flex pt-3 pb-5" key={index}>
        <div className={`w-1/3 ${isEmpty && " text-red-500"}`}>{label}</div>
        <div className="w-2/3">{content}</div>
      </div>
    );
  };

  const { label, fields, onClick, image } = props;

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
    <div className=" relative">
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
      <div className="border py-2 px-4 gap-6 flex flex-col rounded-lg">
        <div className=" flex items-center">
          <h2>{label}</h2>
          <div
            className=" text-xs ml-2 underline text-primary-blue cursor-pointer font-semibold"
            onClick={onClick}
          >
            Edit
          </div>
        </div>
        {image ? (
          <div className="flex gap-4 h-full">
            <div className="h-full flex items-center "> {image.content}</div>

            <div className="flex flex-col divide-y-2 text-xs w-full">
              {fields.map((field, index) => {
                return fieldRow(field, index);
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col divide-y-2 text-xs">
            {fields.map((field, index) => {
              return fieldRow(field, index);
            })}
          </div>
        )}
      </div>
    </div>
  );
}
