import React, { SVGProps } from 'react'

const SvgSimCardAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sim-card-alert_svg__a"
        d="M12 1.333H6.667l-3.987 4-.013 8c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V2.667c0-.734-.6-1.334-1.333-1.334zm-3.333 10H7.333V10h1.334v1.333zm0-2.666H7.333V5.333h1.334v3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sim-card-alert_svg__b" fill="#fff">
        <use xlinkHref="#sim-card-alert_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sim-card-alert_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSimCardAlert
