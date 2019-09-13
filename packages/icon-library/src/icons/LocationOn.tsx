import React, { SVGProps } from 'react'

const SvgLocationOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="location-on_svg__a"
        d="M8 1.333A4.663 4.663 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.663 4.663 0 008 1.333zm0 6.334a1.667 1.667 0 11.001-3.335A1.667 1.667 0 018 7.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="location-on_svg__b" fill="#fff">
        <use xlinkHref="#location-on_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#location-on_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocationOn
