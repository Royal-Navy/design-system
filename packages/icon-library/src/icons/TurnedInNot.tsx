import React, { SVGProps } from 'react'

const SvgTurnedInNot = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="turned-in-not_svg__a"
        d="M11.333 2H4.667c-.734 0-1.327.6-1.327 1.333L3.333 14 8 12l4.667 2V3.333c0-.733-.6-1.333-1.334-1.333zm0 10L8 10.547 4.667 12V3.333h6.666V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="turned-in-not_svg__b" fill="#fff">
        <use xlinkHref="#turned-in-not_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#turned-in-not_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTurnedInNot
