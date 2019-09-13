import React, { SVGProps } from 'react'

const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="trending-down_svg__a"
        d="M10.667 12l1.526-1.527L8.94 7.22 6.273 9.887 1.333 4.94l.94-.94 4 4L8.94 5.333l4.2 4.194L14.667 8v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="trending-down_svg__b" fill="#fff">
        <use xlinkHref="#trending-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#trending-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTrendingDown
