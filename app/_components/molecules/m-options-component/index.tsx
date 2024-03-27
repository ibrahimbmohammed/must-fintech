import { FaAngleDown } from "react-icons/fa6";

interface Option {
  value: string;
  label: string;
}

interface Props {
  items: Option[];
  className?: string;
  arrowClassName?: string;
}

const OptionsComponent: React.FC<Props> = ({
  items,
  className,
  arrowClassName = " ",
}) => {
  return (
    <div className="relative w-fit ">
      <select className={` appearance-none focus:outline-none ${className}`}>
        {items.map((item, index) => (
          <option className="  " key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div
        className={`pointer-events-none absolute inset-y-0 top-[0.15rem] right-[1px] flex items-center px-2 text-gray-700 ${arrowClassName}`}
      >
        <FaAngleDown className="text-[#5A616A]" />
      </div>
    </div>
  );
};

export default OptionsComponent;
