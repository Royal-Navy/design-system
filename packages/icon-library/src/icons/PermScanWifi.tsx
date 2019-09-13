import React, { SVGProps } from 'react'

const SvgPermScanWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-scan-wifi_svg__a"
        d="M8 2C4.633 2 2.1 3.233 0 4.82l8 9.847 8-9.834C13.9 3.247 11.367 2 8 2zm.667 8.667H7.333v-4h1.334v4zM7.333 5.333V4h1.334v1.333H7.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-scan-wifi_svg__b" fill="#fff">
        <use xlinkHref="#perm-scan-wifi_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-scan-wifi_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermScanWifi
