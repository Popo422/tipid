import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

export default function TablePagination(props) {
  const { onPrevPage, onNextPage, hasPrevPage, hasNextPage, currentPage } =
    props;

  return (
    <div className=" mt-2 flex flex-row items-center justify-center primary  text-black gap-2">
      <button
        disabled={!hasPrevPage}
        onClick={() => {
          onPrevPage();
        }}
        className={` ${true ? "" : "hidden"}  p-1 rounded-full bg-gray-100 ${
          hasPrevPage ? "cursor-pointer bg-secondary-blue-100" : "bg-gray-100"
        }`}
      >
        <BiLeftArrowAlt
          size="25"
          color={`${hasPrevPage ? "rgb(59 130 246)" : "#CCC"}`}
        />
      </button>
      <div className=" flex items-center justify-center rounded-full h-8 w-8 text-center bg-primary-gray-100 ">
        {currentPage}
      </div>
      <button
        disabled={!hasNextPage}
        onClick={() => {
          onNextPage();
        }}
        className={` ${true ? "" : "hidden"}  ${
          hasPrevPage ? "cursor-pointer bg-secondary-blue-100" : "bg-gray-100"
        } p-1 rounded-full`}
      >
        <BiRightArrowAlt
          size="25"
          color={`${hasNextPage ? "rgb(59 130 246)" : "#CCC"}`}
        />
      </button>
    </div>
  );
}
