import React, { SVGProps } from 'react'

const SvgShowChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="show-chart_svg__a"
        d="M2.333 12.327l4-4.007L9 10.987l5.667-6.374-.94-.94L9 8.987 6.333 6.32l-5 5.007z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="show-chart_svg__b" fill="#fff">
        <use xlinkHref="#show-chart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#show-chart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShowChart
