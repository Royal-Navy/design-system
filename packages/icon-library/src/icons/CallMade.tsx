import React, { SVGProps } from 'react'

const SvgCallMade = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-made_svg__a"
        d="M6 3.333v1.334h4.393l-7.726 7.726.94.94 7.726-7.726V10h1.334V3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-made_svg__b" fill="#fff">
        <use xlinkHref="#call-made_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-made_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallMade
