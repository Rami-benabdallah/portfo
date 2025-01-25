import * as React from "react"
const PortoSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96" 
    width={250}
    height={250}
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M48 80c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#FF6610"
      fillRule="evenodd"
      d="M48 80c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32Z"
      clipRule="evenodd"
    />
    <path
      fill="#101010"
      d="M78 48c0 16.569-13.431 30-30 30v4c18.778 0 34-15.222 34-34h-4ZM48 18c16.569 0 30 13.431 30 30h4c0-18.778-15.222-34-34-34v4ZM18 48c0-16.569 13.431-30 30-30v-4c-18.778 0-34 15.222-34 34h4Zm30 30c-16.569 0-30-13.431-30-30h-4c0 18.778 15.222 34 34 34v-4Z"
      mask="url(#a)"
    />
    <circle cx={30} cy={46} r={6} fill="#FAFF0A" />
    <rect
      width={6}
      height={10}
      x={45}
      y={3}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
    />
    <rect
      width={6}
      height={10}
      x={45}
      y={83}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
    />
    <rect
      width={6}
      height={10}
      x={93}
      y={45}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(90 93 45)"
    />
    <rect
      width={6}
      height={10}
      x={13}
      y={45}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(90 13 45)"
    />
    <rect
      width={6}
      height={10}
      x={13.414}
      y={17.657}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(-45 13.414 17.657)"
    />
    <rect
      width={6}
      height={10}
      x={71.414}
      y={73.657}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(-45 71.414 73.657)"
    />
    <rect
      width={6}
      height={10}
      x={80.485}
      y={15.414}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(45 80.485 15.414)"
    />
    <rect
      width={6}
      height={10}
      x={20.485}
      y={71.414}
      fill="#FAFF0A"
      stroke="#101010"
      strokeWidth={2}
      rx={3}
      transform="rotate(45 20.485 71.414)"
    />
  </svg>
)
export default PortoSun
