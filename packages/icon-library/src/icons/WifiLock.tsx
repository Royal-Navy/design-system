import React, { SVGProps } from 'react'

const SvgWifiLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wifi-lock_svg__a"
        d="M13.667 6.333c.186 0 .366.027.54.054L16 4a13.278 13.278 0 00-8-2.667c-3 0-5.773.994-8 2.667l8 10.667 2.333-3.114V9.667a3.335 3.335 0 013.334-3.334zm1.666 4.334v-1a1.667 1.667 0 00-3.333 0v1c-.367 0-.667.3-.667.666V14c0 .367.3.667.667.667h3.333c.367 0 .667-.3.667-.667v-2.667c0-.366-.3-.666-.667-.666zm-.666 0h-2v-1c0-.554.446-1 1-1 .553 0 1 .446 1 1v1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wifi-lock_svg__b" fill="#fff">
        <use xlinkHref="#wifi-lock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wifi-lock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWifiLock
