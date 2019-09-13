import React, { SVGProps } from 'react'

const SvgCardMembership = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="card-membership_svg__a"
        d="M13.333 1.333H2.667c-.74 0-1.334.594-1.334 1.334V10c0 .74.594 1.333 1.334 1.333h2.666v3.334L8 13.333l2.667 1.334v-3.334h2.666c.74 0 1.334-.593 1.334-1.333V2.667c0-.74-.594-1.334-1.334-1.334zm0 8.667H2.667V8.667h10.666V10zm0-3.333H2.667v-4h10.666v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="card-membership_svg__b" fill="#fff">
        <use xlinkHref="#card-membership_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#card-membership_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCardMembership
