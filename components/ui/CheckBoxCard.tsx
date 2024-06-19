import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  subTitle: string;
  toggleOn: string;
  activeTab: string;
  func: () => void;
  imgSrc?: string;
};

function CheckBoxCard({
  title,
  subTitle,
  toggleOn,
  activeTab,
  func,
  imgSrc,
}: Props) {

  return (
    <div className="flex flex-row justify-between border border-[#E8E6EC] p-4 items-center rounded-xl">
      <div className="flex flex-row gap-x-2">
        {imgSrc ? (
          <Image
            src={imgSrc}
            width={48}
            height={48}
            className="rounded-xl object-cover aspect-[1/1]"
            alt="CheckBoxCard-logo"
          />
        ) : (
          <div className="w-[48px] h-[48px] bg-[grey]"></div>
        )}

        <div className="flex flex-col items-start justify-center">
          <p className="font-medium">{title}</p>
          <p className="text-[#5F517D] text-xs">{subTitle}</p>
        </div>
      </div>
      {toggleOn !== activeTab ? (
        <svg
          onClick={func}
          className="cursor-pointer"
          viewBox="0 0 24 24"
          width={30}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 4C4.58172 4 1 7.58172 1 12C1 16.4183 4.58172 20 9 20H15C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H9ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z"
              fill="#A39CB5"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <svg
          className="cursor-pointer"
          viewBox="0 0 24 24"
          width={30}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 4C4.58172 4 1 7.58172 1 12C1 16.4183 4.58172 20 9 20H15C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H9ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z"
              fill="#9D71FD"
            ></path>{" "}
          </g>
        </svg>
      )}
    </div>
  );
}

export default CheckBoxCard;
