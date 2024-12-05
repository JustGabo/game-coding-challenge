import * as React from "react";

interface DIconProps {
  className?: string;
}

const DIcon = ({ className }: DIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="49"
    fill="none"
    viewBox="0 0 72 49"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3306)">
      <rect
        width="48"
        height="48"
        x="7"
        y="-7.577"
        fill="#fff"
        rx="8"
        transform="rotate(-15 7 -7.577)"
      ></rect>
    </g>
    <path
      fill="#CD5BC6"
      fillOpacity="0.6"
      d="m39.975 14.23-3.639.975-3.012-11.24 3.754-1.005q1.652-.443 3.018-.086 1.365.353 2.333 1.44.972 1.08 1.441 2.831.471 1.757.167 3.191a4.67 4.67 0 0 1-1.323 2.437q-1.027 1-2.74 1.457m-2.34-.96 1.85-.496q1.283-.345 2.005-1.055a3.15 3.15 0 0 0 .895-1.752q.174-1.04-.183-2.375-.354-1.322-1.024-2.13-.664-.811-1.621-1.067t-2.186.074l-1.954.524z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3306"
        width="71.196"
        height="71.196"
        x="0.796"
        y="-22.204"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.890196 0 0 0 0 0.756863 0 0 0 0 0.847059 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16980_3306"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3306"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="4" dy="-4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.976471 0 0 0 0 0.92549 0 0 0 0 0.992157 0 0 0 1 0"></feColorMatrix>
        <feBlend in2="shape" result="effect2_innerShadow_16980_3306"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default DIcon;
