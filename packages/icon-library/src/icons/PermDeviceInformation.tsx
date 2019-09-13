import React, { SVGProps } from 'react'

const SvgPermDeviceInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-device-information_svg__a"
        d="M8.667 4.667H7.333V6h1.334V4.667zm0 2.666H7.333v4h1.334v-4zm2.666-6.66L4.667.667c-.734 0-1.334.6-1.334 1.333v12c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V2c0-.733-.6-1.327-1.334-1.327zm0 11.994H4.667V3.333h6.666v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-device-information_svg__b" fill="#fff">
        <use xlinkHref="#perm-device-information_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-device-information_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermDeviceInformation
