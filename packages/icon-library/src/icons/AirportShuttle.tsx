import React, { SVGProps } from 'react'

const SvgAirportShuttle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airport-shuttle_svg__a"
        d="M11.333 3.333H2c-.733 0-1.333.594-1.333 1.334v6H2c0 1.1.893 2 2 2s2-.9 2-2h3.667c0 1.1.893 2 2 2 1.106 0 2-.9 2-2h1.666V7.333l-4-4zM2 7.333V4.667h2.667v2.666H2zm2 4.334c-.553 0-1-.447-1-1 0-.554.447-1 1-1 .553 0 1 .446 1 1 0 .553-.447 1-1 1zm4.667-4.334H6V4.667h2.667v2.666zm3 4.334c-.554 0-1-.447-1-1 0-.554.446-1 1-1 .553 0 1 .446 1 1 0 .553-.447 1-1 1zM10 7.333V4.667h.667l2.666 2.666H10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airport-shuttle_svg__b" fill="#fff">
        <use xlinkHref="#airport-shuttle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airport-shuttle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirportShuttle
