import React, { SVGProps } from 'react'

const SvgTextsms = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="textsms_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zM6 7.333H4.667V6H6v1.333zm2.667 0H7.333V6h1.334v1.333zm2.666 0H10V6h1.333v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="textsms_svg__b" fill="#fff">
        <use xlinkHref="#textsms_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#textsms_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTextsms
