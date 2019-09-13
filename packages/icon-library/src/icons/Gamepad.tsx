import React, { SVGProps } from 'react'

const SvgGamepad = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gamepad_svg__a"
        d="M10 5V1.333H6V5l2 2 2-2zM5 6H1.333v4H5l2-2-2-2zm1 5v3.667h4V11L8 9l-2 2zm5-5L9 8l2 2h3.667V6H11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gamepad_svg__b" fill="#fff">
        <use xlinkHref="#gamepad_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gamepad_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGamepad
