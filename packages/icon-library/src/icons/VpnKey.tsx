import React, { SVGProps } from 'react'

const SvgVpnKey = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vpn-key_svg__a"
        d="M8.433 6.667A3.994 3.994 0 004.667 4c-2.207 0-4 1.793-4 4s1.793 4 4 4c1.74 0 3.22-1.113 3.766-2.667h2.9V12H14V9.333h1.333V6.667h-6.9zM4.667 9.333c-.734 0-1.334-.6-1.334-1.333s.6-1.333 1.334-1.333C5.4 6.667 6 7.267 6 8s-.6 1.333-1.333 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vpn-key_svg__b" fill="#fff">
        <use xlinkHref="#vpn-key_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vpn-key_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVpnKey
