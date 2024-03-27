interface TableRow {
  original: {
    docToSubmit: string;
  };
}

interface TableDocToSubmitProps {
  row: TableRow;
}

const TableDocToSubmit: React.FC<TableDocToSubmitProps> = ({ row }) => {
  return (
    <div className="lg:w-[6rem] pt-[1px] flex items-center justify-center">
      <div className="w-[3.8rem] py-[3px] px-[2px] self-center border border-[#D7D8DA] rounded-lg bg-[#EBEEF3]">
        <p className="">{row?.original?.docToSubmit}</p>
      </div>
    </div>
  );
};

export default TableDocToSubmit;
