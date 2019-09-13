import React, { SVGProps } from 'react'

const SvgVpnLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vpn-lock_svg__a"
        d="M14.667 2.667v-.334a1.667 1.667 0 00-3.334 0v.334c-.366 0-.666.3-.666.666V6c0 .367.3.667.666.667h3.334c.366 0 .666-.3.666-.667V3.333c0-.366-.3-.666-.666-.666zm-.534 0h-2.266v-.334a1.132 1.132 0 112.266 0v.334zM12.613 8c.027.22.054.44.054.667a5.305 5.305 0 01-1.4 3.593A1.323 1.323 0 0010 11.333h-.667v-2c0-.366-.3-.666-.666-.666h-4V7.333H6c.367 0 .667-.3.667-.666V5.333H8c.733 0 1.333-.6 1.333-1.333V2.307a6.67 6.67 0 00-8.667 6.36 6.67 6.67 0 006.667 6.666A6.67 6.67 0 0013.967 8h-1.354zm-5.946 5.953A5.326 5.326 0 012 8.667c0-.414.053-.807.14-1.194l3.193 3.194v.666c0 .734.6 1.334 1.334 1.334v1.286z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vpn-lock_svg__b" fill="#fff">
        <use xlinkHref="#vpn-lock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vpn-lock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVpnLock
