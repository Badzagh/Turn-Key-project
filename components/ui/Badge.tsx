import React from 'react'

type Props = {
  children: React.ReactNode
  func: () => void;
  active: boolean
}

function Badge({ children, func, active }: Props) {
  return (
    <div className={`flex items-center px-[20.5px] py-[9.5px] text-[#543E81] border border-[##1A0745] rounded-xl hover:border-[#9D71FD] active:bg-[#9D71FD] cursor-pointer
    ${active ? "bg-[#9D71FD] text-white" : ""}`}
    onClick={func}
    >
        {children}
    </div>
  )
}

export default Badge