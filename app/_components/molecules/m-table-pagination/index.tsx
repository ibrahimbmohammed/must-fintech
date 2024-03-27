import React from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  pageIndex: number;
  setPageIndex: (index: number) => void;
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  pageIndex,
  setPageIndex,
  pageCount,
}) => {
  return (
    <div className="flex justify-center items-center px-5 py-3 font-bold whitespace-nowrap bg-gray-100 backdrop-blur-sm space-x-[16px]">
      <div className="flex">
        <button
          className="flex items-center justify-center   w-[40px] h-[40px] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer"
          disabled={!canPreviousPage}
        >
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#9599A1] text-[57px] " />
        </button>
        <button
          className="flex items-center justify-center   w-[40px] h-[40px] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer"
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          <MdKeyboardArrowLeft className="text-[#9599A1] text-[57px] " />
        </button>
      </div>

      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-[40px] h-[40px] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer ${
            index === pageIndex
              ? "bg-primaryDark text-[#F5F5F5] text-[20px]"
              : " text-[#A1A1A1]"
          }`}
          onClick={() => setPageIndex(index)}
        >
          {index + 1}
        </div>
      ))}
      <div className="flex">
        <button
          className="flex items-center justify-center   w-[40px] h-[40px] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer"
          disabled={!canNextPage}
          onClick={nextPage}
        >
          <MdKeyboardArrowRight className="text-[#9599A1] text-[57px]" />
        </button>
        <button
          className="flex items-center justify-center   w-[40px] h-[40px] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer"
          disabled={!canNextPage}
        >
          <MdOutlineKeyboardDoubleArrowRight className="text-[#9599A1] text-[57px]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
