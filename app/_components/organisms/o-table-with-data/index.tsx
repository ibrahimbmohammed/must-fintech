import OptionsComponent from "@molecules/m-options-component";
import { useMemo, useState } from "react";
import { mockedData } from "@molecules/m-table/mock";
import columns from "@molecules/m-table/column";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import BasicTableComp from "@molecules/m-basic-table-body";
import Pagination from "@molecules/m-table-pagination";
import {
  aprovalList,
  dateList,
  statusList,
  statusList2,
} from "@lib/constants/options-data";
import { Button } from "../../atoms/a-button";

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

type TableProps = ReturnType<typeof useReactTable>;

interface DataTableProps {
  handleIsOpen?: () => void;
}

const DataTable = ({ handleIsOpen }: DataTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const dataMock = useMemo(() => mockedData, []);
  const table = useReactTable({
    data: dataMock,
    columns: columns as ColumnDef<
      (typeof dataMock)[0],
      keyof (typeof dataMock)[0]
    >[],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection: rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <div className="flex flex-col mt-4 ">
      <div className="flex items-center justify-between mt-[0.2px]">
        <div className="flex flex-col space-y-2 lg:space-y-0  lg:flex-row pl-[1px] lg:space-x-2 ">
          <p className="text-black text-[16px] lg:text-[18px] tracking-[0.07rem] font-[300]">
            신청 목록
          </p>
          <div className="">
            <p className="text-black text-xs flex lg:text-sm mt-[2px]">
              (총 100명 | 승인대기 <p className="text-[#FF4D4F]">1</p>건)
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-[5px]">
          <OptionsComponent
            className="w-[149px] h-[38px] font-[200] pl-[10.3px] rounded-[6px] text-black border dark:border-black"
            items={aprovalList}
          />
          <OptionsComponent
            className="w-[149px] h-[38px] font-[200] pl-[10.3px] rounded-[6px] text-black border dark:border-black"
            items={dateList}
          />
          <OptionsComponent
            className="w-[149px] h-[38px] font-[200] pl-[10.3px] rounded-[6px] text-black border dark:border-black"
            items={statusList}
          />
        </div>
      </div>
      <div className="w-full bg-[#D7D8DA] h-[0.2px] mt-[14px]" />

      <div className="flex items-end  lg:items-center justify-between mt-[12px]">
        <div className="flex ">
          <Button
            onClick={() => handleIsOpen && handleIsOpen()}
            className="px-[2.3rem]"
            variant={"primary"}
          >
            등록
          </Button>
        </div>
        <div className="flex flex-col items-end space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[6px]">
          <div className="flex items-center text-[14px] justify-start pr-3">
            <p className="">선택한 0건</p>
          </div>

          <OptionsComponent
            className="w-[149px] h-[38px] font-[200] pl-[10.3px] rounded-[6px] text-black border dark:border-black"
            items={statusList2}
          />

          <Button className="px-[2.2rem] " variant={"primary"}>
            저장
          </Button>
        </div>
      </div>

      <div className=" overflow-x-auto mt-[5.5px]">
        <BasicTableComp
          table={table as TableProps}
          style={style}
          flexRender={flexRender}
        />
      </div>
      <div className="">
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
};

export default DataTable;
