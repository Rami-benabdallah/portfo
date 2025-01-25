import * as React from "react"
const PortfoLoop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M31.223 8.198c5.212 6.21 4.898 15.22-.418 21.05l2.305 2.747a5.001 5.001 0 0 1 5.244 1.583l5.143 6.128a5 5 0 0 1-7.66 6.428l-5.143-6.128a5.001 5.001 0 0 1-.648-5.44l-2.281-2.718c-6.691 4.416-15.778 3.209-21.055-3.081-5.68-6.77-4.797-16.861 1.972-22.541s16.861-4.797 22.541 1.972Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#101010"
      fillRule="evenodd"
      d="M31.223 8.198c5.212 6.21 4.898 15.22-.418 21.05l2.305 2.747a5.001 5.001 0 0 1 5.244 1.583l5.143 6.128a5 5 0 0 1-7.66 6.428l-5.143-6.128a5.001 5.001 0 0 1-.648-5.44l-2.281-2.718c-6.691 4.416-15.778 3.209-21.055-3.081-5.68-6.77-4.797-16.861 1.972-22.541s16.861-4.797 22.541 1.972Z"
      clipRule="evenodd"
    />
    <path
      fill="#101010"
      d="m30.805 29.248-.739-.673-.59.646.563.67.766-.642Zm2.305 2.747-.767.643.421.501.628-.185-.282-.959Zm5.244 1.583.766-.643-.766.643Zm5.143 6.128-.766.643.766-.643Zm-13.451-5.14.895.445.291-.586-.42-.502-.767.643Zm-2.281-2.718.766-.643-.573-.683-.744.491.55.835Zm3.779-1.926c5.65-6.196 5.983-15.767.445-22.367l-1.532 1.286c4.886 5.822 4.592 14.268-.391 19.734l1.478 1.347Zm2.332 1.43-2.305-2.746-1.532 1.285 2.304 2.747 1.533-1.286Zm-.484 1.602a4.001 4.001 0 0 1 4.196 1.267l1.532-1.286a6.001 6.001 0 0 0-6.293-1.9l.565 1.92Zm4.196 1.267 5.143 6.128 1.532-1.285-5.143-6.129-1.532 1.286Zm5.143 6.128a4 4 0 0 1-.493 5.636l1.285 1.532a6 6 0 0 0 .74-8.453l-1.532 1.285Zm-.493 5.636a4 4 0 0 1-5.636-.493l-1.532 1.285a6 6 0 0 0 8.453.74l-1.285-1.532Zm-5.636-.493-5.142-6.129-1.532 1.286 5.142 6.128 1.532-1.285Zm-5.142-6.129a4.001 4.001 0 0 1-.519-4.352l-1.791-.89a6.001 6.001 0 0 0 .778 6.528l1.532-1.286Zm-4.461-6.872 2.28 2.718 1.532-1.286-2.28-2.718-1.532 1.286ZM5.944 29.41c5.608 6.683 15.261 7.966 22.372 3.273l-1.102-1.67c-6.272 4.14-14.791 3.007-19.738-2.889L5.944 29.41ZM8.039 5.46C.847 11.495-.091 22.218 5.944 29.41l1.532-1.286C2.15 21.778 2.978 12.317 9.325 6.992L8.039 5.46Zm23.95 2.095C25.954.363 15.231-.575 8.04 5.46l1.286 1.532C15.67 1.667 25.132 2.494 30.457 8.84l1.532-1.286Z"
      mask="url(#a)"
    />
    <path
      stroke="#101010"
      d="m26.319 25.098 2.298-1.928 6.428 7.66-2.298 1.928z"
    />
    <circle
      cx={20.559}
      cy={16.277}
      r={15.5}
      fill="#FF01C4"
      stroke="#101010"
      transform="rotate(-40 20.56 16.277)"
    />
    <circle
      cx={20.979}
      cy={16.363}
      r={11.5}
      fill="#3CF2FE"
      stroke="#101010"
      transform="rotate(-40 20.979 16.363)"
    />
    <circle
      cx={23.963}
      cy={12.099}
      r={3}
      fill="#fff"
      transform="rotate(-40 23.963 12.1)"
    />
    <rect
      width={9}
      height={17}
      x={29.806}
      y={33.921}
      fill="#FF01C4"
      stroke="#101010"
      rx={4.5}
      transform="rotate(-40 29.806 33.921)"
    />
  </svg>
)
export default PortfoLoop
