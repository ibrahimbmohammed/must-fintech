"use client";

import Logo from "@/app/_components/atoms/a-logo/logo";
import SidebarNavItem from "@atoms/a-side-bar-nav-item";
import { SidebarNavItemProps, ParentNavItem } from "@lib/types/molecules";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineMenuOpen } from "react-icons/md";
import Image from "next/image";
import BannerImage from "@assets/webp/sidenav.webp";
import Link from "next/link";

const style = {
  active: "text-[#3F4765] pl-3 bg-[#F4F6F8] rounded-[0.3rem]",
  inactive:
    "hover:text-primaryColor text-[#9FA8C7] py-[0rem] pl-3 hover:bg-[#F4F6F8] hover:text-[#3F4765]",
  activeInner: "text-[#FF7100] font-semibold pl-3",
  link: `group relative text-[0.88rem] flex space-x-4 px-0 my-[0.05rem] items-center h-[3.125rem]
    w-full my-[0.4rem] group-hover:cursor-pointer pl-8`,
  linkInner: `group relative text-[0.88rem] hover:font-semibold hover:text-[#FF7100] flex space-x-4 px-4 my-[0.05rem] items-center h-[2rem]
    w-full my-[0.2rem] group-hover:cursor-pointer pl-8`,
  link_hide: "hidden",
  back_active: "bg-primaryDark ",
  back_inactive:
    "bg-white border-[1px]  border-[#E7EEEF] group-hover:bg-primaryDark ",
  icon_active: `fill-white  `,
  icon_inactive: `fill-[#9FA8C7] group-hover:fill-[#9FA8C7] group-hover:fill-white  `,
  extra_icon_active: `fill-[url(#paint0_linear_578_8075)]`,
  extra_icon_inactive: `fill-white group-hover:fill-[url(#paint0_linear_578_8075)]`,
  innerIcon_active: `fill-[url(#paint0_linear_578_8075)] stroke-[url(#paint0_linear_578_8075)]`,
  innerIcon_inactive: `group-hover:fill-[url(#paint0_linear_578_8075)] group-hover:stroke-[url(#paint0_linear_578_8075)] fill-white stroke-white `,
};

export interface ISidebarProps {
  toggleShiftDashboardContent?: () => void;
  openDrawer: boolean;
  width?: number;
  toggleOpenDrawer?: () => void;
  toggleOpenSidebar?: () => void;
  showMenuIcon: boolean;
  navItems: ParentNavItem[] | undefined;
}

function Sidebar({
  openDrawer,
  width,
  toggleOpenDrawer,
  toggleShiftDashboardContent,
  showMenuIcon,
  toggleOpenSidebar,
  navItems,
}: ISidebarProps) {
  const pathname = usePathname();
  const handleToggleOpenDrawerAndShiftDashboardContent = () => {
    toggleOpenDrawer?.();
    toggleShiftDashboardContent?.();
  };

  const letter = "";

  const isSmall = width && width < 1280;

  return (
    <div
      id="sidebar"
      className={`duration-400 top-0 left-0  h-full overflow-y-auto overflow-x-hidden  bg-[#FFFFFF]  shadow-lg  transition-all ease-in-out ${
        !openDrawer ? " w-[6.5rem] " : "  "
      } ${
        isSmall
          ? "w-[15rem]  max-w-[15rem]"
          : " fixed w-[15.2rem] max-w-[15.2rem]  "
      } `}
    >
      <div
        id="logo-content"
        className={`${
          isSmall ? "" : "fixed "
        }   h-[5.75rem]  bg-white  border-b-[2px] border-[#ECEFF9]  z-50 w-full`}
      >
        <div
          id="logo"
          className={`flex h-[3.125rem] w-full items-center mt-4 text-slate-600 ${
            !openDrawer && "justify-center"
          }`}
        >
          <Logo className="ml-8" />
          {openDrawer && (
            <div id="logo-name" className="text-lg font-bold">
              {letter}
            </div>
          )}
        </div>
        {showMenuIcon && !openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdMenu
              className="fixed top-4 left-[4.5rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
        {showMenuIcon && openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdOutlineMenuOpen
              className="fixed top-4 left-[14rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <ul
        id="nav-list "
        className={`${
          isSmall ? "mt-[2.25rem]" : "mt-[6.25rem]"
        }   px-6  hover:cursor-pointer`}
      >
        {(navItems || []).map((item: SidebarNavItemProps) => {
          if (item?.type === "infoItem") {
            return (
              <p
                key={item.id}
                className="text-[#8F98B7] font-[300] pl-2 uppercase"
              >
                {item.name}
              </p>
            );
          }
          return (
            <SidebarNavItem
              key={item.id}
              asPath={pathname}
              name={item.name}
              path={item.path}
              style={style}
              showIcon
              subNavItems={item.subNavItems}
              hasSubNavItems={item.hasSubNavItems}
              Icon={item.Icon}
              openDrawer={openDrawer}
              toggleOpenSidebar={toggleOpenSidebar} // for mobile screens
              handleToggleOpenDrawerAndShiftDashboardContent={
                handleToggleOpenDrawerAndShiftDashboardContent
              } // for tablet screens
            />
          );
        })}

        <div className=" lg:block mt-[3rem]">
          <Link href="/dashboard/premium">
            <Image
              src={BannerImage}
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </ul>
      <div className="absolute -bottom-2 -left-4 w-[6rem] h-[6rem] bg-[url('../public/assets/png/left.png')] bg-no-repeat  text-white" />

      <div className="absolute -bottom-1 -right-2 w-[8rem] h-[9.5rem]  bg-[url('../public/assets/png/right.png')] bg-no-repeat  text-white" />
    </div>
  );
}

export default Sidebar;
