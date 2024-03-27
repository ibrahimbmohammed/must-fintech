import { useReactTable } from "@tanstack/react-table";
import React from "react";

interface TableProps {
  table: ReturnType<typeof useReactTable>;
  style: {
    table: string;
    tableHead: string;
    tableHeadCol: string;
    tableBodyRow: string;
    tableBodyCol: string;
  };
  flexRender: any; // Your flexRender function
}

const BasicTableComp: React.FC<TableProps> = ({ table, style, flexRender }) => {
  return (
    <table className={style?.table}>
      <thead className={style?.tableHead}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                style={{
                  width: header?.column?.columnDef?.size,
                }}
                className={style?.tableHeadCol}
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
              >
                {header.isPlaceholder ? null : (
                  <div className="flex text-center items-center justify-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr className={`${style?.tableBodyRow} `} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className={style?.tableBodyCol} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BasicTableComp;
