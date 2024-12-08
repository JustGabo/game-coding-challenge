import React from "react";
import EmptyStateSVG from "../svgs/Empty";

const EmptyState = () => {
  return (
    <section
      className="flex flex-col h-full items-center justify-center gap-[24px]"
      aria-labelledby="empty-state-title"
    >
      <EmptyStateSVG />
      <div className="flex flex-col items-center gap-[8px]">
        <h2
          id="empty-state-title"
          className="text-[16px] font-semibold text-[#000000]"
        >
          Nothing Collected Yet
        </h2>
        <p className="text-[14px] font-medium text-[#775C90]">
          Here you will see your collected games
        </p>
      </div>
    </section>
  );
};

export default EmptyState;
