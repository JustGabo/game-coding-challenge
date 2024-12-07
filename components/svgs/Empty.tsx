import * as React from "react";

interface EmptyStateProps { 
  className?: string;
}

const EmptyState = ({ className }: EmptyStateProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="358"
    height="168"
    fill="none"
    className={className}
    viewBox="0 0 358 168"
  >
    <g opacity="0.5" transform="rotate(8 209.956 8.847)">
      <rect
        width="108.5"
        height="144.5"
        x="209.956"
        y="8.847"
        fill="url(#paint0_linear_16996_4400)"
        rx="11.25"
      ></rect>
      <rect
        width="108.5"
        height="144.5"
        x="209.956"
        y="8.847"
        stroke="#D7D7D7"
        strokeWidth="1.5"
        rx="11.25"
      ></rect>
    </g>
    <g opacity="0.5" transform="scale(-1 1)rotate(8 -131.167 -1043.77)">
      <rect
        width="108.5"
        height="144.5"
        x="-0.638"
        y="0.847"
        fill="url(#paint1_linear_16996_4400)"
        rx="11.25"
      ></rect>
      <rect
        width="108.5"
        height="144.5"
        x="-0.638"
        y="0.847"
        stroke="#D7D7D7"
        strokeWidth="1.5"
        rx="11.25"
      ></rect>
    </g>
    <rect
      width="124.5"
      height="166.5"
      x="116.75"
      y="0.75"
      fill="url(#paint2_linear_16996_4400)"
      rx="11.25"
    ></rect>
    <rect
      width="124.5"
      height="166.5"
      x="116.75"
      y="0.75"
      stroke="#D7D7D7"
      strokeWidth="1.5"
      rx="11.25"
    ></rect>
    <path
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M179 96.333c7.364 0 13.333-5.97 13.333-13.333S186.364 69.667 179 69.667 165.666 75.637 165.666 83s5.97 13.333 13.334 13.333"
    ></path>
    <path
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M184.333 88.333s-2-2.666-5.333-2.666-5.334 2.666-5.334 2.666"
    ></path>
    <path
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M175 79h.013M183 79h.013"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_16996_4400"
        x1="264.318"
        x2="264.318"
        y1="8"
        y2="154"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#E6E6E6"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_16996_4400"
        x1="55"
        x2="55"
        y1="0"
        y2="146"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#E6E6E6"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_16996_4400"
        x1="179"
        x2="179"
        y1="0"
        y2="168"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#E6E6E6"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default EmptyState;
