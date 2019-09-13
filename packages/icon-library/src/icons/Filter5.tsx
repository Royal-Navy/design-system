import React, { SVGProps } from 'react'

const SvgFilter5 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-5_svg__a"
        d="M14 .667H4.667c-.734 0-1.334.6-1.334 1.333v9.333c0 .734.6 1.334 1.334 1.334H14c.733 0 1.333-.6 1.333-1.334V2c0-.733-.6-1.333-1.333-1.333zm0 10.666H4.667V2H14v9.333zm-12-8H.667V14c0 .733.6 1.333 1.333 1.333h10.667V14H2V3.333zm9.333 5.334V7.333c0-.74-.6-1.333-1.333-1.333H8.667V4.667h2.666V3.333h-4v4H10v1.334H7.333V10H10c.733 0 1.333-.593 1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-5_svg__b" fill="#fff">
        <use xlinkHref="#filter-5_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-5_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilter5
