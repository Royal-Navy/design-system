import React, { SVGProps } from 'react'

const SvgViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-list_svg__a"
        d="M2.667 9.333h2.666V6.667H2.667v2.666zm0 3.334h2.666V10H2.667v2.667zm0-6.667h2.666V3.333H2.667V6zM6 9.333h8V6.667H6v2.666zm0 3.334h8V10H6v2.667zm0-9.334V6h8V3.333H6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-list_svg__b" fill="#fff">
        <use xlinkHref="#view-list_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-list_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewList
