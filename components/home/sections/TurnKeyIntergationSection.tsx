import Badge from "@/components/ui/Badge";
import CheckBoxCard from "@/components/ui/CheckBoxCard";
import React, { useState } from "react";

type Props = {};

const checkBoxes = [
  {
    title: "Sapling",
    subTitle: "HR Management",
    toggleOn: "Medium Business",
  },
  {
    title: "Workday",
    subTitle: "HR Management",
    toggleOn: "Medium Business",
  },
  {
    title: "Xero",
    subTitle: "Employers Base",
    toggleOn: "Enterprise",
  },
  {
    title: "Rippling",
    subTitle: "Salary Management",
    toggleOn: "Enterprise",
  },
  {
    title: "Expensify",
    subTitle: "HR Management",
    toggleOn: "Enterprise",
  },
  {
    title: "Zenefits",
    subTitle: "HR Management",
    toggleOn: "Small Business",
  },
];

const tabs = [
  {
    name: "Small Business",
  },
  {
    name: "Medium Business",
  },
  {
    name: "Enterprise",
  },
];

function TurnKeyIntergationSection({}: Props) {
  const [activeTab, setActiveTab] = useState("");
console.log(activeTab)
  return (
    <div className="flex flex-col gap-y-12 text-black text-center items-center">
      <div className="flex flex-col gap-y-4 max-w-[779px]">
        <h3 className="font-bold text-[64px] whitespace-nowrap">
          Easy Turn-Key Integration
        </h3>
        <p className="text-lg text-[#5F517D]">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
      </div>
      <div className="flex flex-row gap-x-4">
        {tabs.map(({ name }) => {
          return (
            <Badge
              func={() => setActiveTab(name)}
              active={activeTab === name}
            >
              <span className="text-xs">{name}</span>
            </Badge>
          );
        })}
      </div>
      <div className="w-full flex flex-row gap-x-[120px] mt-10">
        <div id="left" className="flex flex-col gap-y-4 w-full max-w-[280px]">
          {checkBoxes.slice(0, 3).map(({ title, subTitle, toggleOn }) => {
            return (
              <CheckBoxCard title={title} subTitle={subTitle} toggleOn={toggleOn} activeTab={activeTab} func={() => setActiveTab(toggleOn)}/>
            );
          })}
        </div>
        <div className="min-w-[380px] relative flex flex-col items-center gap-y-[1.6878rem] bg-[#F2EFFE] border border-[#9D71FD] rounded-3xl px-10 py-12 mt-3">
          <div className="w-[86px] h-[86px] bg-[grey] absolute -top-8"></div>
          <div className="flex flex-col gap-y-1 mt-5">
            <h4 className="font-bold text-lg">Lauren Robson</h4>
            <p className="text-sm text-[#5F517D]">HR Director</p>
          </div>
          <p className="text-base">
            “I want to lower PTO liability and keep my employess happy. I want
            to lower PTO liability.”
          </p>
        </div>
        <div
          id="right"
          className="flex flex-col  gap-y-4  w-full max-w-[280px]"
        >
          {checkBoxes
            .slice(3, checkBoxes.length)
            .map(({ title, subTitle, toggleOn }) => {
              return (
                <CheckBoxCard title={title} subTitle={subTitle} toggleOn={toggleOn} activeTab={activeTab} func={() => setActiveTab(toggleOn)}/>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TurnKeyIntergationSection;
