import React, { SVGProps } from 'react'

const SvgNavigateNext = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="navigate-next_svg__a"
        d="M6.667 4l-.94.94L8.78 8l-3.053 3.06.94.94 4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="navigate-next_svg__b" fill="#fff">
        <use xlinkHref="#navigate-next_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#navigate-next_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNavigateNext
