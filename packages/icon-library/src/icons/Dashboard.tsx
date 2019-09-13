import React, { SVGProps } from 'react'

const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dashboard_svg__a"
        d="M2 8.667h5.333V2H2v6.667zM2 14h5.333v-4H2v4zm6.667 0H14V7.333H8.667V14zm0-12v4H14V2H8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dashboard_svg__b" fill="#fff">
        <use xlinkHref="#dashboard_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dashboard_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDashboard
