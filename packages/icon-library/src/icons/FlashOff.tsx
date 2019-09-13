import React, { SVGProps } from 'react'

const SvgFlashOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flash-off_svg__a"
        d="M2.18 2l-.847.847L4.667 6.18v2.487h2v6l2.386-4.094 2.767 2.76.847-.846L2.18 2zm9.153 4.667H8.667l2.666-5.334H4.667v1.454l5.64 5.64 1.026-1.76z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flash-off_svg__b" fill="#fff">
        <use xlinkHref="#flash-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flash-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlashOff
