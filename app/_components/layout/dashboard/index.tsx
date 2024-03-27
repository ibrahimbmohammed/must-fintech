"use client";

import Sidebar from "@molecules/m-side-bar";
import NavItems from "@lib/constants/sidebar/NavItems";
import MainTopNavigation from "@organisms/o-dashboard-main-top-navigation";
import useWindowSize, { Size } from "@/app/_lib/hooks/use-window-size";
import useToggle from "@/app/_lib/hooks/use-toggle";
import SidebarSlideOver from "@organisms/o-dashboard-mobile-sidebar-slideover";
import MobileTopNavigation from "@organisms/o-dashboard-mobile-top-navigation";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({
  children,
}: IDashboardLayoutProps): JSX.Element | null {
  const { width }: Size = useWindowSize();
  const [openSidebar, toggleOpenSidebar]: [boolean, () => void] = useToggle();

  // you could just listent to route path and change the background color of the dashboard
  const SHOW = true;
  if (width) {
    if (width >= 1280) {
      return (
        <div className="">
          <Sidebar
            width={width}
            openDrawer={SHOW}
            showMenuIcon={!SHOW}
            navItems={NavItems}
          />
          <div className="dashboard-content">
            <div className="flex-flex-column space-y-0 p-0">
              <MainTopNavigation />
              <div className="dashboard-child">{children}</div>
            </div>
          </div>
        </div>
      );
    }

    if (width < 1280) {
      return (
        <>
          <SidebarSlideOver
            openSidebar={openSidebar}
            toggleOpenSidebar={toggleOpenSidebar}
          >
            <Sidebar
              width={width}
              openDrawer={SHOW}
              showMenuIcon={!SHOW}
              navItems={NavItems}
            />
          </SidebarSlideOver>
          <MobileTopNavigation toggleOpenSidebar={toggleOpenSidebar} />
          <div className="p-2 bg-white  ">{children}</div>
        </>
      );
    }
  }
  return null;
}

export default DashboardLayout;
