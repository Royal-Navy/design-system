import React, { SVGProps } from 'react'

const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="security_svg__a"
        d="M8 .667L2 3.333v4c0 3.7 2.56 7.16 6 8 3.44-.84 6-4.3 6-8v-4L8 .667zm0 7.326h4.667c-.354 2.747-2.187 5.194-4.667 5.96V8H3.333V4.2L8 2.127v5.866z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="security_svg__b" fill="#fff">
        <use xlinkHref="#security_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#security_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSecurity
