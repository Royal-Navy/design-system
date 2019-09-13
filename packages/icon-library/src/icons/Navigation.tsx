import React, { SVGProps } from 'react'

const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="navigation_svg__a"
        d="M8 1.333L3 13.527l.473.473L8 12l4.527 2 .473-.473z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="navigation_svg__b" fill="#fff">
        <use xlinkHref="#navigation_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#navigation_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNavigation
