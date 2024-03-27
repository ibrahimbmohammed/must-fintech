import React from "react";
import OptionsComponent from "../m-options-component";
import { aprovalList } from "@lib/constants/options-data";

function RegisterForm() {
  return (
    <div className="flex  my-[2rem] flex-col mx-[1rem] border border-[#D7D8DA]">
      <div className="flex">
        <div className="bg-[#EEF0F4] border-b border-white items-center flex-[20%] h-[49px] flex pl-2">
          <p className="">회원번호</p>
        </div>
        <div className="flex-[70%] flex items-center pl-4 border-b border-[#D7D8DA]">
          <p className="font-[200]">abc111</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#EEF0F4] border-b border-white items-center flex-[20%] h-[49px] flex pl-2">
          <p className="">회원명/법인명</p>
        </div>
        <div className="flex-[70%] flex items-center pl-4 border-b border-[#D7D8DA]">
          <p className="font-[200]">김길동</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#EEF0F4] border-b border-white items-center flex-[20%] h-[49px] flex pl-2">
          <p className="">투자유형</p>
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
        <div className="bg-[#EEF0F4] items-center flex-[20%] h-[49px] flex pl-2">
          <p className="">서류첨부</p>
        </div>
        <div className="flex-[70%] flex items-center pl-2  ">
          <div className="px-[4px] py-[1px] rounded-lg bg-[#EBEEF3] border border-[#D7D8DA]">
            <p className="font-[200]">파일 선택</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
