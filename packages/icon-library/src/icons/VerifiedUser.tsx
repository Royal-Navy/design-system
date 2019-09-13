import React, { SVGProps } from 'react'

const SvgVerifiedUser = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="verified-user_svg__a"
        d="M8 .667L2 3.333v4c0 3.7 2.56 7.16 6 8 3.44-.84 6-4.3 6-8v-4L8 .667zM6.667 11.333L4 8.667l.94-.94 1.727 1.72 4.393-4.394L12 6l-5.333 5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="verified-user_svg__b" fill="#fff">
        <use xlinkHref="#verified-user_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#verified-user_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVerifiedUser
