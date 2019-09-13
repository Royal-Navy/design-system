import React, { SVGProps } from 'react'

const SvgSwapVert = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="swap-vert_svg__a"
        d="M10.667 11.34V6.667H9.333v4.673h-2L10 14l2.667-2.66h-2zM6 2L3.333 4.66h2v4.673h1.334V4.66h2L6 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="swap-vert_svg__b" fill="#fff">
        <use xlinkHref="#swap-vert_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#swap-vert_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwapVert
