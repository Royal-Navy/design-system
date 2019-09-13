import React, { SVGProps } from 'react'

const SvgVerticalAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vertical-align-center_svg__a"
        d="M11.111 2.667H8.89V0H7.11v2.667H4.89L8 5.777l3.111-3.11zM2.667 7.11V8.89h10.666V7.11H2.667zm2.222 6.222H7.11V16H8.89v-2.667h2.222L8 10.223l-3.111 3.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vertical-align-center_svg__b" fill="#fff">
        <use xlinkHref="#vertical-align-center_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vertical-align-center_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVerticalAlignCenter
