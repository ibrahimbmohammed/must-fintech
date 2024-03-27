interface TableRow {
  original: {
    approvalDateTime: string;
  };
}

interface TableApprovalDateTimeProps {
  row: TableRow;
}

const TableApprovalDateTime: React.FC<TableApprovalDateTimeProps> = ({
  row,
}) => {
  return (
    <div className="lg:w-[13rem] pl-[11.8px]  flex items-center justify-start">
      <p className="tracking-[0.6px]">{row?.original?.approvalDateTime}</p>
    </div>
  );
};

export default TableApprovalDateTime;
