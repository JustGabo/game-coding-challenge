import * as React from "react";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="72"
    fill="none"
    viewBox="0 0 64 72"
  >
    <g filter="url(#filter0_d_16994_4419)" shapeRendering="crispEdges">
      <rect
        width="24"
        height="24"
        x="16"
        y="16"
        fill="url(#paint0_linear_16994_4419)"
        rx="8"
      ></rect>
      <rect
        width="23"
        height="23"
        x="16.5"
        y="16.5"
        stroke="url(#paint1_linear_16994_4419)"
        rx="7.5"
      ></rect>
    </g>
    <path
      stroke="#3C1661"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M29.25 30.75 23.5 25v-1.5H25l5.75 5.75M28.5 31.5l3-3M30 30l2 2M31.5 32.5l1-1M29.25 25.25 31 23.5h1.5V25l-1.75 1.75M24.5 29l2 2M25.5 30.5 24 32M23.5 31.5l1 1"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_16994_4419"
        x1="30.7"
        x2="30.7"
        y1="21.1"
        y2="59.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#FFB4F0" stopOpacity="0.1"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_16994_4419"
        x1="16.6"
        x2="38.8"
        y1="39.1"
        y2="16.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00AE"></stop>
        <stop offset="1" stopColor="#FF97DE"></stop>
      </linearGradient>
      <filter
        id="filter0_d_16994_4419"
        width="72"
        height="72"
        x="-8"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="8"></feOffset>
        <feGaussianBlur stdDeviation="12"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.683333 0 0 0 0.16 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16994_4419"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16994_4419"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default Logo;
