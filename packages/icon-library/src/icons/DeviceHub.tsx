import React, { SVGProps } from 'react'

const SvgDeviceHub = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="device-hub_svg__a"
        d="M11.333 10.667L8.667 8V5.88A2.007 2.007 0 0010 4c0-1.107-.893-2-2-2s-2 .893-2 2c0 .867.56 1.6 1.333 1.88V8l-2.666 2.667H2V14h3.333v-2.033L8 9.167l2.667 2.8V14H14v-3.333h-2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="device-hub_svg__b" fill="#fff">
        <use xlinkHref="#device-hub_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#device-hub_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDeviceHub
