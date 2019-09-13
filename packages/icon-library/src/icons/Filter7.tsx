import React, { SVGProps } from 'react'

const SvgFilter7 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-7_svg__a"
        d="M2 3.333H.667V14c0 .733.6 1.333 1.333 1.333h10.667V14H2V3.333zM14 .667H4.667c-.734 0-1.334.6-1.334 1.333v9.333c0 .734.6 1.334 1.334 1.334H14c.733 0 1.333-.6 1.333-1.334V2c0-.733-.6-1.333-1.333-1.333zm0 10.666H4.667V2H14v9.333zM8.667 10l2.666-5.333V3.333h-4v1.334H10L7.333 10h1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-7_svg__b" fill="#fff">
        <use xlinkHref="#filter-7_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-7_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilter7
