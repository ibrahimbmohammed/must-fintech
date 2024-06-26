"use client";

import { useState } from "react";
import { Button } from "@atoms/a-button";
import FormModal from "@lib/hoc/form-modal";
import RegisterFormWithImage from "@molecules/m-register-form-with-image";

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
        title="서류 보기"
        width=" w-[20rem] sm:w-[40rem] overflow-hidden xl:w-[50rem] xl:h-[54rem]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <RegisterFormWithImage />
        <div className="flex border-t border-[#D7D8DA]  pt-[25px] w-full items-center flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2   justify-center">
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
