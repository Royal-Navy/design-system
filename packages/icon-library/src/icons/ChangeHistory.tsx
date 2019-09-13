import React, { SVGProps } from 'react'

const SvgChangeHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="change-history_svg__a"
        d="M8 5.18L12.26 12H3.74L8 5.18zm0-2.513L1.333 13.333h13.334L8 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="change-history_svg__b" fill="#fff">
        <use xlinkHref="#change-history_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#change-history_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChangeHistory
