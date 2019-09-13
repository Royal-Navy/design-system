import React, { SVGProps } from 'react'

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="check_svg__a"
        d="M5.876 10.569L3.111 7.804l-.942.943 3.707 3.697 7.955-7.955-.942-.933z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="check_svg__b" fill="#fff">
        <use xlinkHref="#check_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#check_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCheck
