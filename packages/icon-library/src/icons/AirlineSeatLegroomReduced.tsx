import React, { SVGProps } from 'react'

const SvgAirlineSeatLegroomReduced = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-legroom-reduced_svg__a"
        d="M13.313 12.8c.12.64-.366 1.2-.98 1.2h-3v-2L10 9.333H6c-1.1 0-2-.9-2-2V2h4v4h3.333c.734 0 1.334.6 1.334 1.333L11.333 12h.96c.487 0 .927.327 1.02.8zM3.333 8V2H2v6a3.335 3.335 0 003.333 3.333H8V10H5.333c-1.106 0-2-.893-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-legroom-reduced_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-legroom-reduced_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-legroom-reduced_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatLegroomReduced
