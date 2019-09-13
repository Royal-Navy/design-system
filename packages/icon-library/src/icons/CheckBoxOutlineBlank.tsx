import React, { SVGProps } from 'react'

const SvgCheckBoxOutlineBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="check-box-outline-blank_svg__a"
        d="M12.667 3.333v9.334H3.333V3.333h9.334zm0-1.333H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="check-box-outline-blank_svg__b" fill="#fff">
        <use xlinkHref="#check-box-outline-blank_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#check-box-outline-blank_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCheckBoxOutlineBlank
