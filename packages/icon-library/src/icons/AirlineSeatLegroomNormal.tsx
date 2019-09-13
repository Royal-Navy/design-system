import React, { SVGProps } from 'react'

const SvgAirlineSeatLegroomNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-legroom-normal_svg__a"
        d="M3.333 8V2H2v6a3.335 3.335 0 003.333 3.333h4V10h-4c-1.106 0-2-.893-2-2zm10.334 4h-1V7.333c0-.733-.6-1.333-1.334-1.333H8V2H4v5.333c0 1.1.9 2 2 2h4.667V14h3c.553 0 1-.447 1-1 0-.553-.447-1-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-legroom-normal_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-legroom-normal_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-legroom-normal_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatLegroomNormal
