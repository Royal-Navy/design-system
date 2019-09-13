import React, { SVGProps } from 'react'

const SvgAirplanemodeInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airplanemode-inactive_svg__a"
        d="M8.667 6V2.333c0-.553-.447-1-1-1-.554 0-1 .447-1 1v2.454l5.22 5.22 2.113.66V9.333L8.667 6zM2 3.513L5.327 6.84 1.333 9.333v1.334L6.667 9v3.667l-1.334 1v1L7.667 14l2.333.667v-1l-1.333-1V10.18l3.82 3.82.846-.847L2.847 2.667 2 3.513z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airplanemode-inactive_svg__b" fill="#fff">
        <use xlinkHref="#airplanemode-inactive_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airplanemode-inactive_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirplanemodeInactive
