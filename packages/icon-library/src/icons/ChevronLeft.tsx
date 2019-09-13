import React, { SVGProps } from 'react'

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="chevron-left_svg__a"
        d="M10.276 4.942L9.333 4l-4 4 4 4 .943-.942L7.218 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chevron-left_svg__b" fill="#fff">
        <use xlinkHref="#chevron-left_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#chevron-left_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChevronLeft
