import React from "react";

type Props = {
  title: string;
  subTitle: string;
  toggleOn: string;
  activeTab: string;
  func: () => void;
};

function CheckBoxCard({ title, subTitle, toggleOn, activeTab, func }: Props) {
    console.log(toggleOn)
    console.log(activeTab)
  return (
    <div className="flex flex-row justify-between border border-[#E8E6EC] p-4 items-center rounded-xl">
      <div className="flex flex-row gap-x-2">
        <div className="w-[48px] h-[48px] bg-[grey]"></div>
        <div className="flex flex-col items-start">
          <p className="font-medium">{title}</p>
          <p className="text-[#5F517D]">{subTitle}</p>
        </div>
      </div>
      {toggleOn !== activeTab ? (
        <div
          className="w-[24px] h-[24px] bg-[grey]"
          onClick={func}
        ></div>
      ) : (
        <div className="w-[24px] h-[24px] bg-[#9D71FD]"></div>
      )}
    </div>
  );
}

export default CheckBoxCard;
