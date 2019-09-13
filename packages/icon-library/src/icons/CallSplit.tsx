import React, { SVGProps } from 'react'

const SvgCallSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-split_svg__a"
        d="M9.333 2.667l1.527 1.526-1.92 1.92.947.947 1.92-1.92 1.526 1.527v-4h-4zm-2.666 0h-4v4L4.193 5.14l3.14 3.133v5.06h1.334V7.727L5.14 4.193l1.527-1.526z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-split_svg__b" fill="#fff">
        <use xlinkHref="#call-split_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-split_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallSplit
