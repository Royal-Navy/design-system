import React, { SVGProps } from 'react'

const SvgTrendingFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="trending-flat_svg__a" d="M14.667 8L12 5.333v2H2v1.334h10v2z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="trending-flat_svg__b" fill="#fff">
        <use xlinkHref="#trending-flat_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#trending-flat_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTrendingFlat
