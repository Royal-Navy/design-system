import React, { SVGProps } from 'react'

const SvgLastPage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="last-page_svg__a"
        d="M3.727 4.94L6.787 8l-3.06 3.06.94.94 4-4-4-4-.94.94zm6.94-.94H12v8h-1.333V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="last-page_svg__b" fill="#fff">
        <use xlinkHref="#last-page_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#last-page_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLastPage
