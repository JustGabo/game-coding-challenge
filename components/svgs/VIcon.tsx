import * as React from "react";

interface VIconProps {
  className?: string;
}

const VIcon = ({ className }: VIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="66"
    fill="none"
    viewBox="0 0 72 66"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3327)">
      <rect
        width="48"
        height="48"
        x="19.423"
        y="-3"
        fill="#fff"
        rx="8"
        transform="rotate(15 19.423 -3)"
      ></rect>
    </g>
    <path
      fill="#CD5BC6"
      fillOpacity="0.6"
      d="m31.683 18.688.676 9.992.126.034 5.581-8.316 1.833.49-7.056 10.157-1.96-.525-1.033-12.324z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3327"
        width="71.196"
        height="71.196"
        x="0.796"
        y="-5.204"
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
          result="effect1_dropShadow_16980_3327"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3327"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3327"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default VIcon;
