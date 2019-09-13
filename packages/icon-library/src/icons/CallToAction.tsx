import React, { SVGProps } from 'react'

const SvgCallToAction = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-to-action_svg__a"
        d="M14 2H2C1.267 2 .667 2.6.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V3.333C15.333 2.6 14.733 2 14 2zm0 10.667H2v-2h12v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-to-action_svg__b" fill="#fff">
        <use xlinkHref="#call-to-action_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-to-action_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallToAction
