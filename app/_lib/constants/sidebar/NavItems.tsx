import DashBoardIcon from "@lib/icons/dashboard/sidebar/MainIcon";
import { ParentNavItem } from "@lib/types/molecules";
import { v4 as uuidv4 } from "uuid";
import ReportIcon from "../../icons/dashboard/sidebar/ReportIcon";
import FaqIcon from "../../icons/dashboard/sidebar/FaqIcon";
import CouponIcon from "../../icons/dashboard/sidebar/CouponIcon";
import ComplaintIcon from "../../icons/dashboard/sidebar/ComplaintIcon";
import SosIcon from "../../icons/dashboard/sidebar/SosIcon";

const NavItems: ParentNavItem[] = [
  {
    id: uuidv4(),
    type: "infoItem",
    name: "대시보드",
    path: "/dashboard",
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard",
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/bot-lab",
    Icon: ReportIcon,
    hasSubNavItems: false,
  },

  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/copy-trading",
    Icon: ReportIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/academy",
    Icon: ReportIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/top-performer",
    Icon: ReportIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/top-bot-strategy",
    Icon: ReportIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/webinar",
    Icon: FaqIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "infoItem",
    name: "회원 관리",
    path: "/dashboard",
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/settings",
    Icon: CouponIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/help-support",
    Icon: ComplaintIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: "navItem",
    name: "회원 관리",
    path: "/dashboard/logout",
    Icon: SosIcon,
    hasSubNavItems: false,
  },
];

export default NavItems;
