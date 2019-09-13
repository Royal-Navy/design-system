import React, { SVGProps } from 'react'

const SvgFilterList = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-list_svg__a"
        d="M6.667 12h2.666v-1.333H6.667V12zM2 4v1.333h12V4H2zm2 4.667h8V7.333H4v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-list_svg__b" fill="#fff">
        <use xlinkHref="#filter-list_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-list_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterList
