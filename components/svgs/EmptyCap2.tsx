import * as React from "react";

interface EmptyCapProps {
  className?: string;
  fill?: string;
  fillOpacity?: number
}

const EmptyCap2 = ({ className, fill, fillOpacity }: EmptyCapProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={fill}
    className={className}
  >
    <g filter="url(#filter0_di_16980_3335)">
      <rect
        width="20"
        height="20"
        x="4"
        y="5.176"
        fill={fill}
        fillOpacity={fillOpacity}
        rx="4"
        transform="rotate(-15 4 5.176)"
      ></rect>
    </g>
    <defs>
      <filter
        id="filter0_di_16980_3335"
        width="30.699"
        height="32.699"
        x="0.898"
        y="-1.102"
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
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.950716 0 0 0 0 0.814762 0 0 0 0 0.907664 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16980_3335"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3335"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="-2"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.976471 0 0 0 0 0.92549 0 0 0 0 0.992157 0 0 0 1 0"></feColorMatrix>
        <feBlend in2="shape" result="effect2_innerShadow_16980_3335"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default EmptyCap2;
