import React, { SVGProps } from 'react'

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="message_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-1.333 8H4V8h8v1.333zm0-2H4V6h8v1.333zm0-2H4V4h8v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="message_svg__b" fill="#fff">
        <use xlinkHref="#message_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#message_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMessage
