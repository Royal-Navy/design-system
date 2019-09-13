import React, { SVGProps } from 'react'

const SvgPriorityHigh12Px = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="priority-high-12px_svg__a"
        d="M8 14.667A1.333 1.333 0 118 12a1.333 1.333 0 010 2.667zm-1.333-12h2.666v8H6.667v-8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="priority-high-12px_svg__b" fill="#fff">
        <use xlinkHref="#priority-high-12px_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#priority-high-12px_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPriorityHigh12Px
