import React, { SVGProps } from 'react'

const SvgDateRange = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="date-range_svg__a"
        d="M6 7.333H4.667v1.334H6V7.333zm2.667 0H7.333v1.334h1.334V7.333zm2.666 0H10v1.334h1.333V7.333zm1.334-4.666H12V1.333h-1.333v1.334H5.333V1.333H4v1.334h-.667c-.74 0-1.326.6-1.326 1.333L2 13.333c0 .734.593 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334V4c0-.733-.6-1.333-1.333-1.333zm0 10.666H3.333V6h9.334v7.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="date-range_svg__b" fill="#fff">
        <use xlinkHref="#date-range_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#date-range_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDateRange
