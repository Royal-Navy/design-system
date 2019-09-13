import React, { SVGProps } from 'react'

const SvgFilter3 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-3_svg__a"
        d="M14 .667H4.667c-.734 0-1.334.6-1.334 1.333v9.333c0 .734.6 1.334 1.334 1.334H14c.733 0 1.333-.6 1.333-1.334V2c0-.733-.6-1.333-1.333-1.333zm0 10.666H4.667V2H14v9.333zm-12-8H.667V14c0 .733.6 1.333 1.333 1.333h10.667V14H2V3.333zm9.333 5.334v-1c0-.554-.446-1-1-1 .554 0 1-.447 1-1v-1c0-.74-.6-1.334-1.333-1.334H7.333v1.334H10V6H8.667v1.333H10v1.334H7.333V10H10c.733 0 1.333-.593 1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-3_svg__b" fill="#fff">
        <use xlinkHref="#filter-3_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-3_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilter3
