import React, { SVGProps } from 'react'

const SvgMarkunread = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="markunread_svg__a"
        d="M13.333 2.667H2.667c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zm0 2.666L8 8.667 2.667 5.333V4L8 7.333 13.333 4v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="markunread_svg__b" fill="#fff">
        <use xlinkHref="#markunread_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#markunread_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMarkunread
