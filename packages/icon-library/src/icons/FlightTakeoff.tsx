import React, { SVGProps } from 'react'

const SvgFlightTakeoff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flight-takeoff_svg__a"
        d="M1.667 12.667h12.666V14H1.667v-1.333zm13.046-6.24a.998.998 0 00-1.226-.707l-3.54.947-4.6-4.287-1.287.34L6.82 7.5l-3.313.887L2.193 7.36l-.966.26L2.44 9.727l.513.886 1.067-.286 3.54-.947 2.9-.773L14 7.66c.54-.153.853-.7.713-1.233z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flight-takeoff_svg__b" fill="#fff">
        <use xlinkHref="#flight-takeoff_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flight-takeoff_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlightTakeoff
