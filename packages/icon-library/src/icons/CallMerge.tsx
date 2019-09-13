import React, { SVGProps } from 'react'

const SvgCallMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-merge_svg__a"
        d="M11.333 13.607l.94-.94L10 10.393l-.94.94 2.273 2.274zM5 5.333h2.333V9.06l-3.606 3.607.94.94 4-4V5.333H11l-3-3-3 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-merge_svg__b" fill="#fff">
        <use xlinkHref="#call-merge_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-merge_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallMerge
