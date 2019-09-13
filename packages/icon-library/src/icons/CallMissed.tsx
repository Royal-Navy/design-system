import React, { SVGProps } from 'react'

const SvgCallMissed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-missed_svg__a"
        d="M13.06 4.667L8 9.727 4.273 6h3.06V4.667H2V10h1.333V6.94L8 11.607l6-6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-missed_svg__b" fill="#fff">
        <use xlinkHref="#call-missed_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-missed_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallMissed
