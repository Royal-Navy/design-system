import React, { SVGProps } from 'react'

const SvgExpandLess = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="expand-less_svg__a"
        d="M8 5.333l-4 4 .942.943L8 7.218l3.058 3.058.942-.943z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="expand-less_svg__b" fill="#fff">
        <use xlinkHref="#expand-less_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#expand-less_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExpandLess
