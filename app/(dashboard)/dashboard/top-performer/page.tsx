"use client";

import { useState } from "react";
import NotificationModal from "@lib/hoc/notification-modal";
import { Button } from "@atoms/a-button";
import SuccessIcon from "@lib/svg/success-icon";

const TopPerformer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
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
        icon={<SuccessIcon />}
        title="form"
        width=" w-[20rem] h-[228px]  sm:w-[40rem]  xl:w-[25rem] xl:h-[198px]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="w-full pl-[24.6px] mt-[0px]  ">
          <p className="text-[17px] text-black leading-[18px] font-semibold  tracking-[0.04rem]">
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
    </>
  );
};

export default TopPerformer;
