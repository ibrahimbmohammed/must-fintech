"use client";

import type { Dispatch, SetStateAction } from "react";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../svg/cancle-icon";

interface Props {
  title: string;
  icon: React.ReactNode;
  showTitle?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  width?: string;
  className?: string;
  autoClose?: boolean;
}

const NotificationModal = ({
  title,
  icon,
  showTitle = true,
  isOpen,
  setIsOpen,
  children,
  width = "w-full md:w-[33rem] lg:w-[23rem] xl:w-[35rem]",
  className,
  autoClose = true,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-[20] overflow-y-auto ${className}`}
        onClose={() => {
          if (autoClose) {
            return setIsOpen(false);
          }
          return null;
        }}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`my-8 inline-block transform bg-white ${
                showTitle ? "rounded-xl px-0 py-3 " : "rounded-lg px-0 py-0"
              }  text-left align-middle shadow-xl transition-all ${
                width || ""
              }`}
            >
              {showTitle && (
                <Dialog.Title
                  as="div"
                  className="flex items-center  justify-between  pt-0 pb-2"
                >
                  <div className="w-[95%] pl-[21px] flex items-end  text-lg font-medium ">
                    <p className="pt-0 pr-[0px] text-black text-lg">{icon}</p>
                  </div>
                  <div className="pr-[16px] pt-[3px] ">
                    <button
                      type="button"
                      className=""
                      onClick={() => setIsOpen(false)}
                    >
                      <CancelIcon />
                    </button>
                  </div>
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotificationModal;
