import React, { SVGProps } from 'react'

const SvgGrapheq = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="grapheq_svg__a"
        d="M4.667 12H6V4H4.667v8zm2.666 2.667h1.334V1.333H7.333v13.334zM2 9.333h1.333V6.667H2v2.666zM10 12h1.333V4H10v8zm2.667-5.333v2.666H14V6.667h-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="grapheq_svg__b" fill="#fff">
        <use xlinkHref="#grapheq_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#grapheq_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGrapheq
