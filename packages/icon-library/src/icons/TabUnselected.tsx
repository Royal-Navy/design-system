import React, { SVGProps } from 'react'

const SvgTabUnselected = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tab-unselected_svg__a"
        d="M.667 6H2V4.667H.667V6zm0 2.667H2V7.333H.667v1.334zm0-5.334H2V2C1.267 2 .667 2.6.667 3.333zM6 14h1.333v-1.333H6V14zM.667 11.333H2V10H.667v1.333zM2 14v-1.333H.667C.667 13.4 1.267 14 2 14zM14 2H8.667v4h6.666V3.333C15.333 2.6 14.733 2 14 2zm0 9.333h1.333V10H14v1.333zm-8-8h1.333V2H6v1.333zM3.333 14h1.334v-1.333H3.333V14zm0-10.667h1.334V2H3.333v1.333zM14 14c.733 0 1.333-.6 1.333-1.333H14V14zm0-5.333h1.333V7.333H14v1.334zM8.667 14H10v-1.333H8.667V14zm2.666 0h1.334v-1.333h-1.334V14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tab-unselected_svg__b" fill="#fff">
        <use xlinkHref="#tab-unselected_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tab-unselected_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTabUnselected
