import React from "react";

interface PillsProps {
  label: string;
  icon: React.ReactNode;
  text: string;
}

const Pills = ({ label, icon, text }: PillsProps) => {
  return (
    <div className="flex items-center gap-1 py-2 px-4 rounded-full border-[#E2DCE7] border">
      <div className="flex items-center gap-1 text-[#6727A6]">
        {icon}
        <p className="text-sm font-medium ">{label}:</p>
      </div>
      <p className="text-sm font-medium text-[#3C1661]">{text}</p>
    </div>
  );
};

export default Pills;
