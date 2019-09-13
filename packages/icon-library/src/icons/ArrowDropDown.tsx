import React, { SVGProps } from 'react'

const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-drop-down_svg__a"
        d="M4.444 7.111L8 10.667l3.556-3.556z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-drop-down_svg__b" fill="#fff">
        <use xlinkHref="#arrow-drop-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-drop-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowDropDown
