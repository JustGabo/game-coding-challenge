import * as React from "react";

interface SwordsProps {
  className?: string;
}

const Swords = ({ className }: SwordsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
    className={className}
  >
    <path
      stroke="#3C1661"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.25 8.75 1.5 3V1.5H3l5.75 5.75M6.5 9.5l3-3M8 8l2 2M9.5 10.5l1-1M7.25 3.25 9 1.5h1.5V3L8.75 4.75M2.5 7l2 2M3.5 8.5 2 10M1.5 9.5l1 1"
    ></path>
  </svg>
);

export default Swords;
