import React, { SVGProps } from 'react'

const SvgCallMissedOutgoing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-missed-outgoing_svg__a"
        d="M2 5.607l6 6 4.667-4.667V10H14V4.667H8.667V6h3.06L8 9.727l-5.06-5.06z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-missed-outgoing_svg__b" fill="#fff">
        <use xlinkHref="#call-missed-outgoing_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-missed-outgoing_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallMissedOutgoing
