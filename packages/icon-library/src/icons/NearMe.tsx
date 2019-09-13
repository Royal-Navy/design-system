import React, { SVGProps } from 'react'

const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="near-me_svg__a" d="M14 2L2 7.02v.653L6.56 9.44 8.32 14h.653z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="near-me_svg__b" fill="#fff">
        <use xlinkHref="#near-me_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#near-me_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNearMe
