import React, { SVGProps } from 'react'

const SvgDataUsage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="data-usage_svg__a"
        d="M8.667 1.367v2.02c2.26.326 4 2.26 4 4.613 0 .6-.12 1.167-.32 1.693l1.733 1.02A6.584 6.584 0 0014.667 8a6.67 6.67 0 00-6-6.633zM8 12.667a4.663 4.663 0 01-.667-9.28v-2.02a6.66 6.66 0 00-6 6.633c0 3.68 2.98 6.667 6.66 6.667a6.65 6.65 0 005.374-2.727l-1.734-1.02A4.634 4.634 0 018 12.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="data-usage_svg__b" fill="#fff">
        <use xlinkHref="#data-usage_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#data-usage_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDataUsage
