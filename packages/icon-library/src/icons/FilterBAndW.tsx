import React, { SVGProps } from 'react'

const SvgFilterBAndW = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-b-and-w_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667L8 7.333v5.334H3.333L8 7.333v-4h4.667v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-b-and-w_svg__b" fill="#fff">
        <use xlinkHref="#filter-b-and-w_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-b-and-w_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterBAndW
