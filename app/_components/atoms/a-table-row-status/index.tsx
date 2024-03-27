interface TableRow {
  original: {
    approval: string;
  };
}

interface TableStatusProps {
  row: TableRow;
}

const getStatusColor = (status: string): string => {
  switch (status && status.toUpperCase()) {
    case "승인대기":
      return "bg-[#FFEDD5] text-[#9A3412]";
    case "승인거부":
      return "bg-[#FEE2E2] text-[#991B1B]";
    case "승인완료":
      return "bg-[#DCFCE7] text-[#166534]";
    default:
      return "";
  }
};

const TableStatus: React.FC<TableStatusProps> = ({ row }) => {
  const statusColor = getStatusColor(row?.original?.approval);

  return (
    <div className="lg:w-[69px] ml-[1px] flex items-center justify-center">
      <div
        className={`w-[66px] py-[0.2px] px-[8px] self-center rounded-[12px]  ${statusColor} `}
      >
        <p className="">{row?.original?.approval}</p>
      </div>
    </div>
  );
};

export default TableStatus;
