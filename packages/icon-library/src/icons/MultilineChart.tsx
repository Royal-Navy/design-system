import React, { SVGProps } from 'react'

const SvgMultilineChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="multiline-chart_svg__a"
        d="M14.667 4.613l-.94-.94-1.9 2.14c-1.374-1.546-3.274-2.48-5.42-2.48-1.927 0-3.694.774-5.074 2l.947.947c1.133-.993 2.567-1.613 4.127-1.613 1.826 0 3.393.84 4.513 2.16L9 8.987 6.333 6.32l-5 5.007 1 1 4-4.007L9 10.987l2.7-3.034c.5.9.833 1.934.96 3.034H14a9.429 9.429 0 00-1.36-4.094l2.027-2.28z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="multiline-chart_svg__b" fill="#fff">
        <use xlinkHref="#multiline-chart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#multiline-chart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMultilineChart
