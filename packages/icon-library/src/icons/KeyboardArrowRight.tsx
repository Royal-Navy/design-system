import React, { SVGProps } from 'react'

const SvgKeyboardArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-arrow-right_svg__a"
        d="M5.727 10.893l3.053-3.06-3.053-3.06.94-.94 4 4-4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-arrow-right_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-arrow-right_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-arrow-right_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardArrowRight
