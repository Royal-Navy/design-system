import React, { SVGProps } from 'react'

const SvgReportProblem = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="report-problem_svg__a"
        d="M.667 14h14.666L8 1.333.667 14zm8-2H7.333v-1.333h1.334V12zm0-2.667H7.333V6.667h1.334v2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="report-problem_svg__b" fill="#fff">
        <use xlinkHref="#report-problem_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#report-problem_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReportProblem
