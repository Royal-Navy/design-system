import React, { SVGProps } from 'react'

const SvgCardTravel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="card-travel_svg__a"
        d="M13.333 4h-2V2.667c0-.74-.593-1.334-1.333-1.334H6c-.74 0-1.333.594-1.333 1.334V4h-2c-.74 0-1.334.593-1.334 1.333v7.334c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V5.333c0-.74-.594-1.333-1.334-1.333zM6 2.667h4V4H6V2.667zm7.333 10H2.667v-1.334h10.666v1.334zm0-3.334H2.667v-4h2v1.334H6V5.333h4v1.334h1.333V5.333h2v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="card-travel_svg__b" fill="#fff">
        <use xlinkHref="#card-travel_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#card-travel_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCardTravel
