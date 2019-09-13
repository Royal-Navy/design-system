import React, { SVGProps } from 'react'

const SvgVerticalAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vertical-align-bottom_svg__a"
        d="M11.111 8H8.89V1.778H7.11V8H4.89L8 11.111 11.111 8zm-8.444 4.444v1.778h10.666v-1.778H2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vertical-align-bottom_svg__b" fill="#fff">
        <use xlinkHref="#vertical-align-bottom_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vertical-align-bottom_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVerticalAlignBottom
