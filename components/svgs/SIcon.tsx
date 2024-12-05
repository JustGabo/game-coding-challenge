import * as React from "react";

interface SIconProps {
  className?: string;
}

const SIcon = ({ className }: SIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    viewBox="0 0 72 72"
    className={className}
    >
    <g filter="url(#filter0_di_16980_3318)">
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
      d="M40.96 29.266a1.66 1.66 0 0 0-.4-1.401q-.52-.604-1.487-.863-.691-.186-1.255-.101-.563.078-.944.382-.375.3-.502.777-.108.401.001.742.115.342.369.622.26.276.583.503.322.222.63.393l1.02.58q.504.274 1.008.651.506.377.89.874.385.497.535 1.12.157.624-.047 1.381-.255.955-.948 1.564-.687.61-1.735.788-1.04.18-2.359-.173-1.263-.339-2.077-.986-.815-.648-1.139-1.523-.322-.88-.106-1.91l1.702.455q-.114.623.123 1.121.243.495.734.838.498.34 1.15.514.72.193 1.34.118.626-.079 1.06-.398.433-.325.58-.874.135-.5-.066-.894a2.2 2.2 0 0 0-.621-.732 8 8 0 0 0-.983-.657l-1.231-.718q-1.252-.73-1.85-1.655-.595-.923-.28-2.098.26-.972.981-1.555t1.729-.742q1.008-.165 2.14.138 1.14.305 1.906.94.77.636 1.087 1.474.319.832.098 1.743z"
    ></path>
    <defs>
      <filter
        id="filter0_di_16980_3318"
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
          result="effect1_dropShadow_16980_3318"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16980_3318"
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
        <feBlend in2="shape" result="effect2_innerShadow_16980_3318"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default SIcon;
