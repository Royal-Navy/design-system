import React, { SVGProps } from 'react'

const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sim-card_svg__a"
        d="M13.327 2.667c0-.734-.594-1.334-1.327-1.334H6.667l-4 4v8c0 .734.6 1.334 1.333 1.334h8.007c.733 0 1.326-.6 1.326-1.334l-.006-10.666zM6 12.667H4.667v-1.334H6v1.334zm5.333 0H10v-1.334h1.333v1.334zM6 10H4.667V7.333H6V10zm2.667 2.667H7.333V10h1.334v2.667zm0-4H7.333V7.333h1.334v1.334zM11.333 10H10V7.333h1.333V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sim-card_svg__b" fill="#fff">
        <use xlinkHref="#sim-card_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sim-card_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSimCard
