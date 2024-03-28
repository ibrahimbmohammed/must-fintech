"use client";

import { useState } from "react";
import { Button } from "@atoms/a-button";
import FormModal from "@lib/hoc/form-modal";
import RegisterFormWithExtra from "@molecules/m-register-form-with-extra";

const Copy: React.FC = () => {
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
          modal
        </Button>
      </div>
      <FormModal
        title="승인거부 사유 입력"
        width=" w-[20rem] sm:w-[40rem]  xl:w-[50rem] xl:h-[38.5rem]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <RegisterFormWithExtra />
        <div className="flex border-t border-[#D7D8DA] pt-[25px] w-full items-center  flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2  justify-center">
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
};

export default Copy;
