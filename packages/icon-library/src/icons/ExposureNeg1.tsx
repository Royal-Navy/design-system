import React, { SVGProps } from 'react'

const SvgExposureNeg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="exposure-neg-1_svg__a"
        d="M2.667 7.333v1.334H8V7.333H2.667zm10 4.667h-1.334V4.92l-2 .68V4.467l3.134-1.134h.2V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="exposure-neg-1_svg__b" fill="#fff">
        <use xlinkHref="#exposure-neg-1_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#exposure-neg-1_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExposureNeg1
