import React, { SVGProps } from 'react'

const SvgLocalHotel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-hotel_svg__a"
        d="M4.667 8.667c1.106 0 2-.894 2-2 0-1.107-.894-2-2-2-1.107 0-2 .893-2 2 0 1.106.893 2 2 2zm8-4H7.333v4.666H2v-6H.667v10H2v-2h12v2h1.333v-6a2.666 2.666 0 00-2.666-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-hotel_svg__b" fill="#fff">
        <use xlinkHref="#local-hotel_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-hotel_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalHotel
