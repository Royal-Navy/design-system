import React, { SVGProps } from 'react'

const SvgInfoOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="info-outline_svg__a"
        d="M7.333 11.333h1.334v-4H7.333v4zm.667-10A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zM7.333 6h1.334V4.667H7.333V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="info-outline_svg__b" fill="#fff">
        <use xlinkHref="#info-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#info-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInfoOutline
