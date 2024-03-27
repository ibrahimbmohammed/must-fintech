interface TableRow {
  original: {
    appDateTime: string;
  };
}

interface TableAppDateTimeProps {
  row: TableRow;
}

const TableAppDateTime: React.FC<TableAppDateTimeProps> = ({ row }) => {
  return (
    <div className="lg:w-[12rem] pl-[18.5px]  flex items-center justify-start">
      <p className="tracking-[0.59px]">{row?.original?.appDateTime}</p>
    </div>
  );
};

export default TableAppDateTime;
