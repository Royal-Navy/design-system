import React, { SVGProps } from 'react'

const SvgLocalBar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-bar_svg__a"
        d="M14 3.333V2H2v1.333l5.333 6v3.334H4V14h8v-1.333H8.667V9.333l5.333-6zM4.953 4.667l-1.18-1.334h8.46l-1.186 1.334H4.953z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-bar_svg__b" fill="#fff">
        <use xlinkHref="#local-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalBar
