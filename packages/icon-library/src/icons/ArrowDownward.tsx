import React, { SVGProps } from 'react'

const SvgArrowDownward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-downward_svg__a"
        d="M13.333 8l-.94-.94-3.726 3.72V2.667H7.333v8.113l-3.72-3.727L2.667 8 8 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-downward_svg__b" fill="#fff">
        <use xlinkHref="#arrow-downward_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-downward_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowDownward
