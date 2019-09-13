import React, { SVGProps } from 'react'

const SvgLocalCafe = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-cafe_svg__a"
        d="M13.333 2H2.667v6.667a2.666 2.666 0 002.666 2.666h4A2.666 2.666 0 0012 8.667v-2h1.333c.74 0 1.334-.594 1.334-1.334v-2c0-.74-.594-1.333-1.334-1.333zm0 3.333H12v-2h1.333v2zM1.333 14h12v-1.333h-12V14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-cafe_svg__b" fill="#fff">
        <use xlinkHref="#local-cafe_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-cafe_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalCafe
