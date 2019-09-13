import React, { SVGProps } from 'react'

const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rounded-corner_svg__a"
        d="M12.667 12.667H14V14h-1.333v-1.333zm0-1.334H14V10h-1.333v1.333zM2 8.667h1.333V7.333H2v1.334zm0 2.666h1.333V10H2v1.333zM2 6h1.333V4.667H2V6zm0-2.667h1.333V2H2v1.333zm2.667 0H6V2H4.667v1.333zM10 14h1.333v-1.333H10V14zm-2.667 0h1.334v-1.333H7.333V14zM10 14h1.333v-1.333H10V14zm-5.333 0H6v-1.333H4.667V14zM2 14h1.333v-1.333H2V14zm12-8.667A3.335 3.335 0 0010.667 2H7.333v1.333h3.334c1.1 0 2 .9 2 2v3.334H14V5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rounded-corner_svg__b" fill="#fff">
        <use xlinkHref="#rounded-corner_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rounded-corner_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRoundedCorner
