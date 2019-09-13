import React, { SVGProps } from 'react'

const SvgArrowUpward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-upward_svg__a"
        d="M2.667 8l.94.94 3.726-3.72v8.113h1.334V5.22l3.72 3.727.946-.947L8 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-upward_svg__b" fill="#fff">
        <use xlinkHref="#arrow-upward_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-upward_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowUpward
