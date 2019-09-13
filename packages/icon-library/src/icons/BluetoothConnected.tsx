import React, { SVGProps } from 'react'

const SvgBluetoothConnected = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="bluetooth-connected_svg__a"
        d="M4.667 8L3.333 6.667 2 8l1.333 1.333L4.667 8zm7.14-2.86L8 1.333h-.667v5.06l-3.06-3.06-.94.94L7.06 8l-3.727 3.727.94.94 3.06-3.06v5.06H8l3.807-3.807L8.94 8l2.867-2.86zm-3.14-1.253L9.92 5.14 8.667 6.393V3.887zM9.92 10.86l-1.253 1.253V9.607L9.92 10.86zm2.747-4.193L11.333 8l1.334 1.333L14 8l-1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bluetooth-connected_svg__b" fill="#fff">
        <use xlinkHref="#bluetooth-connected_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#bluetooth-connected_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBluetoothConnected
