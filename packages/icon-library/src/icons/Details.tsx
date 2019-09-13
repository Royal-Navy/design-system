import React, { SVGProps } from 'react'

const SvgDetails = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="details_svg__a"
        d="M2 2.667l6 10.666 6-10.666H2zM4.253 4h7.5L8 10.667 4.253 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="details_svg__b" fill="#fff">
        <use xlinkHref="#details_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#details_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDetails
