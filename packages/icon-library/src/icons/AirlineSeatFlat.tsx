import React, { SVGProps } from 'react'

const SvgAirlineSeatFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-flat_svg__a"
        d="M14.667 7.333v1.334H6v-4h6a2.666 2.666 0 012.667 2.666zm-13.334 2v1.334h4V12h5.334v-1.333h4V9.333H1.333zM4.76 8.067a2 2 0 00-2.853-2.8 2 2 0 002.853 2.8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-flat_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-flat_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-flat_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatFlat
