"use client";

import { useState } from "react";
import NotificationModal from "@lib/hoc/notification-modal";
import { Button } from "@atoms/a-button";
import WaringIcon from "@/app/_lib/svg/warning-icon";

const BotLab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const handleIsOpenSecond = () => {
    setIsOpenSecond(true);
  };
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <Button
          className="px-[2.3rem]"
          variant={"primary"}
          onClick={() => handleIsOpen()}
        >
          notification modal
        </Button>
      </div>
      <NotificationModal
        icon={<WaringIcon />}
        title="form"
        width=" w-[20rem]  sm:w-[40rem]  xl:w-[25rem] xl:h-[198px]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="w-full pl-[24.6px] mt-[0px]  ">
          <p className="text-[17px] text-black leading-[18px] font-semibold  tracking-[0.035rem]">
            최대 10개까지 등록 가능합니다.
          </p>
        </div>
        <div className="flex relative  pt-[32px] w-full items-center space-x-2  justify-center">
          <Button
            onClick={() => handleIsOpen && handleIsOpen()}
            className="px-[4.5rem] py-[.6rem] absolute top-[2.4rem] "
            variant={"primary"}
          >
            확인
          </Button>
        </div>
      </NotificationModal>
      <NotificationModal
        icon={<WaringIcon />}
        title="form"
        width=" w-[20rem] sm:w-[40rem]  xl:w-[25rem] xl:h-[12.3rem]"
        isOpen={isOpenSecond}
        setIsOpen={setIsOpenSecond}
      >
        <div className="w-full ">
          <p className="">선택된 신청건이 없습니다.</p>
        </div>
        <div className="flex  pt-[4px] w-full items-center space-x-2  justify-center">
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
      </NotificationModal>
    </>
  );
};

export default BotLab;
