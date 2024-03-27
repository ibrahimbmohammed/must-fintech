import React, { useEffect, useRef } from "react";

interface TableCheckboxProps {
  indeterminate: boolean;
  checked: boolean;
}

function TableCheckbox({ indeterminate, ...rest }: TableCheckboxProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      if (ref.current) {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }
  }, [ref, indeterminate]);

  return (
    <div className="">
      <input
        className="h-[17px] w-[17px] cursor-pointer appearance-none rounded-[4px] border border-[#D7D8DA] bg-[#fff] text-red-600 outline-none checked:bg-[#DDE0E5] "
        type="checkbox"
        ref={ref}
        {...rest}
      />
    </div>
  );
}

export default TableCheckbox;
