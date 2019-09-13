import React, { SVGProps } from 'react'

const SvgKeyboardArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-arrow-left_svg__a"
        d="M10.273 10.727L7.22 7.667l3.053-3.06-.94-.94-4 4 4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-arrow-left_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-arrow-left_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-arrow-left_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardArrowLeft
