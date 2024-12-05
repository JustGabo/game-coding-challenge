import * as React from "react";

interface CIconProps {
  className?: string;
}

const CIcon = ({ className }: CIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    viewBox="0 0 72 72"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3324)">
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
      d="m40.751 30.767-1.712-.459a2.7 2.7 0 0 0-.578-1.949 3 3 0 0 0-.755-.673 3.5 3.5 0 0 0-.976-.42 3.3 3.3 0 0 0-1.87.022q-.894.285-1.592 1.11-.69.826-1.056 2.187-.368 1.371-.182 2.433.192 1.063.83 1.752.64.69 1.6.946a3.6 3.6 0 0 0 1.048.128q.523-.018.989-.2.466-.18.845-.52.387-.344.635-.854l1.71.465q-.358.792-.94 1.383-.576.586-1.325.927a4.7 4.7 0 0 1-1.602.4 5.3 5.3 0 0 1-1.785-.184q-1.461-.39-2.417-1.389-.954-1.002-1.266-2.474-.306-1.47.175-3.265.482-1.8 1.486-2.913 1.005-1.12 2.333-1.505 1.328-.39 2.783-.001a5.4 5.4 0 0 1 1.599.705q.711.46 1.2 1.121.488.655.705 1.472.218.81.118 1.755"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3324"
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
          result="effect1_dropShadow_16980_3324"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3324"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3324"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default CIcon;
