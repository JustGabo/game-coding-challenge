import React from "react";

interface PillsProps {
  label: string;
  icon: React.ReactNode;
  text: string;
}

const Pills = ({ label, icon, text }: PillsProps) => {
  return (
    <div className="flex items-center gap-2 py-2 px-4 rounded-full border border-[#E2DCE7]">
      <div className="flex items-center gap-1 text-[#6727A6]">
        <span aria-hidden="true">{icon}</span>
        <span className="text-sm font-medium">{label}:</span>
      </div>
      <span className="text-sm font-medium text-[#3C1661]">{text}</span>
    </div>
  );
};

export default Pills;
