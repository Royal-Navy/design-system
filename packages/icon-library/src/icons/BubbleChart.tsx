import React, { SVGProps } from 'react'

const SvgBubbleChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="bubble-chart_svg__a"
        d="M4.8 11.733a2.133 2.133 0 110-4.266 2.133 2.133 0 010 4.266zm5.067 1.6a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm.266-4.266a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bubble-chart_svg__b" fill="#fff">
        <use xlinkHref="#bubble-chart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#bubble-chart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBubbleChart
