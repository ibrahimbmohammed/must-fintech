"use client";

import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Table from "@organisms/o-table-with-data";
import FormModal from "@lib/hoc/form-modal";
import MyTabs from "@lib/hoc/tab";
import { homeTabItems } from "@lib/constants/topbar";
import { Button } from "@atoms/a-button";
import RegisterForm from "@molecules/m-register-form";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setUserTypeValues] = useState("");

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <main className="flex h-full flex-col space-y-7 relative xl:w-[73.1rem]  2xl:w-full  ">
        <div className="mt-[4rem] flex  ">
          <p className="text-black text-2xl font-medium">회원상세</p>
          <div className="flex pl-[9px]">
            <GoDotFill className="text-[#FF4D4F] text-[14px]" />
            <p className="text-[#FF4D4F] text-sm pt-[5.8px] ">필수항목</p>
          </div>
        </div>
        <div className="w-full top-[82px] absolute bg-[#D7D8DA] h-[0.2px] mt-[14px]" />
        <MyTabs
          tabHeadClass=" xl:w-[73.1rem] 2xl:w-full "
          stateFunction={setUserTypeValues}
          tabList={homeTabItems}
          tabPanel={[
            <div
              key="personal-info"
              className="flex w-full flex-col space-y-5 h-screen no-scrollbar  overflow-y-auto"
            >
              <Table handleIsOpen={handleIsOpen} />
            </div>,
            <div
              key="security"
              className="flex w-full flex-col space-y-5 h-screen no-scrollbar  overflow-y-auto"
            >
              <Table handleIsOpen={handleIsOpen} />
            </div>,
          ]}
        />
      </main>

      <FormModal
        title="투자유형 변경 "
        width=" w-[20rem] sm:w-[40rem]  xl:w-[50rem] xl:h-[29rem]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <RegisterForm />
        <div className="flex flex-col lg:flex-row border-t border-[#D7D8DA] pt-[25px] w-full items-center space-y-2 lg:space-y-0 lg:space-x-2  justify-center">
          <Button
            onClick={() => handleIsOpen && handleIsOpen()}
            className="px-[4.1rem] py-[.6rem]"
            variant={"primary"}
          >
            저장
          </Button>
          <Button
            onClick={() => handleIsOpen && handleIsOpen()}
            className="px-[4.1rem] py-[.5rem]"
            variant={"outline"}
          >
            취소
          </Button>
        </div>
      </FormModal>
    </>
  );
}
