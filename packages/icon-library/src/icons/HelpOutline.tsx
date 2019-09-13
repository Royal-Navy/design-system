import React, { SVGProps } from 'react'

const SvgHelpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="help-outline_svg__a"
        d="M7.333 12h1.334v-1.333H7.333V12zM8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zM8 4a2.666 2.666 0 00-2.667 2.667h1.334c0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334c0 1.333-2 1.166-2 3.333h1.334c0-1.5 2-1.667 2-3.333A2.666 2.666 0 008 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="help-outline_svg__b" fill="#fff">
        <use xlinkHref="#help-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#help-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHelpOutline
