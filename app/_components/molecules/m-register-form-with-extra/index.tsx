import React from "react";
import CheckBoxs from "@atoms/a-checkbox";

function RegisterFormWithExtra() {
  return (
    <div className="flex flex-col">
      <div className="flex  mt-[1.2rem] mb-[2rem] flex-col mx-[24px] border border-[#D7D8DA]">
        <div className="flex">
          <div className="bg-[rgb(238,240,244)] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] text-black pl-[7px] pb-[1px]">회원번호</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[22px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black tracking-[0.06rem] text-xs">
              abc111, abc222
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[12%] h-[49px] flex pl-2">
            <p className="text-[16px] text-black pl-2 ">회원명/법인명</p>
          </div>
          <div className="flex-[70%] flex items-center pl-[23px] border-b border-[#D7D8DA]">
            <p className="font-[200] text-black text-xs tracking-[0.06rem] ">
              김길동, ㈜가나다라투자
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EEF0F4] border-b border-white items-center flex-[12%] h-[300px] flex pl-[11px]">
            <p className="text-[16px] text-black pl-1 pt-[1.2px]">
              승인거부 사유
            </p>
          </div>
          <div className="flex-[70%] flex items-center pl-[9px] border-[#D7D8DA]">
            <div className="w-[36rem] flex flex-col">
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  서류 식별 불가
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  필수 서류 누락
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  서류의 내용이 등록된 회원정보와 다름
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                  본인서명 등)
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  서류의 유효기간이 초과됨
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="">
                  <CheckBoxs />
                </div>
                <p className="font-[200] text-black text-xs tracking-[0.06rem]">
                  직접 입력
                </p>
              </div>
              <div className="flex ml-[13px]">
                <textarea
                  className="bg-[#B1B4BB] h-[100px] w-[34.5rem] rounded-lg"
                  name=""
                  id=""
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
