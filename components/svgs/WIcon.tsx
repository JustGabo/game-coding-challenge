import * as React from "react";

interface WIconProps {
  className?: string;
}

const WIcon = ({ className }: WIconProps) => (
  <svg
  className={className}
    xmlns="http://www.w3.org/2000/svg"
    height="72"
    fill="none"
    viewBox="0 0 72 72"
  >
    <g filter="url(#filter0_di_16980_3309)">
      <rect
        width="48"
        height="48"
        x="7"
        y="15.423"
        fill="#fff"
        rx="8"
        transform="rotate(-15 7 15.423)"
      ></rect>
    </g>
    <path
      fill="#CD5BC6"
      fillOpacity="0.6"
      d="m36.56 38.145-6.13-10.404 1.785-.478 4.522 8.117.104-.028-.055-9.314 1.767-.474 4.612 8.1.104-.028-.15-9.295 1.79-.48-.111 12.077-1.707.457-4.622-7.785-.087.024-.11 9.053z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3309"
        width="71.196"
        height="71.196"
        x="0.796"
        y="0.796"
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
          result="effect1_dropShadow_16980_3309"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3309"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3309"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default WIcon;
