import React, { SVGProps } from 'react'

const SvgCompare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="compare_svg__a"
        d="M6.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h3.334v1.333H8V.667H6.667V2zm0 10H3.333l3.334-4v4zm6-10H9.333v1.333h3.334V12L9.333 8v6h3.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="compare_svg__b" fill="#fff">
        <use xlinkHref="#compare_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#compare_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCompare
