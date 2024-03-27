/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react';
import dayjs from 'dayjs';
import { GoBell } from 'react-icons/go';
// import Image from 'next/image';
import ProfileDropDown from '@/app/_components/organisms/o-dashboard-top-navigation/m-profile-dropdown';
import { getUserFromCookies } from '@/app/_lib/cookies';

function MainTopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const now = dayjs();
  function notifications() {
    setIsOpen(!isOpen);
  }

  const userData = getUserFromCookies();

  return (
    <div className="fixed flex flex-col justify-center space-y-3 bg-white min-h-[5.75rem]   w-[calc(100vw_-_16rem)] px-[3.7rem]  border-b-[2px] border-[#ECEFF9] z-20">
      <div
        id="dashboard-main-top-navigation"
        className="flex flex-row items-center  justify-around space-x-3 bg-white"
      >
        <div className="w-[50%] ">
          <div className="">
            <p className="capitalize lg:text-2xl font-[350]" />
          </div>
        </div>
        <div className="w-[10%]" />

        <div className="flex w-[20%] justify-between space-x-1" />

        <div className="flex w-[60%]  flex-row items-center justify-end space-x-6">
          <div className="relative   space-x-1">
            <p
              className="  h-[2.5rem] w-[2.6rem] cursor-pointer rounded-full  flex items-center justify-center bg-[#F3F3FF] py-2 px-[0.4rem]"
              role="none"
            >
              <GoBell className="text-xl" onClick={() => notifications()} />
              <div className="absolute top-0 right-1 h-[0.5rem] w-[0.5rem] bg-[#161616] rounded-full" />
            </p>
          </div>

          <div className="ml-4 inline-flex items-center bg-[#F3F3FF] rounded-[2.1rem] space-x-8 px-[1rem] py-[0.35rem]">
            <span className="flex mt-1 items-center justify-center space-x-2">
              <ProfileDropDown position="-right-50">
                <img
                  src={`https://ui-avatars.com/api/?name=${userData?.firstName}+${userData?.lastName}&background=random&length=2&rounded=true&size=70 `}
                  className="rounded-full"
                  alt="profile avatar"
                  width="45px"
                  height="45px"
                />
              </ProfileDropDown>
              <p className="text-sm font-light">Hello, {userData?.firstName ?? 'User'}</p>
            </span>

            <span className="flex items-center justify-center px-[1rem] py-[0.4rem] bg-white rounded-2xl">
              <p className="text-sm font-light">{now.format('MMMM DD')}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTopNavigation;
