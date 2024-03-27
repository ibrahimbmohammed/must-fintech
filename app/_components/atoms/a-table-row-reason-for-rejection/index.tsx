interface TableRow {
  original: {
    rejectionReason: string;
  };
}

interface TableReasonForRejectionProps {
  row: TableRow;
}

const TableReasonForRejection: React.FC<TableReasonForRejectionProps> = ({
  row,
}) => {
  return (
    <div className="lg:w-[24rem] pl-[0px]  min-h-[42px]  flex items-center justify-center">
      <div className="  pl-[18.2px] pr-[8px] self-center ">
        <p className="text-left tracking-[0.37px] leading-[18px]">
          {row?.original?.rejectionReason}
        </p>
      </div>
    </div>
  );
};

export default TableReasonForRejection;
