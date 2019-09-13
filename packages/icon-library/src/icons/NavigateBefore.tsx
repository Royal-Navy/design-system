import React, { SVGProps } from 'react'

const SvgNavigateBefore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="navigate-before_svg__a"
        d="M10.273 4.94L9.333 4l-4 4 4 4 .94-.94L7.22 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="navigate-before_svg__b" fill="#fff">
        <use xlinkHref="#navigate-before_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#navigate-before_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNavigateBefore
