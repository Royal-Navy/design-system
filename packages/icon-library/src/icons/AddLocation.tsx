import React, { SVGProps } from 'react'

const SvgAddLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add-location_svg__a"
        d="M8 1.333A4.672 4.672 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.672 4.672 0 008 1.333zm2.667 5.334h-2v2H7.333v-2h-2V5.333h2v-2h1.334v2h2v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-location_svg__b" fill="#fff">
        <use xlinkHref="#add-location_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add-location_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAddLocation
