import React, { SVGProps } from 'react'

const SvgAirlineSeatReclineExtra = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-recline-extra_svg__a"
        d="M3.567 3.76A1.342 1.342 0 013.24 1.9a1.34 1.34 0 011.86-.327c.6.427.747 1.254.327 1.86-.427.6-1.254.747-1.86.327zm7.1 8.907H5.953c-.986 0-1.826-.72-1.973-1.694L2.667 4.667H1.333l1.327 6.506A3.34 3.34 0 005.96 14h4.707v-1.333zM10.82 10H7.567L6.88 7.267c1.053.593 2.187 1.026 3.433.813V6.66c-1.086.207-2.293-.18-3.126-.833L6.093 4.98c-.153-.12-.326-.2-.506-.253-.214-.06-.44-.08-.66-.04h-.014a1.512 1.512 0 00-1.226 1.74l.9 3.946A2.005 2.005 0 006.553 12h4.567l2.547 2 1-1-3.847-3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-recline-extra_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-recline-extra_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-recline-extra_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatReclineExtra
