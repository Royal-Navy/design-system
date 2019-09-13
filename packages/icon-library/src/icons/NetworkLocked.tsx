import React, { SVGProps } from 'react'

const SvgNetworkLocked = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="network-locked_svg__a"
        d="M13 6.667c.113 0 .22.02.333.033V.667L.667 13.333h8.666v-2c0-.593.26-1.12.667-1.486v-.18c0-1.654 1.347-3 3-3zm1.667 4v-1a1.667 1.667 0 00-3.334 0v1c-.366 0-.666.3-.666.666V14c0 .367.3.667.666.667h3.334c.366 0 .666-.3.666-.667v-2.667c0-.366-.3-.666-.666-.666zm-.667 0h-2v-1c0-.554.447-1 1-1 .553 0 1 .446 1 1v1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="network-locked_svg__b" fill="#fff">
        <use xlinkHref="#network-locked_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#network-locked_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNetworkLocked
