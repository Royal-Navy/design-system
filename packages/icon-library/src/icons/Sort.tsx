import React, { SVGProps } from 'react'

const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sort_svg__a"
        d="M2 12h4v-1.333H2V12zm0-8v1.333h12V4H2zm0 4.667h8V7.333H2v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sort_svg__b" fill="#fff">
        <use xlinkHref="#sort_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sort_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSort
