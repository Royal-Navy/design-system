import React, { SVGProps } from 'react'

const SvgFlightLand = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flight-land_svg__a"
        d="M1.667 12.667h12.666V14H1.667v-1.333zm4.786-3.82l2.9.773 3.54.947c.534.14 1.08-.174 1.227-.707a1.006 1.006 0 00-.707-1.227l-3.54-.946-1.84-6.014-1.286-.34v5.52l-3.314-.886-.62-1.547-.966-.26v3.447l1.066.286 3.54.954z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flight-land_svg__b" fill="#fff">
        <use xlinkHref="#flight-land_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flight-land_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlightLand
