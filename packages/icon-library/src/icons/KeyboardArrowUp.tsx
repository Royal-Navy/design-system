import React, { SVGProps } from 'react'

const SvgKeyboardArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-arrow-up_svg__a"
        d="M4.94 10.273L8 7.22l3.06 3.053.94-.94-4-4-4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-arrow-up_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-arrow-up_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-arrow-up_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardArrowUp
