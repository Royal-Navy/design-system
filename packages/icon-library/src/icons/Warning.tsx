import React, { SVGProps } from 'react'

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="warning_svg__a"
        d="M.444 14.222h15.112L8 .89.444 14.222zm8.445-1.778H7.11v-1.777H8.89v1.777zm0-2.666H7.11V6.222H8.89v3.556z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="warning_svg__b" fill="#fff">
        <use xlinkHref="#warning_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#warning_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWarning
