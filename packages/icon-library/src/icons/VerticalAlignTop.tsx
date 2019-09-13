import React, { SVGProps } from 'react'

const SvgVerticalAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vertical-align-top_svg__a"
        d="M2.667 1.778v1.778h10.666V1.778H2.667zM4.889 8H7.11v6.222H8.89V8h2.222L8 4.889 4.889 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vertical-align-top_svg__b" fill="#fff">
        <use xlinkHref="#vertical-align-top_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vertical-align-top_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVerticalAlignTop
