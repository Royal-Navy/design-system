import React, { SVGProps } from 'react'

const SvgAirlineSeatReclineNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-recline-normal_svg__a"
        d="M5.06 3.607a1.336 1.336 0 010-1.887c.52-.52 1.367-.52 1.887 0s.52 1.367 0 1.887a1.324 1.324 0 01-1.887 0zM4 10.667v-6H2.667v6A3.335 3.335 0 006 14h4v-1.333H6c-1.107 0-2-.894-2-2zm9.333 2.713L9.953 10H7.667V7.547c.933.766 2.4 1.44 3.666 1.44v-1.44c-1.106.013-2.406-.58-3.113-1.36l-.933-1.034a1.43 1.43 0 00-.46-.333 1.483 1.483 0 00-.64-.153h-.02c-.827 0-1.5.673-1.5 1.5V10c0 1.107.893 2 2 2h3.38l2.333 2.333.953-.953z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-recline-normal_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-recline-normal_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-recline-normal_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatReclineNormal
