import { Tab } from "@headlessui/react";
import { Children, Dispatch, SetStateAction } from "react";

interface MyTabsProps {
  tabList: string[];
  tabPanel: React.ReactNode | React.ReactNode[];
  tabHeadClass?: string;
  stateFunction?: Dispatch<SetStateAction<string>>;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function MyTabs({
  tabList,
  tabPanel,
  tabHeadClass = "w-[80%]",
  stateFunction,
}: MyTabsProps) {
  const childrenNode = Children.toArray(tabPanel);
  const ifFirstorLastTab = (index: number) => {
    if (index === 0) {
      return "xl:rounded-l-md ";
    } else if (index === tabList.length - 1) {
      return "xl:rounded-r-md";
    } else {
      return "";
    }
  };
  return (
    <Tab.Group>
      <Tab.List
        className={`flex flex-wrap  justify-center xl:items-center xl:flex-nowrap  xl:height-[39px]  xl:justify-end  2xl:justify-between  rounded-[0.45rem]  bg-[#EBEEF3]  ${tabHeadClass}  `}
      >
        {tabList.map((item, index) => (
          <Tab
            key={index}
            onClick={() => stateFunction && stateFunction(item)}
            className={({ selected }) =>
              classNames(
                "text-start w-[8.5rem]   flex items-center justify-center  py-[7px] text-[16px] ",
                selected
                  ? `  outline-none bg-primaryDark  border-primaryDark text-white  font-[300] ${ifFirstorLastTab(
                      index
                    )} `
                  : "text-muteText font-[200] "
              )
            }
          >
            <p className="">{item}</p>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {childrenNode.map((item, index) => (
          <Tab.Panel key={index}>{item}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
