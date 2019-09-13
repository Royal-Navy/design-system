import React, { SVGProps } from 'react'

const SvgLocalAirport = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-airport_svg__a"
        d="M14 10.667V9.333L8.667 6V2.333c0-.553-.447-1-1-1-.554 0-1 .447-1 1V6L1.333 9.333v1.334L6.667 9v3.667l-1.334 1v1L7.667 14l2.333.667v-1l-1.333-1V9L14 10.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-airport_svg__b" fill="#fff">
        <use xlinkHref="#local-airport_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-airport_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalAirport
