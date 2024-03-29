"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Application } from "@molecules/m-table/mock";
import TableCheckbox from "@atoms/a-table-check-box";
import TableDocToSubmit from "@atoms/a-table-row-doc-to-submitted";
import TableAppDateTime from "@atoms/a-table-row-app-date";
import TableStatus from "@atoms/a-table-row-status";
import TableReasonForRejection from "@atoms/a-table-row-reason-for-rejection";
import TableApprovalDateTime from "@/app/_components/atoms/a-table-row-approval-date";

const columns: ColumnDef<Application>[] = [
  {
    id: "select",
    size: 40,
    header: ({ table }) => (
      <TableCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <TableCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },

  {
    size: 51,
    header: "NO",
    accessorKey: "id",
    enableResizing: true,
  },
  {
    size: 100,
    header: "기존유형",
    accessorKey: "existingType",
    enableResizing: true,
  },

  {
    size: 100,
    header: "신청유형",
    accessorKey: "appType",
    enableResizing: true,
  },

  {
    size: 101.7,
    header: "제출서류",
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className="2xl:flex 2xl:item-center 2xl:justify-center">
          <TableDocToSubmit row={row} />
        </div>
      );
    },
  },
  {
    size: 196.2,
    header: "신청일시",
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className="2xl:flex 2xl:item-center 2xl:justify-center">
          <TableAppDateTime row={row} />
        </div>
      );
    },
  },
  {
    size: 72,
    header: "승인여부",
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className="2xl:flex 2xl:item-center 2xl:justify-center">
          <TableStatus row={row} />
        </div>
      );
    },
  },
  {
    size: 387.7,
    header: "승인거부 사유",
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className="">
          <TableReasonForRejection row={row} />
        </div>
      );
    },
  },
  {
    size: 183,
    header: "승인일시",
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className="2xl:flex 2xl:item-center 2xl:justify-center ">
          <TableApprovalDateTime row={row} />
        </div>
      );
    },
  },
];
export default columns;
