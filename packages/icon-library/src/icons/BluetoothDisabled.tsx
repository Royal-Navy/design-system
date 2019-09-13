import React, { SVGProps } from 'react'

const SvgBluetoothDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="bluetooth-disabled_svg__a"
        d="M8.667 3.887L9.92 5.14 8.853 6.207l.94.94 2.014-2.014L8 1.333h-.667v3.354L8.667 6.02V3.887zm-5.06-1.22l-.94.94L7.06 8l-3.727 3.727.94.94 3.06-3.06v5.06H8l2.86-2.86 1.533 1.526.94-.94-9.726-9.726zm5.06 9.446V9.607L9.92 10.86l-1.253 1.253z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bluetooth-disabled_svg__b" fill="#fff">
        <use xlinkHref="#bluetooth-disabled_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#bluetooth-disabled_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBluetoothDisabled
