import React from "react";
import CheckBoxs from "@atoms/a-checkbox";
import { LuDot } from "react-icons/lu";

function RegisterFormWithExtra() {
  return (
    <div className="flex flex-col">
      <div className="flex  mt-[1.2rem] mb-[2rem] flex-col mx-[24px] border border-[#D7D8DA]">
        <div className="flex">
          <div className="bg-[rgb(238,240,244)] border-b border-white items-center flex-[50%] lg:flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] text-black pl-[7px] pb-[1px]">회원번호</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[22px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black tracking-[0.06rem] text-xs">
              abc111, abc222
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[50%] lg:flex-[12%] h-[49px] flex pl-2 pt-[4px]">
            <p className="text-[16px] text-black pl-2  ">회원명/법인명</p>
          </div>
          <div className="flex-[70%] flex items-center pt-[2px] pl-[23px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black text-xs tracking-[0.07rem] ">
              김길동, ㈜가나다라투자
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4]  items-center min-w-[7rem] flex-[50%] lg:flex-[12%] h-[300px] flex pl-[11px]">
            <div className="relative">
              <span className="absolute top-[-5px] left-[84px]">
                <LuDot className="text-[#FF4D4F] text-[25px]" />
              </span>

              <p className="text-[16px] text-black pl-1 pt-[1.2px]">
                승인거부 사유
              </p>
            </div>
          </div>
          <div className="lg:flex-[70%]  overflow-x-scroll flex items-center lg:pl-[9px] border-[#D7D8DA]">
            <div className="lg:w-[36rem] flex flex-col space-y-[0] ">
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem] ">
                <div className="pt-[2px]">
                  <CheckBoxs />
                </div>
                <p className="font-[300] text-[14px] text-black text-xs tracking-[0.04rem] mt-[1px]">
                  서류 식별 불가
                </p>
              </div>
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem]">
                <div className="pt-[2px]">
                  <CheckBoxs />
                </div>
                <p className="font-[300] text-[14px] text-black text-xs tracking-[0.04rem] mt-[1px] ">
                  필수 서류 누락
                </p>
              </div>
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem] ">
                <div className="pt-[6px]">
                  <CheckBoxs />
                </div>
                <div className="mt-[2px]">
                  <p className="font-[300] text-[14px] text-black text-xs tracking-[0.04rem] ">
                    서류의 내용이 등록된 회원정보와 다름
                  </p>
                </div>
              </div>
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem]">
                <div className="pt-[7px]">
                  <CheckBoxs />
                </div>
                <div className="mt-[2px]">
                  <p className="font-[300] text-[14px] text-black text-xs tracking-[0.01rem] ">
                    서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                    본인서명 등)
                  </p>
                </div>
              </div>
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem]">
                <div className="pt-[8px]">
                  <CheckBoxs />
                </div>
                <div className="mt-[2px]">
                  <p className="font-[300] text-[14px] text-black text-xs tracking-[0.04rem] mt-[1px]">
                    서류의 유효기간이 초과됨
                  </p>
                </div>
              </div>
              <div className="flex space-x-[-1.8px] items-start h-[1.7rem]">
                <div className="pt-[8px]">
                  <CheckBoxs />
                </div>
                <div className="mt-[4px]">
                  <p className="font-[300] text-[14px] text-black text-xs tracking-[0.04rem] mt-[0px]">
                    직접 입력
                  </p>
                </div>
              </div>
              <div className="flex ml-[13px]">
                <textarea
                  className="bg-[#DDE0E5] text-black pl-3 pt-3 mt-1 focus:outline-none h-[99px] w-[34.5rem] rounded-lg placeholder:text-[13px] placeholder:font-[300]"
                  name=""
                  id=""
                  placeholder="사유 입력"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormWithExtra;
