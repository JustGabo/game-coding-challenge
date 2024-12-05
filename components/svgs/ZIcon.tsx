import * as React from "react";

interface ZIconProps {  
  className?: string;
}

const ZIcon = ({ className }: ZIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    viewBox="0 0 72 72"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3321)">
      <rect
        width="48"
        height="48"
        x="19.423"
        y="3"
        fill="#fff"
        rx="8"
        transform="rotate(15 19.423 3)"
      ></rect>
    </g>
    <path
      fill="#CD5BC6"
      fillOpacity="0.6"
      d="m29.357 35.843.302-1.13 8.229-7.066-5.96-1.597.39-1.46 8.035 2.153-.302 1.13-8.229 7.066 5.96 1.597-.39 1.46z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3321"
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
        <feColorMatrix values="0 0 0 0 0.890674 0 0 0 0 0.758406 0 0 0 0 0.848789 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16980_3321"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3321"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="-4" dy="-4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.976471 0 0 0 0 0.92549 0 0 0 0 0.992157 0 0 0 1 0"></feColorMatrix>
        <feBlend in2="shape" result="effect2_innerShadow_16980_3321"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default ZIcon;
