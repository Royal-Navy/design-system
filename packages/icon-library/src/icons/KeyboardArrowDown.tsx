import React, { SVGProps } from 'react'

const SvgKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-arrow-down_svg__a"
        d="M4.94 5.227L8 8.28l3.06-3.053.94.94-4 4-4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-arrow-down_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-arrow-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-arrow-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardArrowDown
