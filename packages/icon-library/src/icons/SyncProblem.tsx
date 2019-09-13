import React, { SVGProps } from 'react'

const SvgSyncProblem = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sync-problem_svg__a"
        d="M2 8c0 1.473.607 2.8 1.573 3.76L2 13.333h4v-4l-1.493 1.494A4.002 4.002 0 013.333 8c0-1.74 1.114-3.22 2.667-3.767V2.84A5.33 5.33 0 002 8zm5.333 3.333h1.334V10H7.333v1.333zM14 2.667h-4v4l1.493-1.494A4.002 4.002 0 0112.667 8c0 1.74-1.114 3.22-2.667 3.767v1.393A5.33 5.33 0 0014 8c0-1.473-.607-2.8-1.573-3.76L14 2.667zm-6.667 6h1.334v-4H7.333v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sync-problem_svg__b" fill="#fff">
        <use xlinkHref="#sync-problem_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sync-problem_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSyncProblem
