import React, { SVGProps } from 'react'

const SvgMarkunreadMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="markunread-mailbox_svg__a"
        d="M13.333 4H6.667v4H5.333V2.667h4V0H4v4H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334v-8c0-.733-.6-1.333-1.334-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="markunread-mailbox_svg__b" fill="#fff">
        <use xlinkHref="#markunread-mailbox_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#markunread-mailbox_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMarkunreadMailbox
