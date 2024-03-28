import React from "react";
import { LuDot } from "react-icons/lu";

function RegisterFormWithImage() {
  return (
    <div className="flex flex-col overflow-hidden h-[44rem]">
      <div className="flex  mt-[1.2rem] mb-[2rem] flex-col mx-[24px] border border-[#D7D8DA] rounded-md">
        <div className="flex">
          <div className="bg-[#EEF0F4]  items-center min-w-[7rem] flex-[50%] lg:flex-[12%] min-h-[719px] flex pl-[11px]">
            <div className="relative">
              <span className="absolute top-[-5px] left-[24px]">
                <LuDot className="text-[#FF4D4F] text-[25px]" />
              </span>

              <p className="text-[16px] text-black pl-1 pt-[1.2px]">서류</p>
            </div>
          </div>
          <div className="lg:flex-[70%] h-[41rem] overflow-y-scroll flex items-center lg:pl-[9px] border-[#D7D8DA]">
            <div className="lg:w-[36rem]  flex flex-col space-y-[18px] scroll-y-1 overflow-hidden overflow-y-scroll ">
              {new Array(7)?.fill(" ")?.map((_, i) => (
                <div
                  key={i}
                  className="w-[560px] ml-[5px] mt-[1.4rem]  h-[645px] flex items-center justify-center rounded-md border border-[#CED0D5] bg-[#FAFAFA]"
                >
                  <p className="text-[#5A616A] text-lg">img</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormWithImage;
