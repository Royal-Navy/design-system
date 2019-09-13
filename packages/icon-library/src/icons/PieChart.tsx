import React, { SVGProps } from 'react'

const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pie-chart_svg__a"
        d="M7.333 1.333v13.334c-3.38-.334-6-3.194-6-6.667s2.62-6.333 6-6.667zm1.354 0v5.994h5.98c-.314-3.16-2.827-5.68-5.98-5.994zm0 7.34v5.994c3.16-.314 5.666-2.834 5.98-5.994h-5.98z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pie-chart_svg__b" fill="#fff">
        <use xlinkHref="#pie-chart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pie-chart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPieChart
