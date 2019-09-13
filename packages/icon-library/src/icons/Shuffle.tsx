import React, { SVGProps } from 'react'

const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="shuffle_svg__a"
        d="M7.06 6.113L3.607 2.667l-.94.94 3.446 3.446.947-.94zm2.607-3.446l1.36 1.36-8.36 8.366.94.94 8.366-8.36 1.36 1.36V2.667H9.667zm.22 6.273l-.94.94 2.086 2.087-1.366 1.366h3.666V9.667l-1.36 1.36L9.887 8.94z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="shuffle_svg__b" fill="#fff">
        <use xlinkHref="#shuffle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#shuffle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShuffle
