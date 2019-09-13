import React, { SVGProps } from 'react'

const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airplay_svg__a"
        d="M4 14.667h8l-4-4-4 4zM14 2H2C1.267 2 .667 2.6.667 3.333v8c0 .734.6 1.334 1.333 1.334h2.667v-1.334H2v-8h12v8h-2.667v1.334H14c.733 0 1.333-.6 1.333-1.334v-8C15.333 2.6 14.733 2 14 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airplay_svg__b" fill="#fff">
        <use xlinkHref="#airplay_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airplay_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirplay
