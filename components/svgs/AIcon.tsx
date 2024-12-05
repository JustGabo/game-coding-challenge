import * as React from "react";

interface AIconProps {
  className?: string;
}

const AIcon = ({ className }: AIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="60"
    fill="none"
    viewBox="0 0 72 60"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3315)">
      <rect
        width="48"
        height="48"
        x="19.423"
        y="-9"
        fill="#fff"
        rx="8"
        transform="rotate(15 19.423 -9)"
      ></rect>
    </g>
    <path
      fill="#CD5BC6"
      fillOpacity="0.6"
      d="m32.57 24.436-1.8-.482 7.057-10.156 1.959.525 1.033 12.323-1.8-.482-.713-10.05-.088-.023zm1.481-4.32 5.84 1.564-.383 1.427-5.839-1.565z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3315"
        width="71.196"
        height="71.196"
        x="0.796"
        y="-11.204"
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
          result="effect1_dropShadow_16980_3315"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3315"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3315"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default AIcon;
