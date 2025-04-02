import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <rect width={100} height={100} fill="#F34" rx={3} />
    <mask
      id="a"
      width={44}
      height={44}
      x={28}
      y={28}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M66.25 30.5h-32.5a3.25 3.25 0 0 0-3.25 3.25v32.5a3.25 3.25 0 0 0 3.25 3.25h32.5a3.25 3.25 0 0 0 3.25-3.25v-32.5a3.25 3.25 0 0 0-3.25-3.25Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m38.56 56.321 6.128-6.128 4.754 4.742L60.832 43.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M52.167 43.5h8.667v8.667"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#fff" d="M24 24h52v52H24V24Z" />
    </g>
  </svg>
);

export { SvgComponent as MisleadingAdvice };
