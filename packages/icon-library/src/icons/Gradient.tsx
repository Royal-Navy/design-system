import React, { SVGProps } from 'react'

const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gradient_svg__a"
        d="M7.333 6h1.334v1.333H7.333V6zM6 7.333h1.333v1.334H6V7.333zm2.667 0H10v1.334H8.667V7.333zM10 6h1.333v1.333H10V6zM4.667 6H6v1.333H4.667V6zm8-4H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM6 12H4.667v-1.333H6V12zm2.667 0H7.333v-1.333h1.334V12zm2.666 0H10v-1.333h1.333V12zm1.334-4.667h-1.334v1.334h1.334V10h-1.334V8.667H10V10H8.667V8.667H7.333V10H6V8.667H4.667V10H3.333V8.667h1.334V7.333H3.333v-4h9.334v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gradient_svg__b" fill="#fff">
        <use xlinkHref="#gradient_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gradient_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGradient
