import React, { SVGProps } from 'react'

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="chevron-right_svg__a"
        d="M6.667 4l-.943.942L8.782 8l-3.058 3.058.943.942 4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chevron-right_svg__b" fill="#fff">
        <use xlinkHref="#chevron-right_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#chevron-right_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChevronRight
