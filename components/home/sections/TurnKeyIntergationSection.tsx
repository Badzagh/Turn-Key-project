import Badge from "@/components/ui/Badge";
import CheckBoxCard from "@/components/ui/CheckBoxCard";
import React, { useState } from "react";
import { checkBoxes, tabs } from "./CheckBoxAndTabItems";
import Image from "next/image";

type Props = {};





function TurnKeyIntergationSection({}: Props) {
  const [activeTab, setActiveTab] = useState("");
  console.log(activeTab);
  return (
    <div className="flex flex-col gap-y-12 text-black text-center mt-10 items-center p-6 md:p-0">
      <div className="flex flex-col gap-y-4 max-w-[779px]">
        <h3 className="font-bold text-4xl md:text-[64px] md:whitespace-nowrap">
          Easy Turn-Key Integration
        </h3>
        <p className="text-lg text-[#5F517D]">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
      </div>
      <div className="hidden md:flex flex-row gap-x-4 overflow-x-scroll">
        {tabs.map(({ name }) => {
          return (
            <Badge func={() => setActiveTab(name)} active={activeTab === name}>
              <span className="text-xs">{name}</span>
            </Badge>
          );
        })}
      </div>
      <div className="flex md:hidden flex-row w-full overflow-x-scroll justify-center">
        {tabs.map(({ name }) => {
          return (
            <div className={`px-[20.5px] py-[9.5px] text-[#543E81] border-b border-[##1A0745] hover:border-[#9D71FD] cursor-pointer
              ${activeTab === name ? "border-[#9D71FD]" : ""}`}
              onClick={() => setActiveTab(name)}
              >
                   <span className="text-sm whitespace-nowrap">{name}</span>
              </div>
          );
        })}
      </div>

      <div className="w-full hidden flex-row  mt-10 xl:flex">
        <div id="left" className="flex flex-col gap-y-4 w-full max-w-[280px]">
          {checkBoxes.slice(0, 3).map(({ title, subTitle, toggleOn, imgSrc }) => {
            return (
              <CheckBoxCard
                title={title}
                subTitle={subTitle}
                toggleOn={toggleOn}
                activeTab={activeTab}
                imgSrc={imgSrc}
                func={() => setActiveTab(toggleOn)}
              />
            );
          })}
        </div>

        <div className="flex flex-col w-[120px] h-[199px] my-auto justify-center relative">
          <div className="flex flex-col w-[120px] h-[99.5px]">
            <div
              className={`w-[61px] h-[49.75px] rounded-tr-2xl border-r-[2px] border-t-[2px] ${
                activeTab === "Medium Business"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
            <div
              className={`w-[61px] h-[49.75px] relative ml-auto rounded-bl-2xl border-l-[2px] border-b-[1px] ${
                activeTab === "Medium Business"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
          </div>
          <div
            className={`flex h-[2px] w-full absolute ${
              activeTab === "Medium Business" ? "bg-[#9D71FD]" : "bg-[#D7CFFD]"
            }`}
          ></div>
          <div className="flex flex-col w-[120px] h-[99.5px]">
            <div
              className={`w-[61px] h-[49.75px] relative ml-auto rounded-tl-2xl border-l-[2px]  border-t-[1px] ${
                activeTab === "Enterprise"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
            <div
              className={`w-[61px] h-[49.75px] rounded-br-2xl border-r-[2px] border-b-[2px] ${
                activeTab === "Enterprise"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
          </div>
        </div>

        <div className="min-w-[380px] relative flex flex-col items-center gap-y-[1.6878rem] bg-[#F2EFFE] border-[2px] border-[#9D71FD] rounded-3xl px-10 py-12 mt-3">
          {/* <div className="w-[86px] h-[86px] bg-[grey] absolute -top-8"></div> */}
          <Image src={'/images/illustration-woman-female-avatar.jpg'} width={86} height={86} className="absolute -top-8 border rounded-[10px]" alt="female-avatar" />
          <div className="flex flex-col gap-y-1 mt-5">
            <h4 className="font-bold text-lg">Lauren Robson</h4>
            <p className="text-sm text-[#5F517D]">HR Director</p>
          </div>
          <p className="text-base">
            “I want to lower PTO liability and keep my employess happy. I want
            to lower PTO liability.”
          </p>
        </div>

        <div className="flex flex-col w-[120px] h-[199px] my-auto justify-center relative">
          <div className="flex flex-col w-[120px] h-[99.5px]">
            <div
              className={`w-[61px] h-[49.75px] ml-auto rounded-tl-2xl border-l-[2px] border-t-[2px] ${
                activeTab === "Enterprise"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
            <div
              className={`w-[61px] h-[49.75px] relative  rounded-br-2xl border-r-[2px] border-b-[1px] ${
                activeTab === "Enterprise"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              } `}
            ></div>
          </div>
          <div
            className={`flex h-[2px] w-full absolute ${
              activeTab === "Enterprise" ? "bg-[#9D71FD]" : "bg-[#D7CFFD]"
            }`}
          ></div>
          <div className="flex flex-col w-[120px] h-[99.5px]">
            <div
              className={`w-[61px] h-[49.75px] relative rounded-tr-2xl border-r-[2px]  border-t-[1px] ${
                activeTab === "Small Business"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
            <div
              className={`w-[61px] h-[49.75px] ml-auto rounded-bl-2xl border-l-[2px] border-b-[2px] ${
                activeTab === "Small Business"
                  ? "border-[#9D71FD]"
                  : "border-[#D7CFFD]"
              }`}
            ></div>
          </div>
        </div>

        <div
          id="right"
          className="flex flex-col  gap-y-4  w-full max-w-[280px]"
        >
          {checkBoxes
            .slice(3, checkBoxes.length)
            .map(({ title, subTitle, toggleOn, imgSrc }) => {
              return (
                <CheckBoxCard
                  title={title}
                  subTitle={subTitle}
                  toggleOn={toggleOn}
                  activeTab={activeTab}
                  imgSrc={imgSrc}
                  func={() => setActiveTab(toggleOn)}
                />
              );
            })}
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-y-4 mt-10 xl:hidden">
        <div className="min-w-[323px] sm:min-w-[380px] relative flex flex-col items-center gap-y-[1.6878rem] bg-[#F2EFFE] border-[2px] border-[#9D71FD] rounded-3xl px-10 py-12 mt-3">
          {/* <div className="w-[86px] h-[86px] bg-[grey] absolute -top-8"></div> */}
          <Image src={'/images/illustration-woman-female-avatar.jpg'} width={86} height={86} className="absolute -top-8 border rounded-[10px]" alt="female-avatar" />
          <div className="flex flex-col gap-y-1 mt-5">
            <h4 className="font-bold text-lg">Lauren Robson</h4>
            <p className="text-sm text-[#5F517D]">HR Director</p>
          </div>
          <p className="text-base">
            “I want to lower PTO liability and keep my employess happy. I want
            to lower PTO liability.”
          </p>
        </div>
        <div id="left" className="flex flex-col gap-y-4 w-full min-w-[323px] sm:max-w-max sm:gap-x-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
          {checkBoxes.map(({ title, subTitle, toggleOn, imgSrc }) => {
            return (
              <CheckBoxCard
                title={title}
                subTitle={subTitle}
                toggleOn={toggleOn}
                activeTab={activeTab}
                imgSrc={imgSrc}
                func={() => setActiveTab(toggleOn)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TurnKeyIntergationSection;
