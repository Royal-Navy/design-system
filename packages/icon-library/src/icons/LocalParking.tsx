import React, { SVGProps } from 'react'

const SvgLocalParking = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-parking_svg__a"
        d="M8.667 2H4v12h2.667v-4h2c2.206 0 4-1.793 4-4s-1.794-4-4-4zM8.8 7.333H6.667V4.667H8.8c.733 0 1.333.6 1.333 1.333s-.6 1.333-1.333 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-parking_svg__b" fill="#fff">
        <use xlinkHref="#local-parking_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-parking_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalParking
