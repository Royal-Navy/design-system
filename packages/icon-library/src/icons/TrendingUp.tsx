import React, { SVGProps } from 'react'

const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="trending-up_svg__a"
        d="M10.667 4l1.526 1.527L8.94 8.78 6.273 6.113l-4.94 4.947.94.94 4-4 2.667 2.667 4.2-4.194L14.667 8V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="trending-up_svg__b" fill="#fff">
        <use xlinkHref="#trending-up_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#trending-up_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTrendingUp
