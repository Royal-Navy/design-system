import React, { SVGProps } from 'react'

const SvgPlusOne = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="plus-one_svg__a"
        d="M6.667 5.333H5.333V8H2.667v1.333h2.666V12h1.334V9.333h2.666V8H6.667V5.333zm3-1.28v1.214l1.666-.334V12h1.334V3.333l-3 .72z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="plus-one_svg__b" fill="#fff">
        <use xlinkHref="#plus-one_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#plus-one_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlusOne
