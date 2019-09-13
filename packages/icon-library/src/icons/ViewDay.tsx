import React, { SVGProps } from 'react'

const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-day_svg__a"
        d="M1.333 14H14v-2H1.333v2zm12-8.667H2c-.367 0-.667.3-.667.667v4c0 .367.3.667.667.667h11.333c.367 0 .667-.3.667-.667V6c0-.367-.3-.667-.667-.667zM1.333 2v2H14V2H1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-day_svg__b" fill="#fff">
        <use xlinkHref="#view-day_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-day_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewDay
