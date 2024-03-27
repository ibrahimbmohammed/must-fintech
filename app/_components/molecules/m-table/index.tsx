"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dispatch, SetStateAction, useState } from "react";
import Pagination from "../m-table-pagination";
import BasicTableComp from "../m-basic-table-body";

interface extraTableChildrenProps {
  filtering?: string;
  setFiltering?: Dispatch<SetStateAction<string>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  extraTableChildren?: ({
    filtering,
    setFiltering,
  }: extraTableChildrenProps) => JSX.Element;
}

const style = {
  table:
    "table-fixed  w-full text-sm text-left text-gray-500  overflow-hidden ",
  tableHead:
    "text-xs text-gray-700  text-center  bg-[#EEF0F4] rounded-2xl max-w-[4rem]  overflow-hidden",
  tableHeadCol:
    "pl-[1px] pr-[1px] pt-[22px] pb-[19.5px] tracking-[0.04rem] text-center border-x border-[#fff] text-[16px] ",
  tableBodyRow:
    " odd:bg-white even:bg-[#F9F9FB]  font-[300] h-[42px] text-[14px] text-center text-[#525252]  hover:bg-gray-50",
  tableBodyCol: "  ",
};

export default function BasicTable<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection: rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <div className="">
      <div className="relative">
        <BasicTableComp
          table={table as ReturnType<typeof useReactTable>}
          style={style}
          flexRender={flexRender}
        />
        <Pagination
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          previousPage={table.previousPage}
          nextPage={table.nextPage}
          pageIndex={table.getState().pagination.pageIndex}
          setPageIndex={table.setPageIndex}
          pageCount={table.getPageCount()}
        />
      </div>
    </div>
  );
}
