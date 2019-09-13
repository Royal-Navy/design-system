import React, { SVGProps } from 'react'

const SvgExpandMore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="expand-more_svg__a"
        d="M11.058 5.724L8 8.782 4.942 5.724 4 6.667l4 4 4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="expand-more_svg__b" fill="#fff">
        <use xlinkHref="#expand-more_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#expand-more_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExpandMore
