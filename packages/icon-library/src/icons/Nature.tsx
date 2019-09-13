import React, { SVGProps } from 'react'

const SvgNature = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="nature_svg__a"
        d="M8.667 10.747a4.667 4.667 0 10-5.22-4.634 4.654 4.654 0 003.886 4.594v2.626h-4v1.334h9.334v-1.334h-4v-2.586z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="nature_svg__b" fill="#fff">
        <use xlinkHref="#nature_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#nature_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNature
