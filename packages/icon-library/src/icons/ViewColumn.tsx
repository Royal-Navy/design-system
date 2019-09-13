import React, { SVGProps } from 'react'

const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-column_svg__a"
        d="M6.667 12H10V3.333H6.667V12zm-4 0H6V3.333H2.667V12zm8-8.667V12H14V3.333h-3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-column_svg__b" fill="#fff">
        <use xlinkHref="#view-column_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-column_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewColumn
