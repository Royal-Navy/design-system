import React, { SVGProps } from 'react'

const SvgStreetview = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="streetview_svg__a"
        d="M8.373 9.553A6.072 6.072 0 0112 8.333c.7 0 1.373.127 2 .347v3.987C14 13.4 13.4 14 12.667 14H8v-3.667a1 1 0 01.373-.78zM12 7.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zM7.667 4c0 1.2.486 2.28 1.273 3.06l-6.547 6.547a1.33 1.33 0 01-.393-.94V3.333C2 2.6 2.6 2 3.333 2H8.16a4.31 4.31 0 00-.493 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="streetview_svg__b" fill="#fff">
        <use xlinkHref="#streetview_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#streetview_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStreetview
