import React, { SVGProps } from 'react'

const SvgDirectionsRailway = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-railway_svg__a"
        d="M2.667 10.333A2.336 2.336 0 005 12.667l-1 1V14h8v-.333l-1-1a2.336 2.336 0 002.333-2.334v-7C13.333 1 10.947.667 8 .667S2.667 1 2.667 3.333v7zm5.333 1c-.733 0-1.333-.6-1.333-1.333S7.267 8.667 8 8.667s1.333.6 1.333 1.333-.6 1.333-1.333 1.333zm4-4.666H4V3.333h8v3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-railway_svg__b" fill="#fff">
        <use xlinkHref="#directions-railway_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-railway_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsRailway
