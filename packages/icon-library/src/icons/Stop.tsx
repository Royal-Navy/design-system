import React, { SVGProps } from 'react'

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="stop_svg__a" d="M4 4h8v8H4z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="stop_svg__b" fill="#fff">
        <use xlinkHref="#stop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#stop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStop
