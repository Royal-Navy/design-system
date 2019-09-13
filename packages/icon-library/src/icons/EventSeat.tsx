import React, { SVGProps } from 'react'

const SvgEventSeat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="event-seat_svg__a"
        d="M2.667 12v2h2v-2h6.666v2h2v-4H2.667v2zm10-5.333h2v2h-2v-2zm-11.334 0h2v2h-2v-2zm10 2H4.667V3.333C4.667 2.6 5.267 2 6 2h4c.733 0 1.333.6 1.333 1.333v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="event-seat_svg__b" fill="#fff">
        <use xlinkHref="#event-seat_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#event-seat_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEventSeat
