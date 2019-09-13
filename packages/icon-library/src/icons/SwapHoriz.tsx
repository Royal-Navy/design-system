import React, { SVGProps } from 'react'

const SvgSwapHoriz = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="swap-horiz_svg__a"
        d="M4.66 7.333L2 10l2.66 2.667v-2h4.673V9.333H4.66v-2zM14 6l-2.66-2.667v2H6.667v1.334h4.673v2L14 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="swap-horiz_svg__b" fill="#fff">
        <use xlinkHref="#swap-horiz_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#swap-horiz_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwapHoriz
