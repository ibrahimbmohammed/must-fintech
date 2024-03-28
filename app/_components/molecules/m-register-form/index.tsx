import React from "react";
import OptionsComponent from "../m-options-component";
import { LuDot } from "react-icons/lu";
import { aprovalList } from "@lib/constants/options-data";

function RegisterForm() {
  return (
    <div className="flex flex-col">
      <div className="flex  mt-[1.3rem] flex-col mx-[24px] border border-[#D7D8DA]">
        <div className="flex">
          <div className="bg-[rgb(238,240,244)] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] text-black pl-[7px] pb-[1px]">회원번호</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[22px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black tracking-[0.06rem] text-xs">
              abc111
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4]  border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] text-black pl-2 ">회원명/법인명</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[23px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black text-xs tracking-[0.06rem] ">
              김길동
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4]  border-b border-white items-center flex-[12%] h-[49px] flex pl-[11px]">
            <div className="relative">
              <span className="absolute  top-[-5px] left-[53px]">
                <LuDot className="text-[#FF4D4F] text-[25px]" />
              </span>
              <p className="text-[16px] text-black pl-1 pt-[1.2px]">투자유형</p>
            </div>
          </div>
          <div className="flex-[70%] flex items-center pl-[9px] border-b border-[#D7D8DA]">
            <div className="w-[12rem] ">
              <OptionsComponent
                arrowClassName=" right-0 "
                className="w-[283.5px] h-[38px] font-[200] pl-[10.3px] rounded-[9px] text-black border dark:border-black"
                items={aprovalList}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4]  items-center flex-[12%] h-[49px] flex pl-[11px] pt-[2px] ">
            <div className="relative">
              <p className="text-[16px] text-black  pl-1 ">서류첨부</p>
              <span className="absolute top-[-6px] left-[52px]">
                <LuDot className="text-[#FF4D4F] text-[25px]" />
              </span>
            </div>
          </div>
          <div className="flex-[70%] flex items-center pl-2 pt-[1px] ">
            <div className="px-[12px] py-[6px] rounded-lg bg-[#EBEEF3] border border-[#D7D8DA]">
              <p className="font-[200] text-black text-[14px]">파일 선택</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-[2rem] mt-[0.8rem] mx-[2.7rem]">
        <div className="relative">
          <span className="absolute top-[-1px] left-[-18px]">
            <LuDot className="text-black" />
          </span>
          <p className="text-[11.9px] leading-3 tracking-[0.04rem] text-black font-[200]">
            파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
          </p>
        </div>
        <div className="relative">
          <span className="absolute top-[5px] left-[-18px]">
            <LuDot className="text-black" />
          </span>
          <p className="text-[11.9px] pt-[5px] tracking-[0.05rem] text-black font-[200]">
            최대 10개, 100MB까지 등록이 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
