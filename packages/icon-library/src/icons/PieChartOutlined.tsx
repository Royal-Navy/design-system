import React, { SVGProps } from 'react'

const SvgPieChartOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pie-chart-outlined_svg__a"
        d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667zm.667 1.38c2.406.3 4.32 2.22 4.62 4.62h-4.62v-4.62zM2.667 8c0-2.707 2.046-4.96 4.666-5.287v10.58C4.713 12.96 2.667 10.707 2.667 8zm6 5.287v-4.62h4.62a5.335 5.335 0 01-4.62 4.62z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pie-chart-outlined_svg__b" fill="#fff">
        <use xlinkHref="#pie-chart-outlined_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pie-chart-outlined_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPieChartOutlined
