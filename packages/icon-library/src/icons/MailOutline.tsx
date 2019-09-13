import React, { SVGProps } from 'react'

const SvgMailOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="mail-outline_svg__a"
        d="M13.333 2.667H2.667c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zm0 9.333H2.667V5.333L8 8.667l5.333-3.334V12zM8 7.333L2.667 4h10.666L8 7.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mail-outline_svg__b" fill="#fff">
        <use xlinkHref="#mail-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#mail-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMailOutline
