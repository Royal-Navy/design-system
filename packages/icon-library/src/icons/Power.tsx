import React, { SVGProps } from 'react'

const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="power_svg__a"
        d="M10.673 4.667L10.667 2H9.333v2.667H6.667V2H5.333v2.667h-.006C4.667 4.66 4 5.327 4 5.993v3.66L6.333 12v2h3.334v-2L12 9.66V5.993c0-.666-.667-1.333-1.327-1.326z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="power_svg__b" fill="#fff">
        <use xlinkHref="#power_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#power_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPower
