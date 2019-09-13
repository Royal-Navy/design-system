import React, { SVGProps } from 'react'

const SvgClearAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="clear-all_svg__a"
        d="M3.333 8.667h9.334V7.333H3.333v1.334zM2 11.333h9.333V10H2v1.333zm2.667-6.666V6H14V4.667H4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="clear-all_svg__b" fill="#fff">
        <use xlinkHref="#clear-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#clear-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgClearAll
