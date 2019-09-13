import React, { SVGProps } from 'react'

const SvgAirlineSeatLegroomExtra = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-legroom-extra_svg__a"
        d="M2.667 8V2H1.333v6a3.335 3.335 0 003.334 3.333h4V10h-4c-1.107 0-2-.893-2-2zm12.553 3.493c-.253-.48-.86-.646-1.353-.42l-.727.334-2.273-4.654a1.34 1.34 0 00-1.194-.746L7.333 6V2h-4v5.333c0 1.107.894 2 2 2H10L12.273 14l2.48-1.133c.514-.24.734-.867.467-1.374z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-legroom-extra_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-legroom-extra_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-legroom-extra_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatLegroomExtra
