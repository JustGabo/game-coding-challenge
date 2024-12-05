import * as React from "react";

interface CtrlIconProps {
  className?: string;
}

const CtrlIcon = ({ className }: CtrlIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="49"
    fill="none"
    viewBox="0 0 72 49"
    className={className}
  >
    <g filter="url(#filter0_di_16980_3312)">
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
      d="M29.16 16.738q-1.224.328-2.256.01a3.8 3.8 0 0 1-1.764-1.18q-.735-.856-1.075-2.124-.343-1.284-.124-2.396a3.83 3.83 0 0 1 .948-1.907q.73-.79 1.92-1.108.96-.258 1.808-.102.846.15 1.478.662.637.512.953 1.34l-1.597.427a2 2 0 0 0-.877-.859q-.582-.303-1.366-.093a2.1 2.1 0 0 0-1.105.684q-.415.494-.523 1.235-.108.735.133 1.635.247.922.706 1.516.459.595 1.068.826.615.23 1.312.043.465-.126.8-.397.336-.279.508-.672.175-.394.159-.877l1.597-.428q.13.84-.142 1.602-.272.761-.92 1.33-.642.566-1.641.833m6.848-11.053.353 1.318-4.604 1.233-.353-1.317zm-3.91-1.116 1.64-.44 2.137 7.974q.128.479.336.681a.77.77 0 0 0 .454.225q.252.021.522-.051.197-.053.338-.12l.219-.106.66 1.276a3 3 0 0 1-.378.219 3.3 3.3 0 0 1-.64.242 3 3 0 0 1-1.27.093 2.14 2.14 0 0 1-1.105-.503q-.481-.413-.686-1.176zm7.984 9.06-2.258-8.43 1.586-.425.359 1.34.087-.024a2.1 2.1 0 0 1 .526-1.288q.48-.553 1.222-.751a7 7 0 0 1 .707-.149l.421 1.57q-.105-.001-.367.034-.263.03-.516.097a2.2 2.2 0 0 0-.97.525 1.9 1.9 0 0 0-.535 1.913l1.38 5.148zM44.643.36l3.012 11.24-1.641.44L43.002.8z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3312"
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
        <feColorMatrix values="0 0 0 0 0.890674 0 0 0 0 0.758406 0 0 0 0 0.848789 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16980_3312"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3312"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3312"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default CtrlIcon;
