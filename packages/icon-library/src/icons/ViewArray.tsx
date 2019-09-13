import React, { SVGProps } from 'react'

const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-array_svg__a"
        d="M2.667 12h2V3.333h-2V12zM12 3.333V12h2V3.333h-2zM5.333 12h6V3.333h-6V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-array_svg__b" fill="#fff">
        <use xlinkHref="#view-array_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-array_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewArray
