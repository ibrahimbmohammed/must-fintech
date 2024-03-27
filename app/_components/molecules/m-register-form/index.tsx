import React from "react";
import OptionsComponent from "../m-options-component";
import { aprovalList } from "@lib/constants/options-data";

function RegisterForm() {
  return (
    <div className="flex flex-col">
      <div className="flex  mt-[1.3rem] flex-col mx-[24px] border border-[#D7D8DA]">
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] pl-2">회원번호</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[22px] border-b border-[#D7D8DA]">
            <p className="font-[200] tracking-[0.06rem] text-xs">abc111</p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] pl-2">회원명/법인명</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[22px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-xs tracking-[0.06rem] ">김길동</p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] pl-2">투자유형</p>
          </div>
          <div className="flex-[70%] flex items-center pl-2 border-b border-[#D7D8DA]">
            <div className="w-fit">
              <OptionsComponent
                className="w-[149px] h-[38px] font-[200] pl-[10.3px] rounded-[6px] text-black border dark:border-black"
                items={aprovalList}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] pl-2">서류첨부</p>
          </div>
          <div className="flex-[70%] flex items-center pl-2  ">
            <div className="px-[4px] py-[1px] rounded-lg bg-[#EBEEF3] border border-[#D7D8DA]">
              <p className="font-[200]">파일 선택</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-[1.8rem] mt-[1rem] mx-[2.7rem]">
        <p className="text-[11.2px] font-thin">
          파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
        </p>
        <p className="text-[12px]  font-thin">
          최대 10개, 100MB까지 등록이 가능합니다.
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
