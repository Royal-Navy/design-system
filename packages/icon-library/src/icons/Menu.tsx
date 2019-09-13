import React, { SVGProps } from 'react'

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="menu_svg__a"
        d="M1.778 12h12.444v-1.333H1.778V12zm0-3.556h12.444V7.111H1.778v1.333zm0-4.888v1.333h12.444V3.556H1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="menu_svg__b" fill="#fff">
        <use xlinkHref="#menu_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#menu_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMenu
